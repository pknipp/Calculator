import React from 'react';
const Input = ({ value, changeNum, name }) => {
  debugger;
  return <input type="number" placeholder="Insert number" value={value} onChange={changeNum} name={name} />
}
export default Input;
