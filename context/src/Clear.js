import React from "react";
import CalculatorContext from "./CalculatorContext";

class Clear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: "",
      y: "",
      i: 0,
    }
  }

  static contextType = CalculatorContext;

  handleCle = () => {
    this.setState({x: null, z: null, y: null, i: 0});
  }

  render () {
    debugger
    return (
      <button onClick={this.context.clear}>Clear</button>
    )
  }
}

const ClearWithContext = () => (
  <CalculatorContext.Consumer>
    {value => {
      debugger
      return <Clear />
    }}
  </CalculatorContext.Consumer>
);

export default ClearWithContext;
