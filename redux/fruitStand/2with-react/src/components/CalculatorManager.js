import React from 'react';
// import FruitList from './FruitList';
// import FruitSeller from './FruitSeller';
// import FruitQuickAdd from './FruitQuickAdd';
import Input from './Input';
import Operation from './Operation';
import Result from './Result';

class CalculatorManager extends React.Component {
  render() {
    return (
      <>
        {/* <FruitList />
        <FruitSeller />
        <FruitQuickAdd /> */}
        <Input name="x" />
        <Operation />
        <Input name="y" />
        <Result />
      </>
    );
  }
}

export default CalculatorManager;
