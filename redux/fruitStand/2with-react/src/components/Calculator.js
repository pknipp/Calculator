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
  handleOp   = e  => store.dispatch( changeOp(e.target.value));
  clear      = e  => {
    debugger;
    store.dispatch(clear());
  }

  render() {
    let { x, y, i } = store.getState();
    x = (x === undefined) ? 0 : Number(x);
    y = (y === undefined) ? 0 : Number(y);
    const z = [null, x + y, x - y, x * y, (y !== 0) ? x/y : "NoCanDo"][i];
    return (
      <>
        <Input name="x" num={x} handleInput={this.handleInput} />
        <Operation i={i} handleOp={this.handleOp} />
        <Input name="y" num={y} handleInput={this.handleInput} />
        <Result z={z} />
        <Clear clear={clear} />
      </>
    );
  }
}

export default Calculator;
