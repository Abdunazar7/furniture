import React from "react";
import { RightArr } from "../../components";
import * as S from "./Return.styled";
import { useAppNavigation } from "../../hooks/useAppNavigation";

function ReturnConditions() {
  const { goToHome } = useAppNavigation();

  return (
    <S.ReturnPageWrapper>
      <div className="container">
        {/* Navigatsiya */}
        <nav
          style={{
            display: "flex",
            gap: "10px",
            marginBottom: "40px",
            alignItems: "center",
          }}
        >
          <p
            onClick={goToHome}
            style={{ color: "#808080", cursor: "pointer", fontSize: "14px" }}
          >
            Главная
          </p>
          <RightArr />
          <span style={{ fontSize: "14px", fontWeight: "500" }}>Возврат</span>
        </nav>

        <S.ReturnLayout>
          <S.TitleContainer>
            <h1>Возврат</h1>
          </S.TitleContainer>

          <S.InfoSection>
            <S.ContentBlock>
              <h2>Обмен и возврат по желанию покупателя</h2>
              <p>
                Если товар по каким-то причинам не подошел вам, вы имеете право
                вернуть его или обменять на другой в течение 7 дней* с момента
                покупки при соблюдении следующих условий:
              </p>
              <S.BulletList>
                <li>
                  Товар имеет первоначальный вид, имеется товарная кондиция;
                </li>
                <li>
                  Товар имеет полную комплектацию, включая упаковочные
                  материалы;
                </li>
                <li>
                  Товар не имеет следов подключался и не имеет признаков
                  монтажа;
                </li>
                <li>
                  Упаковка товара не имеет повреждений, присутствует
                  первоначальный товарный вид;
                </li>
                <li>
                  Есть документ, подтверждающий покупку в нашем
                  интернет-магазине;
                </li>
                <li>
                  Для возврата товара необходимо привезти его к нам в офис;
                </li>
                <li>
                  Товар из других городов можно прислать нам транспортной
                  компанией, при этом услуги транспортной компании оплачиваются
                  клиентом.
                </li>
                <li>
                  *В течение 14 дней для отдельных брендов. При оформлении
                  заказа уточните у менеджера.
                </li>
              </S.BulletList>
            </S.ContentBlock>

            <S.ContentBlock>
              <h2>Обмен и возврат по ошибке продавца</h2>
              <p>Причины обмена или возврата по ошибке продавца:</p>
              <S.BulletList>
                <li>Неполная комплектация товара;</li>
                <li>Брак или дефект товара.</li>
              </S.BulletList>
              <p>
                Если вы выявили дефект, брак или неполную комплектацию товара,
                необходимо сделать фото дефекта и отправить на почту{" "}
                <S.ContactLink href="mailto:mail@at-svet.ru">
                  mail@at-svet.ru
                </S.ContactLink>
                , указав краткое описание характера брака!
              </p>
              <p className="accent-blue">
                Мы заменим бракованный товар или довезем недостающие части.
                Доставка будет осуществлена бесплатно.
              </p>
            </S.ContentBlock>

            <S.ContentBlock>
              <h2>Возврат денежных средств</h2>
              <p>
                Возврат денежных средств осуществляется путем перевода на
                банковские реквизиты покупателя при наличии заявления от
                покупателя.
              </p>
            </S.ContentBlock>
          </S.InfoSection>
        </S.ReturnLayout>
      </div>
    </S.ReturnPageWrapper>
  );
}

export default ReturnConditions;
