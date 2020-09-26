import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
//import rootReducer from "./reducers/rootReducer";
import calculatorReducer from './reducers/calculatorReducer';

//const preloadedState = {calculator: {i: 0, x: "", y: ""}};
const preloadedState = {i: 0, x: "", y: ""};

export const configureStore = () => {
  return createStore(calculatorReducer, preloadedState, applyMiddleware(thunk, logger));
}

export default configureStore;
