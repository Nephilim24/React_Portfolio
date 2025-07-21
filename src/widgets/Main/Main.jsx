import React from "react";
import Info from "./Info/Info.jsx";
import Line from "../Main/Line/Line.jsx";
import "./Main.scss";
import About from "./About/About.jsx";

const Main = () => {
  return (
    <main>
      <Info />
      <Line />
      <About />
      <Line />
    </main>
  );
};

export default Main;
