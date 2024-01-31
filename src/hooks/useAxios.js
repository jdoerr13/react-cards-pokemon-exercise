import { useState } from "react";
import axios from "axios";

//this is tailored for accumulating data from multiple AJAX requests into a single array. This approach is particularly useful for components that need to add more data over time (e.g., loading more items on a button click):

const useAxios = (baseUrl) => {
    const [data, setData] = useState([]);//will hold the response data
  
    const addData = async (urlSegment = ' ') => {
        const fullUrl = `${baseUrl}${urlSegment}`;
      const res = await axios.get(fullUrl);
      setData(currentData => [...currentData, res.data]);
    };
  
    return [data, addData];
  };
  

export default useAxios;