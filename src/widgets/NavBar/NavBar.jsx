import { useEffect, useState } from "react";
import "./NavBar.scss";
import NavBarLinks from "./NavBarLinks/NavBarLinks.jsx";
import NavBarLogo from "./NavBarLogo/NavBarLogo.jsx";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuToggled, setIsMenuToggled] = useState(false);
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
    <header className={isScrolled ? "scrolled" : ""}>
      <nav className="nav container">
        <a className="logo" href="#">
          <NavBarLogo />
          <span>Nephilim</span>
        </a>
        <NavBarLinks isMenuToggled={isMenuToggled} />
        <a
          href
          className={isAnimated ? "burger__menu opening" : "burger__menu closing"}
          onClick={() => {
            setIsAnimated(!isAnimated);
            if (isMenuToggled) {
              setIsMenuToggled(!isMenuToggled);
            } else {
              setTimeout(() => setIsMenuToggled(!isMenuToggled), 710);
            }
          }}
        >
          <span className="burger__menu-line"></span>
          <span className="burger__menu-line"></span>
          <span className="burger__menu-line"></span>
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
