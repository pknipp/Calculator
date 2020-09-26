import React from "react";
import CalculatorContext from "./CalculatorContext";

class Input extends React.Component {
  static contextType = CalculatorContext;
  handleInput = e => this.context.updateInput(e.target.name, e.target.value);
  render() {
    return <input onChange={this.handleInput} name={this.props.name} placeholder="number" value={this.props.num}/>
  }
}

const InputWithContext = ({ name, num }) => <Input name={name} num={num} />

export default InputWithContext;
