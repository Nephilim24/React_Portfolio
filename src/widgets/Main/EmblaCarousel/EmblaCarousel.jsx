import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import EmblaButtons from "./EmblaButtons";
import "./EmblaCarousel.scss";

import Auto from "../../../assets/images/Auto.png";
import OldPortfolio from "../../../assets/images/AboutMe.png";
import BoulevardMarket from "../../../assets/images/BoulevardMarket.png";
import Createx from "../../../assets/images/Createx.png";
import GoTrip from "../../../assets/images/GoTrip.png";
import Grayson from "../../../assets/images/Grayson.png";
import Nike from "../../../assets/images/Nike.png";
import NoteApp from "../../../assets/images/NoteApp.png";
import SilverHouse from "../../../assets/images/SilverHouse.png";
import TheNewsWeb from "../../../assets/images/TheNewsWeb.png";

export function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    skipSnaps: true,
    slidesToScroll: 3,
  });

  const projects = [
    { name: "Auto", img: Auto, link: "https://nephilim24.github.io/Auto/" },
    {
      name: "Createx",
      img: Createx,
      link: "https://nephilim24.github.io/Createx/",
    },
    {
      name: "Grayson",
      img: Grayson,
      link: "https://nephilim24.github.io/Grayson/",
    },
    {
      name: "Note App",
      img: NoteApp,
      link: "https://note-app-nu-tan.vercel.app/",
    },
    {
      name: "Old Portfolio",
      img: OldPortfolio,
      link: "https://nephilim24.github.io/about_me",
    },
    {
      name: "Boulevard Market",
      img: BoulevardMarket,
      link: "https://nephilim24.github.io/Boulevard_Market/",
    },
    {
      name: "Go Trip",
      img: GoTrip,
      link: "https://nephilim24.github.io/GoTrip/",
    },
    { name: "Nike", img: Nike, link: "https://nephilim24.github.io/Nike/" },
    {
      name: "Silver House",
      img: SilverHouse,
      link: "https://nephilim24.github.io/Silver_House/",
    },
    {
      name: "The News Web",
      img: TheNewsWeb,
      link: "https://nephilim24.github.io/TheNewsWeb/",
    },
  ];

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {projects.map((project, index) => (
          <div className="embla__slide" key={index}>
            <div className="embla__slide-content">
              <a href={project.link} target="_blank">
                <img src={project.img} alt={project.name} />
                <p className="embla__slide-title">
                  <svg
                    width="20"
                    height="10"
                    viewBox="0 0 20 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.2 1H14.6C15.1253 1 15.6454 1.10346 16.1307 1.30448C16.616 1.5055 17.057 1.80014 17.4284 2.17157C17.7999 2.54301 18.0945 2.98396 18.2955 3.46927C18.4965 3.95457 18.6 4.47471 18.6 5C18.6 5.52529 18.4965 6.04543 18.2955 6.53073C18.0945 7.01604 17.7999 7.45699 17.4284 7.82843C17.057 8.19986 16.616 8.4945 16.1307 8.69552C15.6454 8.89654 15.1253 9 14.6 9H12.2M7.4 9H5C4.47471 9 3.95457 8.89654 3.46927 8.69552C2.98396 8.4945 2.54301 8.19986 2.17157 7.82843C1.42143 7.07828 1 6.06087 1 5C1 3.93913 1.42143 2.92172 2.17157 2.17157C2.92172 1.42143 3.93913 1 5 1H7.4"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.60001 5H13"
                      stroke="white"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  {project.name}
                </p>
              </a>
            </div>
          </div>
        ))}
      </div>
      <EmblaButtons emblaApi={emblaApi} />
    </div>
  );
}

export default EmblaCarousel;
