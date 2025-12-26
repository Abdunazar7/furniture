import styled from "styled-components";

export const AboutWrapper = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 40px 20px;
  overflow-x: hidden;
  width: 100%;
  box-sizing: border-box;
`;

export const Task = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
  }

  .left_side {
    flex: 1;
    max-width: 530px;
    width: 100%;

    @media (max-width: 1024px) {
      max-width: 100%;
    }

    h1 {
      font-weight: 700;
      font-size: 64px;
      line-height: 110%;
      margin-bottom: 40px;
      color: #111;

      @media (max-width: 768px) {
        font-size: 40px;
        margin-bottom: 20px;
      }
    }
  }

  .task1 {
    width: 100%;
    min-height: 220px;
    background: #f8f8f8;
    border-radius: 15px;
    margin-bottom: 20px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;

    @media (max-width: 768px) {
      min-height: 150px;
      padding: 20px;
    }

    p:first-child {
      font-weight: 700;
      font-size: 64px;
      line-height: 1;
      margin: 0;
      color: #111;

      @media (max-width: 768px) {
        font-size: 40px;
      }
    }

    .task2 {
      font-weight: 500;
      font-size: 20px;
      line-height: 1.5;
      color: #454545;
      margin: 0;

      @media (max-width: 768px) {
        font-size: 16px;
      }
    }
  }

  .text_p {
    flex: 1;
    max-width: 650px;
    width: 100%;

    @media (max-width: 1024px) {
      max-width: 100%;
    }

    p {
      padding-bottom: 25px;
      font-weight: 500;
      font-size: 20px;
      line-height: 150%;
      color: #111;
      margin: 0;

      @media (max-width: 768px) {
        font-size: 16px;
        padding-bottom: 15px;
      }
    }
  }
`;
