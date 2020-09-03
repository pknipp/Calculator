import React from "react";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      result: null,
      num1: 0,
      num2: 0
    }
  }

  handleNum1 = e => {
    const num1 = Number(e.target.value);
    this.setState({num1})
  }

  handleNum2 = e => this.setState({num2: Number(e.target.value)});

  handleAdd = e => this.setState({result: this.state.num1 + this.state.num2});
  handleSub = e => this.setState({result: this.state.num1 - this.state.num2});
  handleMul = e => this.setState({result: this.state.num1 * this.state.num2});
  handleDiv = e => this.setState({result: this.state.num1 / this.state.num2});
  handleCle = e => this.setState({result: 0, num1: 0, num2: 0 });

  render() {
    const {num1, num2, result } = this.state;
    return (
      <div>
        <h1>Result: {result}</h1>
        <input onChange={this.handleNum1} placeholder="Num1" value={num1}/>
        <input onChange={this.handleNum2} placeholder="Num2" value={num2}/>
        {/* replace following four lines w/a drop-down */}
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleSub}>-</button>
        <button onClick={this.handleMul}>*</button>
        <button onClick={this.handleDiv}>/</button>
        <button onClick={this.handleCle}>Clear</button>
      </div>
    )
  }
}

export default Calculator
