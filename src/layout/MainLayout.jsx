import React from "react";
import { LayoutWrapper, LayoutWrapper_main } from "./Layout.styled";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

function MainLayout(props) {
  return (
    <LayoutWrapper>
      <div>
        <Navbar />
        <LayoutWrapper_main>
          <Outlet />
        </LayoutWrapper_main>
      </div>
      <Footer />
    </LayoutWrapper>
  );
}

export default MainLayout;
