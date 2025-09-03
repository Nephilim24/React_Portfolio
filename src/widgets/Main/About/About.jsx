import React from "react";
import "./About.scss";
import myPhoto2 from "../../../assets/images/Me2.png";
import aboutCircle from "../../../assets/icons/about-circle.svg";
import aboutSmallCircle from "../../../assets/icons/about-small-circle.svg";
import aboutRectangle from "../../../assets/icons/about-rectangle.png";
import aboutRectangleGreen from "../../../assets/icons/about-rectangle-green.png";
import Title from "../../Reuse/Title/Title";
import Descr from "../../Reuse/Descr/Descr.jsx";

const About = () => {
  return (
    <section className="about">
      <div className="about__content container">
        <div className="about__visual">
          <div className="about__visual-images">
            <img className="about__visual-portrait" src={myPhoto2} alt="" />
            {/* <img className="about__visual-rectangle" src={aboutRectangle} alt="" /> */}
            <img
              className="about__visual-rectangle-green"
              src={aboutRectangleGreen}
              alt=""
            />
          </div>
          <img className="about__visual-circle" src={aboutCircle} alt="" />
          <img
            className="about__visual-small-circle"
            src={aboutSmallCircle}
            alt=""
          />
        </div>
        <div className="about__text">
          <Title>
            Обо <span>мне</span>
          </Title>
          <Descr>
            Привет! Я начинающий веб-разработчик, прошёл курс
            "Frontend-разработка" в учебном центре PROWEB. В данный момент
            активно осваиваю JavaScript и библиотеку React. Стараюсь не просто
            изучать теорию, а закреплять навыки на практике — в частности, над
            этим портфолио я работал самостоятельно, чтобы оно стало моим первым
            полноценным проектом. Пока у меня нет коммерческого опыта, но я
            готов развиваться дальше, учиться на реальных задачах и брать на
            себя ответственность за результат. Открыт для предложений и
            сотрудничества.
          </Descr>
        </div>
      </div>
    </section>
  );
};

export default About;
