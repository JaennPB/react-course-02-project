import React from "react";

const ValidationComp = (props) => {
  let text = null;
  if (!props.chars) {
    text = null;
  } else if (props.chars > 5) {
    text = "Text looks good ✅";
  } else {
    text = "Text too short ❌ (minimum 5 characters long)";
  }

  return (
    <div>
      <p>{text}</p>
    </div>
  );
};

export default ValidationComp;
