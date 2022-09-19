import React, { useState } from "react";

const TextButton = () => {
  const [showText, setShowText] = useState(false);
  return (
    <>
      <button onClick={() => setShowText(!showText)}>Click me</button>
      {showText && (
        <h1>
          Hello Frontend Foxes{" "}
          <span role="img" aria-label="fox emoji">
            🦊
          </span>
        </h1>
      )}
    </>
  );
};

export default TextButton;
