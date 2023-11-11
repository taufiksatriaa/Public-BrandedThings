import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Form from "../src/Components/Form";

const EditProduct = () => {
  const { productId } = useParams();
  const access_token = localStorage.getItem("access_token");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  //  fetch si product berdasarkan id
  useEffect(() => {
    async function fetchProductById() {
      try {
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
        setName(data.product.name);
        setDescription(data.product.description);
        setPrice(data.product.price);
        setStock(data.product.stock);
        setImgUrl(data.product.imgUrl);
        setCategoryId(data.product.categoryId);
      } catch (error) {
        setError(error);
      }
    }
    // fetch si category
    async function fetchCategory() {
      try {
        setIsLoading(true);
        let { data } = await axios.get("http://localhost:3000/category", {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        setCategory(data.category);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProductById(), fetchCategory();
  }, []);
  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const access_token = localStorage.getItem("access_token");
      await axios.put(
        `http://localhost:3000/product/${product.id}`,
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
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>Error fetching, please try again later</p>;

  return (
    <div className="container mt-4">
      <section
        id="form-EditProduct"
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <div className="container">
          <h1>Edit Product</h1>
          <div className="card">
            <div className="card-body">
              <Form
                name={name}
                description={description}
                price={price}
                stock={stock}
                imgUrl={imgUrl}
                categoryId={categoryId}
                category={category}
                setName={setName}
                setDescription={setDescription}
                setPrice={setPrice}
                setStock={setStock}
                setImgUrl={setImgUrl}
                setCategoryId={setCategoryId}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EditProduct;
