import styled from "styled-components";

export const CartStyled = styled.div`
  max-width: 1320px;
  margin: 0 auto;
  padding: 0 20px 100px;
  font-family: "Inter", sans-serif;

  .navigate {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px 0 40px;
    font-size: 14px;
    color: #808080;

    p {
      cursor: pointer;
      &:hover {
        color: #000;
      }
    }
    span {
      color: #000;
      font-weight: 500;
    }
  }

  h1 {
    font-size: 64px;
    font-weight: 700;
    margin-bottom: 50px;
    color: #111;
    display: flex;
    align-items: center;
    gap: 5px;

    sup {
      font-size: 18px;
      background: #d82121ff;
      color: #fff;
      width: 25px;
      height: 25px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      margin-top: -30px;
    }

    @media (max-width: 768px) {
      font-size: 32px;
    }
  }

  .section-box {
    background: #f8f8f8;
    border-radius: 20px;
    padding: 35px 40px;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      padding: 20px;
    }
  }

  .cart-header {
    display: grid;
    grid-template-columns: 0.8fr 1.5fr 2fr 1.5fr 1fr;
    padding-bottom: 15px;
    border-bottom: 1px solid #eaeaea;
    margin-bottom: 25px;
    color: #808080;
    font-size: 14px;

    @media (max-width: 992px) {
      display: none;
    }
  }

  .cart-item {
    display: grid;
    grid-template-columns: 0.8fr 1.5fr 2fr 1.5fr 1fr;
    align-items: center;
    gap: 20px;
    padding: 20px 0;
    border-bottom: 1px solid #eaeaea;

    &:last-child {
      border-bottom: none;
    }

    @media (max-width: 992px) {
      grid-template-columns: 1fr 1fr;
      text-align: center;
    }

    img {
      width: 80px;
      height: 80px;
      object-fit: contain;
    }

    h4 {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 5px;
    }
    b {
      font-size: 16px;
      color: #111;
    }
    .desc,
    .article {
      font-size: 12px;
      color: #808080;
      line-height: 1.4;
    }

    .counter-wrapper {
      display: flex;
      align-items: center;
      gap: 15px;

      .counter {
        display: flex;
        align-items: center;
        background: #fff;
        border: 1px solid #eaeaea;
        border-radius: 10px;
        padding: 5px 12px;
        gap: 12px;

        button {
          border: none;
          background: none;
          cursor: pointer;
          font-size: 18px;
          color: #808080;
        }
        span {
          font-weight: 600;
          min-width: 20px;
          text-align: center;
        }
      }

      .delete-btn {
        color: #808080;
        cursor: pointer;
        transition: 0.2s;
        &:hover {
          color: #ff4d4f;
        }
      }
    }
  }

  .section-title {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 30px;
  }

  .form-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  input,
  textarea {
    width: 100%;
    padding: 16px 25px;
    border: 1px solid #eaeaea;
    background: transparent;
    border-radius: 50px;
    font-size: 16px;
    outline: none;
    &::placeholder {
      color: #808080;
    }
    &:focus {
      border-color: #4567a7;
    }
  }

  textarea {
    border-radius: 20px;
    height: 120px;
    resize: none;
    margin-top: 20px;
  }

  .payment-box {
    .summary-text {
      font-size: 16px;
      color: #111;
      margin-bottom: 10px;
      display: flex;
      justify-content: flex-start;
      gap: 5px;
      span {
        color: #808080;
      }
    }

    .total-row {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-top: 30px;

      h3 {
        font-size: 32px;
        font-weight: 700;
        margin: 0;
      }

      .buy-actions {
        display: flex;
        align-items: center;
        gap: 20px;
        @media (max-width: 768px) {
          flex-direction: column;
          align-items: flex-start;
        }

        .buy-btn {
          background: #111;
          color: #fff;
          padding: 18px 60px;
          border-radius: 50px;
          border: none;
          font-weight: 600;
          cursor: pointer;
          font-size: 16px;
          &:hover {
            background: #333;
          }
        }

        .terms {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          color: #808080;
          input {
            width: 18px;
            height: 18px;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
