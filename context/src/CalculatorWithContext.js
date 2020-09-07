import React from 'react';
import CalculatorContext from './CalculatorContext';
import Calculator from './Calculator';

class CalculatorWithContext extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: "",
      y: "",
      z: null,
      options: ["choose op","+","-","*","/"],
      i: 0,
      handleInput: this.handleInput,
      handleOp: this.handleOp,
      handleCle: this.handleCle
    }
  }

  handleInput = (name, num) => {
    const newNum = {};
    newNum[name] = num;
    this.setState(newNum, this.handleCalc);
  }

  handleOp  = val => this.setState({i: Number(val)}, this.handleCalc);

  handleCle = () => {
    console.log("hi");
    debugger;
    this.setState({x: null, z: null, y: null, i: 0});
  }

  handleCalc = (x = this.state.x, y = this.state.y, i = this.state.i) => {
    debugger
    const NaNs = ["", ".","-","-."];
    if (NaNs.includes(x) || NaNs.includes(y)) return
    x = Number(x);
    y = Number(y);
    const zs = [null, x + y, x - y, x * y, (y !== 0) ? x/y : "NoCanDo"];
    this.setState({z: zs[i]});
  }

  render() {
    debugger
    return (
      <CalculatorContext.Provider value={this.state}>
        <Calculator state={this.state}/>
      </CalculatorContext.Provider>
    );
  }
}

export default CalculatorWithContext;
