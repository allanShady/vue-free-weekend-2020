import axios from 'axios'


const appClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getEvents(apiResource, perPage, page) {
        return appClient.get(`${apiResource}?_limit=${perPage}&_page=${page}`);
    },

    postEvent(apiResource, event) {
        return appClient.post(apiResource, event);
    },

    getEvent(apiResource, id) {
        return appClient.get(`${apiResource}/${id}`);
    }    
}