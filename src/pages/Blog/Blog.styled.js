import styled from "styled-components";

export const Blog1 = styled.div`
  max-width: 1320px;
  width: 100%;
  margin: 0 auto;
  padding: 0 20px 100px;
  box-sizing: border-box;
  overflow-x: hidden;

  & h1 {
    font-weight: 700;
    font-size: 64px;
    line-height: 110%;
    margin-top: 30px;
    margin-bottom: 60px;
    color: #111;

    @media (max-width: 768px) {
      font-size: 32px;
      margin-bottom: 30px;
    }
  }

  @media (max-width: 768px) {
    padding: 0 15px 50px;
  }
`;
