import html from "../../../../assets/images/html.webp";
import css from "../../../../assets/images/css.webp";
import js from "../../../../assets/images/js.webp";
import figma from "../../../../assets/images/figma.webp";
import react from "../../../../assets/images/react.webp";
import sass from "../../../../assets/images/sass.webp";
import "./StackIcons.scss";

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
