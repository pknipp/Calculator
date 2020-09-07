import React from "react";
import CalculatorContext from "./CalculatorContext";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: ""
    }
  }

  static contextType = CalculatorContext;

  handleInput = async e => {
    const val = e.target.value;
    const name = e.target.name;
    debugger;
    await this.setState({num: val}, () => this.context.updateInput(name, val))
  };

  render() {
    return (
      <input onChange={this.handleInput} name={this.props.name} placeholder="number" value={this.props.num}/>
    )
  }
}

const InputWithContext = props => (
  <CalculatorContext.Consumer>
    {value => <Input updateInput={value.updateInput} name={props.name} num={props.num} /> }
  </CalculatorContext.Consumer>
);

export default InputWithContext;
