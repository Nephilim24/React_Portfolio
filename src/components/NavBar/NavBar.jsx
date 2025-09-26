import { useEffect, useState } from "react";
import "./NavBar.scss";
import NavBarLinks from "./NavBarLinks/NavBarLinks.jsx";
import NavBarLogo from "./NavBarLogo/NavBarLogo.jsx";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Функция очистки для удаления слушателя событий при размонтировании компонента
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={isScrolled ? "scrolled" : ""}>
        <nav className="nav container">
          <button
            className="logo"
            onClick={() => window.scroll({ top: 0, behavior: "smooth" })}
          >
            <NavBarLogo />
            <span>Nephilim</span>
          </button>
          {/* Десктопный список */}
          <NavBarLinks desktop />
          <button
            className={
              isAnimated ? "burger__menu opening" : "burger__menu closing"
            }
            onClick={() => {
              setIsAnimated(!isAnimated);
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            <span className="burger__menu-line"></span>
            <span className="burger__menu-line"></span>
            <span className="burger__menu-line"></span>
          </button>
        </nav>
      </header>
      {/* Мобильный список */}
      <NavBarLinks isMenuOpen={isMenuOpen} mobile />
    </>
  );
};

export default NavBar;
