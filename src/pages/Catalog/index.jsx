import React from "react";
import {
  CatalogCard,
  CatalogGrid,
  CatalogGrid1,
  CatalogWrapper,
} from "./Catalog.styled";
import { RightArr } from "../../components";
import { useAppNavigation } from "../../hooks/useAppNavigation";

import catalog2 from "../../assets/lusters/catalog2.png";
import catalog1 from "../../assets/lusters/catalog1.png";
import catalog3 from "../../assets/lusters/catalog3.png";
import catalog4 from "../../assets/lusters/catalog4.png";
import catalog5 from "../../assets/lusters/catalog5.png";
import catalog6 from "../../assets/lusters/catalog6.png";
import catalog7 from "../../assets/lusters/catalog7.png";
import catalog8 from "../../assets/lusters/catalog8.png";
import catalog9 from "../../assets/lusters/catalog9.png";
import catalog10 from "../../assets/lusters/catalog10.png";
import catalog11 from "../../assets/lusters/catalog11.png";
import BrandsCalatog from "../../components/BrandsCatalog";
import Houses from "../../components/Houses";
import Text from "../../components/Text";

function Catalog(props) {
  const { goToHome } = useAppNavigation();

  return (
    <div className="container">
      <CatalogWrapper>
        <div className="catalog_p">
          <p>Светильники</p>
          <p>Люстры</p>
          <p>Лампы</p>
          <p>Настольные лампы</p>
          <p>Ночники</p>
          <p>Подстветка</p>
          <p>Уличное освещение</p>
          <p>Мебельные установки</p>
        </div>
        <div className="navigate">
          <p onClick={goToHome}>Главная</p>
          <RightArr />
          <p>Каталог</p>
        </div>
        <div className="Catalog_h1">
          <h1>Каталог</h1>
        </div>
        <CatalogGrid>
          {[
            catalog1,
            catalog2,
            catalog3,
            catalog4,
            catalog5,
            catalog6,
            catalog7,
            catalog8,
            catalog9,
          ].map((img, index) => (
            <CatalogCard key={index}>
              <p className="title">
                {
                  [
                    "Люстры",
                    "Светильники",
                    "Бра",
                    "Торшеры",
                    "Настольные лампы",
                    "Споты",
                    "Трековые светильники",
                    "Уличные светильники",
                    "Технические светильники",
                  ][index]
                }
              </p>
              <img src={img} alt="Catalog item" />
              <span>От 540₽ →</span>
            </CatalogCard>
          ))}
        </CatalogGrid>
        <CatalogGrid1>
          {[catalog10, catalog11].map((img, index) => (
            <CatalogCard key={index}>
              <p className="title">
                {["Светодиодные ленты", "Комплектуюшие"][index]}
              </p>
              <img src={img} alt="Catalog item" />
              <span>От 540₽ →</span>
            </CatalogCard>
          ))}
        </CatalogGrid1>

        <BrandsCalatog />

        <Houses />

        <Text />
      </CatalogWrapper>
    </div>
  );
}

export default Catalog;
