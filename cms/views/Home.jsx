import { useEffect, useState } from "react";
import Navbar from "../src/Components/Navbar";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
// import Button from "../src/Components/Button";
// import AddProduct from "./FormAddProduct";
const HomeCms = () => {
  //  musti dapatin get localstorage dulu
  const Branded_Things_Url = "http://localhost:3000/";
  const BrandedApi = axios.create({
    baseURL: Branded_Things_Url,
  });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchApi() {
      try {
        const access_token = localStorage.getItem("access_token");
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
  const handleAddProductClick = () => {
    // Navigate to the '/add-product' route
    navigate("/product");
  };
  // const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/${id}`);
  };
  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>Error fetching, please try again later</p>;
  // console.log(error);
  // console.log(data, "ini data");
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
                      <div className="d-flex">
                        <button
                          key={product.id}
                          onClick={() => {
                            handleClick(product.id);
                          }}
                          className="btn btn-warning mr-2"
                        >
                          See Detail
                        </button>
                      </div>
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
