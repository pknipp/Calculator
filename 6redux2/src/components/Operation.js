import React from "react";
const Operation = ({ handleOp, value }) => {
  const options = ["choose op", "+", "-", "*", "/"];
  return (
    <select onChange={handleOp} value={value}>
      {options.map((option, index) => <option key={index} value={index}>{option}</option>)}
    </select>
  );
}
export default Operation;
