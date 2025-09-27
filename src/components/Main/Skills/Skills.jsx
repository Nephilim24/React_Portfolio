import "./Skills.scss";
import Title from "../../Reuse/Title/Title.jsx";
import Descr from "../../Reuse/Descr/Descr.jsx";
import html from "../../../assets/images/html.webp";
import css from "../../../assets/images/css.webp";
import js from "../../../assets/images/js.webp";
import figma from "../../../assets/images/figma.webp";
import react from "../../../assets/images/react.webp";
import sass from "../../../assets/images/sass.webp";

const skillsItems = [
  { name: "html", path: html },
  { name: "css", path: css },
  { name: "sass", path: sass },
  { name: "js", path: js },
  { name: "react", path: react },
  { name: "figma", path: figma },
];

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills__content container">
        <Title>
          Мой <span>стек</span>
        </Title>
        <Descr>
          Как фронтенд-разработчик веб-приложений, я освоил следующие навыки и
          инструменты, которые использую в процессе работы.
        </Descr>
        <div className="skills__technologies">
          {skillsItems.map((item, index) => (
            <div key={index} className="skills__img-box">
              <img className="skills__img" src={item.path} alt={item.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
