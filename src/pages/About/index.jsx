import React from "react";
import * as S from "./About.styled";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { RightArr } from "../../components";
import BrandCatalog from "../../components/BrandsCatalog";
import Houses from "../../components/Houses";

function About() {
  const { goToHome } = useAppNavigation();

  return (
    <S.AboutWrapper>
      <nav
        className="navigate"
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
          marginBottom: "40px",
          marginTop: "40px",
        }}
      >
        <p
          onClick={goToHome}
          style={{ color: "#808080", cursor: "pointer", fontSize: "14px" }}
        >
          Главная
        </p>
        <RightArr />
        <span style={{ fontSize: "14px", fontWeight: "500" }}>О компании</span>
      </nav>
      <S.Task>
        <div className="left_side">
          <h1>О компании</h1>

          <div className="task1">
            <p>170+ </p>
            <p className="task2">Товаров</p>
          </div>

          <div className="task1">
            <p>1000+ </p>
            <p className="task2">Довольных покупателей</p>
          </div>

          <div className="task1">
            <p>170+ </p>
            <p className="task2">Товаров</p>
          </div>
        </div>

        <div className="text_p">
          <p>
            Интернет-магазин NORNLIGHT предлагает широкий ассортимент
            светильников для освещения вашего дома или офиса. У нас вы найдете
            разнообразные модели светильников, от современных и стильных до
            классических и элегантных.
          </p>
          <p>
            Мы предлагаем качественные и надежные светильники от лучших
            производителей, которые подарят вам комфорт и уют. Покупая
            светильники в нашем интернет-магазине, вы получаете отличное
            соотношение цены и качества.
          </p>
          <p>
            Мы осуществляем доставку по всей России, чтобы каждый клиент мог
            насладиться прекрасным светом и удобством покупки онлайн. Обратитесь
            к нам сегодня и превратите ваш дом в оазис тепла и света с
            NORNLIGHT!
          </p>
        </div>
      </S.Task>
      {/* Brendlar va boshqa komponentlar */}
      <BrandCatalog />
      <Houses />
    </S.AboutWrapper>
  );
}

export default About;
