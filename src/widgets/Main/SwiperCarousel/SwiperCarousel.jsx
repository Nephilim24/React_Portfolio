import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/scss";
import "./SwiperCarousel.scss";
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

const SwiperCarousel = () => {
  const [swiper, setSwiper] = useState(null);

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
    <>
      <Swiper
        spaceBetween={40}
        slidesPerView={3}
        navigation={false}
        modules={[Navigation]}
        onSwiper={setSwiper}
        speed={650}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          998: { slidesPerView: 3, spaceBetween: 40 },
        }}
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <a href={project.link} target="_blank">
              <img src={project.img} alt={project.name} />
              <p>
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
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-actions">
        <div
          className="swiper-button-prev"
          onClick={() => swiper && swiper.slidePrev()}
        >
          <svg width="36px" height="36px" viewBox="0 0 532 532">
            <path
              fill=""
              d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"
            ></path>
          </svg>
        </div>
        <div
          className="swiper-button-next"
          onClick={() => swiper && swiper.slideNext()}
        >
          <svg width="36px" height="36px" viewBox="0 0 532 532">
            <path
              fill=""
              d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
};

export default SwiperCarousel;
