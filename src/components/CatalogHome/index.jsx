import React from "react";
import { CatalogCard, CatalogGrid, Catalog } from "./CatalogHome.styled";
import { UpArr } from "../icons";
import { useAppNavigation } from "../../hooks/useAppNavigation";

import catalog1 from "../../assets/lusters/catalog1.png";
import catalog2 from "../../assets/lusters/catalog2.png";
import catalog3 from "../../assets/lusters/catalog3.png";
import catalog4 from "../../assets/lusters/catalog4.png";
import catalog5 from "../../assets/lusters/catalog5.png";
import catalog6 from "../../assets/lusters/catalog6.png";

function CatalogHome(props) {
  const { goToCatalog } = useAppNavigation();

  return (
    <div>
      <Catalog>
        <h1>Каталог</h1>
        <div
          className="gotoCatalog"
          style={{ cursor: "pointer" }}
        >
          <button onClick={goToCatalog}>Весь каталог</button>
          <UpArr />
        </div>
      </Catalog>

      <CatalogGrid>
        {[catalog1, catalog2, catalog3, catalog4, catalog5, catalog6].map(
          (img, index) => (
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
                  ][index]
                }
              </p>
              <img src={img} alt="Catalog item" />
              <span>От 540₽ →</span>
            </CatalogCard>
          )
        )}
      </CatalogGrid>
    </div>
  );
}

export default CatalogHome;
