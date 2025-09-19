import "./Skills.scss";
import Title from "../../Reuse/Title/Title.jsx";
import Descr from "../../Reuse/Descr/Descr.jsx";
import html from "../../../assets/images/html.png";
import css from "../../../assets/images/css.png";
import js from "../../../assets/images/js.png";
import figma from "../../../assets/images/figma.png";
import react from "../../../assets/images/react.png";
import sass from "../../../assets/images/sass.png";

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
