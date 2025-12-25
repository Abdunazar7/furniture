import styled from "styled-components";

export const Production = styled.div`
  display: flex;
  padding-top: 100px;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-top: 50px;
    margin-bottom: 50px;
  }

  & h1 {
    font-weight: 700;
    font-size: 40px;
    padding-right: 330px;

    @media (max-width: 1024px) {
      font-size: 32px;
      padding-right: 100px;
    }

    @media (max-width: 768px) {
      padding-right: 0;
      margin-bottom: 20px;
    }
  }

  & p {
    font-weight: 500;
    font-size: 20px;
    line-height: 150%;
  }
`;
