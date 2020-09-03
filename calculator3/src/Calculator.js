import React from "react";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
      z: null,
      options: ['choose op','+','-','*','/'],
      index: 0
    }
  }

  handleCle = e => this.setState({x: 0, y: 0, z: null });
  handleOp  = e => this.setState({i: Number(e.target.value)}, this.handleResult);
  handleNum = e => {
    const numStr = e.target.value;
    return (numStr === "-") ? 0 : Number(numStr);
  }
  handleX = () => this.setState({x: this.state.x}, this.handleZ);
  handleY = () => this.setState({y: this.state.y}, this.handleZ);
  handleZ = () => {
    const [i,x,y] = [this.state.i, this.state.x, this.state.y];
    const results = [null, x + y, x - y, x * y, (y !== 0) ? x/y : "NoCanDo"];
    this.setState({z: results[i]});
  }

  render() {
    const {x, y, z, i, options} = this.state;
    return (
      <>
        <input  onChange={this.handleX}  value={this.handleNum(x)}/>
        <select onChange={this.handleOp} value={i}>
          {options.map((option, i) => <option key={i} value={i}>{option}</option>)}
        </select>
        <input onChange={this.handleY} value={y}/>
        <span> = {(z !== null) ? z : " result"}</span>
        <button onClick={this.handleCle}>Clear</button>
      </>
    )
  }
}

export default Calculator
