import React, { Component } from "react";
import "./App.css";
import Validation from "./ValidationComp/ValidationComp.js";
import CharComp from "./CharComp/CharComp.js";

class App extends Component {
  state = {
    textLength: 0,
    characters: null,
  };

  inputHandler = (e) => {
    const innerText = e.target.value;

    this.setState({
      textLength: innerText.length,
      characters: innerText,
    });
  };

  render() {
    return (
      <div className="App">
        <input onChange={this.inputHandler} />
        <p>Your length: {this.state.textLength}</p>
        <Validation chars={this.state.textLength} />
        <CharComp eachChar={this.state.characters} />
      </div>
    );
  }
}

export default App;
