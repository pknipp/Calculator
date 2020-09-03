import React from "react";

class Calculator extends React.Component {
  constructor() {
    super();
    this.state = {
      z: null,
      x: 0,
      y: 0,
      options: ["choose op","+","-","*","/"],
      i: 0,
    }
  }

  handleX   = e => this.setState({x: Number(e.target.value)}, this.handleZ);
  handleY   = e => this.setState({y: Number(e.target.value)}, this.handleZ);
  handleOp  = e => this.setState({i: Number(e.target.value)}, this.handleZ);
  handleZ = () => {
    const [i,x,y] = [this.state.i, this.state.x, this.state.y];
    const zs = [null, x + y, x - y, x * y, (y !== 0) ? x/y : "NoCanDo"];
    this.setState({z: zs[i]});
  }
  handleCle = e => this.setState({z: 0, x: 0, y: 0 });

  render() {
    const {i, x, y, z } = this.state;
    return (
      <div>
        <input onChange={this.handleX} placeholder="x" value={x}/>
        <select onChange={this.handleOp} value={i}>
          {this.state.options.map((option, i) => <option key={i} value={i}>{option}</option>)}
        </select>
        <input onChange={this.handleY} placeholder="y" value={y}/>
        <span> = {(z !== null) ? z : " z"}</span>
        <button onClick={this.handleCle}>Clear</button>
      </div>
    )
  }
}

export default Calculator
