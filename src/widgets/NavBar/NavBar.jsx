import "./NavBar.scss";
import NavBarLinks from "./NavBarLinks/NavBarLinks.jsx";
import NavBarLogo from "./NavBarLogo/NavBarLogo.jsx";

const NavBar = () => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      document.querySelector("header").classList.add("scrolled");
    } else {
      document.querySelector("header").classList.remove("scrolled");
    }
  });

  return (
    <header className="header">
      <nav className="nav container">
        <a className="logo" href="#">
          <NavBarLogo />
          <span>Nephilim</span>
        </a>
        <NavBarLinks />
        <a
          href
          className="burger__menu"
          onClick={() => {
            document.querySelector(".nav__list").classList.toggle("active");
            document.querySelector(".burger__menu").classList.toggle("active");
          }}
        >
          <span className="burger__menu-line"></span>
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
