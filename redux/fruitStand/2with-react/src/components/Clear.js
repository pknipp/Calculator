import React from "react";

class Clear extends React.Component {
  render () {
    return <button onClick={this.props.handleClear}>Clear</button>
  }
}
export default Clear;
