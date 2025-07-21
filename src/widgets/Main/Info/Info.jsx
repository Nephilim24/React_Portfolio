import React from "react";
import "./Info.scss";
import myPhoto from "../../../assets/images/Me.png";
import infoCircle from "../../../assets/icons/info-circle.svg";
import infoSmallCircle from "../../../assets/icons/info-small-circle.svg";
import infoRectangle from "../../../assets/icons/info-rectangle.png";
import SocialLinks from "../SocialLinks/SocialLinks.jsx";
import StackIcons from "../StackIcons/StackIcons.jsx";
import Button from "../Button/Button.jsx";

const Info = () => {
  return (
    <section className="info">
      <div className="info__content container">
        <div className="info__text">
          <h1>Привет, меня зовут Мурат</h1>
          <h2>Frontend Developer</h2>
          <p>
            Добро пожаловать на мой сайт-портфолио! Я - Баймуратов Мурат,
            фронтенд-разработчик веб-сайтов со страстью к созданию
            привлекательных и отзывчивых веб-ресурсов. Владея{" "}
            <span className="html">HTML</span>,<span className="css"> CSS</span>
            ,<span className="scss"> SCSS</span>,
            <span className="js"> JavaScript</span> и
            <span className="react"> React</span> я уделяю особое внимание
            эстетичному дизайну и оптимальной производительности. Ознакомьтесь
            здесь с моими различными проектами, которые включают в себя
            отзывчивый дизайн и захватывающую интерактивность.
          </p>
          <div className="info__actions">
            <Button text="Связаться со мной" />
            <SocialLinks />
          </div>
        </div>

        <div className="info__portrait">
          <StackIcons />
          <img className="info__portrait-circle" src={infoCircle} alt="" />
          <img
            className="info__portrait-small-circle"
            src={infoSmallCircle}
            alt=""
          />
          <div className="info__img">
            <img className="info__portrait" src={myPhoto} alt="My Photo" />
            <img className="info__rectangle" src={infoRectangle} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

// ! ToDo: сделать анимацию иконок в SocialLInks

export default Info;
