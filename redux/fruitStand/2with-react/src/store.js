import { createStore } from 'redux';
import calculatorReducer from './reducers/calculatorReducer';
//import { loadState, saveState } from './localStorage';
//import throttle from 'lodash/throttle';

//const preloadedState = loadState();
const preloadedState = {};

const store = createStore(calculatorReducer, preloadedState);

// store.subscribe(() => saveState(store.getState()));

// The lodash throttle function ensures that a function
// is at most invoked once per every X milliseconds.
//store.subscribe(throttle(() => saveState(store.getState()), 1000));

export default store;
