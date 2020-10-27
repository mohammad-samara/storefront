import {combineReducers, createStore, applyMiddleware} from 'redux';

// not part of the app code, this is a dependency to enable Dev tools extension in Chrome console
import { composeWithDevTools } from 'redux-devtools-extension'; 
import thunk from 'redux-thunk';
// I will combine reducers here. 
// index.js is the start file for store folder
// I have one reducer but all apps will have more than one reducer to 'combine'
import Category from './categories';
import Products from './products';
import Cart from './cart';

// reducer 
// reducer  ------> in on main reducer ----> dealing with the store 
// reducer

let reducers = combineReducers({ Category,Products,Cart });

// create my store and pass this reducers variable

const store = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export default store();