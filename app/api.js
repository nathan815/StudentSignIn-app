/**
 * API Functions
 */

API = {};

API.getUsers = (count=10) => {
    return fetch('https://randomuser.me/api/?results=' + count)
            .then((response) => response.json());
}

export default API;