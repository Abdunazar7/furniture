import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Orqa fonni xiralashtirish */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(2px);
`;

export const ModalContainer = styled.div`
  background: #fff;
  width: 90%;
  max-width: 650px; /* Figma bo'yicha kenglik */
  padding: 60px;
  position: relative;
  border-radius: 30px; /* Yumaloq burchaklar */

  @media (max-width: 768px) {
    padding: 40px 20px;
    width: 95%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #b3b3b3;
`;

export const ModalTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 40px;
  color: #111;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;

  input {
    height: 54px;
    border: 1px solid #e6e6e6;
    border-radius: 50px;
    padding: 0 25px;
    font-size: 16px;
    outline: none;
    &::placeholder {
      color: #b3b3b3;
    }
    &:focus {
      border-color: #333;
    }
  }

  .submit-btn {
    height: 54px;
    background: #333;
    color: #fff;
    border: none;
    border-radius: 50px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: 0.3s;
    &:hover {
      background: #000;
    }
  }
`;
