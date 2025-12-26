import React from "react";
import { RightArr } from "../../components";
import * as S from "./Contacts.styled";
import { useAppNavigation } from "../../hooks/useAppNavigation";


const Contacts = () => {
  const { goToHome } = useAppNavigation();
  return (
    <S.ContactsWrapper>
      <div className="container">
        <nav
          className="navigate"
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "40px",
            alignItems: "center",
          }}
        >
          <p onClick={goToHome} style={{ color: "#808080", cursor: "pointer" }}>
            Главная
          </p>
          <RightArr />
          <span>Контакты</span>
        </nav>

        <S.ContactHeader>
          <h1>Контакты</h1>
          <div className="phone-info">
            <h3>8 (800) 890-46-56</h3>
            <p>
              Пн-Пт: 10:00 до 19:00
              <br />
              Сб-Вс: заказ через корзину
              <br />
              Телефоны:
            </p>
          </div>
        </S.ContactHeader>
      </div>

      <S.MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.1463124116035!2d37.54141661594165!3d55.86016198054086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b5379059739569%3A0xc3f837943c51804b!2z0JTQvNC40YLRgNC-0LLRgdC60L7QtSDRiC4sIDEwMGMyLCDQnNC-0YHQutCy0LAsIDEyNzI0Nw!5e0!3m2!1sru!2sru!4v1670000000000!5m2!1sru!2sru"
          title="NornLight Location"
          loading="lazy"
        ></iframe>

        <S.InfoFloatingCard>
          <div className="info-item">
            <span>Адрес магазина</span>
            <p>г. Москва, Дмитровское шоссе д.100с2</p>
          </div>

          <div className="info-item">
            <span>Почта</span>
            <p>NORNLIGHT@mail.ru</p>
          </div>

          <div className="info-item">
            <span>Телефон</span>
            <p>8 (800) 890-46-56</p>
          </div>

          <button className="submit-btn">Оставить заявку</button>
        </S.InfoFloatingCard>
      </S.MapContainer>
    </S.ContactsWrapper>
  );
};

export default Contacts;
