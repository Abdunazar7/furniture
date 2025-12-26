import React, { useState } from "react";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import {
  RightArr,
  HeartIcon,
  OKIcon,
  WkIcon,
  TelegramIcon,
  TelIcon,
  TelIcon2,
} from "../../components";

import product from "../../assets/product.png";

import { DetailWrapper } from "./Detail.styled";

function ProductDetail() {
  const { goToHome, goToCatalog } = useAppNavigation();
  const [quantity, setQuantity] = useState(1);

  const specsData = [
    { label: "Цвет", value: "Желтый" },
    { label: "Год", value: "2016" },
    { label: "Диаметр колеса", value: "27.5" },
    { label: "Материал рамы", value: "Карбон" },
    { label: "Размер", value: "L" },
    { label: "Страна", value: "Швейцария" },
    { label: "Производитель", value: "Scott" },
    {
      label: "Покрышки",
      value:
        "Schwalbe Rocket Ron EVO / 2.1 127EPI Kevlar Bead Tubeless Easy / PaceStar compound",
    },
    {
      label: "Рама",
      value:
        "Scale Carbon / HMX-технология / технология IMP / Коническая рулевая труба / BB92 / Технология SDS / Дропауты IDS SL",
    },
    {
      label: "Подседельный Штырь",
      value:
        "Ritchey WCS 700 Series: Carbon Link FlexiLogic / 31.6mm 900 Series: Carbon 2B SDS / 34.9mm",
    },
    { label: "Седло", value: "Ritchey WCS Stream V3 Titanium rails" },
    {
      label: "Вилка",
      value:
        "Rock Shox SID RL3 Air / демпфер DNA3 3 режима / 15mm QR axle / коническая рулевая труба / Удаленная блокировка / регулировка отскока / ход 100mm",
    },
  ];

  return (
    <DetailWrapper>
      <div className="container">
        <nav className="navigate">
          <p onClick={goToHome}>Главная</p>
          <RightArr />
          <p onClick={goToCatalog}>Каталог</p>
          <RightArr />
          <span>Встраиваемый светильник Novotech</span>
        </nav>

        <div className="hero-section">
          <div className="image-container">
            <img src={product} alt="Novotech Lamp" />
          </div>

          <div className="info-container">
            <h1>Встраиваемый светильник Novotech</h1>

            <div className="meta-row">
              <div className="article-info">
                <span>Scott</span>
                <b>Артикул : 7655 188</b>
              </div>
              <div className="social-share">
                <OKIcon />
                <WkIcon />
                <TelegramIcon />
                <TelIcon />
                <TelIcon2 />
              </div>
            </div>

            <div className="stock-tag">В наличии</div>

            <div className="price-box">
              <span className="main-price">435 000 ₽</span>
              <span className="old-price">522 000 ₽</span>
            </div>

            <p className="product-description">
              Профессиональный линейный карданный для красок самого высокого
              уровня мирового и Кубка Мира. Одна из самых низких рам среди
              гоночных хардтейлов для кросс-кантри.
            </p>

            <div className="purchase-area">
              <div className="counter-group">
                <button
                  onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                >
                  −
                </button>
                <input type="text" value={quantity} readOnly />
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button className="add-to-cart">В корзину</button>
              <button className="wish-btn">
                <HeartIcon />
              </button>
            </div>
          </div>
        </div>

        <div className="specs-section">
          <h2>Характеристика</h2>
          <div className="specs-table">
            {specsData.map((spec, index) => (
              <div className="spec-row" key={index}>
                <div className="label">{spec.label}</div>
                <div className="value">{spec.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DetailWrapper>
  );
}

export default ProductDetail;
