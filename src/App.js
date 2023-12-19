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
import TravelDashboard from "./Components/DashBoard/TravelDashboard";
import AddTravelPost from "./Components/DashBoard/AddTravelPost";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import Otp from "./Components/Auth/Otp";
import Forgot from "./Components/Auth/Forgot";
import NewPassword from "./Components/Auth/NewPassword";
import PasswordChanged from "./Components/Auth/PasswordChanged";
import ProductGuideProfile from "./Components/ExplorePage/ProductGuideProfile";
import TravelGuideProfile from "./Components/ExplorePage/TravelGuideProfile";
import TravelGuidePostPage from "./Components/ViewPage/TravelGuidePostPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define your routes */}
        <Route path="/" element={<Home />} />
        <Route path="/product-guide-page" element={<ProductExplore />} />
        <Route path="/travel-guide-page" element={<TravelExplore />} />
        <Route path="/product-profile" element={<ProductGuideProfile />} />
        <Route path="/product-uploaded-post" element={<ProductViewPage />} />
        <Route path="/travel-profile" element={<TravelGuideProfile />} />
        <Route path="/travel-uploaded-post" element={<TravelViewPage />} />
        <Route path="/travel-guide-post-page" element={<TravelGuidePostPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/travel-dashboard" element={<TravelDashboard />} />
        <Route path="/add-new-post" element={<AddPost />} />
        <Route path="/add-new-travel-post" element={<AddTravelPost />} />

        {/* Auth Part */}
        


        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/password-change" element={<PasswordChanged />} />
        <Route path="/forgot-password" element={<Forgot />} />
        <Route path="/new-password" element={<NewPassword />} />
      </Routes>
    </Router>
  );
};

export default App;