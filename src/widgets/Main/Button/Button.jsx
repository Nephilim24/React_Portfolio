import React from "react";
import "./Button.scss";

const Button = ({ text, type, form, onClick }) => {
  return (
    <button className="button" type={type} form={form} onClick={onClick}>
      <span>{text}</span>
    </button>
  );
};

export default Button;
