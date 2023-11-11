import { useEffect, useState } from "react";
import Navbar from "../src/Components/Navbar";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Login from "./login";

const HomeCms = () => {
  const Branded_Things_Url = "http://localhost:3000/";
  const BrandedApi = axios.create({
    baseURL: Branded_Things_Url,
  });
  const access_token = localStorage.getItem("access_token");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchApi() {
      try {
        setIsLoading(true);

        const { data } = await BrandedApi.get("/product", {
          //!  masukin di argumen ke dua
          headers: {
            Authorization: `Bearer ${access_token}`, // Set the Authorization header
          },
        });
        // console.log(data, "iniii");
        setData(data.product);
      } catch (error) {
        // console.log(error.message);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchApi();
  }, []);
  // add Product
  const handleAddProductClick = () => {
    navigate("/addProduct");
  };
  // EditProduct
  const handleEditProduct = (productId) => {
    navigate(`/${productId}`);
  };
  //
  // uploadProduct
  const handleEditImage = (productId) => {
    navigate(`/${productId}/editImage`);
  };
  // delete
  const handleDeleteProduct = async (productId) => {
    // console.log(productId, "iniii");
    try {
      setIsLoading(true);
      await BrandedApi.delete(`product/${productId}`, {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
      const { data } = await BrandedApi.get("/product", {
        //!  masukin di argumen ke dua
        headers: {
          Authorization: `Bearer ${access_token}`, // Set the Authorization header
        },
      });
      setData(data.product);
      // console.log("berhasil hapus");
      navigate("/");
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  // if (error) return <p>Error fetching, please try again later</p>;
  return (
    <>
      {/* navbar */}
      <Navbar />
      {/* <!-- Tombol "Add Product" --> */}
      <div className="d-flex justify-content-center">
        <button onClick={handleAddProductClick} class="btn btn-primary mt-3">
          Add Product
        </button>
      </div>
      {/* <!-- Table --> */}
      <section className="container mt-4">
        <div className="d-flex justify-content-center mt-3">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Image</th>
                <th>Description</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Category</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((product, index) => {
                return (
                  <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>
                      <img
                        src={product.imgUrl}
                        alt={product.name}
                        style={{ width: "100px", height: "auto" }}
                      />
                    </td>
                    <td style={{ height: "auto" }}>{product.description}</td>
                    <td>Rp. {product.price}</td>
                    <td>{product.stock}</td>

                    <td>{product.Category.name}</td>

                    <td>
                      <td>
                        <button
                          onClick={() => handleEditProduct(product.id)}
                          data={data}
                          style={{
                            backgroundColor: "#28a745",
                            color: "#ffffff",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "5px",
                          }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleEditImage(product.id)}
                          style={{
                            backgroundColor: "#007bff",
                            color: "#ffffff",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "5px",
                          }}
                        >
                          Upload Image
                        </button>
                        <button
                          onClick={() => handleDeleteProduct(product.id)}
                          style={{
                            backgroundColor: "#dc3545",
                            color: "#ffffff",
                            padding: "10px 20px",
                            border: "none",
                            borderRadius: "5px",
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default HomeCms;
