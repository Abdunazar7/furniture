import styled from "styled-components";

export const HomeWrapper = styled.div`
  padding-bottom: 80px;
  width: 100%;
  overflow-x: hidden;

  .home-container {
    width: 100%;
  }

  .hero-swiper {
    padding-bottom: 0;
    border-radius: 30px;
    overflow: hidden;
    margin-bottom: 50px;
  }
  
  .swiper-pagination {
    color: black;
    position: absolute;
    bottom: 30px !important;
    right: 50px !important;
    left: auto !important;
    width: auto !important;
    text-align: right;
    z-index: 10;
  }

  .swiper-pagination-bullet {
    width: 10px;
    height: 10px;
    background: #575757ff ! important;
    opacity: 0.4;
    margin: 0 6px !important;
    transition: all 0.3s;
  }

  .swiper-pagination-bullet-active {
    background: #fff;
    opacity: 1;
    transform: scale(1.2);
  }
`;

export const SlideCard = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #f2f2f2;
  width: 100%;
  height: 450px;
  position: relative;

.text-content {
    padding: 60px 0 60px 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      font-size: 56px;
      font-weight: 700;
      line-height: 1.1;
      margin: 0;
      color: #454545; 
      letter-spacing: -0.02em;
    }

    .badge {
      display: inline-block;
      background-color: #454545;
      color: white;
      border-radius: 100px;
      padding: 12px 35px;
      font-size: 48px;
      margin-top: 15px;
      font-weight: 500;
      width: fit-content;
      margin-bottom: 20px; 
    }
  }

  .image-wrapper {
    flex: 1;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    height: 100%;
    padding-right: 80px;
    padding-top: 0;

    img {
      max-height: 100%;
      width: auto;
      max-width: 400px;
      object-fit: contain;
      margin-top: 0;
      display: block;
    }
  }

  @media (max-width: 1024px) {
    height: auto;
    flex-direction: column;
    text-align: center;
    padding-bottom: 50px;

    .text-content {
      padding: 40px 20px 20px;
      align-items: center;
      display: flex;
      flex-direction: column;

      h1 {
        font-size: 36px;
      }
    }

    .image-wrapper {
      justify-content: center;
      padding-right: 0;
      height: 300px;

      img {
        max-width: 300px;
      }
    }

    .swiper-pagination {
      right: 0 !important;
      left: 0 !important;
      bottom: 15px !important;
      text-align: center;
    }
  }
`;
