import { combineReducers } from 'redux';
 
import { DATA_AVAILABLE } from "../actions/" //Import the actions types constant we defined in our actions
 
let dataState = { data: [], loading:true, refreshing:false };
 
const dataReducer = (state = dataState, action) => {
    switch (action.type) {
        case DATA_AVAILABLE:
            state = {
                ...state,
                data: action.data,
                loading: false,
                refreshing: false
            };
            return state;
            break;
        case "DATA_REFRESHING":
            state = {
                ...state,
                refreshing: true
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