import React from "react";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      z: null,
      x: "",
      y: "",
      options: ["choose op","+","-","*","/"],
      i: 0,
    }
  }

  handleInput = e => {
    const newNum = {};
    newNum[e.target.name] = e.target.value;
    this.setState(newNum, this.handleCalc);
    // Why does the following 1-liner generate an error message?
    //this.setState({`${e.target.name}`: Number(e.target.value)}), this.handleCalc);
  }
  handleOp  = e => this.setState({i: Number(e.target.value)}, this.handleCalc);
  handleCalc = () => {
    let { i, x, y } = this.state;
    const zs = [null, x + y, x - y, x * y, (y !== 0) ? x/y : "NoCanDo"];
    this.setState({z: zs[i]});
  }
  handleCle = e => this.setState({z: "", x: "", y: "" });

  render() {
    const {i, x, y, z } = this.state;
    return (
      <div>
        <input type="number" onChange={this.handleInput} placeholder="1st input" name="x" value={x}/>
        <select onChange={this.handleOp} value={i}>
          {this.state.options.map((option, i) => <option key={i} value={i}>{option}</option>)}
        </select>
        <input type="number" onChange={this.handleInput} placeholder="2nd input" name="y" value={y}/>
        <span> = {(z !== null) ? z : " result"}</span>
        <button onClick={this.handleCle}>Clear</button>
      </div>
    )
  }
}

export default Calculator
