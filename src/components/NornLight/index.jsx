import React from "react";
import { WhyCard, WhyGrid, WhySection } from "./NornLight.styled";
import { UpArr } from "../icons";
import { useAppNavigation } from "../../hooks/useAppNavigation";

import icon1 from "../../assets/whyIcons/icon1.svg";
import icon2 from "../../assets/whyIcons/icon2.svg";
import icon3 from "../../assets/whyIcons/icon3.svg";
import icon4 from "../../assets/whyIcons/icon4.svg";

function NornLight() {
  const { goToAbout, goToAllProducts } = useAppNavigation();

  return (
    <div>
      <WhySection>
        <div className="sectionHeader">
          <h2>Почему NORNLIGHT?</h2>
          <button onClick={goToAbout}>
            О компании <UpArr />
          </button>
        </div>

        <WhyGrid>
          <WhyCard>
            <div className="icon">
              <img src={icon1} alt="" />
            </div>
            <h3>Только проверенные бренды</h3>
            <p>Бренды, проверенные временем и качеством</p>
          </WhyCard>

          <WhyCard>
            <div className="icon">
              <img src={icon2} alt="" />
            </div>
            <h3>Самые низкие цены</h3>
            <p>Ниже некуда, мы гарантируем лучшую цену</p>
          </WhyCard>

          <WhyCard>
            <div className="icon">
              <img src={icon3} alt="" />
            </div>
            <h3>Быстрая доставка</h3>
            <p>Доставляем по всей РФ за 1–10 дней</p>
          </WhyCard>

          <WhyCard>
            <div className="icon">
              <img src={icon4} alt="" />
            </div>
            <h3>Большой ассортимент</h3>
            <p>Более 1000 товаров на любой вкус</p>
          </WhyCard>
        </WhyGrid>
      </WhySection>

      <WhySection>
        <div className="sectionHeader">
          <h2>Популярные товары</h2>
          <button onClick={goToAllProducts}>
            Все товары <UpArr />
          </button>
        </div>
      </WhySection>
    </div>
  );
}

export default NornLight;
