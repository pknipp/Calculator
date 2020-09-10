import React from "react";
class Operation extends React.Component {
  render() {
    const options = ["choose op", "+", "-", "*", "/"];
    return (
      <select onChange={this.props.handleOp} value={this.props.i}>
        {options.map((option, index) => <option key={index} value={index}>{option}</option>)}
      </select>
    );
  }
}

export default Operation;
