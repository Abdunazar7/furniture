import styled from "styled-components";

export const WhySection = styled.section`
  margin-top: 80px;

  .sectionHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;

    h2 {
      font-size: 32px;
      font-weight: 700;
    }

    button {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 30px;
      border: 1px solid #333;
      border-radius: 100px;
      background: none;
      cursor: pointer;
      font-size: 16px;
      color: inherit;
      transition: 0.3s;
    }

    button:hover {
      background: #333;
      color: #fff;
    }
  }
`;

export const WhyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const WhyCard = styled.div`
  background: #fff;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  padding: 50px 30px;
  min-height: 380px;
  display: flex;
  flex-direction: column;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  }

  .icon {
    background: #333;
    width: 80px;
    height: 80px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 40px;

    img {
      width: 45px;
      height: 45px;
    }
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 15px;
    color: #333;
    line-height: 1.3;
  }

  p {
    font-size: 14px;
    color: #888;
    line-height: 1.5;
    margin: 0;
  }
`;
