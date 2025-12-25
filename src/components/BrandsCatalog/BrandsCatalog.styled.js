import styled from "styled-components";

export const BrandsSection = styled.section`
  margin-top: 100px;
  padding: 0 20px;

  .brands-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    h2 {
      font-size: 32px;
      font-weight: 700;
      color: #333;
    }

    .arrows {
      display: flex;

      button {
        background-color: transparent;
        cursor: pointer;
        transition: 0.3s;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%; 
        border: none;
        
        width: 45px;  
        height: 45px;

        
        
        svg {
          width: 28px;
          height: 28px;
        }
      }
    }
  }

  .brands-slider {
    width: 100%;
    padding: 10px 0;
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
  background: #fff;

  img {
    max-width: 100%;
    max-height: 80px;
    filter: grayscale(100%);
    opacity: 0.6;
    transition: 0.4s ease;
  }

  &:hover {
    border-color: #333;
    box-shadow: 0 4px 20px rgba(0,0,0,0.05);
    
    img {
      filter: grayscale(0);
      opacity: 1;
    }
  }
`;