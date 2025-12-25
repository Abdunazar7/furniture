import React from "react";
import hero from "../../assets/hero.png";
import { HomePage, Home1 } from "./Home.styled";

import Hauses1 from "../../components/Houses";

import Text from "../../components/Text";
import Lamp from "../../components/Lamp";
import NornLight from "../../components/NornLight";
import Brands from "../../components/Brands";
import CatalogHome from "../../components/CatalogHome";

function Home() {
  return (
    <Home1>
      <div className="home-container">
        <HomePage>
          <div className="Home_div">
            <p>Скидка 15%</p>
            <p>на все подвесные</p>
            <p>светильники</p>
            <p className="Home_color">до 5 февраля</p>
          </div>
          <div className="Home_img">
            <img src={hero} alt="Hero lamp" />
          </div>
        </HomePage>

        <CatalogHome />

        <NornLight />

        <Lamp />

        <Brands />

        <Hauses1 />

        <Text />
      </div>
    </Home1>
  );
}

export default Home;
