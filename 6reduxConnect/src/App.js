import React from 'react';
import { Provider } from "react-redux";
import CalculatorContainer from './components/CalculatorContainer';

const App = ({ store }) => {
  debugger;
  return (
    <>
      <h1>4-function calculator</h1>
      <Provider store={store}>
        <CalculatorContainer />
     </Provider>
    </>
  );
}

export default App;
