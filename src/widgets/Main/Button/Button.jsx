import React from "react";
import "./Button.scss";

const Button = ({ text, type }) => {
  return (
    <button className="button" type={type}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
