import React from "react";
import { connect } from "react-redux";
import { clear } from "../actions/change";

const Clear = ({ clear }) => <button onClick={clear}>Clear</button>

const msp = state => ({});
const mdp = dispatch => ({clear: () => dispatch(clear())})
export default connect(msp, mdp)(Clear);
