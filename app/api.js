/**
 * API Functions
 */
const BASE_API_URI = 'https://randomuser.me/api/';
const API = {};

const apiURI = function(params = {}) {
    let urlParams = [];
    for(key in params) {
        urlParams.push(key+'='+params[key]);
    }
    return BASE_API_URI + '?' + urlParams.join('&');
}

const defaultFetchOptions = {
    method: 'GET'
};
const fetchAPI = function(options = defaultFetchOptions) {
    return fetch(apiURI(options.params), options);
}

API.getUsers = (count=10) => {
    return fetchAPI({ 
        method: 'GET',
        params: { results: count } 
    })
    .then(response => response.json())
    .catch(err => {
        console.log("Error getting users: " + err);
        throw err;
    });
}

export default API;