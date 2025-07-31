import "./Skills.scss";
import Title from "../Title/Title.jsx";
import Descr from "../Descr/Descr.jsx";
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
    <section className="skill">
      <div className="skill__content container">
        <Title>
          Мой <span>стек</span>
        </Title>
        <Descr>
          Как фронтенд-разработчик веб-приложений, я освоил следующие навыки и
          инструменты, которые использую в процессе работы.
        </Descr>
        <div className="skill__technologies">
          {skillsItems.map((item, index) => (
            <div key={index} className="skill__img-box">
              <img className="skill__img" src={item.path} alt={item.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
