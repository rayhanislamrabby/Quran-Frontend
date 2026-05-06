import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (endpoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const baseURL = "http://localhost:5000";

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await axios.get(`${baseURL}${endpoint}`);
        setData(response.data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    if (endpoint) {
      fetchData();
    }
  }, [endpoint]);

  return { data, loading, error };
};

export default useFetch;
