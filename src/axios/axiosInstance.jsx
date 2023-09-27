import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.USER_REGISTRATION_SERVER,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Origin" : "*",
  },
  withCredentials: true,
});

export default axiosInstance;
