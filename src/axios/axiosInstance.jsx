import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `https://user-registration-server.onrender.com`,
  headers: {
    "Access-Control-Allow-Origin" : "http://localhost:3001, https://user-registration-entc5q4xp-fullstackog.vercel.app/login",
    "Access-Control-Allow-Methods": "POST, GET, PUT, DELETE",
    'Content-Type': 'application/json',
    "Access-Control-Expose-Headers": "*"
  },
  withCredentials: true,
});

export default axiosInstance;
