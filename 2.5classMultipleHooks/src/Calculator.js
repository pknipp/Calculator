import React, { useState } from "react";
import Input from "./Input";
import Operation from "./Operation";
import Clear from "./Clear";

const Calculator = () => {
  let [xStr, setX] = useState("");
  let [yStr, setY] = useState("");
  let [i, setI] = useState(0);

  const updateNum = (name, num) => (name === "x") ? setX(num) : setY(num);
  const updateI = i => setI(i);
  const clear = () => {
    setX("");
    setY("");
    setI(0);
  }

  let x = Number(xStr);
  let y = Number(yStr);
  let z = [null, x + y, x - y, x * y, (y !== 0) ? x/y : "NoCanDo"][i];

  return (
    <>
      <Input type="number" key="x" num={xStr} name="x" updateNum={updateNum} />
      <Operation i={i} updateI={updateI} />
      <Input type="number" key="y" num={yStr} name="y" updateNum={updateNum} />
      <span> = {(z !== null) ? z : " result"}</span>
      <Clear clear={clear} />
    </>
  )
}

export default Calculator
