import { getRequest, postRequest } from "../http";

const getUniversities = async () => {
  try {
    const response = await getRequest("/api/university", null);
    console.log("response: " + response);
    if(response.ok) return response;
  } catch (error) {  console.log(error); return error.response }
  return null;
};


module.exports = {
    getUniversities,
}