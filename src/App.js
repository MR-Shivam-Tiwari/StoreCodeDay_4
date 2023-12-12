import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ProductExplore from "./Components/ExplorePage/ProductExplore";
import TravelExplore from "./Components/ExplorePage/TravelExplore";
import ProductProfile from "./Components/ExplorePage/ProductProfile";
import TravelProfile from "./Components/ExplorePage/TravelProfile";
import ProductViewPage from "./Components/ViewPage/ProductViewPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<Home />} />
        <Route path="/product-guide-page" element={<ProductExplore />} />
        <Route path="/travel-guide-page" element={<TravelExplore />} />
        <Route path="/product-profile" element={<ProductProfile />} />
        <Route path="/product-uploaded-post" element={<ProductViewPage />} />
        <Route path="/travel-profile" element={<TravelProfile />} />
      </Routes>
    </Router>
  );
};

export default App;
