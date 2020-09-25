import React from "react";
const Operation = ({ changeOp, value }) => {
  const options = ["choose op", "+", "-", "*", "/"];
  return (
    <select onChange={changeOp} value={value}>
      {options.map((option, index) => <option key={index} value={index}>{option}</option>)}
    </select>
  );
}
export default Operation;
