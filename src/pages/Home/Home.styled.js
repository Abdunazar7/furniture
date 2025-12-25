import styled from "styled-components";

export const Home1 = styled.div`
  padding-bottom: 80px;

  .home-container {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 20px;
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

  .Home_div {
    p {
      font-size: 64px;
      font-weight: 700;
      line-height: 1.1;
      margin: 0;
      color: #333;
    }

    .Home_color {
      display: inline-flex;
      background-color: #333;
      color: white;
      border-radius: 100px;
      padding: 15px 40px;
      font-size: 24px;
      margin-top: 30px;
      font-weight: 400;
      width: auto;
      height: auto;
    }
  }

  .Home_img {
    max-width: 450px;
    img {
      width: 100%;
    }
  }

  @media (max-width: 1024px) {
    padding: 40px;
    flex-direction: column;
    text-align: center;
    .Home_div {
      margin: 0 0 30px 0;
      width: 100%;
      p {
        font-size: 40px;
      }
    }
  }

  @media (max-width: 768px) {
    padding: 30px;
    .Home_div {
      p {
        font-size: 32px;
      }
      .Home_color {
        font-size: 18px;
        padding: 10px 25px;
      }
    }
    .Home_img {
      max-width: 300px;
    }
  }

  @media (max-width: 480px) {
    padding: 20px;
    .Home_div {
      p {
        font-size: 24px;
      }
      .Home_color {
        font-size: 16px;
        padding: 8px 20px;
      }
    }
    .Home_img {
      max-width: 200px;
    }
  }
`;
