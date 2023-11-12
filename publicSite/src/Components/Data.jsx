import React, { useEffect } from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const dashbordPage = async;
const [isLoading, setIsLoading] = useState(true);
const [error, SetError] = useState(null);
const [data, setData] = useState([]);
// fetch on mounted
const product_server_url = "";
// function
const brandedThings = axios.create({
  baseURL: product_server_url,
});
useEffect(() => {
  async function fetchApl({}) {
    try {
      setIsLoading(true);
      const { data } = await brandedThings.get("/pub/product");
    } catch (error) {}
  }
});

export default fetchData;
