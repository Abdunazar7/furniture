import React from "react";
import { RightArr } from "../../components";
import * as S from "./GuaranteesPage.styled";
import { useAppNavigation } from "../../hooks/useAppNavigation";

const Guarants = () => {
  const { goToHome } = useAppNavigation();

  return (
    <S.GuaranteesWrapper>
      <div className="container">
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
            style={{
              color: "#808080",
              cursor: "pointer",
              fontSize: "14px",
              margin: 0,
            }}
          >
            Главная
          </p>
          <RightArr />
          <span style={{ fontSize: "14px", fontWeight: "500", color: "#111" }}>
            Гарантии
          </span>
        </nav>

        <S.MainLayout>
          <S.TitleBox>
            <h1>Гарантии</h1>
          </S.TitleBox>

          <S.ContentBox>
            <h2>Обмен и возврат по желанию покупателя</h2>

            <p>
              Все товары в магазине «NornLight» имеют гарантию. <br />
              Она заявляется производителем и имеет определенный срок действия
              на различные группы товаров.
            </p>

            <p>
              Если ваше изделие вышло из строя в течение гарантийного срока вы
              можете обратиться к нам и получить бесплатный ремонт. <br />
              Для этого нужно:
            </p>

            <S.GuaranteeList>
              <li>
                Предоставить чек, накладную или сообщить почту или номер
                телефона, указанные при оформлении заказа.
              </li>
              <li>
                Привезти товар к нам на склад или отправить его транспортной
                компанией.
              </li>
              <li>
                После товар отправляется на экспертизу и ремонт. Если ремонт
                невозможен, мы обменяем изделие на аналогичное либо вернем
                деньги за покупку.
              </li>
            </S.GuaranteeList>

            <p>
              Обращаем внимание, что «A-Свет» не является сервисным центром, а
              выполняет роль посредника между клиентом и поставщиком.
            </p>

            <p>
              Поэтому сроки проведения ремонта могут отличаться для товаров
              различных брендов.
            </p>
          </S.ContentBox>
        </S.MainLayout>
      </div>
    </S.GuaranteesWrapper>
  );
};

export default Guarants;
