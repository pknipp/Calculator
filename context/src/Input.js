import React from "react";
import CalculatorContext from "./CalculatorContext";

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: ""
    }
  }

  handleInput = async e => {
    const val = e.target.value;
    const name = e.target.name;
    await this.setState({num: val}, () => this.props.handleInput(name, val))
//    this.setState(newNum, () => console.log("done!"));
  };

  render() {
    return (
      <input onChange={this.handleInput} name={this.props.name} placeholder="number" value={this.state.num}/>
    )
  }
}

const InputWithContext = props => (
  <CalculatorContext.Consumer>
    {value => {
      return <Input handleInput={value.handleInput} name={props.name} />;
    }}
  </CalculatorContext.Consumer>
);

export default InputWithContext;
