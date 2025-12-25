import styled from "styled-components";
import { useAppNavigation } from "../../hooks/useAppNavigation";

export const Catalog = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;

  h1 {
    font-size: 32px;
    font-weight: 700;
  }

  .gotoCatalog {
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
