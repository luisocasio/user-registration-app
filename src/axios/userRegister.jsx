import axiosInstance from "./axiosInstance";

const userRegister = async (user) => {
  try {
    await axiosInstance({ url: "/user/register", method: "POST", data: user });
  } catch (error) {
    console.error("Error: ", error);
  }
};

export default userRegister;
