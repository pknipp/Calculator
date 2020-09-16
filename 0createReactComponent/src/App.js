import React from 'react';
//import Calculator from './Calculator'

let x;
const handleInput = e => {
  const newNum = {};
  newNum[e.target.name] = e.target.value;
  //this.setState(newNum, this.handleCalc);
  // Why does the following 1-liner generate an error message?
  //this.setState({`${e.target.name}`: Number(e.target.value)}), this.handleCalc);
}

const App = () => (
  React.createElement(
    'div',
    {className: "App"},
    React.createElement('h2', null, '4-function calculator'),
    React.createElement('input', {onChange: handleInput, name:"x", value:x}),
    React.createElement(
      "select",
      null,
      React.createElement("option")
    ),
    React.createElement('input'),
    React.createElement(
      "button",
      null,
      "Clear"
    )
  )
);

export default App;
