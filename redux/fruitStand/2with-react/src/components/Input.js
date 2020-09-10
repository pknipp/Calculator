import React from 'react';

class Input extends React.Component {
  render() {
    return (
      <input type="number" placeholder="Insert number" value={this.props.num} onChange={this.props.handleInput} name={this.props.name} />
    );
  }
}
export default Input;
