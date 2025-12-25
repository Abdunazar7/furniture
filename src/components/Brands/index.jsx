import React from "react";
import { BrandCard, BrandsSection } from "./Brands.styled";

import brand1 from "../../assets/brands/brand1.svg";
import brand2 from "../../assets/brands/brand2.svg";
import brand3 from "../../assets/brands/brand3.svg";
import { Left, Right } from "../icons";

function Brands(props) {
  return (
    <div>
      <BrandsSection>
        <div className="brands-header">
          <h2>Только проверенные бренды</h2>
          <div className="arrows">
            <button>
              <Left />
            </button>
            <button>
              <Right />
            </button>
          </div>
        </div>
        <div className="brands-grid">
          {[brand1, brand2, brand3, brand1].map((b, i) => (
            <BrandCard key={i}>
              <img src={b} alt="brand" />
            </BrandCard>
          ))}
        </div>
      </BrandsSection>
    </div>
  );
}

export default Brands;
