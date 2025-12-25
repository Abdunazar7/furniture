import styled from "styled-components";

export const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`

export const ProductCard = styled.div`
  padding: 20px;
  transition: 0.3s;
  width: 100%;

  .product-heart{
    padding-left: 80%;
  }

  &:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  }

  .favorite {
    &:hover {
      color: #ff4444;
      transform: scale(1.1);
    }
  }

  .product-img {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
  }

  p {
    margin: 0 0 8px 0;
    line-height: 1.4;
    width: 227px;
    font-size: 20px;
  }

  .category {
    font-size: 12px;
    color: #888;
    text-decoration: line-through;

  }

  .product-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .price {
      font-size: 20px;
      font-weight: 700;
      color: #333;
    }

    .cart-btn {
        width: 55px;
        height: 33px;
      background: #333;
      border-radius: 30px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.3s;

      &:hover {
        background: #000;
        transform: scale(1.05);
      }

      &:active {
        transform: scale(0.95);
      }
    }
}
`;
