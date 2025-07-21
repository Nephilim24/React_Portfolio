import React from "react";
import "./Button.scss";

const Button = ({ text }) => {
  return (
    <button>
      <span>{text}</span>
    </button>
  );
};

export default Button;
