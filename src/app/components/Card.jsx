import React from "react";

function Card({ variant, style, children }) {
  return (
    <div
      className={`bg-white p-4 rounded-lg ${
        variant === "3d" ? "card-3d" : ""
      } ${style}`}
    >
      <div>{children}</div>
    </div>
  );
}

export default Card;
