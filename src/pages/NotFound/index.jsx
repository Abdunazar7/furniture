import React from "react";
import { Link } from "react-router-dom";
import * as S from "./NotFound.styled";

const NotFound = () => {
  return (
    <S.NotFoundWrapper>
      <h1 className="error-code">404</h1>

      <p className="error-message">Похоже, ничего не нашлось :(</p>

      <Link to="/" className="home-link">
        На главную
      </Link>
    </S.NotFoundWrapper>
  );
};

export default NotFound;
