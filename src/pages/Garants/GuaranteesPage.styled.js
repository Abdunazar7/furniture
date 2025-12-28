import styled from "styled-components";

export const GuaranteesWrapper = styled.main`
  padding: 40px 0 100px;
  background-color: #fff;
`;

export const MainLayout = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;
  margin-top: 20px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const TitleBox = styled.div`
  flex: 0 0 450px;

  h1 {
    font-size: 64px;
    font-weight: 700;
    margin: 0;
    line-height: 1.1;
    color: #111;

    @media (max-width: 1024px) {
      font-size: 40px;
    }
  }
`;

export const ContentBox = styled.div`
  flex: 1;
  max-width: 600px;

  h2 {
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 25px;
    color: #111;
  }

  p {
    font-size: 18px;
    line-height: 1.5;
    color: #111;
  }
`;

export const GuaranteeList = styled.ul`
  list-style: none;
  padding: 0;

  li {
    font-size: 18px;
    line-height: 1.6;
    color: #111;
    position: relative;
    padding-left: 20px;

    &::before {
      content: "•";
      position: absolute;
      left: 0;
      color: #111;
      font-weight: bold;
    }
  }
`;
