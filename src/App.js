import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import ProductExplore from "./Components/ExplorePage/ProductExplore";
import TravelExplore from "./Components/ExplorePage/TravelExplore";
import ProductProfile from "./Components/ExplorePage/ProductProfile";
import TravelProfile from "./Components/ExplorePage/TravelProfile";
import ProductViewPage from "./Components/ViewPage/ProductViewPage";
import TravelViewPage from "./Components/ViewPage/TravelViewPage";
import Dashboard from "./Components/DashBoard/Dashboard";
import AddPost from "./Components/DashBoard/AddPost";

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
        <Route path="/travel-uploaded-post" element={<TravelViewPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-new-post" element={<AddPost />} />
      </Routes>
    </Router>
  );
};

export default App;
