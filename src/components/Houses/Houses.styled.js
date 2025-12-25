import styled from "styled-components";

export const Houses1 = styled.div`
  display: flex;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  .Catalog {
    display: flex;
    justify-content: space-between;
    padding: 29px 20px 24px 0;
  }

  .Catalog p {
    font-size: 20px;
    font-weight: 700;
  }

  .wrapper {
    border-bottom: 2px solid #f6f6f6;
    padding-bottom: 32px;
  }
`;
