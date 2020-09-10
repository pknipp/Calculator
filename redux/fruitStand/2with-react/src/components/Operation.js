import React from "react";
import store from "../store";
import { changeOp } from '../actions/change';

class Operation extends React.Component {
  constructor(props) {super(props);
    this.state = {i: 0};
  }

  handleop = e => this.setState({ i: e.target.value }, this.updateop);
  updateop = () => store.dispatch(changeOp(this.state.i));

  render() {
    const options = ["choose op", "+", "-", "*", "/"];
    return (
      <select onChange={this.handleop} value={this.state.i}>
        {options.map((option, index) => <option key={index} value={index}>{option}</option>)}
      </select>
    );
  }
}

export default Operation;
