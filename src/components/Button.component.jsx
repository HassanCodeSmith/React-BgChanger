import React from "react";

function Button({ color, onClick, text }) {
  return (
    <button
      onClick={onClick}
      className="outline-none px-4 py-1 rounded-full shadow-lg"
      style={{
        backgroundColor: color,
        color:
          color === "yellow" ||
          color == "pink" ||
          color === "lavender" ||
          color === "white"
            ? "black"
            : "white",
      }}
    >
      {text}
    </button>
  );
}

export default Button;
