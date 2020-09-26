import React from "react";

const Operation = ({ updateI, i }) => {
  const options = ["choose op", "+", "-", "*", "/"];
  const handleI = e => updateI(e.target.value);
  return (
    <select onChange={handleI} value={i}>
      {options.map((option, index) => <option key={index} value={index}>{option}</option>)}
    </select>
  )
}

export default Operation;
