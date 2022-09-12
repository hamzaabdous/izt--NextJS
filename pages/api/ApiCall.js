import axios from 'axios';


export const AXIOS_INSTANCE = axios.create();

export const BASE_URL = 'https://izt-api.tradeline-solutions.com/api';
export const FILE_BASE_URL = `${BASE_URL}/file/`;

export function get(controllerName, actionName, params, query) {
    return AXIOS_INSTANCE.get(`${BASE_URL}/${controllerName || ''}`, params)
        .then(checkHttpStatus)
        .then(parseJSON)
        .catch((error) => {
            console.log(error)
        });
}

export function post(controllerName, actionName, params) {
    return AXIOS_INSTANCE.post(`${BASE_URL}/${controllerName || ''}/${actionName || ''}`, params)
        .then(checkHttpStatus)
        .then(parseJSON)
        .catch((error) => {
            console.log(error)
        });
}

export function put(controllerName, actionName, params) {
    return AXIOS_INSTANCE.put(`${BASE_URL}/${controllerName || ''}/${actionName || ''}`, params)
        .then(checkHttpStatus)
        .then(parseJSON)
        .catch((error) => {
            console.log(error)
        });
}

export function remove(controllerName, actionName, params) {
    return AXIOS_INSTANCE.delete(`${BASE_URL}/${controllerName || ''}/${actionName || ''}`, params)
        .then(checkHttpStatus)
        .then(parseJSON)
        .catch((error) => {
            console.log(error)
        });
}

// gloabal Utility for checking response status in actions
export function checkHttpStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    } else {
        var error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}
export function parseJSON(response) {
    return response.data.payload;
}