import Title from "../../Reuse/Title/Title.jsx";
import Descr from "../../Reuse/Descr/Descr.jsx";
import "./Projects.scss";
import Swiper from "../SwiperCarousel/SwiperCarousel.jsx";

const Projects = () => {
  return (
    <section className="projects">
      <div className="projects__content container">
        <Title>
          Мои <span>проекты</span>
        </Title>
        <Descr className="projects__description">
          Здесь я представляю свои веб-проекты, над которыми работал. Каждый из
          них демонстрирует мои навыки и подход к разработке. Вы можете
          ознакомиться с ними ниже.
        </Descr>
        <Swiper />
      </div>
    </section>
  );
};

export default Projects;
