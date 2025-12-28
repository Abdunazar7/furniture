import styled from "styled-components";

export const ReturnPageWrapper = styled.main`
  padding: 40px 0 100px;
  background-color: #fff;
`;

export const ReturnLayout = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-top: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const TitleContainer = styled.div`
  flex: 0 0 450px;

  h1 {
    font-size: 64px;
    font-weight: 700;
    margin: 0;
    line-height: 1.1;
    color: #111;
  }

  @media (max-width: 1024px) {
    flex: none;
    h1 {
      font-size: 40px;
    }
  }
`;

export const InfoSection = styled.div`
  flex: 1;
  max-width: 650px;
`;

export const ContentBlock = styled.div`
  margin-bottom: 60px;

  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 25px;
    color: #111;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    color: #111;
    margin-bottom: 25px;
  }
`;

export const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 30px 0;

  li {
    font-size: 18px;
    line-height: 1.6;
    color: #3b68bdff; /* Ro'yxat matni rangi */
    position: relative;
    padding-left: 20px;
    margin-bottom: 5px;

    &::before {
      content: "•";
      position: absolute;
      left: 0;
      color: #4567a7;
    }
  }
`;

export const ContactLink = styled.a`
  color: #4567a7;
  text-decoration: underline;
  font-weight: 500;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;
