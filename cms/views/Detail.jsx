import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Detail = () => {
  const { productId } = useParams();
  console.log(productId);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function fetchProduct() {
      try {
        let access_token = localStorage.getItem("access_token");
        console.log(access_token);
        setIsLoading(true);
        let { data } = await axios.get(
          `http://localhost:3000/product/${productId}`,
          {
            headers: {
              Authorization: `Bearer ${access_token}`,
            },
          }
        );
        setProduct(data.product);
        // console.log(data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProduct();
  }, []);
  return (
    <>
      {
        <section className="py-5" style={{ backgroundColor: "white" }}>
          <>
            <div className="container">
              <div className="row gx-5">
                <aside className="col-lg-6">
                  <div
                    className="d-flex justify-content-center mb-2"
                    key={product.id}
                  >
                    <img
                      width="550"
                      height="550"
                      className="rounded-2"
                      src={product.imgUrl}
                    />
                  </div>
                </aside>
                <main className="col-lg-4">
                  <div className="ps-lg-3">
                    <h4 className="title text-black">
                      {/* <!-- Name Product --> */}
                      {product.name}
                      <br />
                      {/* <!-- Category --> */}
                      {/* {product.Category.name} */}
                    </h4>
                    <div className="mb-3 text-black">
                      {/* <!-- Price --> */}
                      <label htmlFor="price">Price :</label>
                      <span className="h5 text-black">Rp. {product.price}</span>
                    </div>
                    {/* <!-- Description --> */}
                    <label htmlFor="description" className="h5 text-black">
                      Description :
                    </label>
                    <br />
                    <span className="h5 text-black">{product.description}</span>
                    <p></p>
                    <hr />
                    <div className="row mb-4">
                      {/* <!-- Stock --> */}
                      <div className="col-md-4 col-6 text-black">
                        <label htmlFor="stock">Stock</label>
                        <br />
                        <span className="h5 text-black">{product.stock}</span>
                      </div>
                      <div className="col-md-4 col-6 mb-3">
                        <div
                          className="input-group mb-3"
                          style={{ width: "170px" }}
                        >
                          <i className="fas fa-plus"></i>
                        </div>
                      </div>
                    </div>
                    <div className="d-flex">
                      <button className="btn btn-primary border border-secondary py-2 icon-hover px-3 mb-2">
                        Edit
                      </button>
                      <button className="btn btn-secondary border border-secondary py-2 icon-hover px-3 mb-2">
                        Edit Image
                      </button>
                      <br />
                      <button className="btn btn-danger border border-danger py-2 icon-hover px-3">
                        Delete
                      </button>
                    </div>
                  </div>
                </main>
                ;
              </div>
            </div>
            ;
          </>
        </section>
      }
    </>
  );
};

export default Detail;
