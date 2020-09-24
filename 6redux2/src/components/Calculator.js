import React from 'react';
import Input from './Input';
import Operation from './Operation';
import Result from './Result';
import Clear from './Clear';

const Calculator = ({ x, y, i, handleInput, handleOp, handleClear }) => {
  debugger;
  let z;
  if (x === "" || y === "" || i === 0) {
    z = null;
  } else {
    x = Number(x);
    y = Number(y);
    z = [null, x + y, x - y, x * y, (y !== 0) ? x/y : "NoCanDo"][i];
  }
  return (
    <>
      <Input name="x" value={x} handleInput={handleInput} />
      <Operation value={i} handleOp={handleOp} />
      <Input name="y" value={y} handleInput={handleInput} />
      <Result value={z} />
      <Clear handleClear={handleClear} />
    </>
  );
}
export default Calculator;
