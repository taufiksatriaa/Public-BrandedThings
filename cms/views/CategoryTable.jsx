import { useState } from "react";
import Navbar from "../src/Components/Navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const CategoryHome = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  //   const navigate = useNavigate();
  useEffect(() => {
    async function fetchCategory() {
      try {
        const access_token = localStorage.getItem("access_token");
        setIsLoading(true);

        let data = await axios.get("http://localhost:3000/category", {
          headers: {
            Authorization: `Bearer ${access_token}`,
          },
        });
        setData(data.data.category);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCategory();
  }, []);
  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>Error fetching, please try again later</p>;
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <div className="d-flex justify-content-center">
          <h1>Categories</h1>
        </div>
        <table className="table table-striped mt-3">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((el, index) => (
              <tr key={el.id}>
                <td>{index + 1}</td>
                <td>{el.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CategoryHome;
