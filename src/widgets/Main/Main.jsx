import "./Main.scss";
import Info from "./Intro/Intro.jsx";
import Line from "../Reuse/Line/Line.jsx";
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
