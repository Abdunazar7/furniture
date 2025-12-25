import React from "react";
import { Houses1 } from "./Houses.styled";
import { UpArr } from "../icons";
import { WhySection } from "../NornLight/NornLight.styled";
import { useAppNavigation } from "../../hooks/useAppNavigation";

import house1 from "../../assets/houses/house1.png";
import house2 from "../../assets/houses/house2.png";
import house3 from "../../assets/houses/house3.png";

function Houses({ showHeader = true }) {
  const { goToBlog } = useAppNavigation();

  return (
    <div>
      {showHeader && (
        <WhySection style={{ marginTop: "100px" }}>
          <div className="sectionHeader">
            <h2>Блог</h2>
            <button onClick={goToBlog}>
              Перейти в блог <UpArr />
            </button>
          </div>
        </WhySection>
      )}

      <Houses1>
        <div className="wrapper">
          <img src={house1} alt="" />
          <div className="Catalog">
            <p>Как правильно освещать дом снаружи?</p>
            <UpArr />
          </div>
          <span>01.01.2024</span>
        </div>

        <div className="wrapper">
          <img src={house2} alt="" />
          <div className="Catalog">
            <p>Как правильно освещать дом снаружи?</p>
            <UpArr />
          </div>
          <span>01.01.2024</span>
        </div>

        <div className="wrapper">
          <img src={house3} alt="" />
          <div className="Catalog">
            <p>Как правильно освещать дом снаружи?</p>
            <UpArr />
          </div>
          <span>01.01.2024</span>
        </div>
      </Houses1>
    </div>
  );
}

export default Houses;
