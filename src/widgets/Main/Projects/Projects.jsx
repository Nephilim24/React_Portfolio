import Title from "../Title/Title.jsx";
import Descr from "../Descr/Descr.jsx";
import EmblaCarousel from "../EmblaCarousel/EmblaCarousel.jsx";
import "./Projects.scss";

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
        <EmblaCarousel />
      </div>
    </section>
  );
};

export default Projects;
