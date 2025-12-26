import styled from "styled-components";

export const AboutWrapper = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Task = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 40px; 

  @media (max-width: 1024px) {
    flex-direction: column;
  }

  .left_side {
    flex: 1;
    max-width: 530px;

    h1 {
      font-weight: 700;
      font-size: 64px;
      line-height: 110%;
      margin-bottom: 40px;
      color: #111;

      @media (max-width: 768px) {
        font-size: 40px;
      }
    }
  }

  .task1 {
    width: 100%;
    height: auto;
    min-height: 220px;
    background: #f2f2f2;
    border-radius: 15px;
    margin-bottom: 20px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p:first-child {
      font-weight: 700;
      font-size: 64px;
      line-height: 1;
      margin: 0;
      color: #111;

      @media (max-width: 768px) {
        font-size: 48px;
      }
    }

    .task2 {
      font-weight: 500;
      font-size: 20px;
      line-height: 1.5;
      color: #454545;
      margin: 0;
    }
  }

  .text_p {
    flex: 1;
    max-width: 650px;

    p {
      padding-bottom: 25px;
      font-weight: 500;
      font-size: 20px;
      line-height: 150%;
      color: #111;
      margin: 0;

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }
`;
