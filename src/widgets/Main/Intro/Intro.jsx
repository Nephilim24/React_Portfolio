import "./Intro.scss";
import mainPortrait from "../../../assets/images/main-portrait.png";
import introCircle from "../../../assets/icons/info-circle.svg";
import introSmallCircle from "../../../assets/icons/info-small-circle.svg";
// import introRectangle from "../../../assets/icons/info-rectangle.png";
import SocialLinks from "./SocialLinks/SocialLinks.jsx";
import StackIcons from "./StackIcons/StackIcons.jsx";
import Button from "../../Reuse/Button/Button.jsx";

const Intro = () => {
  const link = () => {
    // При клике создаётся переменная, которая находит элемент с id из массива объектов links с ключом id, а затем скролит до него
    const anchor = document.getElementById("contact");
    // scrollIntoView() скроллит до видимости определённого элемента. Например до секции с id about, то есть "Обо мне".
    anchor.scrollIntoView({
      // В фигурных скобах переданы параметры:
      // behavior со значением "smooth" отвечает за плавную анимацию скролла
      //  Параметр block отвечает за то, до откуда надо скроллить относительно блока. В данном случае center, то есть до центра блока.
      behavior: "smooth",
      block: "center",
    });
  };

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
            <Button text="Связаться со мной" onClick={link}/>
            <SocialLinks />
          </div>
        </div>

        <div className="intro__visual">
          <div className="intro__portrait">
            <img
              className="intro__portrait-img"
              src={mainPortrait}
              alt="My Photo"
            />
            {/* <img
              className="intro__portrait-rectangle"
              src={introRectangle}
              alt=""
            /> */}
          </div>
          <img className="intro__visual-circle" src={introCircle} alt="" />
          <img
            className="intro__visual-small-circle"
            src={introSmallCircle}
            alt=""
          />
          <StackIcons />
        </div>
      </div>
    </section>
  );
};

export default Intro;
