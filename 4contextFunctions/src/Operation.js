import React from "react";
import CalculatorContext from "./CalculatorContext";

const Operation = ({ updateOp, i }) => {
  const options = ["choose op", "+", "-", "*", "/"];
  const handleOp = e => updateOp(e.target.value);
  return (
    <select onChange={handleOp} value={i}>
      {options.map((option, index) => <option key={index} value={index}>{option}</option>)}
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
