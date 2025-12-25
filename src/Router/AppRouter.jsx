import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import MainLayout from "../layout/MainLayout.jsx"
import Loader from "../components/Loader/index.jsx";


const Basket = lazy(() => import("../pages/Basket/index.jsx"));

const Home = lazy(() => import("../pages/Home/index.jsx"));
const Blog = lazy(() => import("../pages/Blog"));
const Return = lazy(() => import("../pages/Return"));
const Garants = lazy(() => import("../pages/Garants"));
const DeliveryAndPayment = lazy(() => import("../pages/DeliveryAndPayment"));
const Contacts = lazy(() => import("../pages/Contacts"));
const AboutUs = lazy(() => import("../pages/About"));
const AllProducts = lazy(() => import("../pages/AllProducts/index.jsx"));
const Catalog = lazy(() => import("../pages/Catalog/index.jsx"));

function AppRouter() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
        
          <Route index element={<Home />} />
          <Route path="all-products" element={<AllProducts />} />
          <Route path="blog" element={<Blog />} />
          <Route path="return" element={<Return />} />
          <Route path="garants" element={<Garants />} />
          <Route path="delivery-payment" element={<DeliveryAndPayment />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="catalog" element={<Catalog />} />
          <Route path="basket" element={<Basket />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRouter;
