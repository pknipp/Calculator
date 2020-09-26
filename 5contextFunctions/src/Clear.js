import React from "react";
import CalculatorContext from "./CalculatorContext";

const Clear = ({ clear }) => <button onClick={clear}>Clear</button>

const ClearWithContext = _ => (
  <CalculatorContext.Consumer>
    {value => <Clear clear={value.clear} />}
  </CalculatorContext.Consumer>
);

export default ClearWithContext;
