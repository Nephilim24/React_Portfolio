import DarkThemeIcon from "./DarkThemeIcon.jsx";
import LightThemeIcon from "./LightThemeIcon.jsx";
import { useState, useEffect } from "react";
import "./ThemeToggle.scss";
const ThemeToggle = () => {
  // По умолчанию тема - тёмная
  const [theme, setTheme] = useState("dark");

  // При монтировании читаем тему из loaclStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("saved-theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.body.classList.toggle("light-theme", savedTheme === "light");
    } else {
      document.body.classList.toggle("light-theme", theme === "light");
    }
  }, []);

  // При изменении theme обновляем body и localStorage
  useEffect(() => {
    if (theme === "light") {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
    localStorage.setItem("saved-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <button onClick={toggleTheme} className="theme-btn">
      {theme === "dark" ? <LightThemeIcon /> : <DarkThemeIcon />}
    </button>
  );
};

export default ThemeToggle;
