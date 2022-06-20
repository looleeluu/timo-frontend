import axios from "axios";

const URL = "http://localhost";

const instance = axios.create({
  baseURL: URL,
  timeout: 1000,
  headers: {
    "Access-Control-Allow-Origin": "*",
  },
});

export default instance;
