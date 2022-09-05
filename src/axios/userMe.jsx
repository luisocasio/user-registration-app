import axiosInstance from "./axiosInstance";

const userMe = async () => {
  try {
    await axiosInstance({
      url: "/user/me",
      method: "GET",
    });
  } catch (error) {
    console.error("Error: ", error);
  }
};

export default userMe;
