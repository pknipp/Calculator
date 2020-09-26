import React from 'react';
import { connect } from "react-redux";
import { changeNum } from '../actions/change';

const Input = ({ name, x, y, changeNum }) => (
  <input type="number" value={name === "x" ? x : y} onChange={changeNum} name={name} />
)
const msp = ({ x, y }) => ({ x, y });
const mdp = dispatch => ({changeNum: ({target: {value, name}}) => dispatch(changeNum(value, name))})
export default connect(msp, mdp)(Input);
