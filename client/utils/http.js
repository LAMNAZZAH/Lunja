import axios from 'axios'; 

const defaultHeaders = { 'Content-Type': 'application/json'}

const  urls = {
    dev: 'http://localhost:5000', 
    prod: process.env.API_BASE_URL,
    test: 'https://jsonplaceholder.typicode.com'
}

const instance = axios.create({
    baseURL: urls[`${process.env.NEXT_PUBLIC_NODE_ENV}`],
    //withCredentials: true,
}); 


const httpRequest = async (method, url, body, headers = {}) => {

    console.log( urls[`${process.env.NEXT_PUBLIC_NODE_ENV}`]);

    const params = {
        method: method,
        url: url, 
        headers: {
            ...defaultHeaders, ...headers
        }
    }

    if (body) params.data = body;
    
    const response = await instance(params);

    const data = await response.data

    return data
}


export const getRequest = (url, headers) => httpRequest('get', url, null, headers); 

export const postRequest = (url, body, headers = {}) => httpRequest('post', url, body, headers); 

export const putRequest = (url, body, headers = {}) => httpRequest('put', url, body, headers); 

export const deleteRequest = (url, body, headers = {}) => httpRequest('delete', url, body, headers); 