import styled from "styled-components";
import { BackgroundColors } from "../../theme";

export const FooterWrapper = styled.footer`
  background-color: ${BackgroundColors.lightBlue};
  padding: 79px;
  margin-top: 60px;
`;

export const FooterWrapper2 = styled.footer`
  display: flex;
  justify-content: center;
  gap: 146px;
  & p {
    margin-top: 30px;
  }
`;

export const FooterLogo = styled.footer`
  display: grid;
  grid-template-columns: 1fr;

  .a1 {
    margin-top: 50px;
    margin-bottom: 35px;
    font-size: 24px;
  }

  .a2 {
    margin-top: 35px;
    margin-bottom: 30px;
  }
`;

export const FooterVK = styled.footer`
  display: flex;
  gap: 12px;
  margin-top: 35px;
`;

export const Footer_div2 = styled.footer`
  display: flex;
  gap: 71px;
`;
