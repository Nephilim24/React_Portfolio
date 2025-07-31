import "./Main.scss";
import Info from "./Info/Info.jsx";
import Line from "../Main/Line/Line.jsx";
import About from "./About/About.jsx";
import Projects from "./Projects/Projects.jsx";
import Skills from "./Skills/Skills.jsx";

const Main = () => {
  return (
    <main>
      <Info />
      <Line />
      <About />
      <Line />
      <Projects />
      <Line />
      <Skills />
      <Line />
    </main>
  );
};

export default Main;
