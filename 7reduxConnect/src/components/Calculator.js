import React from 'react';
import { connect } from "react-redux";
import Input from './Input';
import Operation from './Operation';
import Clear from './Clear';

const Calculator = ({ x, y, i}) => {
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
      <Input name="x" />
      <Operation />
      <Input name="y" />
      <span> = {(z !== null) ? z : " result"}</span>
      <Clear />
    </>
  );
}

const msp = ({ x, y, i }) => ({ x, y, i });
const mdp = dispatch => ({});
export default connect(msp, mdp)(Calculator);
