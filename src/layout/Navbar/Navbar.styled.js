import styled from "styled-components";

export const NavbarWrapper = styled.nav`
    padding: 12px;
    margin-bottom: 68px;

    .mobile-content {
        display: none;
    }

    @media screen and (max-width: 900px) {
        .mobile-content {
            display: block;
        }

        .desktop-content {
            display: none;
        }
    }

    .mobile-opening-content {
        display: none;
    }

    .mobile-opening-content.visible {
        display: block;
    }
`;