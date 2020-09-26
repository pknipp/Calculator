import React from "react";

const Input = ({ updateNum, name, num }) => {
  const handleNum = e => updateNum(e.target.name, e.target.value);
  return <input type="number" name={name} onChange={handleNum} placeholder="number" value={num} />
}

export default Input;
