import React from "react";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { RightArr } from "../../components";

import { CartStyled } from "./Basket.styled";
import Trash from "../../components/icons/Trash.icon";
import product from "../../assets/product.png"

function Basket() {
  const { goToHome, goToCatalog } = useAppNavigation();

  return (
    <CartStyled>
      <div className="navigate">
        <p onClick={goToHome}>Главная</p>
        <RightArr />
        <p onClick={goToCatalog}>Каталог</p>
        <RightArr />
        <p>Корзина</p>
      </div>

      <h1>
        Корзина
      </h1>

      <div className="section-box">
        <div className="cart-header">
          <div>Фото</div>
          <div>Товары</div>
          <div>Описание</div>
          <div>Артикул</div>
          <div>Количество</div>
        </div>

        <div className="cart-item">
          <div className="img-box">
            <img src={product} alt="lamp" />
          </div>
          <div className="info">
            <h4>Встраиваемый светильник Novotech</h4>
            <b>6 399₽</b>
          </div>
          <div className="desc">
            Светильник RADUGA COMBO XS <br /> Промышленное освещение: <br />{" "}
            50Вт; 230В; S4; XS
          </div>
          <div className="article">
            RAD-COMBO-50/XXX/230/XXX/ <br /> XXX/S4/XS
          </div>
          <div className="counter">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          <div className="delete-btn">
            <Trash />
          </div>
          </div>
        </div>

        <div className="cart-item">
          <div className="img-box">
            <img src={product} alt="lamp" />
          </div>
          <div className="info">
            <h4>Встраиваемый светильник Novotech</h4>
            <b>6 399₽</b>
          </div>
          <div className="desc">
            Светильник RADUGA COMBO XS <br /> Промышленное освещение: <br />{" "}
            50Вт; 230В; S4; XS
          </div>
          <div className="article">
            RAD-COMBO-50/XXX/230/XXX/ <br /> XXX/S4/XS
          </div>
          <div className="counter">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          <div className="delete-btn">
            <Trash />
          </div>
          </div>
        </div>
      </div>

      <div className="section-box">
        <h2 className="section-title">Оформление</h2>
        <div className="form-grid">
          <input type="text" placeholder="ФИО" />
          <input type="tel" placeholder="телефон" />
          <input type="email" placeholder="Электронная Почта" />
        </div>
      </div>

      <div className="section-box">
        <h2 className="section-title">Доставка</h2>
        <div className="full-width">
          <input type="text" placeholder="Адрес доставки" />
          <textarea placeholder="Комментарий"></textarea>
        </div>
      </div>

      <div className="section-box">
        <h2 className="section-title">Оплата</h2>
        <div className="payment-summary">
          <div className="summary-details">
            <p>Товары.............................................12 300₽</p>
            <p>Доставка................................................580₽</p>
          </div>
        </div>
        <div className="summary-details">
          <h3 className="total-price">12 800 ₽</h3>
          <button className="buy-btn">Купить</button>
          <div className="terms">
            <input type="checkbox"/>
            <span>Я согласен на обработку моих персональных данных</span>
          </div>
        </div>
      </div>
    </CartStyled>
  );
}

export default Basket;
