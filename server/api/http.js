import axios from 'axios'; 

const defaultHeaders = { 'Content-Type': 'application/json'}


const  urls = {
    dev: 'http://localhost:3000', 
    prod: process.env.API_BASE_URL
}

const instance = axios.create({
    baseURL: urls[process.env.NODE_ENV],
    withCredentials: true,
}); 


const httpRequest = async (method, url, data, headers = {}) => {
    let data = null;

    const params = {
        method: method,
        url: url, 
        headers: {
            ...defaultHeaders, headers
        }
    }

    if (data) params.data = data;
    
    const response = await instance({params});

    return data
}
