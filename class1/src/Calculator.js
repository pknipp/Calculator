import React from "react";

class Calculator extends React.Component {
    // We never used props.
    constructor(props) {
      super(props);
      this.state = {result: 0, num1: "", num2: ""}
    }

    handleNum1 = e => this.setState({num1: Number(e.target.value)});
    handleNum2 = e => this.setState({num2: Number(e.target.value)});

    add = e => this.setState({result: this.state.num1 + this.state.num2});
    sub = e => this.setState({result: this.state.num1 - this.state.num2});
    mul = e => this.setState({result: this.state.num1 * this.state.num2});
    div = e => this.setState({result: this.state.num1 / this.state.num2});
    cle = e => this.setState({result: 0, num1: "", num2: ""});

    render() {
        const { result, num1, num2 } = this.state;
        return (
            <div>
                <h1>Result: {result}</h1>
                
                <input onChange={this.handleNum1} placeholder="First number" value={num1} />
                <input onChange={this.handleNum2} placeholder="Second number" value={num2} />

                <button onClick={this.add}>+</button>
                <button onClick={this.sub}>-</button>
                <button onClick={this.mul}>*</button>
                <button onClick={this.div}>/</button>
                <button onClick={this.cle}>Clear</button>
            </div>
        );
    }
}

export default Calculator
