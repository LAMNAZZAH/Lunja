import { getRequest, postRequest } from "../http";

const getUniversities = async () => {
  try {
    const response = await getRequest("/api/university", null);
    return response;
  } catch (error) {}
  return null;
};


module.exports = {
    getUniversities,
}