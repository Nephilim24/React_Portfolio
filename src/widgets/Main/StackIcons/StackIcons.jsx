import React from "react";
import html from "../../../assets/images/html.png";
import css from "../../../assets/images/css.png";
import js from "../../../assets/images/js.png";
import figma from "../../../assets/images/figma.png";
import react from "../../../assets/images/react.png";
import sass from "../../../assets/images/sass.png";

const StackIcons = () => {
  const stackItems = [
    { name: "html", path: html },
    { name: "css", path: css },
    { name: "js", path: js },
    { name: "figma", path: figma },
    { name: "react", path: react },
    { name: "sass", path: sass },
  ];
  return (
    <>
      {stackItems.map((item, index) => (
        <div className={`${item.name}__icon-box`} key={index}>
          <img
            className={`${item.name}__icon`}
            src={item.path}
            alt={item.name}
          />
        </div>
      ))}
    </>
  );
};

export default StackIcons;
