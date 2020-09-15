import React from 'react';
//import Calculator from './Calculator'

const App = () => (
  React.createElement(
    'div',
    {className: "App"},
    React.createElement('h2', null, '4-function calculator'),
    React.createElement('input'),
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
