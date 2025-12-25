import styled from "styled-components";

export const CatalogWrapper = styled.div`
  .catalog_p {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 52px;
    font-weight: 600;
    font-size: 16px;
    color: #454545;
    background-color: #f3f2f2ff;
    width: 1301px;
    height: 44px;
    border-radius: 50px;
    margin-top: -50px;

    & p:hover {
      color: #a7a1a1ff;
      cursor: pointer;
    }
  }

  .navigate {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 48px;

    & p:hover {
      color: #bbb8b8ff;
      cursor: pointer;
    }
  }

  .Catalog_h1 {
    font-weight: 700;
    font-size: 34px;
    line-height: 110%;
    text-transform: capitalize;
    margin-top: 20px;
    margin-bottom: 60px;
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
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
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

export const CatalogGrid1 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  padding-top: 20px;
  margin-bottom: 106px;
`;
