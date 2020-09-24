import React from 'react';
const Input = ({ value, handleInput, name }) => {
  return <input type="number" placeholder="Insert number" value={value} onChange={handleInput} name={name} />
}
export default Input;
