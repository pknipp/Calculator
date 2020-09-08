import React from "react";

const Input = ({ updateInput, name, num }) => {
  const handleInput = e => updateInput(e.target.name, e.target.value);
  return <input onChange={handleInput} name={name} placeholder="number" value={num} updateInput={updateInput} />
}

export default Input;
