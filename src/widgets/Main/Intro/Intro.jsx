import "./Intro.scss";
import myPhoto from "../../../assets/images/Me.png";
import introCircle from "../../../assets/icons/info-circle.svg";
import introSmallCircle from "../../../assets/icons/info-small-circle.svg";
import introRectangle from "../../../assets/icons/info-rectangle.png";
import SocialLinks from "../SocialLinks/SocialLinks.jsx";
import StackIcons from "../StackIcons/StackIcons.jsx";
import Button from "../../Reuse/Button/Button.jsx";

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro__content container">
        <div className="intro__text">
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
          <div className="intro__actions">
            <Button text="Связаться со мной" />
            <SocialLinks />
          </div>
        </div>

        <div className="intro__portrait">
          <StackIcons />
          <img className="intro__portrait-circle" src={introCircle} alt="" />
          <img
            className="intro__portrait-small-circle"
            src={introSmallCircle}
            alt=""
          />
          <div className="intro__img">
            <img className="intro__portrait" src={myPhoto} alt="My Photo" />
            <img className="intro__rectangle" src={introRectangle} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
