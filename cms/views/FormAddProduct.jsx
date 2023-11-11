import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Form from "../src/Components/Form";

const AddProduct = () => {
  const access_token = localStorage.getItem("access_token");
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
    fetchCategory();
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await axios.post(
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
    } finally {
      setIsLoading(false);
    }
  };
  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>{error}</p>;
  return (
    <section
      className="d-flex justify-content-center align-items-center vh-100"
      style={{ backgroundColor: "#f8f9fa", color: "#495057" }}
    >
      <div className="container">
        <h1 className="text-center mb-4">Add Product</h1>
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
  );
};

export default AddProduct;
