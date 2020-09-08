import React from "react";
import CalculatorContext from "./CalculatorContext";

class Clear extends React.Component {
  //static contextType = CalculatorContext;
  //render () {return <button onClick={this.context.clear}>Clear</button>}
  //two lines above are an alternative - if this remains a class - to the single line below
  render () {return <button onClick={this.props.clear}>Clear</button>}
}

const ClearWithContext = () => (
  <CalculatorContext.Consumer>
    {value => <Clear clear={value.clear} />}
  </CalculatorContext.Consumer>
);

export default ClearWithContext;
