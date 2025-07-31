import React from "react";
import "./Button.scss";

const Button = ({ text }) => {
  return (
    <button className="button">
      <span>{text}</span>
    </button>
  );
};

export default Button;
