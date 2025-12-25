import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { BrandCard, BrandsSection } from "./BrandsCatalog.styled.js";

import brand1 from "../../assets/brands/brand1.svg";
import brand2 from "../../assets/brands/brand2.svg";
import brand3 from "../../assets/brands/brand3.svg";
import { Left, Right } from "../icons/index.js";

const brandsList = [brand1, brand2, brand3, brand1, brand2, brand3];

function BrandsCalatog() {
  const swiperRef = useRef(null);

  return (
    <BrandsSection>
      <div className="brands-header">
        <h2>Только проверенные бренды</h2>
        <div className="arrows">

          <button onClick={() => swiperRef.current?.slidePrev()}>
            <Left />
          </button>
          <button onClick={() => swiperRef.current?.slideNext()}>
            <Right />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        spaceBetween={20}
        slidesPerView={5} 
        breakpoints={{
          320: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 5 },
        }}
        className="brands-slider"
      >
        {brandsList.map((brand, i) => (
          <SwiperSlide key={i}>
            <BrandCard>
              <img src={brand} alt={`brand-${i}`} />
            </BrandCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </BrandsSection>
  );
}

export default BrandsCalatog;
