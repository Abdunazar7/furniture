import { useNavigate } from "react-router-dom";

export const useAppNavigation = () => {
    const navigate = useNavigate();

    return {
        goToHome: () => navigate("/"),
        goToAbout: () => navigate("/about"),
        goToAllProducts: () => navigate("/all-products"),
        goToBlog: () => navigate("/blog"),
        goToCatalog: () => navigate("/catalog")
    };
};