import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  MobileNavWrapper,
  MenuOverlay,
  MobileLink,
} from "./Mobile.styled";

import {
  CartIcon,
  HeartIcon,
  NetworkIcon,
  SearchIcon,
  CatalogIcon,
} from "../../../../components";
import { useAppNavigation } from "../../../../hooks/useAppNavigation";

function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
  

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <MobileNavWrapper>
      <div className="mobile-top-bar">
        <div className="left-section">
          <button onClick={() => setIsOpen(true)}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 12H21"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 6H21"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M3 18H21"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <img src="/logo.svg" alt="Nornlight" onClick={() => navigate("/")} />
        </div>

        <div className="right-section">
          <button className="icon-btn" onClick={() => navigate("/favourites")}>
            <HeartIcon />
          </button>
          <button className="icon-btn" onClick={() => navigate("/basket")}>
            <CartIcon />
            <span className="badge">1</span>{" "}
          </button>
        </div>
      </div>

      <div className="mobile-search">
        <input type="text" placeholder="Поиск по товарам" />
        <span className="search-icon">
          <SearchIcon />
        </span>
      </div>

      {isOpen && (
        <MenuOverlay>
          <div className="menu-header">
            <button className="close-btn" onClick={() => setIsOpen(false)}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <div className="header-icons">
              <HeartIcon
                onClick={() => {
                  navigate("/favourites");
                  setIsOpen(false);
                }}
              />
              <NetworkIcon
                onClick={() => {
                  navigate("/compare");
                  setIsOpen(false);
                }}
              />
              <div
                className="badge-wrap"
                onClick={() => {
                  navigate("/basket");
                  setIsOpen(false);
                }}
              >
                <CartIcon />
                <span className="badge">1</span>
              </div>
            </div>
          </div>

          <div className="menu-links">
            <MobileLink to="/about" onClick={handleLinkClick}>
              О компании
            </MobileLink>
            <MobileLink to="/delivery-payment" onClick={handleLinkClick}>
              Доставка и оплата
            </MobileLink>
            <MobileLink to="/return" onClick={handleLinkClick}>
              Возврат
            </MobileLink>
            <MobileLink to="/garants" onClick={handleLinkClick}>
              Гарантии
            </MobileLink>
            <MobileLink to="/contacts" onClick={handleLinkClick}>
              Контакты
            </MobileLink>
            <MobileLink to="/blog" onClick={handleLinkClick}>
              Блог
            </MobileLink>
          </div>

          <div className="catalog-btn-wrapper">
            <button
              onClick={() => {
                navigate("/catalog");
                setIsOpen(false);
              }}
            >
              <CatalogIcon />
              Каталог
            </button>
          </div>

          <div className="contact-info">
            <a href="tel:88008904656" className="phone">
              8 (800) 890-46-56
            </a>
            <span className="call-req">Заказать звонок</span>
          </div>
        </MenuOverlay>
      )}
    </MobileNavWrapper>
  );
}

export default MobileNavbar;
