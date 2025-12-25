import React from 'react';
import { 
    NavTopWrapper, 
    CustomNavLink, 
    NavTopSide, 
    OrderPhoneButton, 
    PhoneLink 
} from './NavbarTop.styled';

function NavbarTop(props) {
    return (
      <NavTopWrapper>
        <NavTopSide>
          <CustomNavLink to="/about">О компании</CustomNavLink>
          <CustomNavLink to="/delivery-payment">Доставка и оплата </CustomNavLink>
          <CustomNavLink to="/return">Возврат</CustomNavLink>
          <CustomNavLink to="/garants">Гарантии</CustomNavLink>
          <CustomNavLink to="/contacts">Контакты</CustomNavLink>
          <CustomNavLink to="/blog">Блог</CustomNavLink>
        </NavTopSide>
        <NavTopSide>
          <PhoneLink href="tel:88008904656">8 (800) 890-46-56</PhoneLink>
          <OrderPhoneButton>Заказать звонок</OrderPhoneButton>
        </NavTopSide>
      </NavTopWrapper>
    );
}

export default NavbarTop;