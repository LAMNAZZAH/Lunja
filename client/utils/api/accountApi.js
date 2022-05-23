import { getRequest } from "../http";

const testGetTodos = async () => {
  try {
    const response = await getRequest("todos", null);
    if (response) return response;

    console.log("data: " + response);
  } catch {}

  return null;
};

const getIsLoggedIn = async () => {
  try {
    const response = await getRequest('/api/auth', null); 
    if (response) return response;
  } catch (error) {}
  return null;
};

module.exports = {
  testGetTodos,
  getIsLoggedIn,
};
