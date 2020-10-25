import {combineReducers, createStore } from 'redux';

// not part of the app code, this is a dependency to enable Dev tools extension in Chrome console
import { composeWithDevTools } from 'redux-devtools-extension'; 

// I will combine reducers here. 
// index.js is the start file for store folder
// I have one reducer but all apps will have more than one reducer to 'combine'
import Category from './categories';

// reducer 
// reducer  ------> in on main reducer ----> dealing with the store 
// reducer

let reducers = combineReducers({ Category });

// create my store and pass this reducers variable

const store = () => {
  return createStore(reducers, composeWithDevTools());
};

export default store();