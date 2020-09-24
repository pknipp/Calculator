import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import store from './store';

//window.store = store;

import { configureStore } from "./store";
debugger;
const store = configureStore();
debugger;

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);

export default store;
