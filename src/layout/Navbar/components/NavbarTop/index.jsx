import React, { useState } from 'react';
import { 
    NavTopWrapper, 
    CustomNavLink, 
    NavTopSide, 
    OrderPhoneButton, 
    PhoneLink 
} from './NavbarTop.styled';

import * as M from "./Modal.styled";

function NavbarTop(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(!isModalOpen);
    return (
      <>
        <NavTopWrapper>
          <NavTopSide>
            <CustomNavLink to="/about">О компании</CustomNavLink>
            <CustomNavLink to="/delivery-payment">
              Доставка и оплата{" "}
            </CustomNavLink>
            <CustomNavLink to="/return">Возврат</CustomNavLink>
            <CustomNavLink to="/garants">Гарантии</CustomNavLink>
            <CustomNavLink to="/contacts">Контакты</CustomNavLink>
            <CustomNavLink to="/blog">Блог</CustomNavLink>
          </NavTopSide>
          <NavTopSide>
            <PhoneLink href="tel:88008904656">8 (800) 890-46-56</PhoneLink>
            <OrderPhoneButton onClick={toggleModal}>
              Заказать звонок
            </OrderPhoneButton>
          </NavTopSide>
        </NavTopWrapper>

        {isModalOpen && (
          <M.Overlay onClick={toggleModal}>
            <M.ModalContainer onClick={(e) => e.stopPropagation()}>
              <M.CloseButton onClick={toggleModal}>✕</M.CloseButton>
              <M.ModalTitle>
                Заполните, <br /> и мы перезвоним
              </M.ModalTitle>

              <M.StyledForm>
                <input type="text" placeholder="ФИО" required />
                <input type="tel" placeholder="Телефон" required />
                <button type="submit" className="submit-btn">
                  Весь каталог →
                </button>
              </M.StyledForm>
            </M.ModalContainer>
          </M.Overlay>
        )}
      </>
    );
}

export default NavbarTop;