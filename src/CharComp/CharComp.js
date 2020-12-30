import React from "react";

const CharComp = (props) => {
  const boxStyle = {
    display: "inline-block",
    padding: "20px",
    margin: "10px",
    border: "2px solid #ccc",
  };

  const btnStyle = {
    display: "block",
    marginTop: "10px",
  };

  const characters = props.charArray.map((char) => {
    return (
      <div style={boxStyle}>
        {char}
        <button style={btnStyle} onClick={props.delete}>
          ✖
        </button>
      </div>
    );
  });

  return characters;
};

export default CharComp;
