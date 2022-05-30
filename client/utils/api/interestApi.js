import { getRequest, postRequest } from "../http";

const fetchIntests = async (userId) => {
    try {
        const response = await getRequest(`/api/interest?userId=${userId}`, null);
        return response; 
    } catch (error) { return error }
}

module.exports = {
    fetchIntests,
}