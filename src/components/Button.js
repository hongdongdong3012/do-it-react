import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0
    };
  }
  handleUp = () => {
    this.setState({
      score: this.state.score + 1
    });
  };
  handleDown = () => {
    this.setState({
      score: this.state.score - 1
    });
  };

  render() {
    return (
      <div>
        <h3>{this.state.score}</h3>
        <button onClick={this.handleUp}>업버튼</button>
        <button onClick={this.handleDown}>다운버튼</button>
      </div>
    );
  }
}

export default Button;
