import React from "react";
import CalculatorContext from "./CalculatorContext";
import Input from "./Input";
import Operation from "./Operation";
import Clear from "./Clear";

const Calculator = ({x, y, z, i}) => {
  return (
    <>
      <Input key="x" name="x" num={x} />
      <Operation i={i}/>
      <Input key="y" name="y" num={y} />
      <span> = {(z !== null) ? z : " result"}</span>
      <Clear />
    </>
  )
}

class CalculatorWithContext extends React.Component {
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
  calc = (x = this.state.x, y = this.state.y, i = this.state.i) => {
    const NaNs = ["", ".","-","-."];
    if (NaNs.includes(x) || NaNs.includes(y)) return
    x = Number(x);
    y = Number(y);
    const zs = [null, x + y, x - y, x * y, (y !== 0) ? x/y : "NoCanDo"];
    this.setState({z: zs[i]});
  }
  render() {
      debugger;
      return (
      <CalculatorContext.Provider value={this.state}>
        <Calculator x={this.state.x} y={this.state.y} z={this.state.z} i={this.state.i}/>
      </CalculatorContext.Provider>)}
}

export default CalculatorWithContext
