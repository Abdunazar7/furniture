import React from "react";
import { RightArr } from "../../components";
import * as S from "./DeliveryAndPayment.styled";
import { useAppNavigation } from "../../hooks/useAppNavigation";

function DeliveryAndPayment() {
  const { goToHome } = useAppNavigation();

  return (
    <S.PageWrapper>
      <div className="container">
        <nav
          className="navigate"
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginBottom: "40px",
          }}
        >
          <p
            onClick={goToHome}
            style={{ color: "#808080", cursor: "pointer", fontSize: "14px" }}
          >
            Главная
          </p>
          <RightArr />
          <span style={{ fontSize: "14px", fontWeight: "500" }}>
            Доставка и оплата
          </span>
        </nav>

        <S.MainContent>
          <S.TitleSide>
            <h1>Доставка и оплата</h1>
          </S.TitleSide>

          <S.TextSide>
            <S.InfoSection>
              <h2>Доставка</h2>
              <p>
                Мы осуществляем доставку со склада по Москве и Московской
                области собственной курьерской службой. Транспортными компаниями
                нашу продукцию мы доставляем по всей территории РФ, а также по
                всем странам СНГ.
                <br />
                <a href="#">Сроки доставки: 4—6 недель</a>
              </p>
            </S.InfoSection>

            <S.InfoSection>
              <h2>Курьерская доставка</h2>
              <p>
                БЕСПЛАТНО доставим в пределах МКАД любой заказ от 5 000 ₽.
                Заказы свыше 30 000 ₽ имеют бесплатную доставку включительно в
                15 км от МКАД.
              </p>
            </S.InfoSection>

            <S.InfoSection>
              <h2>Самовывоз</h2>
              <p>
                Любой заказ можно забрать самостоятельно по адресу: <br />
                <strong>г. Москва, Дмитровское шоссе д.100с2</strong>
              </p>
            </S.InfoSection>
          </S.TextSide>
        </S.MainContent>
      </div>

      <S.MapContainer>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2239.382029983931!2d37.5450849!3d55.882194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b53796f6007e99%3A0x6e2697818987258!2sDmitrovskoye%20Shosse%2C%20100%2C%20Moskva%2C%20Russia%2C%20127247!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
          title="Nornlight Location"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </S.MapContainer>
    </S.PageWrapper>
  );
}

export default DeliveryAndPayment;
