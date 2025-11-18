import "./About.scss";
import secondPortrait from "../../../assets/images/second-portrait.webp";
import aboutRectangleGreen from "../../../assets/icons/about-rectangle-green.png";
import Title from "../../Reuse/Title/Title";
import Descr from "../../Reuse/Descr/Descr.jsx";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about__content container">
        <div className="about__visual">
          <div className="about__visual-images">
            <img
              className="about__visual-portrait"
              src={secondPortrait}
              alt=""
            />
            {/* <img className="about__visual-rectangle" src={aboutRectangle} alt="" /> */}
            <img
              className="about__visual-rectangle-green"
              src={aboutRectangleGreen}
              alt="" loading="lazy"
            />
          </div>
          {/* <img className="about__visual-circle" src={aboutCircle} alt="" /> */}
          <svg
            className="about__visual-circle"
            width="232"
            height="232"
            viewBox="0 0 232 232"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="116.202"
              cy="116.347"
              r="115.661"
              transform="rotate(-90 116.202 116.347)"
              fill="url(#paint0_linear_23_45)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_23_45"
                x1="473.027"
                y1="-267.548"
                x2="59.6017"
                y2="144.647"
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
          {/* <img
            className="about__visual-small-circle"
            src={aboutSmallCircle}
            alt=""
          /> */}
          <svg
            className="about__visual-small-circle"
            width="156"
            height="156"
            viewBox="0 0 156 156"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="77.9893"
              cy="77.9296"
              r="77.1136"
              transform="rotate(176.252 77.9893 77.9296)"
              fill="url(#paint0_linear_23_46)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_23_46"
                x1="315.893"
                y1="-178.022"
                x2="40.2528"
                y2="96.7978"
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
        </div>
        <div className="about__text">
          <Title>
            Обо <span>мне</span>
          </Title>
          <Descr>
            Привет! Я начинающий веб-разработчик, самоучка. В данный момент
            активно осваиваю библиотеку React. Стараюсь не просто
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
