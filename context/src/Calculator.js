import React from "react";
import Input from "./Input";
import Operation from "./Operation";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
  }
  testHandle = () => console.log("hello world");

  render() {
    const {i, x, y, z } = this.props.state;
    debugger
//    console.log(this.state);
    return (
      <div>
        <Input key="x" name="x" />
        <Operation i={i}/>
        <Input key="y" name="y" />
        <span> = {(z !== null) ? z : " result"}</span>
        <button onClick={this.props.state.handleCle}>Clear</button>
        {/* <button onClick={this.testHandle}>Clear</button> */}
      </div>
    )
  }
}

export default Calculator
