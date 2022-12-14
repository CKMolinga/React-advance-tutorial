import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setsize] = useState(window.innerWidth);

  const checkSize = () => {
    setsize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", checkSize);
  });
  return (
    <>
      <h1>Window</h1>
      <h2>{size} px</h2>
    </>
  );
};

export default UseEffectCleanup;
