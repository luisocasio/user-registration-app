import axiosInstance from "./axiosInstance";

const userLogin = async (user) => {
  try {
    const res = await axiosInstance({
      url: "/user/login",
      method: "POST",
      data: user,
    });
    const name = res.data.name
    await localStorage.setItem("myName", `${name}`);

  } catch (error) {
    console.error("Error: ", error);
  }
};

export default userLogin;
