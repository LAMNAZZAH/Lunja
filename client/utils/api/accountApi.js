import { getRequest, postRequest } from "../http";
import Cookies from "js-cookie";

const getIsLoggedIn = async () => {
  try {
    const response = await getRequest("/api/account/auth", null);
    return response;
  } catch (error) {}
  return null;
};

const postLogin = async (usernameOrEmail, password) => {
  try {
    const response = await postRequest(
      "/api/account/auth/login",
      { usernameOrEmail, password },
      null
    );
    return response;
  } catch (error) {
    return error.response.data;
  }
};


const logout = () => {
  Cookies.remove("token");
  window.location.pathname = "/login";
};

module.exports = {
  getIsLoggedIn,
  postLogin,
  logout,
};
