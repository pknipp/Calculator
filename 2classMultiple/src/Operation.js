import React from "react";

const Operation = ({ updateop, i }) => {
  const options = ["choose op", "+", "-", "*", "/"];
  const handleop = e => updateop(e.target.value);
  return (
    <select onChange={handleop} value={i}>
      {options.map((option, index) => <option key={index} value={index}>{option}</option>)}
    </select>
  )
}

export default Operation;
