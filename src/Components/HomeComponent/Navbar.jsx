import { Button } from "@mui/joy";
import { Avatar } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [profileData, setProfileData] = useState({
    name: "",
    profileImage: "",
    about: "",
    instagramLink: "",
    youtubeLink: "",
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await axios.get(
          "https://storecode.onrender.com/api/user/profile"
        );
        setProfileData(response.data || {});
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchProfileData();
  }, []); 
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(
    window.innerWidth <= 767
  );
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setMobileMenuOpen(window.innerWidth <= 767);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [userName, setUserName] = useState("");

  useEffect(() => {
    const checkLoginStatus = () => {
      const user = localStorage.getItem("user");

      if (user) {
        // Parse the user object (assuming it has a "name" property)
        const parsedUser = JSON.parse(user);
        setUserName(parsedUser.name || "");
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    };

    checkLoginStatus();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    setLoggedIn(false);
    setUser(null);
    window.location.href = "/";
  };


  return (
    <div>
      <div className="text-warning shadow" style={{ backgroundColor: "#fff" }}>
        <nav className="navbar navbar-expand-lg">
          <div className="container d-flex justify-content-between">
            <div className="d-flex">
              <div className="d-flex gap-2">
                <Button
                  variant="soft"
                  color="none"
                  className="navbar-toggler px-0 "
                  type="button"
                  onClick={toggleMobileMenu}
                  style={{
                    display: window.innerWidth <= 767 ? "block" : "none",
                  }}
                >
                  <span className="navbar-toggler-icon fs-5 text-dark"></span>
                </Button>
                <img
                  src="https://storecode.in/images/logo-nav.png"
                  alt="logo"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
              <ul
                className="navbar-nav"
                style={{ display: isMobileMenuOpen ? "none" : "flex" }}
              >
                <li className="nav-item">
                  <Link
                    className={`nav-link  ${
                      location.pathname === "/" && "active"
                    }`}
                    to="/"
                  >
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link  ${
                      location.pathname === "/about" && "active"
                    }`}
                    to="/about"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="d-flex position-relative">
              {isLoggedIn ? (
                <div className="d-flex align-items-center gap-2">
                <Link to="/Product-profile" className="nav-link">
                <Avatar alt={userName} src={profileData.profileImage} />
                </Link>
                {/* Logout button */}
                <button
                  className="nav-link"
                  style={{
                    color: "#df439b",
                    fontWeight: "700",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </div>
              ) : (
                <form className="d-flex align-items-center gap-2">
                  <Link
                    style={{ color: "#518EF8", fontWeight: "700" }}
                    className={`nav-link  ${
                      location.pathname === "/login" && "active"
                    }`}
                    to="/login"
                  >
                    Login
                  </Link>
                  <Link
                    style={{ color: "#df439b", fontWeight: "700" }}
                    className={`nav-link  ${
                      location.pathname === "/register" && "active"
                    }`}
                    to="/register"
                  >
                    Register
                  </Link>
                </form>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
