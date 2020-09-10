import React from 'react';
import store from '../store';
import { changeNum } from '../actions/change';

class Input extends React.Component {
  constructor(props) {super(props);
    this.state = {num: ''};
  }

  handleInput = e => {
    const name = e.target.name
    this.setState(
      { num: e.target.value },
      () => this.updateInput(name)
    );
  }

  updateInput = name => {
    const { num } = this.state;
    if (num) {
      store.dispatch(changeNum(num, name));
//      this.setState({ num: '' });
    }
  }

  render() {
    return (
      <input type="number" placeholder="Insert number" value={this.state.num} onChange={this.handleInput} style={{ width: 100 }} name={this.props.name} />
    );
  }
}

export default Input;
