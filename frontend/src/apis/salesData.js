import axios from "axios";
const backendURL = import.meta.env.VITE_REACT_APP_BACKEND_URL;

export const getSalesData = async () => {
  try {
    const reqURL = `${backendURL}/salesData`;

    const result = axios.get(reqURL);
    return result.data;
  } catch (error) {
    if (error) {
      return error.response.data;
    }
  }
};
