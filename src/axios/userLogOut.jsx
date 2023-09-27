import axiosInstance from "./axiosInstance";

const userLogOut = async () => {
  try {
    console.log()
    await axiosInstance({ 
      url: "/user/logout", 
      method: "POST",
    });
  } catch (error) {
    console.error("Error: ", error);
  }
};

export default userLogOut;
