import { getRequest, postRequest } from "../http";
import Cookies from "js-cookie";


const testGetTodos = async () => {
  try {
    const response = await getRequest("todos", null);
    if (response) return response;

    console.log("data: " + response);
  } catch {}

  return null;
};

const getIsLoggedIn = async () => {
  const token = Cookies.get("token");
  //Cookies.get('token', `Bearer ${token}`);
  try {
    const response = await getRequest("/api/auth", null);
    return response;
  } catch (error) {}
  return null;
};

const postLogin = async (usernameOrEmail, password) => {
  try {
    const response = await postRequest(
      "/api/auth/login",
      { usernameOrEmail, password },
      null
    );
    return response;
  } catch (error) { return error.response.data }

};

const logout = () => {
  Cookies.remove('token'); 
  window.location.pathname = '/login';
}

module.exports = {
  testGetTodos,
  getIsLoggedIn,
  postLogin,
  logout,
};
