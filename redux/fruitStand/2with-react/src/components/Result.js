import React from 'react';
import store from '../store';

class Result extends React.Component {
  componentDidMount() {this.unsubscribe = store.subscribe(() => this.forceUpdate())}
  componentWillUnmount() {if (this.unsubscribe) this.unsubscribe()}

  handleCalc = () => {
    let { i, x, y } = this.state;
    x = Number(x);
    y = Number(y);
    const zs = [null, x + y, x - y, x * y, (y !== 0) ? x/y : "NoCanDo"];
    this.setState({z: zs[i]});
  }

  render() {
    let { i, x, y } = store.getState();
    x = Number(x);
    y = Number(y);
    let z;
    if (i) z = [null, x + y, x - y, x * y, (y !== 0) ? x/y : "NoCanDo"][i];
    return <span>result = {(z !== null) ? z : " result"}</span>
  }
}

export default Result;
