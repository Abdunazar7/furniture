import styled from "styled-components";

export const All = styled.div`
  margin: 0 auto 100px;

  .navigate {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-top: 40px;

    p {
      font-size: 14px;
      font-weight: 500;
      color: #808080;
      margin: 0;
      transition: 0.3s;

      &:last-child {
        color: #111;
        cursor: default;
      }

      &:first-child:hover {
        color: #111;
        cursor: pointer;
      }
    }
  }

  h1 {
    font-weight: 700;
    font-size: clamp(
      32px,
      5vw,
      64px
    );
    padding-top: 40px;
    padding-bottom: 60px;
    margin: 0;
    color: #111;

    @media (max-width: 768px) {
      padding-top: 30px;
      padding-bottom: 40px;
    }
  }
`;
