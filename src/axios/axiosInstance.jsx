import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `http://localhost:8081`,
  headers: {
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE",
    'Content-Type': 'application/json',
    "Access-Control-Expose-Headers": "*"
  },
  withCredentials: true,
});

export default axiosInstance;
