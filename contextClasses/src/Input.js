import React from "react";
import CalculatorContext from "./CalculatorContext";

class Input extends React.Component {
  //static contextType = CalculatorContext;
  //handleInput = e => this.context.updateInput(e.target.name, e.target.value);
  //2 lines above are an alternative - if this remains a class - to the one below
  handleInput = e => this.props.updateInput(e.target.name, e.target.value);
  render() {
    return <input onChange={this.handleInput} name={this.props.name} placeholder="number" value={this.props.num}/>
  }
}

const InputWithContext = props => (
  <CalculatorContext.Consumer>
    {value => <Input updateInput={value.updateInput} name={props.name} num={props.num} /> }
  </CalculatorContext.Consumer>
);

export default InputWithContext;