import styled from "styled-components";

export const PageWrapper = styled.main`
  padding: 40px 0 100px 0;
  background: #fff;

`;

export const MainContent = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 100px;
  margin-bottom: 80px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const TitleSide = styled.div`
  flex: 1;
  h1 {
    font-size: 64px;
    font-weight: 700;
    line-height: 1.1;
    color: #111;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 40px;
    }
  }
`;

export const TextSide = styled.div`
  flex: 1.5;
  max-width: 700px;
`;

export const InfoSection = styled.div`
  margin-bottom: 50px;

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
    margin-bottom: 25px;

    a {
      text-decoration: none;
      font-weight: 600;
      opacity: 0.8;
      &:hover {
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 16px;
    }
  }
`;

export const MapContainer = styled.div`
  width: 100%;
  height: 600px;
  border-radius: 0; /* Dizaynda xarita chekkaga yopishgan bo'lsa */
  overflow: hidden;
  margin-top: 60px;

  iframe {
    width: 100%;
    height: 100%;
    border: 0;
  }

  @media (max-width: 768px) {
    height: 350px;
  }
`;
