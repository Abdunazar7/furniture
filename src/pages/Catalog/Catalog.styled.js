import styled from "styled-components";

export const CatalogWrapper = styled.div`
  width: 100%;

  .catalog_p {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    font-weight: 600;
    font-size: 14px;
    color: #454545;
    background-color: #f3f2f2;
    width: 100%;
    min-height: 44px;
    border-radius: 50px;
    padding: 10px 20px;
    margin-bottom: 40px;
    overflow-x: auto; /* Mobil qurilmalar uchun gorizontal skroll */
    white-space: nowrap;

    &::-webkit-scrollbar {
      display: none; /* Skrollbarni yashirish */
    }

    & p {
      margin: 0;
      transition: 0.3s;
      &:hover {
        color: #a7a1a1;
        cursor: pointer;
      }
    }

    @media (max-width: 1024px) {
      justify-content: flex-start;
      gap: 20px;
      border-radius: 10px;
    }
  }

  .navigate {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;

    p {
      font-size: 14px;
      margin: 0;
      cursor: pointer;
      color: #808080;
      &:last-child {
        color: #111;
      }
      &:hover {
        color: #111;
      }
    }
  }

  .Catalog_h1 {
    h1 {
      font-weight: 700;
      font-size: clamp(
        32px,
        5vw,
        64px
      ); /* Ekran o'lchamiga qarab shrift o'zgaradi */
      line-height: 110%;
      margin: 20px 0 40px;
      color: #111;
    }
  }
`;

export const CatalogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const CatalogCard = styled.div`
  background-color: #f6f6f6;
  border-radius: 20px;
  padding: 30px;
  height: 250px;
  position: relative;
  overflow: hidden;
  transition: 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    transform: translateY(-5px);
  }

  .title {
    font-size: 20px;
    font-weight: 600;
    color: #111;
    margin: 0;
    max-width: 60%; /* Rasm ustiga chiqib ketmasligi uchun */
  }

  img {
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 150px;
    height: 150px;
    object-fit: contain;
  }

  span {
    position: absolute;
    left: 30px;
    bottom: 30px;
    font-size: 14px;
    font-weight: 500;
    color: #111;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  @media (max-width: 480px) {
    height: 200px;
    padding: 20px;

    .title {
      font-size: 18px;
    }
    img {
      width: 120px;
      height: 120px;
    }
  }
`;

export const CatalogGrid1 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  margin: 20px 0 100px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
