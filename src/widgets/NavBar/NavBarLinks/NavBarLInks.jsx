import "./NavbarLinks.scss";

const NavBarLInks = ({ menuToggled }) => {
  const links = [
    { text: "Обо мне", href: "#about" },
    { text: "Проекты", href: "#projects" },
    { text: "Мой стек", href: "#stack" },
    { text: "Связаться со мной", href: "#contact" },
  ];

  return (
    <ul className={menuToggled ? "nav__list toggled" : "nav__list"}>
      {links.map((link, index) => (
        <li key={index}>
          <a className="nav__list-link" href={link.href}>
            {link.text}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default NavBarLInks;
