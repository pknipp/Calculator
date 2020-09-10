import React from 'react';

class Result extends React.Component {

  render() {
    return <span> = {(this.props.z !== null) ? this.props.z : " result"}</span>
  }
}

export default Result;
