import styled from "styled-components";

export const FavouritesWrapper = styled.main`
  padding: 40px 0 100px;
  background-color: #fff;

`;

export const FavHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 50px;

  h1 {
    font-size: 64px;
    font-weight: 700;
    color: #111;
    margin: 0;
  }

  .count-badge {
    background: #f5271cff;
    color: white;
    font-size: 12px;
    font-weight: 600;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -30px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 36px;
    }
  }
`;

export const FavGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const ProductCard = styled.div`
  border: 1px solid transparent;
  padding: 20px;
  transition: 0.3s;
  position: relative;
  display: flex;
  flex-direction: column;

  &:hover {
    border-color: #f2f2f2;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);
  }

  .heart-icon {
    position: absolute;
    top: 15px;
    right: 15px;
    cursor: pointer;
    color: #ff3b30;
  }

  .img-box {
    width: 100%;
    height: 220px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }

  h3 {
    font-size: 16px;
    font-weight: 400;
    line-height: 1.4;
    margin-bottom: 15px;
    color: #111;
    min-height: 45px;
  }

  .price-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;

    .prices {
      display: flex;
      flex-direction: column;
      .old-price {
        font-size: 12px;
        color: #b3b3b3;
        text-decoration: line-through;
      }
      .current-price {
        font-size: 18px;
        font-weight: 700;
        color: #111;
      }
    }

    .cart-btn {
      width: 40px;
      height: 40px;
      background: #333;
      color: white;
      border: none;
      border-radius: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: 0.3s;
      &:hover {
        background: #000;
      }
    }
  }
`;
