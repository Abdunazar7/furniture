import React from "react";
import {
  FooterWrapper,
  FooterWrapper2,
  FooterLogo,
  FooterVK,
  Footer_div2,
} from "./Footer.styled";

import PaymentLogos from "../../assets/payments.png";
import { VK } from "../../components";

function Footer(props) {
  return (
    <FooterWrapper>
      <div className="container">
        <FooterWrapper2>
          <FooterLogo>
            <img src="/logo-foot.svg" alt="Logo Footer" />
            <a className="a1">8 (800) 890-46-56</a>

            <img src={PaymentLogos} alt="Payments" />

            <a className="a2" href="/">
              Политика конфидециальности
            </a>
            <a href="/">Пользовательское соглашение</a>
            <FooterVK>
              <VK />
              <VK />
              <VK />
            </FooterVK>
          </FooterLogo>
          <div>
            <h1>Покупателям</h1>
            <div>
              <p>О компании</p>
              <p>Доставка и оплата</p>
              <p>Возврат</p>
              <p>Гарантии</p>
              <p>Контакты</p>
              <p>Блог</p>
            </div>
          </div>
          <div>
            <h1>Товары</h1>
            <Footer_div2>
              <div>
                <p>Люстры</p>
                <p>Светильники</p>
                <p>Бра</p>
                <p>Торшеры</p>
                <p>Комплектуюшие</p>
                <p>Настольные лампы</p>
              </div>
              <div>
                <p>Споты</p>
                <p>Трековые светильники</p>
                <p>Уличные светильники</p>
                <p>Технические светильники</p>
                <p>Светодиодные ленты</p>
              </div>
            </Footer_div2>
          </div>
        </FooterWrapper2>
      </div>
    </FooterWrapper>
  );
}

export default Footer;
