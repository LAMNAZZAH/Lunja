import { getRequest } from '../http'; 

const testGetTodos = async () => {
    try {

        const response = await getRequest('todos');
        if (response) return response; 

        console.log('data: ' + response);
    } catch {}

    return null;
}

module.exports = {
    testGetTodos, 
}