import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import hero from "../../assets/hero.png";
import { HomeWrapper, SlideCard } from "./Home.styled";

// Boshqa komponentlar
import Hauses1 from "../../components/Houses";
import Text from "../../components/Text";
import Lamp from "../../components/Lamp";
import NornLight from "../../components/NornLight";
import Brands from "../../components/Brands";
import CatalogHome from "../../components/CatalogHome";

function Home() {
  const slidesData = [
    {
      id: 1,
      title: ["Скидка 15%", "на все подвесные", "светильники"],
      badge: "до 5 февраля",
      image: hero,
    },
    {
      id: 3,
      title: ["Скидка 15%", "на все подвесные", "светильники"],
      badge: "до 5 февраля",
      image: hero,
    },
    {
      id: 2,
      title: ["Скидка 15%", "на все подвесные", "светильники"],
      badge: "до 5 февраля",
      image: hero,
    },
  ];

  return (
    <HomeWrapper>
      <div className="home-container">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 8000, disableOnInteraction: false }}
          grabCursor={true}
          loop={true}
          className="hero-swiper"
        >
          {slidesData.map((item) => (
            <SwiperSlide key={item.id}>
              <SlideCard>
                <div className="text-content">
                  {item.title.map((line, index) => (
                    <h1 key={index}>{line}</h1>
                  ))}
                  <div className="badge">{item.badge}</div>
                </div>
                <div className="image-wrapper">
                  <img src={item.image} alt="Lamp" />
                </div>
              </SlideCard>
            </SwiperSlide>
          ))}
        </Swiper>

        <CatalogHome />
        <NornLight />
        <Lamp />
        <Brands />
        <Hauses1 />
        <Text />
      </div>
    </HomeWrapper>
  );
}

export default Home;
