import axios from 'axios'; 

const defaultHeaders = { 'Content-Type': 'application/json'}

const  urls = {
    dev: 'http://localhost:3000', 
    prod: process.env.API_BASE_URL,
    test: 'https://jsonplaceholder.typicode.com'
}

const instance = axios.create({
    baseURL: urls[`${process.env.NEXT_PUBLIC_NODE_ENV}`],
    withCredentials: true,
}); 


const httpRequest = async (method, url, body, headers = {}) => {

    const params = {
        method: method,
        url: url, 
        headers: {
            ...defaultHeaders
        }
    }

    if (body) params.data = body;
    
    const response = await instance(params);

    return response.data
}


export const getRequest = (url) => httpRequest('get', url, null); 

export const postRequest = (url, body, headers = {}) => httpRequest('post', url, body, headers); 

export const putRequest = (url, body, headers = {}) => httpRequest('put', url, body, headers); 

export const deleteRequest = (url, body, headers = {}) => httpRequest('delete', url, body, headers); 