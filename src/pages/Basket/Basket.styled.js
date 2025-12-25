import styled from "styled-components";

export const CartStyled = styled.div`
  .navigate {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 30px;

    p {
      font-size: 16px;
      color: #7d7d7d;
    }

    & p:hover {
      color: #000;
      cursor: pointer;
    }
  }

  & h1 {
    font-weight: 700;
    font-size: 64px;
    line-height: 110%;
    margin-top: 0px;
    margin-bottom: 60px;
    display: flex;
    align-items: start;
  }

  .section-box {
    background: #f2f2f2;
    background: #f8f8f8;
    border-radius: 20px;
    padding: 40px;
    margin-bottom: 20px;
  }

  .section-title {
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 30px;
    color: #333;
  }

  .cart-header {
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 1.5fr 1fr;
    color: #999;
    font-size: 14px;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #e0e0e0;
  }

  .cart-item {
    display: grid;
    grid-template-columns: 1fr 2fr 2fr 1.5fr 1fr;
    align-items: center;
    margin-bottom: 30px;

    img {
      width: 80px;
      height: 80px;
      object-fit: contain;
    }

    .info h4 {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    .info b {
      font-size: 16px;
      display: block;
    }

    .desc,
    .article {
      font-size: 14px;
      color: #555;
      line-height: 1.4;
    }

    .counter {
      display: flex;
      align-items: center;
      gap: 15px;

      button {
        border: none;
        background: transparent;
        font-size: 20px;
        cursor: pointer;
      }
      span {
        font-weight: 600;
      }
    }

    .delete-btn {
      justify-self: end;
      cursor: pointer;
      color: #999;
      font-size: 20px;
    }
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }

  .full-width {
    width: 100%;
  }

  input,
  textarea {
    width: 100%;
    padding: 15px 20px;
    border-radius: 50px;
    border: 1px solid #ccc;
    background: transparent;
    font-size: 16px;
    outline: none;
    font-family: inherit;
  }

  textarea {
    border-radius: 20px;
    height: 100px;
    resize: none;
    margin-top: 20px;
  }

  .payment-summary {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  .summary-details {
    p {
      font-size: 16px;
      margin-bottom: 10px;
      color: #555;
    }
    .total-price {
      font-size: 32px;
      font-weight: 700;
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .buy-btn {
      background: #333;
      color: #fff;
      padding: 15px 60px;
      border-radius: 50px;
      font-size: 18px;
      font-weight: 600;
      cursor: pointer;
      border: none;
      transition: 0.3s;

      &:hover {
        background: #000;
      }
    }

    .terms {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-top: 15px;
      font-size: 12px;
      color: #999;
    }
  }
`;
