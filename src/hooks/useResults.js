import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errormsg, setErrormsg] = useState("");

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: searchTerm,
          location: "23966 wismar",
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrormsg("Something went wrong");
      setTimeout(() => {
        setErrormsg("");
      }, 2000);
    }
  };
  useEffect(() => {
    searchApi("fisch");
  }, []);

  return [searchApi, results, errormsg];
};
