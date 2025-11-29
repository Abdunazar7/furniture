import { BrowserRouter, Route, Routes } from "react-router-dom"
import AbouteUs from "./pages/AbouteUs"
import ShoppingAnd from "./pages/ShoppingAnd"
import Navbar from "./pages/Navbar";


function App() {

  return (
    <BrowserRouter>
      <div className="container">
        <Navbar/>
      <Routes>
        <Route path="/oкомпании" element={<AbouteUs />} />
        <Route path="/доставкаИоплата" element={<ShoppingAnd />} />
      </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App
