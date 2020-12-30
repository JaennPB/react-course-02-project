import React from "react";

const CharComp = (props) => {
  const boxStyle = {
    display: "inline-block",
    padding: "20px",
    margin: "10px",
    border: "2px solid #ccc",
  };

  return (
    <div style={boxStyle}>
      <p>{props.eachChar}</p>
    </div>
  );
};

export default CharComp;
