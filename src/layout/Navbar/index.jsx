import React from "react";
import NavbarTop from "./components/NavbarTop";
import NavbarMain from "./components/NavbarMain";
import MobileNavbar from "./components/MobileNavbar";

import { NavbarWrapper } from "./Navbar.styled";

function Navbar(props) {
  return (
    <NavbarWrapper>
      <div className="container desktop-content">
        <NavbarTop />
        <NavbarMain />
      </div>

      <MobileNavbar />
    </NavbarWrapper>
  );
}

export default Navbar;
