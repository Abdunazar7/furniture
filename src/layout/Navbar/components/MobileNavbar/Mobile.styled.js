import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const MobileNavWrapper = styled.div`
  display: none;
  padding: 15px 20px;
  background: #fff;

  @media (max-width: 900px) {
    display: block;
  }

  .mobile-top-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;

    .left-section {
      display: flex;
      align-items: center;
      gap: 15px;

      button {
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        padding: 0;
        display: flex;
        align-items: center;
      }

      img {
        height: 20px;
      }
    }

    .right-section {
      display: flex;
      align-items: center;
      gap: 15px;

      .icon-btn {
        position: relative;
        background: none;
        border: none;
        cursor: pointer;

        .badge {
          position: absolute;
          top: -5px;
          right: -8px;
          background: #ff0000;
          color: white;
          font-size: 10px;
          font-weight: bold;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }

  .mobile-search {
    position: relative;
    width: 100%;

    input {
      width: 100%;
      padding: 12px 40px 12px 20px;
      border-radius: 50px;
      border: 1px solid #ccc;
      outline: none;
      font-size: 14px;
    }

    .search-icon {
      position: absolute;
      right: 15px;
      top: 50%;
      transform: translateY(-50%);
      color: #999;
    }
  }
`;

export const MenuOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: #fff;
  z-index: 1000;
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  .menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    .close-btn {
      font-size: 28px;
      background: none;
      border: none;
      cursor: pointer;
    }

    .header-icons {
      display: flex;
      gap: 20px;
      align-items: center;

      .badge-wrap {
        position: relative;
        .badge {
          position: absolute;
          top: -5px;
          right: -8px;
          background: #ff0000;
          color: white;
          font-size: 10px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }

  .menu-links {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
  }

  .catalog-btn-wrapper {
    margin-bottom: 30px;
    button {
      width: 100%;
      background: #333;
      color: white;
      padding: 15px;
      border-radius: 50px;
      border: none;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      cursor: pointer;
    }
  }

  .contact-info {
    text-align: center;
    margin-top: auto;
    margin-bottom: 20px;

    .phone {
      font-size: 20px;
      font-weight: bold;
      display: block;
      margin-bottom: 5px;
      color: #000;
      text-decoration: none;
    }
    .call-req {
      color: #999;
      font-size: 14px;
      cursor: pointer;
    }
  }
`;

export const MobileLink = styled(NavLink)`
  font-size: 16px;
  color: #333;
  text-decoration: none;
  padding: 15px 0;
  border-bottom: 1px solid #f0f0f0;
  font-weight: 500;

  &:last-child {
    border-bottom: none;
  }
`;
