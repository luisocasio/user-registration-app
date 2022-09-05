import axiosInstance from "./axiosInstance";

const userLogin = async (user) => {
  try {
    const response = await axiosInstance({
      url: "/user/login",
      method: "POST",
      data: user,
    });
  } catch (error) {
    console.error("Error: ", error);
  }
};

export default userLogin;
