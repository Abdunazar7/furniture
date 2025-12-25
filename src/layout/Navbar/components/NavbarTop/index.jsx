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
          <CustomNavLink to="/o_кoмпaнии">О компании</CustomNavLink>
          <CustomNavLink to="/Доставка">Доставка и оплата </CustomNavLink>
          <CustomNavLink to="/Возврат">Возврат</CustomNavLink>
          <CustomNavLink to="/Гарантии">Гарантии</CustomNavLink>
          <CustomNavLink to="/Контакты">Контакты</CustomNavLink>
          <CustomNavLink to="/Блог">Блог</CustomNavLink>
        </NavTopSide>
        <NavTopSide>
          <PhoneLink href="tel:88008904656">8 (800) 890-46-56</PhoneLink>
          <OrderPhoneButton>Заказать звонок</OrderPhoneButton>
        </NavTopSide>
      </NavTopWrapper>
    );
}

export default NavbarTop;