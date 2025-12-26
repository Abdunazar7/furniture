import React, { useState } from "react";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { RightArr } from "../../components";
import { CartStyled } from "./Basket.styled";
import Trash from "../../components/icons/Trash.icon";
import product from "../../assets/product.png";

function Basket() {
  const { goToHome, goToCatalog } = useAppNavigation();
  const [count, setCount] = useState(1);

  const [deliveryType, setDeliveryType] = useState("delivery");
  const [paymentType, setPaymentType] = useState("card");

  return (
    <CartStyled>
      <div className="navigate">
        <p onClick={goToHome}>Главная</p>
        <RightArr />
        <p onClick={goToCatalog}>Каталог</p>
        <RightArr />
        <span>Корзина</span>
      </div>

      <h1>
        Корзина <sup>2</sup>
      </h1>

      <div className="section-box">
        <div className="cart-header">
          <div>Фото</div>
          <div>Товары</div>
          <div>Описание</div>
          <div>Артикул</div>
          <div>Количество</div>
        </div>

        {[1, 2].map((item) => (
          <div className="cart-item" key={item}>
            <div className="img-box">
              <img src={product} alt="product" />
            </div>
            <div className="info">
              <h4>Встраиваемый светильник Novotech</h4>
              <b>6 399₽</b>
            </div>
            <div className="desc">
              Светильник RADUGA COMBO XS <br />
              Промышленное освещение: 50Вт; 230В; S4; XS
            </div>
            <div className="article">RAD-COMBO-50/XXX/230/XXX/XXX/S4/XS</div>
            <div className="counter-wrapper">
              <div className="counter">
                <button onClick={() => setCount((p) => Math.max(1, p - 1))}>
                  -
                </button>
                <span>{count}</span>
                <button onClick={() => setCount((p) => p + 1)}>+</button>
              </div>
              <div className="delete-btn">
                <Trash />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="section-box">
        <h2 className="section-title">Оформление</h2>
        <div className="form-grid">
          <input type="text" placeholder="ФИО" />
          <input type="tel" placeholder="Телефон" />
          <input type="email" placeholder="Электронная Почта" />
        </div>
      </div>

      <div className="section-box">
        <h2 className="section-title">Доставка</h2>

        <div className="radio-group">
          <label className={deliveryType === "delivery" ? "active" : ""}>
            <input
              type="radio"
              name="delivery"
              checked={deliveryType === "delivery"}
              onChange={() => setDeliveryType("delivery")}
            />
            <span className="custom-radio"></span>
            Доставка
          </label>
          <label className={deliveryType === "pickup" ? "active" : ""}>
            <input
              type="radio"
              name="delivery"
              checked={deliveryType === "pickup"}
              onChange={() => setDeliveryType("pickup")}
            />
            <span className="custom-radio"></span>
            Самовывоз
          </label>
        </div>

        {deliveryType === "delivery" && (
          <input
            type="text"
            placeholder="Адрес доставки"
            style={{ marginBottom: "20px" }}
          />
        )}

        <textarea placeholder="Комментарий"></textarea>
      </div>

      <div className="section-box payment-box">
        <h2 className="section-title">Оплата</h2>

        <div className="summary-details">
          <div className="summary-row">
            <span className="label">Товары</span>
            <div className="dots"></div>
            <b className="value">12 300₽</b>
          </div>
          <div className="summary-row">
            <span className="label">Доставка</span>
            <div className="dots"></div>
            <b className="value">580₽</b>
          </div>
        </div>

        <h3 className="sub-title">Способ оплаты</h3>
        <div className="radio-group column">
          <label className={paymentType === "card" ? "active" : ""}>
            <input
              type="radio"
              name="payment"
              checked={paymentType === "card"}
              onChange={() => setPaymentType("card")}
            />
            <span className="custom-radio"></span>
            Картой онлайн
          </label>
          <label className={paymentType === "cash" ? "active" : ""}>
            <input
              type="radio"
              name="payment"
              checked={paymentType === "cash"}
              onChange={() => setPaymentType("cash")}
            />
            <span className="custom-radio"></span>
            Наличными при получении
          </label>
        </div>

        <div className="total-row">
          <h3 className="total-price">12 800 ₽</h3>
          <div className="buy-actions">
            <button className="buy-btn">Купить</button>
            <label className="terms">
              <input type="checkbox" />
              <span>Я согласен на обработку моих персональных данных</span>
            </label>
          </div>
        </div>
      </div>
    </CartStyled>
  );
}

export default Basket;
