import React, { Component } from "react";
import "./App.css";
import Validation from "./ValidationComp/ValidationComp.js";

class App extends Component {
  state = {
    textLength: 0,
  };

  inputLength = (e) => {
    const innerText = e.target.value;

    console.log(innerText.length);
    this.setState({ textLength: innerText.length });
  };

  render() {
    return (
      <div className="App">
        <input onChange={this.inputLength} />
        <p>{this.state.textLength}</p>
        <Validation chars={this.state.textLength} />
      </div>
    );
  }
}

export default App;
