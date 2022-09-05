import axiosInstance from "./axiosInstance";

const userProfile = async () => {
  try {
    await axiosInstance({
      url: "/user/profile",
      method: "GET",
    });
  } catch (error) {
    console.error("Error: ", error);
  }
};

export default userProfile;
