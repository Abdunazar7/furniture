import styled from "styled-components";

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

