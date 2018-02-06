let initialState = { data: [], loading:true, refreshing:false, users: {} };
 
export default userReducer = (state = initialState, action) => {
    let newState = state || {};
    switch (action.type) {
        case 'USERS_DONE_LOADING':
            newState = {
                ...state,
                data: action.data,
                loading: false,
                refreshing: false
            };
            break;
        case 'USERS_REFRESHING':
            newState = {
                ...state,
                refreshing: true
            };
            break;
        case 'USER_COUNTER_ADD_1':
            let user = state.users[action.id];
            let counter = user ? user.counter : 0;
            let userData = {
                counter: counter + 1
            };
            newState = {
                ...state,
                users: {
                    ...state.users,
                    [action.id]: userData
                }
            };
            break;
    }
    return newState;
};