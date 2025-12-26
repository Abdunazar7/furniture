import styled from "styled-components";
import { TextColors, BackgroundColors } from "../.././theme";

export const DetailWrapper = styled.section`
  padding: 40px 0 100px;

  .container {
    max-width: 1320px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .navigate {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 40px;

    p {
      font-size: 14px;
      font-weight: 400;
      color: #808080;
      margin: 0;
      cursor: pointer;
      &:hover {
        color: #000;
      }
    }
    span {
      font-size: 14px;
      color: #000;
    }
  }

  .hero-section {
    display: flex;
    gap: 60px;
    margin-bottom: 100px;

    @media (max-width: 1024px) {
      flex-direction: column;
    }
  }

  .image-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    border-radius: 0px;
    min-height: 500px;

    img {
      width: 100%;
      max-width: 550px;
      max-height: 580px;
      height: 500;
      object-fit: contain;
    }
  }

  .info-container {
    flex: 1;
    display: flex;
    flex-direction: column;

    h1 {
      font-size: 40px;
      font-weight: 600;
      line-height: 1.2;
      margin: 0 0 20px 0;
      color: ${TextColors.primary};
    }

    .meta-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;

      .article-info {
        display: flex;
        flex-direction: column;
        gap: 4px;

        span {
          font-size: 12px;
          color: #808080;
        }
        b {
          font-size: 14px;
          font-weight: 400;
        }
      }

      .social-share {
        display: flex;
        gap: 12px;
        align-items: center;

        svg {
          cursor: pointer;
          opacity: 0.6;
          transition: 0.3s;
          &:hover {
            opacity: 1;
          }
        }
      }
    }

    .stock-tag {
      color: #4caf50;
      font-size: 14px;
      margin-bottom: 35px;
    }

    .price-box {
      display: flex;
      align-items: center;
      gap: 25px;
      margin-bottom: 40px;

      .main-price {
        font-size: 48px;
        font-weight: 700;
        color: ${TextColors.primary};
      }
      .old-price {
        font-size: 20px;
        text-decoration: line-through;
        color: #b3b3b3;
      }
    }

    .product-description {
      font-size: 16px;
      line-height: 1.5;
      color: #4d4d4d;
      margin-bottom: 50px;
      max-width: 500px;
    }

    .purchase-area {
      display: flex;
      align-items: center;
      gap: 15px;

      .counter-group {
        display: flex;
        align-items: center;
        border: 1px solid #e6e6e6;
        border-radius: 8px;
        height: 56px;

        button {
          width: 45px;
          height: 100%;
          border: none;
          background: none;
          font-size: 20px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        input {
          width: 50px;
          text-align: center;
          border: none;
          font-size: 16px;
          font-weight: 600;
          outline: none;
        }
      }

      .add-to-cart {
        height: 56px;
        padding: 0 45px;
        background: #333333;
        color: white;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: 0.3s;
        &:hover {
          background: #000;
        }
      }

      .wish-btn {
        width: 56px;
        height: 56px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid #e6e6e6;
        border-radius: 8px;
        background: none;
        cursor: pointer;
      }
    }
  }

  .specs-section {
    margin-top: 80px;

    h2 {
      font-size: 32px;
      font-weight: 600;
      margin-bottom: 40px;
    }

    .specs-table {
      width: 100%;
      border-collapse: collapse;

      .spec-row {
        display: flex;
        justify-content: space-between;
        padding: 18px 0;
        border-bottom: 1px solid #f2f2f2;

        &:nth-child(even) {
          background-color: #f9f9f9;
          padding-left: 15px;
          padding-right: 15px;
          margin: 0 -15px;
        }

        .label {
          color: #1a1a1a;
          font-size: 16px;
        }
        .value {
          color: #1a1a1a;
          font-size: 16px;
          text-align: right;
        }
      }
    }
  }
`;
