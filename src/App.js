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
    const charsArr = innerText.split("");

    this.setState({
      textLength: innerText.length,
      characters: charsArr,
    });

    console.log(this.state.characters);
  };

  deleteHandler = () => {
    console.log("delete");
  };

  render() {
    const inputStyle = {
      padding: "10px 15px",
    };

    return (
      <div className="App">
        <input onChange={this.inputHandler} style={inputStyle} />
        <p>Your input length: {this.state.textLength}</p>
        <Validation inputLength={this.state.textLength} />
        <CharComp
          charArray={this.state.characters}
          delete={this.deleteHandler}
        />
      </div>
    );
  }
}

export default App;
