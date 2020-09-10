import React from 'react';
import store from '../store';
import { changeNum } from '../actions/changeNum';

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      num: '',
    };
  }

  handleInput = (e) => {
    this.setState({ num: e.target.value }, this.updateInput);
  }

  updateInput = () => {
    const { num } = this.state;
    if (num) {
      store.dispatch(changeNum(num));
//      this.setState({ num: '' });
    }
  }

  render() {
    return (
      <input type="number" placeholder="Insert number" value={this.state.num} onChange={this.handleInput} style={{ width: 100 }}
      />
    );
  }
}

export default Input;
