import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.USER_REGISTRATION_SERVER,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default axiosInstance;
