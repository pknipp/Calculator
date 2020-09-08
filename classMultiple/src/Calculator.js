import React from "react";
import Input from "./Input";
import Operation from "./Operation";
import Clear from "./Clear";

class Calculator extends React.Component {
  constructor() {super();
    this.state = {x: "", y: "", z: null, i: 0,
      updateInput: this.updateInput, updateOp: this.updateOp, clear: this.clear}
  }

  updateInput = (name, num) => {
    const newNum = {};
    newNum[name] = num;
    this.setState(newNum, this.calc);
  }

  updateOp  = i => this.setState({i}, this.calc);

  clear = () => {
    debugger
    this.setState({x: "", y: "", z: null, i: 0})
  };

  calc = () => {
    let { x, y, i } = this.state;
    const NaNs = ["", ".","-","-."];
    if (NaNs.includes(x) || NaNs.includes(y)) return
    x = Number(x);
    y = Number(y);
    const zs = [null, x + y, x - y, x * y, (y !== 0) ? x/y : "NoCanDo"];
    this.setState({z: zs[i]});
  };

  render() {
    const { x, y, z, i, updateInput, updateOp, clear } = this.state;
    return (
      <>
        <Input key="x" name="x" num={x} updateInput={updateInput} />
        <Operation i={i} updateOp={updateOp} />
        <Input key="y" name="y" num={y} updateInput={updateInput} />
        <span> = {(z !== null) ? z : " result"}</span>
        <Clear clear={clear} />
      </>
    )
  }
}

export default Calculator
