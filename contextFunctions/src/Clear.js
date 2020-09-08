import React from "react";
import CalculatorContext from "./CalculatorContext";

const Clear = props => <button onClick={props.clear}>Clear</button>

const ClearWithContext = () => (
  <CalculatorContext.Consumer>
    {value => <Clear clear={value.clear} />}
  </CalculatorContext.Consumer>
);

export default ClearWithContext;
