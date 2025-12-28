import styled from "styled-components";

export const ContactsWrapper = styled.main`
  padding: 40px 0 0 0;
  background: #fff;
`;

export const ContactHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 60px;

  h1 {
    font-size: 64px;
    font-weight: 700;
    margin: 0;
    color: #111;
  }

  .phone-info {
    text-align: right;
    h3 {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 10px;
    }
    p {
      font-size: 14px;
      color: #808080;
      line-height: 1.5;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    h1 {
      font-size: 40px;
    }
    .phone-info {
      text-align: left;
    }
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 600px;
  position: relative;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const InfoFloatingCard = styled.div`
  position: absolute;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1100px;
  background: #ffffff;
  padding: 40px 60px;
  border-radius: 10px;
  box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;

  .info-item {
    display: flex;
    flex-direction: column;
    gap: 10px;

    span {
      font-size: 16px;
      font-weight: 600;
      color: #111;
    }
    p {
      font-size: 14px;
      color: #4d4d4d;
      margin: 0;
    }
  }

  .submit-btn {
    background: #333333;
    color: #fff;
    padding: 16px 35px;
    border: none;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 50px;
    transition: 0.3s;
    &:hover {
      background: #000;
    }
  }

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 30px;
    bottom: 20px;
    padding: 30px;
    text-align: center;
  }
`;
