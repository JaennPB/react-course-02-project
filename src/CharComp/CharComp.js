import React from "react";

const CharComp = (props) => {
  const boxStyle = {
    display: "inline-block",
    padding: "20px",
    margin: "10px",
    border: "2px solid limegreen",
  };

  const btnStyle = {
    display: "block",
    marginTop: "10px",
  };

  return (
    <div style={boxStyle}>
      {props.characters}
      <button style={btnStyle} onClick={props.delete}>
        ✖
      </button>
    </div>
  );
};

export default CharComp;
