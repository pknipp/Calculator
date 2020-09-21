import React from "react";
import CalculatorContext from "./CalculatorContext";

class Clear extends React.Component {
  static contextType = CalculatorContext;
  render () {return <button onClick={this.context.clear}>Clear</button>}
}

const ClearWithContext = _ => <Clear />;

export default ClearWithContext;
