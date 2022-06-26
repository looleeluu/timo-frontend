import axios from "axios";

const URL = "http://localhost";

const axiosInstance = axios.create({
  baseURL: URL,
  timeout: 3000,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default axiosInstance;
