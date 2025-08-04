import "./Main.scss";
import Info from "./Info/Info.jsx";
import Line from "../Main/Line/Line.jsx";
import About from "./About/About.jsx";
import Projects from "./Projects/Projects.jsx";
import Skills from "./Skills/Skills.jsx";
import Contact from "./Contact/Contact.jsx";

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
      <Contact />
    </main>
  );
};

export default Main;
