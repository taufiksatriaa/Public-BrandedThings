import axios from "axios";
import Pagination from "../src/Components/Pagination";
import Card from "../src/Components/Card";
import Navbar from "../src/Components/Navbar";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { urlName } from "../../cms/src/static";
const Home = () => {
  const Branded_Things_Url = "https://server.taufik.xyz/";
  const BrandedApi = axios.create({
    baseURL: Branded_Things_Url,
  });
  const [sortValue, setSortValue] = useState(""); // Initialize with an empty string
  const [filterValue, setFilterValue] = useState(""); // Initialize with an empty string

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);
  const handleSortChange = (event) => {
    setSortValue(event.target.value);
    // You can perform sorting logic here or trigger any relevant actions.
  };

  // // Event handler to update the selected filter value
  // const handleFilterChange = (event) => {
  //   setFilterValue(event.target.value);
  //   // You can perform filtering logic here or trigger any relevant actions.
  // };

  useEffect(() => {
    async function fetchApi() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(
          `https://server.taufik.xyz/pub/product`
        );
        setData(data.data);
      } catch (error) {
        // console.log(error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchApi();
  }, []);
  if (isLoading) return <p>Loading....</p>;
  if (error) return <p>Error fetching, please try again later</p>;
  return (
    <>
      <section>
        <div style={{ backgroundColor: "#181f27" }}>
          {/* <!-- Navbar --> */}
          <Navbar></Navbar>
          {/* <!-- end navbar -->
        <!-- header --> */}
          <header>
            <h1 style={{ color: "white" }}>Selamat Datang di Eralah</h1>
          </header>
          {/* <!-- filter --> */}
          <div className="d-flex">
            <div className="p-2">
              <form>
                <select
                  name="sort"
                  value={sortValue}
                  onChange={handleSortChange}
                  id="sort"
                >
                  <option hidden>sort</option>
                  <option value="createdAt">A-Z</option>
                  <option value="-createdAt">Z-A</option>
                </select>
              </form>
            </div>
            <div className="p-2">
              <form>
                <select name="filter" id="filter">
                  <option hidden>sort</option>
                  <option value=""></option>
                  <option value="">Z-A</option>
                </select>
              </form>
            </div>
          </div>
          {/* <!-- end filter --> */}
          {/* <!-- card --> */}
          <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4 rounded">
              {data.map((product) => {
                return (
                  <>
                    <Card key={product.id} product={product} />;
                  </>
                );
              })}
            </div>
          </div>
          {/* Pagination */}
          <Pagination></Pagination>
          {/* <!-- end-pagination --> */}
        </div>
      </section>
    </>
  );
};

export default Home;
