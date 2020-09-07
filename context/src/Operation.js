import React from "react";
import CalculatorContext from "./CalculatorContext";

class Operation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
      options: ["choose op","+","-","*","/"],
    }
  }

  // handleOp  = e => this.setState({i: Number(e.target.value)});
  // () => this.props.handleInput(name, val)
  handleOp = async e => {
    const val = e.target.value;
    await this.setState({i: val}, () => this.props.handleOp(val))
  };

  render () {
    return (
        <select onChange={this.handleOp}>
          {this.state.options.map((option, i) => <option key={i} value={i}>{option}</option>)}
        </select>
    )
  }
}

const OperationWithContext = props => (
  <CalculatorContext.Consumer>
    {value => {
      debugger
      return <Operation handleOp={value.handleOp} />;
    }}
  </CalculatorContext.Consumer>
);

export default OperationWithContext;
