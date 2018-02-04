import { combineReducers } from 'redux';
import userReducer from './userReducer';

// Set up all of the reducers
const rootReducer = combineReducers({
    userReducer
});
 
export default rootReducer;