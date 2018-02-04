import { combineReducers } from 'redux';
 
let initialState = { data: [], usersLoading:true, usersRefreshing:false };
 
const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USERS_DONE_LOADING':
            state = {
                ...state,
                data: action.data,
                usersLoading: false,
                usersRefreshing: false
            };
            return state;
            break;
        case 'USERS_REFRESHING':
            state = {
                ...state,
                usersRefreshing: true
            };
            return state;
        default:
            return state;
    }
};
 
// Combine all the reducers
const rootReducer = combineReducers({
    dataReducer
})
 
export default rootReducer;