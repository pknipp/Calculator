import React from "react";

const Operation = ({ updateOp, i }) => {
  const options = ["choose op", "+", "-", "*", "/"];
  const handleOp = e => updateOp(e.target.value);
  return (
    <select onChange={handleOp} value={i}>
      {options.map((option, index) => <option key={index} value={index}>{option}</option>)}
    </select>
  )
}

export default Operation;
