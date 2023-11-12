import axios from "axios";

const handleFilterChange = async (event) => {
  const filterValue = event.target.value;
  setFilterValue(filterValue);

  try {
    setIsLoading(true);
    const response = await axios.get("pub/product", {
      params: {
        filter: filterValue,
      },
    });
    setData(response.data.data);
  } catch (error) {
    setError(error);
  } finally {
    setIsLoading(false);
  }
};

export default handleFilterChange;
