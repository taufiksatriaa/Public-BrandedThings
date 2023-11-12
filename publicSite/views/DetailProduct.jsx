import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { urlName } from "../../cms/src/static";
const DetailProduct = () => {
  // console.log(useParams(), "iniii di detail");
  const { productId } = useParams();
  // const id = productId;
  // console.log(productId);

  // const Base_Url = "http://localhost:3000/";
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState([]);
  // kembali ke halaman home
  useEffect(() => {
    async function fetchProduct() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`${urlName}pub/product/${productId}`);
        setProduct(data.product);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProduct();
  }, []);
  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>Error fetching, please try again later</p>;
  // console.log(product, "iniii");
  return (
    <>
      {
        <section className="py-5" style={{ backgroundColor: "#181f27" }}>
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
                    <h4 className="title text-white">
                      {/* <!-- Name Product --> */}
                      {product.name}
                      <br />
                      {/* <!-- Category --> */}
                      {product.Category.name}
                    </h4>

                    <div className="mb-3 text-white">
                      {/* <!-- Price --> */}
                      <label htmlFor="price">Price :</label>
                      <span className="h5 text-white">Rp. {product.price}</span>
                    </div>
                    {/* <!-- Description --> */}
                    <label htmlFor="description" className="h5 text-white">
                      Description :
                    </label>
                    <br />
                    <span className="h5 text-white">{product.description}</span>
                    <p></p>
                    <hr />

                    <div className="row mb-4">
                      {/* <!-- Stock --> */}
                      <div className="col-md-4 col-6 text-white">
                        <label htmlFor="stock">Stock</label>
                        <br />
                        <span className="h5 text-white">{product.stock}</span>
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
                    <Link
                      to={"/pub/product"}
                      className="btn btn-primary border border-secondary py-2 icon-hover px-3"
                    >
                      <i className="me-1 fa fa-heart fa-lg"></i> Back
                    </Link>
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

export default DetailProduct;
