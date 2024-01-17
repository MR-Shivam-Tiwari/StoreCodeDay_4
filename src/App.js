import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
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
import { CombinedProvider } from "./Components/DataContext";
import PostBuy from "./Components/ExplorePage/PostBuy";
import Navbar from "./Components/HomeComponent/Navbar";

// Define routesWithoutNavbar outside the App component
const routesWithoutNavbar = ["/login", "/register", "/otp", "/password-change", "/forgot-password", "/new-password"];


const App = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("isDarkMode") === "true");

  useEffect(() => {
    // Define routes without Navbar
    const routesWithoutNavbar = ["/login", "/register", "/otp", "/password-change", "/forgot-password", "/new-password"];
    
    // Get the current route
    const currentRoute = window.location.pathname;

    // Check if the current route is in the exclusion list
    setIsNavbarVisible(!routesWithoutNavbar.includes(currentRoute));
  }, []);

  const handleDarkModeChange = () => {
    setIsDarkMode((prevDarkMode) => !prevDarkMode);
    // Optionally, you can save the updated dark mode state to localStorage here
  };
  return (
    <CombinedProvider>
      <Router>
      <div>
          {/* Navbar will only be shown if isNavbarVisible is true */}
          {isNavbarVisible && (
            <Navbar isDarkMode={isDarkMode} onDarkModeChange={handleDarkModeChange} />
          )}
        </div>
        <Routes>
          {/* Define your routes */}
          <Route path="/" element={<Home isDarkMode={isDarkMode} />} />
          <Route path="/product-explore-page" element={<ProductExplore isDarkMode={isDarkMode} />} />
          <Route path="/travel-explore-page" element={<TravelExplore isDarkMode={isDarkMode} />} />
          <Route path="/product-profile" element={<ProductGuideProfile isDarkMode={isDarkMode} />} />
          <Route path="/product-uploaded-post/:id" element={<ProductViewPage isDarkMode={isDarkMode} />} />
          <Route path="/post-view/:id" element={<PostBuy isDarkMode={isDarkMode} />} />
          <Route path="/travel-profile" element={<TravelGuideProfile isDarkMode={isDarkMode} />} />
          <Route path="/travel-guide-post-page" element={<TravelGuidePostPage isDarkMode={isDarkMode} />} />
          <Route path="/dashboard" element={<Dashboard isDarkMode={isDarkMode} />} />
          <Route path="/travel-dashboard" element={<TravelDashboard isDarkMode={isDarkMode} />} />
          <Route path="/add-new-post" element={<AddPost isDarkMode={isDarkMode} />} />
          <Route path="/add-new-travel-post" element={<AddTravelPost isDarkMode={isDarkMode} />} />

          {/* Auth Part */}
          <Route path="/login" element={<Login isDarkMode={isDarkMode} />} />
          <Route path="/register" element={<Register isDarkMode={isDarkMode} />} />
          <Route path="/otp" element={<Otp isDarkMode={isDarkMode} />} />
          <Route path="/password-change" element={<PasswordChanged isDarkMode={isDarkMode} />} />
          <Route path="/forgot-password" element={<Forgot isDarkMode={isDarkMode} />} />
          <Route path="/new-password" element={<NewPassword isDarkMode={isDarkMode} />} />
        </Routes>
        <style>
            {`
          /* Hide the scrollbar for Chrome, Safari, and Edge */
          ::-webkit-scrollbar {
            width: 0px;
            background: transparent;
          }
        `}
          </style>
      </Router>
    </CombinedProvider>
  );
};

export default App;
