import React from 'react';
import Input from './Input';
import Operation from './Operation';
import Result from './Result';

class Calculator extends React.Component {
  render() {
    return (
      <>
        <Input name="x" />
        <Operation />
        <Input name="y" />
        <Result />
      </>
    );
  }
}

export default Calculator;
