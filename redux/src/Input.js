import React from "react";

const Input = ({ updateinput, name, num }) => {
  const handleinput = e => updateinput(e.target.name, e.target.value);
  return <input onChange={handleinput} name={name} placeholder="number" value={num} updateinput={updateinput} />
}

export default Input;
