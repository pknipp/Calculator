import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { configureStore } from "./store";

//import store from './store';
//window.store = store;

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

export default store;
