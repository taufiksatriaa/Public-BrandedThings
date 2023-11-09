import { useEffect, useState } from "react";
import Navbar from "../src/Components/Navbar";
import axios from "axios";
const HomeCms = () => {
  //  musti dapatin get localstorage dulu
  const access_token = localStorage.getItem("access_token");
  //  validasi
  if (!access_token) {
    console.log("Access token is missing");
    // kalau ada jangan lupa di return
    return;
  }
  const Branded_Things_Url = "http://localhost:3000/";
  const BrandedApi = axios.create({
    baseURL: Branded_Things_Url,
  });
  console.log(BrandedApi, "inii");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  useEffect(() => {
    // console.log(Headers);
    async function fetchApi() {
      try {
        setIsLoading(true);

        const { data } = await BrandedApi.get("/product", {
          //  masukin di argumen ke dua
          headers: {
            Authorization: `Bearer ${access_token}`, // Set the Authorization header
          },
        });
        // console.log(data, "iniii");
        setData(data.product);
      } catch (error) {
        console.log(error.message);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchApi();
  }, []);
  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>Error fetching, please try again later</p>;
  // console.log(error);
  console.log(data, "ini data");
  return (
    <>
      {/* navbar */}
      <Navbar />
      {/* <!-- Tombol "Add Product" --> */}
      <div class="d-flex justify-content-center">
        <button class="btn btn-primary mt-3">Add Product</button>
      </div>
      {/* <!-- Table --> */}
      <section>
        <div className="d-flex justify-content-center mt-3">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Description</th>
                <th>Price</th>
                <th>Image</th>
                <th>Category</th>
                <th>Author</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((product, index) => {
                return (
                  <tr key={product.id}>
                    <td>{index + 1}</td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>Rp. {product.price}</td>
                    <td>
                      <img
                        src={product.imgUrl}
                        alt={product.name}
                        style={{ width: "100px", height: "auto" }}
                      />
                    </td>
                    <td>{product.Category.name}</td>
                    <td></td>
                    <td>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        href=""
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        href=""
                      >
                        Update Image
                      </button>
                      <button type="button" className="btn btn-danger" href="">
                        Delete
                      </button>
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
