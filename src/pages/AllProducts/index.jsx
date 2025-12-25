import React from "react";
import { RightArr } from "../../components";
import { useAppNavigation } from "../../hooks/useAppNavigation";
import { All } from "./AllProducts.styled";
import Lamp from "../../components/Lamp";

function AllProducts(props) {
  const { goToHome } = useAppNavigation();

  return (
    <All>
      <div className="navigate">
        <p onClick={goToHome}>Главная</p>
        <RightArr />
        <p>Популярные товары</p>
      </div>
      <h1>Популярные товары</h1>

      <Lamp />
    </All>
  );
}

export default AllProducts;
