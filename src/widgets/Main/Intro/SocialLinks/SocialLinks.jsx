import "./SocialLinks.scss";
import SocialIcon from "./SocialIcon.jsx";

const SocialLinks = ({ fill }) => {
  const socialLinks = [
    { icon: "telegram", url: "https://t.me/The_Herald_of_the_Arcane" },
    { icon: "github", url: "https://github.com/Nephilim24" },
    { icon: "kwork", url: "https://kwork.ru/user/nephilim976" },
  ];
  return (
    <ul className="intro__actions-list">
      {socialLinks.map((link, index) => (
        <li key={index}>
          <a href={link.url} target="_blank">
            <SocialIcon icon={link.icon} fill={fill} />
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SocialLinks;
