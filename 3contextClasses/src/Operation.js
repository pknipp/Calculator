import React from "react";
import CalculatorContext from "./CalculatorContext";

class Operation extends React.Component {
  static contextType = CalculatorContext;
  handleOp = e => this.context.updateOp(e.target.value);

  render () {
    const options = ["choose op", "+", "-", "*", "/"];
    return (
      <select onChange={this.handleOp} value={this.context.i}>
        {options.map((option, i) => <option key={i} value={i}>{option}</option>)}
      </select>
    )
  }
}

const OperationWithContext = props => <Operation />;

export default OperationWithContext;
