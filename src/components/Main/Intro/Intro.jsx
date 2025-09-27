import "./Intro.scss";
import mainPortrait from "../../../assets/images/main-portrait.webp";
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
            <Button text="Связаться со мной" onClick={link} />
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
          </div>
          <svg
            className="intro__visual-circle"
            dth="344"
            height="345"
            viewBox="0 0 344 345"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="172"
              cy="172.285"
              r="172"
              fill="url(#paint0_linear_18_16)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_18_16"
                x1="702.638"
                y1="-398.609"
                x2="87.8298"
                y2="214.37"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="var(--primary-color)" stop-opacity="0.65" />
                <stop
                  offset="0.994294"
                  stop-color="var(--circle-color)"
                  stop-opacity="0"
                />
              </linearGradient>
            </defs>
          </svg>
          <svg
            className="intro__visual-small-circle"
            width="274"
            height="274"
            viewBox="0 0 274 274"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="137.118"
              cy="136.957"
              r="136.57"
              fill="url(#paint0_linear_18_17)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_18_17"
                x1="558.451"
                y1="-316.339"
                x2="70.2863"
                y2="170.373"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="var(--circle-color)" stop-opacity="0.26" />
                <stop
                  offset="0.994294"
                  stop-color="var(--circle-color)"
                  stop-opacity="0"
                />
              </linearGradient>
            </defs>
          </svg>
          <StackIcons />
        </div>
      </div>
    </section>
  );
};

export default Intro;
