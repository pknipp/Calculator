import React from 'react';

class FarmerHire extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      farmerName: '',
    };
  }

  handleInputChange = (e) => {
    this.setState({ farmerName: e.target.value });
  }

  hireFarmerClick = () => {
    const { farmerName } = this.state;
    if (farmerName) {
      this.props.hire(farmerName);
      this.setState({ farmerName: '' });
    }
  }

  render() {
    return (
      <div>
        <h3>Hire Farmer</h3>
        <input
          type="text"
          placeholder="Name of farmer to hire"
          value={this.state.farmerName}
          onChange={this.handleInputChange}
          style={{ width: 300 }}
        />
        <button onClick={this.hireFarmerClick}>HIRE FARMER</button>
      </div>
    );
  }
}

export default FarmerHire;
