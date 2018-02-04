let initialState = { data: [], loading:true, refreshing:false };
 
export default userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USERS_DONE_LOADING':
            state = {
                ...state,
                data: action.data,
                loading: false,
                refreshing: false
            };
            return state;
            break;
        case 'USERS_REFRESHING':
            state = {
                ...state,
                refreshing: true
            };
            return state;
        default:
            return state;
    }
};