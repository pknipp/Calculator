import React from "react";
import { connect } from "react-redux";
import { changeOp } from "../actions/change";

const Operation = ({ i, changeOp }) => {
  const options = ["choose op", "+", "-", "*", "/"];
  return (
    <select onChange={changeOp} value={i}>
      {options.map((option, index) => <option key={index} value={index}>{option}</option>)}
    </select>
  );
}

const msp = ({ i }) => ({ i });
const mdp = dispatch => ({changeOp: e => dispatch(changeOp(e.target.value))})
export default connect(msp, mdp)(Operation);
