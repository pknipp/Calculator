import React from "react";
import CalculatorContext from "./CalculatorContext";

const Input = ({ updateInput, name, num }) => {
  const handleInput = e => updateInput(e.target.name, e.target.value);
  return <input onChange={handleInput} name={name} placeholder="number" value={num} />
}

const InputWithContext = ({ name, num }) => (
  <CalculatorContext.Consumer>
    {value => <Input updateInput={value.updateInput} name={name} num={num} /> }
  </CalculatorContext.Consumer>
);

export default InputWithContext;
