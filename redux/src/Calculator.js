import React from "react";
import Input from "./Input";
import Operation from "./Operation";
import Clear from "./Clear";

class Calculator extends React.Component {
  constructor() {super();
    this.state = {x: "", y: "", z: null, i: 0,
      updateinput: this.updateinput, updateop: this.updateop, clear: this.clear}
  }

  updateinput = (name, num) => {
    const newnum = {};
    newnum[name] = num;
    this.setState(newnum, this.calc);
  }

  updateop  = i => this.setState({i}, this.calc);
  clear = () => this.setState({x: "", y: "", z: null, i: 0});

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
    const { x, y, z, i, updateinput, updateop, clear } = this.state;
    return (
      <>
        <Input key="x" name="x" num={x} updateinput={updateinput} />
        <Operation i={i} updateop={updateop} />
        <Input key="y" name="y" num={y} updateinput={updateinput} />
        <span> = {(z !== null) ? z : " result"}</span>
        <Clear clear={clear} />
      </>
    )
  }
}

export default Calculator
