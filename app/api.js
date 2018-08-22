/**
 * API Functions
 */
const BASE_API_URI = 'https://randomuser.me/api';

// const apiURI = function(params = {}) {
//     let urlParams = [];
//     for(key in params) {
//         urlParams.push(key+'='+params[key]);
//     }
//     return BASE_API_URI + '?' + urlParams.join('&');
// }

const defaultFetchOptions = {
    method: 'GET'
};

const api = {
    base: BASE_API_URI,
    call: async (url, options) => {
        url = `${api.base}${url}`;
        console.log(url);
        const response = await fetch(url, options);
        return response;
    },
    getJson: async (url) => {
        const response = await api.call(url, { method: 'GET' });
        return response.json();
    }
};

export function fetchUsers(count=10) {
    return api.getJson('/?results='+count);
};