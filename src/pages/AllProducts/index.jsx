import React from "react";
import { RightArr } from "../../components";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { All } from "./AllProducts.styled";
import Lamp from "../../components/Lamp";

function AllProducts() {
  const { goToHome } = useAppNavigation();

  return (
    <div className="container">
      <All>
        <div className="navigate">
          <p onClick={goToHome}>Главная</p>
          <RightArr />
          <p>Популярные товары</p>
        </div>

        <h1>Популярные товары</h1>

        <Lamp />
      </All>
    </div>
  );
}

export default AllProducts;
