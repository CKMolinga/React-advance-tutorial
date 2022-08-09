import React, { useState } from "react";

const UseStateBasics = () => {
  //* States
  const [text, setText] = useState("Random Title");

  //* Functions
  const handleClick = () => {
    setText("Hello World");
  };
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={handleClick}>
        Change Text
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
