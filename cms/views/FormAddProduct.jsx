import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    // console.log("heheheh");
    async function fetchCategory() {
      try {
        console.log("hehehhe");
        const access_token = localStorage.getItem("access_token");
        setIsLoading(true);
        let { data } = await axios.get("http://localhost:3000/category", {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        // console.log(response);
        setCategory(data.category);

        // console.log(data.category, "iniiii");
      } catch (error) {
        console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCategory();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(categoryId, "iniii");
      setIsLoading(true);
      const access_token = localStorage.getItem("access_token");
      const { data } = await axios.post(
        "http://localhost:3000/product",
        {
          name,
          description,
          price,
          stock,
          imgUrl,
          categoryId,
        },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        }
      );
      navigate("/");
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>Error fetching, please try again later</p>;
  // console.log(category, "inii category");
  return (
    <>
      <section
        id="form-AddProduct"
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="container">
          <h1>Add Product</h1>
          <div className="card">
            <div className="card-body">
              <form action="process-add-product.php" method="POST">
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Product Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="price" className="form-label">
                    Price
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="stock" className="form-label">
                    Stock
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    id="stock"
                    name="stock"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="imgUrl" className="form-label">
                    Image URL
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="imgUrl"
                    name="imgUrl"
                    value={imgUrl}
                    onChange={(e) => setImgUrl(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="categoryId" className="form-label">
                    Category
                  </label>
                  <select
                    name="categoryId"
                    className="form-control"
                    id="categoryId"
                    onChange={(e) => {
                      setCategoryId(e.target.value);
                    }}
                  >
                    {category.map((el) => {
                      console.log(el.id);
                      return (
                        <option key={el.id} value={el.id}>
                          {el.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="btn btn-primary"
                >
                  Add Product
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddProduct;
