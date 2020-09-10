import React from 'react';
// import FruitList from './FruitList';
// import FruitSeller from './FruitSeller';
// import FruitQuickAdd from './FruitQuickAdd';
import Input from './Input';
import Operation from './Operation';

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
      </>
    );
  }
}

export default CalculatorManager;
