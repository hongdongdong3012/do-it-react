import React from "react";
import Name from "./components/Name";
import Three from "./components/Three";
import StateExample from "./components/StateExample";
import Button from "./components/Button";
import "./App.css";
import Counter from "./components/Counter";
import NewCounter from "./components/NewCounter";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 10 };
    this.resetCount = this.resetCount.bind(this);
  }

  resetCount() {
    this.setState(({ count }) => ({ count: count + 10 }));
  }
  render() {
    return (
      <div>
        <div>
          <Counter count={this.state.count} />
        </div>
        <div>
          <NewCounter count={this.state.count} />
        </div>
        <button onClick={this.resetCount}>
          {this.state.count + 10}으로 초기화
        </button>
      </div>
    );
  }
}

export default App;
