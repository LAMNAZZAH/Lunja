import { getRequest } from "../http";
import Cookies from 'js-cookie';

const testGetTodos = async () => {
  try {
    const response = await getRequest("todos", null);
    if (response) return response;

    console.log("data: " + response);
  } catch {}

  return null;
};

const getIsLoggedIn = async () => {
    Cookies.set('token', 'Bearer ');
    const token = Cookies.get('token')
  try {
    const response = await getRequest('/api/auth', {'Authorization': token}); 
    if (response) return response;
  } catch (error) {}
  return null;
};

module.exports = {
  testGetTodos,
  getIsLoggedIn,
};
