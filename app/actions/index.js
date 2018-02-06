import API from './../api.js'
 /**
  * Action Creators for Redux dispatching
  */

export function usersRefreshing() {
    return {
        type:'USERS_REFRESHING'
    };
}

export function doneLoadingUsers(data) {
    return {
        type: 'USERS_DONE_LOADING',
        data: data
    };
}

export function addOne(id) {
    return {
        type: 'USER_COUNTER_ADD_1',
        id: id
    };
}

export function loadUsers() {
    return (dispatch) => {
        API.getUsers(50)
        .then((json) => {
            dispatch(doneLoadingUsers(json['results']));
        })
        .catch(err => {
            console.log(err);
        });
 
    };
}