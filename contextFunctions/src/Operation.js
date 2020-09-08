import React from "react";
import CalculatorContext from "./CalculatorContext";

const Operation = props => {
  const options = ["choose op", "+", "-", "*", "/"];
  const handleOp = e => props.updateOp(e.target.value);
  return (
    <select onChange={handleOp} value={props.i}>
      {options.map((option, i) => <option key={i} value={i}>{option}</option>)}
    </select>
  )
}

const OperationWithContext = props => {
  return (
  <CalculatorContext.Consumer>
    {value =>  <Operation updateOp={value.updateOp} i={props.i}/>}
  </CalculatorContext.Consumer>
)};

export default OperationWithContext;
