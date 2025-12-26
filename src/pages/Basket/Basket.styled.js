import styled from "styled-components";

export const CartStyled = styled.div`
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px 100px;
  font-family: "Inter", sans-serif;
  box-sizing: border-box;
  overflow-x: hidden;

  .navigate {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px 0 40px;
    font-size: 14px;
    color: #808080;
    flex-wrap: wrap;

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
      background: #d82121;
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
      margin-bottom: 30px;
    }
  }

  .section-box {
    background: #f8f8f8;
    border-radius: 20px;
    padding: 35px 40px;
    margin-bottom: 20px;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 768px) {
      padding: 25px 20px;
    }
  }

  .section-title {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 30px;
    @media (max-width: 768px) {
      font-size: 24px;
    }
  }

  .cart-header {
    display: grid;
    grid-template-columns: 80px 1.5fr 2fr 1.5fr 120px;
    gap: 20px;
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
    grid-template-columns: 80px 1.5fr 2fr 1.5fr 120px;
    align-items: center;
    gap: 20px;
    padding: 20px 0;
    border-bottom: 1px solid #eaeaea;

    &:last-child {
      border-bottom: none;
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
      word-break: break-all;
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
        &:hover {
          color: #ff4d4f;
        }
      }
    }

    @media (max-width: 992px) {
      grid-template-columns: 80px 1fr;
      grid-template-areas:
        "img info"
        "img article"
        "counter counter";
      gap: 15px;

      .img-box {
        grid-area: img;
      }
      .info {
        grid-area: info;
      }
      .desc {
        display: none;
      }
      .article {
        grid-area: article;
      }
      .counter-wrapper {
        grid-area: counter;
        justify-content: space-between;
        margin-top: 10px;
      }
    }
  }

  .form-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  input[type="text"],
  input[type="tel"],
  input[type="email"],
  textarea {
    width: 100%;
    padding: 16px 25px;
    border: 1px solid #eaeaea;
    background: transparent;
    border-radius: 50px;
    font-size: 16px;
    outline: none;
    box-sizing: border-box;
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
    margin-top: 0;
  }

  .radio-group {
    display: flex;
    gap: 40px;
    margin-bottom: 30px;

    &.column {
      flex-direction: column;
      gap: 15px;
    }

    label {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;
      font-size: 16px;
      font-weight: 500;
      color: #111;

      input {
        display: none;
      }

      .custom-radio {
        width: 20px;
        height: 20px;
        border: 2px solid #ccc;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        transition: 0.2s;
      }

      input:checked + .custom-radio {
        border-color: #111;
        &::after {
          content: "";
          width: 10px;
          height: 10px;
          background: #111;
          border-radius: 50%;
        }
      }
    }

    @media (max-width: 768px) {
      gap: 20px;
    }
  }

  .payment-box {
    .sub-title {
      font-size: 18px;
      margin: 20px 0 15px;
      font-weight: 600;
    }

    .summary-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 15px;
      font-size: 16px;
      color: #111;

      .label {
        white-space: nowrap;
      }
      .value {
        white-space: nowrap;
        font-weight: 600;
      }
      .dots {
        flex: 1;
        border-bottom: 1px dotted #ccc;
        margin: 0 10px 5px;
      }
    }

    .total-row {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-top: 40px;
      padding-top: 20px;
      border-top: 1px solid #eaeaea;

      h3 {
        font-size: 32px;
        font-weight: 700;
        margin: 0;
      }

      .buy-actions {
        display: flex;
        align-items: center;
        gap: 20px;
        flex-wrap: wrap;

        .buy-btn {
          background: #333;
          color: #fff;
          padding: 18px 60px;
          border-radius: 50px;
          border: none;
          font-weight: 600;
          cursor: pointer;
          font-size: 16px;
          transition: background 0.2s;
          &:hover {
            background: #000;
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
            margin: 0;
            border-radius: 4px;
          }
        }
      }
    }
  }
`;
