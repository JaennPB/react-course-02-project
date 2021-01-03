import React, { Component } from "react";
import "./App.css";
import Validation from "./ValidationComp/ValidationComp.js";
import CharComp from "./CharComp/CharComp.js";

class App extends Component {
  state = {
    textLength: 0,
    characters: [],
  };

  inputHandler = (e) => {
    const innerText = e.target.value;

    this.setState({
      textLength: innerText.length,
      characters: [...innerText],
    });
  };

  deleteCharHandler = (index) => {
    const chars = this.state.characters;
    chars.splice(index, 1);
    // console.log(chars);
    this.setState({ characters: chars });
  };

  render() {
    const inputStyle = {
      padding: "10px 15px",
    };

    const characters = this.state.characters.map((ch, index) => {
      return (
        <CharComp
          characters={ch}
          key={index}
          delete={() => this.deleteCharHandler(index)}
        />
      );
    });

    return (
      <div className="App">
        <input onChange={this.inputHandler} style={inputStyle} />
        <p>Your input length: {this.state.textLength}</p>
        <Validation inputLength={this.state.textLength} />
        {characters}
      </div>
    );
  }
}

export default App;
