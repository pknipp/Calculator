import React from "react";
import CalculatorContext from "./CalculatorContext";

class Operation extends React.Component {
  static contextType = CalculatorContext;
  handleOp = e => this.context.updateOp(e.target.value);
  //1 line below is an alternative even if this becomes a function
  handleOp = e => this.props.updateOp(e.target.value);

  render () {
    const options = ["choose op", "+", "-", "*", "/"];
    return (
      <select onChange={this.handleOp} value={this.props.i}>
        {options.map((option, i) => <option key={i} value={i}>{option}</option>)}
      </select>
    )
  }
}

const OperationWithContext = props => {
  return (
  <CalculatorContext.Consumer>
    {value =>  <Operation updateOp={value.updateOp} i={props.i}/>}
  </CalculatorContext.Consumer>
)};

export default OperationWithContext;
