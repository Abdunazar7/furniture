import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    overflow-x: hidden;
    width: 100%;
  }
`;

export const Home1 = styled.div`
  padding-bottom: 80px;
  width: 100%;
  overflow-x: hidden;

  .home-container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 20px;
    width: 100%;
  }
`;

export const HomePage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f6f6f6;
  border-radius: 20px;
  padding: 60px 100px;
  margin-bottom: 60px;
  width: 100%;

  .Home_div {
    flex: 1;
    p {
      font-size: 64px;
      font-weight: 700;
      line-height: 1.1;
      margin: 0;
      color: #333;
      word-wrap: break-word;
    }

    .Home_color {
      display: inline-block;
      background-color: #333;
      color: white;
      border-radius: 100px;
      padding: 15px 40px;
      font-size: 24px;
      margin-top: 30px;
      white-space: nowrap;
    }
  }

  .Home_img {
    flex: 1;
    display: flex;
    justify-content: center;
    img {
      max-width: 100%;
      height: auto;
    }
  }

  @media (max-width: 1024px) {
    padding: 40px;
    flex-direction: column;
    text-align: center;

    .Home_div {
      margin-bottom: 30px;
      p {
        font-size: 40px;
      }
    }

    .Home_img {
      width: 100%;
      img {
        max-width: 350px;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
    .Home_div p {
      font-size: 32px;
    }
    .Home_div .Home_color {
      font-size: 18px;
      padding: 12px 30px;
    }
  }

  @media (max-width: 480px) {
    padding: 30px 15px;
    .Home_div p {
      font-size: 28px;
    }
    .Home_img img {
      max-width: 250px;
    }
  }
`;
