import React from "react";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import hero_lamp from "../../assets/hero-lamp.svg";
import {
  HomePage,
  Homes,
  Katalog,
  CatalogGrid,
  CatalogCard,
  WhySection,
  WhyGrid,
  WhyCard,
  ProductsGrid,
  ProductCard,
  BrandsSection,
  BrandCard,
  CatalogUy,
} from "./Home.styled";
import { Karzinka, Left, Right, Strelka, Strelka1 } from "../../components";

// Rasmlar importi
import a1 from "../../assets/chandeliers/a1.svg";
import a2 from "../../assets/chandeliers/a2.svg";
import a3 from "../../assets/chandeliers/a3.svg";
import a4 from "../../assets/chandeliers/a4.svg";
import a5 from "../../assets/chandeliers/a5.svg";
import a6 from "../../assets/chandeliers/a6.svg";
import icon1 from "../../assets/rasim_2/icon1.svg";
import icon2 from "../../assets/rasim_2/icon2.svg";
import icon3 from "../../assets/rasim_2/icon3.svg";
import icon4 from "../../assets/rasim_2/icon4.svg";

import product1 from "../../assets/lamp-product.svg";
import yurakcha from "../../assets/yurakcha.svg";

import brand1 from "../../components/icons/Brands/brand1.svg";
import brand2 from "../../components/icons/Brands/brand2.svg";
import brand3 from "../../components/icons/Brands/brand3.svg";

import uy1 from "../../assets/rasim_3/uy1.png";
import uy2 from "../../assets/rasim_3/uy2.png";
import uy3 from "../../assets/rasim_3/uy3.png";

function Home() {
  const { goToAbout, goToPopular, goToBlog } = useAppNavigation();

  const products = [
    {
      id: 1,
      name: "Встраиваемый светильник Novotech",
      price: "6 399₽",
      image: product1,
    },
    {
      id: 2,
      name: "Встраиваемый светильник Novotech",
      price: "6 399₽",
      image: product1,
    },
    {
      id: 3,
      name: "Встраиваемый светильник Novotech",
      price: "6 399₽",
      image: product1,
    },
    {
      id: 4,
      name: "Встраиваемый светильник Novotech",
      price: "6 399₽",
      image: product1,
    },
    {
      id: 5,
      name: "Встраиваемый светильник Novotech",
      price: "6 399₽",
      image: product1,
    },
    {
      id: 6,
      name: "Встраиваемый светильник Novotech",
      price: "6 399₽",
      image: product1,
    },
    {
      id: 7,
      name: "Встраиваемый светильник Novotech",
      price: "6 399₽",
      image: product1,
    },
    {
      id: 8,
      name: "Встраиваемый светильник Novotech",
      price: "6 399₽",
      image: product1,
    },
  ];

  return (
    <Homes>
      <div className="controller">
        <HomePage>
          <div className="Home_div">
            <p>Скидка 15%</p>
            <p>на все подвесные</p>
            <p>светильники</p>
            <p className="Home_color">до 5 февраля</p>
          </div>
          <div className="Home_img">
            <img src={hero_lamp} alt="Hero lamp" />
          </div>
        </HomePage>

        <Katalog>
          <h1>Каталог</h1>
          <div
            className="Home_strelka"
            onClick={() => {}}
            style={{ cursor: "pointer" }}
          >
            <button>Весь каталог</button>
            <Strelka />
          </div>
        </Katalog>

        <CatalogGrid>
          {[a1, a2, a3, a4, a5, a6].map((img, index) => (
            <CatalogCard key={index}>
              <p className="title">
                {
                  [
                    "Люстры",
                    "Светильники",
                    "Бра",
                    "Торшеры",
                    "Настольные лампы",
                    "Споты",
                  ][index]
                }
              </p>
              <img src={img} alt="Catalog item" />
              <span>От 540₽ →</span>
            </CatalogCard>
          ))}
        </CatalogGrid>

        <WhySection>
          <div className="header">
            <h2>Почему NORNLIGHT?</h2>
            <button onClick={goToAbout}>
              О компании <Strelka />
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
              <p>Доставляем по всей РФ за 1-10 дней</p>
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
          <div className="header">
            <h2>Популярные товары</h2>
            <button onClick={goToPopular}>
              Все товары <Strelka />
            </button>
          </div>
        </WhySection>

        <ProductsGrid>
          {products.map((product) => (
            <ProductCard key={product.id}>
              <div className="product-yurakcha">
                <img src={yurakcha} alt="" />
              </div>
              <div className="product-img">
                <img src={product.image} alt={product.name} />
              </div>

              <p>{product.name}</p>
              <span className="category">7 000₽</span>

              <div className="product-bottom">
                <span className="price">{product.price}</span>
                <button className="cart-btn">
                  <Karzinka />
                </button>
              </div>
            </ProductCard>
          ))}
        </ProductsGrid>

        <BrandsSection>
          <div className="brands-header">
            <h2>Только проверенные бренды</h2>
            <div className="arrows">
              <button>
                <Left />
              </button>
              <button>
                <Right />
              </button>
            </div>
          </div>
          <div className="brands-grid">
            {[brand1, brand2, brand3, brand1].map((b, i) => (
              <BrandCard key={i}>
                <img src={b} alt="brand" />
              </BrandCard>
            ))}
          </div>
        </BrandsSection>

        <WhySection style={{ marginTop: "100px" }}>
          <div className="header">
            <h2>Блог</h2>
            <button onClick={goToBlog}>
              {" "}
              Перейти в блог <Strelka />
            </button>
          </div>
        </WhySection>

        <CatalogUy>
          <div>
            <img src={uy1} alt="" />
            <div className="Catalog">
              <p>Как правильно освещать дом снаружи?</p>
              <Strelka1 />
            </div>
            <span>01.01.2024</span>
          </div>
        </CatalogUy>
      </div>
    </Homes>
  );
}

export default Home;
