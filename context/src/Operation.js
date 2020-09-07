import React from "react";
import CalculatorContext from "./CalculatorContext";

class Operation extends React.Component {
  debugger
  constructor(props) {
    super(props);
    this.state = {i: 0};
    this.options = ["choose op","+","-","*","/"]
  }

  static contextType = CalculatorContext;

  handleOp = async e => {
    const val = e.target.value;
    await this.setState({i: val}, () => this.context.updateOp(val))
  };

  render () {
    return (
        <select onChange={this.handleOp} value={this.props.i}>
          {this.options.map((option, i) => <option key={i} value={i}>{option}</option>)}
        </select>
    )
  }
}

const OperationWithContext = props => {
  debugger
  return (
  <CalculatorContext.Consumer>
    {value =>  <Operation updateOp={value.updateOp} i={props.i}/>}
  </CalculatorContext.Consumer>
)};

export default OperationWithContext;
