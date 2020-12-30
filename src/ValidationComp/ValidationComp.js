import React from "react";

const ValidationComp = (props) => {
  let text = null;
  if (!props.inputLength) {
    text = null;
  } else if (props.inputLength > 3) {
    text = "Text looks good ✅";
  } else {
    text = "Text too short ❌ (minimum 3 characters long)";
  }

  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export default ValidationComp;
