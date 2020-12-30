import React from "react";

const ValidationComp = (props) => {
  let text = null;
  if (!props.chars) {
    text = null;
  } else if (props.chars > 3) {
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
