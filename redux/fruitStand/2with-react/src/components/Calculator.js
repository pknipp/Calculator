import React from 'react';
import Input from './Input';
import Operation from './Operation';
import Result from './Result';
import Clear from './Clear';
import store from '../store';
import { changeNum, changeOp, clear } from '../actions/change';

class Calculator extends React.Component {
  componentDidMount() {this.unsubscribe = store.subscribe(() => this.forceUpdate())}
  componentWillUnmount() {if (this.unsubscribe) this.unsubscribe()}

  handleInput= e  => store.dispatch(changeNum(e.target.value, e.target.name));
  handleOp   = e  => store.dispatch(changeOp(e.target.value));
  handleClear= e  => store.dispatch(clear());

  render() {
    let { x, y, i } = store.getState();
    let z;
    if (x === "" || y === "" || i === 0) {
      z = null;
    } else {
      x = Number(x);
      y = Number(y);
      z = [null, x + y, x - y, x * y, (y !== 0) ? x/y : "NoCanDo"][i];
    }
    return (
      <>
        <Input name="x" value={x} handleInput={this.handleInput} />
        <Operation value={i} handleOp={this.handleOp} />
        <Input name="y" value={y} handleInput={this.handleInput} />
        <Result value={z} />
        <Clear handleClear={this.handleClear} />
      </>
    );
  }
}
export default Calculator;
