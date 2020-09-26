import React from 'react';
import { Provider } from "react-redux";
import Calculator from './components/Calculator';

const App = ({ store }) => {
  debugger;
  return (
    <>
      <h1>4-function calculator</h1>
      <Provider store={store}>
        <Calculator />
     </Provider>
    </>
  );
}

export default App;
