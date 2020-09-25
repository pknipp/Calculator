import React from 'react';
import Input from './Input';
import Operation from './Operation';
import Result from './Result';
import Clear from './Clear';

const Calculator = ({ x, y, i, changeNum, changeOp, clear }) => {
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
      <Input name="x" value={x} changeNum={changeNum} />
      <Operation value={i} changeOp={changeOp} />
      <Input name="y" value={y} changeNum={changeNum} />
      <Result value={z} />
      <Clear handleClear={clear} />
    </>
  );
}
export default Calculator;
