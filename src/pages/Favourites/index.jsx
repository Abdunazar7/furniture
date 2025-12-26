import React from "react";
import { RightArr, HeartIcon, Karzinka } from "../../components";
import * as S from "./Favourites.styled";

import product from "../../assets/product.png";


const Favourites = () => {
  const favProducts = [
    {
      id: 1,
      name: "Встраиваемый светильник Novotech",
      price: "6 399 ₽",
      oldPrice: "7 000 ₽",
      img: product,
    },
    {
      id: 2,
      name: "Встраиваемый светильник Novotech",
      price: "6 399 ₽",
      oldPrice: "7 000 ₽",
      img: product,
    },
    {
      id: 3,
      name: "Встраиваемый светильник Novotech",
      price: "6 399 ₽",
      oldPrice: "7 000 ₽",
      img: product,
    },
    {
      id: 4,
      name: "Встраиваемый светильник Novotech",
      price: "6 399 ₽",
      oldPrice: "7 000 ₽",
      img: product,
    },
  ];

  return (
    <S.FavouritesWrapper>
      <div className="container">
        <nav
          style={{
            display: "flex",
            gap: "8px",
            marginBottom: "40px",
            alignItems: "center",
          }}
        >
          <span style={{ color: "#808080", fontSize: "14px" }}>Главная</span>
          <RightArr />
          <span style={{ color: "#111", fontSize: "14px" }}>
            Избранные товары
          </span>
        </nav>

        <S.FavHeader>
          <h1>Избранные товары</h1>
          <div className="count-badge">{favProducts.length}</div>
        </S.FavHeader>

        <S.FavGrid>
          {favProducts.map((item) => (
            <S.ProductCard key={item.id}>
              <div className="heart-icon">
                <HeartIcon filled={true} />
              </div>
              <div className="img-box">
                <img src={item.img} alt={item.name} />
              </div>
              <h3>{item.name}</h3>
              <div className="price-row">
                <div className="prices">
                  <span className="old-price">{item.oldPrice}</span>
                  <span className="current-price">{item.price}</span>
                </div>
                <button className="cart-btn">
                  <Karzinka color="white" />
                </button>
              </div>
            </S.ProductCard>
          ))}
        </S.FavGrid>
      </div>
    </S.FavouritesWrapper>
  );
};

export default Favourites;
