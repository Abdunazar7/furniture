import React from "react";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { RightArr } from "../../components";
import { CartStyled } from "./Basket.styled";
import Trash from "../../components/icons/Trash.icon";
import product from "../../assets/product.png";

function Basket() {
  const { goToHome, goToCatalog } = useAppNavigation();

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
              Промышленное освещение: <br />
              50Вт; 230В; S4; XS
            </div>
            <div className="article">
              RAD-COMBO-50/XXX/230/XXX/ <br />
              XXX/S4/XS
            </div>
            <div className="counter-wrapper">
              <div className="counter">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <div className="delete-btn">
                <Trash />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Form Sections */}
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
        <input type="text" placeholder="Адрес доставки" />
        <textarea placeholder="Комментарий"></textarea>
      </div>

      {/* Payment Section */}
      <div className="section-box payment-box">
        <h2 className="section-title">Оплата</h2>
        <div className="summary-details">
          <p className="summary-text">
            Товары
            <span>
              ............................................................................
            </span>
            12 300₽
          </p>
          <p className="summary-text">
            Доставка
            <span>
              ............................................................................
            </span>
            580₽
          </p>
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
