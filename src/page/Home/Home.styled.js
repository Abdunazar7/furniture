import styled from "styled-components";

export const Homes = styled.div`
  padding-bottom: 80px;
  
  .controller {
    max-width: 1300px;
    margin: 0 auto;
    padding: 0 20px;
  }
`;

export const HomePage = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f6f6f6;
  border-radius: 20px;
  padding: 60px 100px;
  margin-bottom: 60px;

  .Home_div {
    p {
      font-size: 64px;
      font-weight: 700;
      line-height: 1.1;
      margin: 0;
      color: #333;
    }

    .Home_color {
      display: inline-flex;
      background-color: #333;
      color: white;
      border-radius: 100px;
      padding: 15px 40px;
      font-size: 24px;
      margin-top: 30px;
      font-weight: 400;
      width: auto;
      height: auto;
    }
  }

  .Home_img {
    max-width: 450px;
    img {
      width: 100%;
    }
  }

  @media (max-width: 1024px) {
    padding: 40px;
    flex-direction: column;
    text-align: center;
    .Home_div { margin: 0 0 30px 0; width: 100%; font-size: 40px; }
  }
`;

export const Katalog = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;

  h1 {
    font-size: 32px;
    font-weight: 700;
  }

  .Home_strelka {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 30px;
    border: 1px solid #333;
    border-radius: 100px;
    transition: 0.3s;
    
    &:hover {
      background: #333;
      color: #fff;
    }
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
    font-size: 16px;
    color: inherit;
  }
`;

export const CatalogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;

export const CatalogCard = styled.div`
  background-color: #f6f6f6;
  border-radius: 20px;
  padding: 30px;
  height: 250px;
  position: relative;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 10px 20px rgba(0,0,0,0.05);
  }

  .title {
    font-size: 20px;
    font-weight: 600;
  }

  img {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }

  span {
    position: absolute;
    left: 30px;
    bottom: 30px;
    font-size: 14px;
    color: #888;
  }
`;

export const WhySection = styled.section`
  margin-top: 80px;

  .header {
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
    }
  }
`;

export const WhyGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
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
    box-shadow: 0 10px 30px rgba(0,0,0,0.05);
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
  width: 300px;

  .product-yurakcha{
    padding-left: 240px;
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

export const BrandsSection = styled.section`
  margin-top: 100px;
  
  .brands-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 30px;
      
      h2 {
          font-size: 32px;
          font-weight: 700;
        }
        
        .arrows {
            display: flex;
            gap: 12px;
            
        button {
            background-color: white;
            cursor: pointer;
            transition: 0.3s;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
      }
    }
  }

  .brands-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }
`;

export const BrandCard = styled.div`
  border: 1px solid #f2f2f2;
  height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  transition: 0.3s;

  img {
    max-width: 100%;
    max-height: 100%;
    filter: grayscale(100%); 
    opacity: 0.5;
    transition: 0.3s;
  }

  &:hover {
    border-color: #333;
    img {
      filter: grayscale(0);
      opacity: 1;
    }
  }
`;


export const CatalogUy = styled.div `
    
`