import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
 
import reducers from '../app/reducers/index';
 
// Connect our store to the reducers
// Apply redux-thunk middleware
export default createStore(reducers, applyMiddleware(thunk));