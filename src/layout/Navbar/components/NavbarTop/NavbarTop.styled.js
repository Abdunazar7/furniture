import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { TextColors } from "../../../../theme";

export const NavTopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const NavTopSide = styled.div`
  display: flex;
  gap: 27px;
`;

export const CustomNavLink = styled(NavLink)`
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  color: ${TextColors.secondary};
`;

export const OrderPhoneButton = styled.button`
  background-color: transparent;
  border: none;
  font-size: 14px;
  font-weight: 600;
  color: ${TextColors.secondary};
`;

export const PhoneLink = styled.a`
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  color: ${TextColors.primary};
`;
