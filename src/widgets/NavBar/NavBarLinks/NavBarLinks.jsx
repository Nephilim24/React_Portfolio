import "./NavBarLinks.scss";

const NavBarLinks = ({ isMenuOpen, desktop, mobile }) => {
  const links = [
    { text: "Обо мне", id: "about" },
    { text: "Проекты", id: "projects" },
    { text: "Мой стек", id: "skills" },
    { text: "Связаться со мной", id: "contact" },
  ];

  let className = "nav__list";
  if (desktop) className += " nav__list--desktop";
  if (mobile) className += " nav__list--mobile" + (isMenuOpen ? " opened" : "");

  return (
    <ul className={className}>
      {/* Запускаю цикл map по массиву объектов links */}
      {links.map((link, index) => (
        // Создаётся столько <li></li>, сколько элементов в массиве links. У каждого ключ, это индекс массива.
        <li key={index}>
          <button
            className="nav__list-link"
            onClick={() => {
              // При клике создаётся переменная, которая находит элемент с id из массива объектов links с ключом id, а затем скролит до него
              const anchor = document.getElementById(link.id);
              // scrollIntoView() скроллит до видимости определённого элемента. Например до секции с id about, то есть "Обо мне".
              anchor.scrollIntoView({
                // В фигурных скобах переданы параметры:
                // behavior со значением "smooth" отвечает за плавную анимацию скролла
                //  Параметр block отвечает за то, до откуда надо скроллить относительно блока. В данном случае center, то есть до центра блока.
                behavior: "smooth",
                block: "center",
              });
            }}
          >
            {link.text}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default NavBarLinks;
