import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://user-registration-server.onrender.com`,
  headers: {
    "Access-Control-Allow-Origin" : "http://localhost:3001",
    "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE",
    'Content-Type': 'application/json',
    "Access-Control-Expose-Headers": "*"
  },
  withCredentials: true,
});

export default axiosInstance;
