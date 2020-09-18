import React from "react";
import CalculatorContext from "./CalculatorContext";

class Clear extends React.Component {
  static contextType = CalculatorContext;
  render () {return <button onClick={this.context.clear}>Clear</button>}
  //1 line below is an alternative - even if this becomes a function
  //render () {return <button onClick={this.props.clear}>Clear</button>}
}

const ClearWithContext = () => (
  <CalculatorContext.Consumer>
    {value => <Clear clear={value.clear} />}
  </CalculatorContext.Consumer>
);

export default ClearWithContext;
