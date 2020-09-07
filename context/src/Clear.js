import React from "react";
import CalculatorContext from "./CalculatorContext";

class Clear extends React.Component {
  constructor(props) {super(props)}
  static contextType = CalculatorContext;
  render () {return <button onClick={this.context.clear}>Clear</button>}
}

const ClearWithContext = () => (
  <CalculatorContext.Consumer>
    {value => <Clear />}
  </CalculatorContext.Consumer>
);

export default ClearWithContext;
