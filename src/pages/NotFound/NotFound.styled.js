import styled from "styled-components";

export const NotFoundWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(
    100vh - 400px
  );
  background-color: #fff;
  text-align: center;
  padding: 60px 20px;

  .error-code {
    font-size: clamp(
      120px,
      25vw,
      400px
    );
    font-weight: 700;
    color: #f3f3f3;
    line-height: 1;
    margin: 0;
  }

  .error-message {
    font-size: 20px;
    font-weight: 500;
    color: #111;
    margin: 20px 0 40px 0;
  }

  .home-link {
    background-color: #333;
    color: #fff;
    padding: 16px 50px;
    border-radius: 50px;
    text-decoration: none;
    font-size: 16px;
    font-weight: 600;
    transition: 0.3s ease;

    &:hover {
      background-color: #000;
      transform: translateY(-2px);
    }
  }

  @media (max-width: 768px) {
    min-height: 400px;
    .error-message {
      font-size: 16px;
    }
  }
`;
