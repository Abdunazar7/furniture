import React from 'react';
import { ProductCard, ProductsGrid } from './Lamp.styled';
import { HeartIcon, Karzinka } from '../icons';
import product from "../../assets/product.png";
import { useAppNavigation } from '../../hooks/useAppNavigation';

function Lamp(props) {
    const { goToDetail } = useAppNavigation();

    const products = [
        {
          id: 1,
          name: "Встраиваемый светильник Novotech",
          price: "6 399₽",
          image: product,
        },
        {
          id: 2,
          name: "Встраиваемый светильник Novotech",
          price: "6 399₽",
          image: product,
        },
        {
          id: 3,
          name: "Встраиваемый светильник Novotech",
          price: "6 399₽",
          image: product,
        },
        {
          id: 4,
          name: "Встраиваемый светильник Novotech",
          price: "6 399₽",
          image: product,
        },
        {
          id: 5,
          name: "Встраиваемый светильник Novotech",
          price: "6 399₽",
          image: product,
        },
        {
          id: 6,
          name: "Встраиваемый светильник Novotech",
          price: "6 399₽",
          image: product,
        },
        {
          id: 7,
          name: "Встраиваемый светильник Novotech",
          price: "6 399₽",
          image: product,
        },
        {
          id: 8,
          name: "Встраиваемый светильник Novotech",
          price: "6 399₽",
          image: product,
        },
      ];

    return (
      <div>
        <ProductsGrid>
          {products.map((product) => (
            <ProductCard key={product.id}>
              {/* Bu tugma detailga o'tmasligi kerak, faqat Like bosishi kerak */}
              <div className="product-heart">
                <HeartIcon />
              </div>

              {/* Rasm bosilganda detailga o'tish */}
              <div
                className="product-img"
                onClick={goToDetail}
                style={{ cursor: "pointer" }}
              >
                <img src={product.image} alt={product.name} />
              </div>

              {/* Nomi bosilganda detailga o'tish */}
              <p onClick={goToDetail} style={{ cursor: "pointer" }}>
                {product.name}
              </p>

              <span className="category">7 000₽</span>

              <div className="product-bottom">
                <span className="price">{product.price}</span>

                {/* Savat tugmasi ham detailga o'tmasligi kerak */}
                <button className="cart-btn">
                  <Karzinka />
                </button>
              </div>
            </ProductCard>
          ))}
        </ProductsGrid>
      </div>
    );
}

export default Lamp;