import React, { useEffect, useLayoutEffect, useState } from "react";
import { styled } from "@mui/material/styles";

import Switch from "@mui/material/Switch";
import { FormControlLabel, FormGroup } from "@mui/material";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { Button, DialogTitle, Drawer, ModalClose } from "@mui/joy";
import { Avatar } from "antd";
import { useNavigate } from "react-router-dom";
function Navbar({ isDarkMode, onDarkModeChange }) {
  const location = useLocation();
  const navigate = useNavigate();
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
  // const [isDarkMode, setIsDarkMode] = useState(
  //   localStorage.getItem("isDarkMode") === "true" ? true : false
  // );

  const handleSwitchChange = () => {
    onDarkModeChange();
  };

  const [isReloading, setReloading] = useState(false);

  // ... (other state and useEffect hooks)

  useLayoutEffect(() => {
    // Save the dark mode state to localStorage whenever it changes
    localStorage.setItem("isDarkMode", isDarkMode);

    // Apply dark mode styles only when not reloading
    if (!isReloading) {
      document.documentElement.classList.toggle("dark-mode", isDarkMode);
    }
  }, [isDarkMode, isReloading]);

  // Save the dark mode state to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("isDarkMode", isDarkMode);
  }, [isDarkMode]); // Added state for dark mode
  const [userName, setUserName] = useState("");
  const [mostSearchedText, setMostSearchedText] = useState("Black");

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
  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 62,
    height: 34,
    padding: 7,
    "& .MuiSwitch-switchBase": {
      margin: 1,
      padding: 0,
      transform: "translateX(6px)",
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(22px)",
        "& .MuiSwitch-thumb:before": {
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
            "#fff"
          )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
        },
        "& + .MuiSwitch-track": {
          opacity: 1,
          backgroundColor:
            theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
        },
      },
    },
    "& .MuiSwitch-thumb": {
      backgroundColor: theme.palette.mode === "dark" ? "#003892" : "#001e3c",
      width: 32,
      height: 32,
      "&::before": {
        content: "''",
        position: "absolute",
        width: "100%",
        height: "100%",
        left: 0,
        top: 0,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          "#fff"
        )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
      },
    },
    "& .MuiSwitch-track": {
      opacity: 1,
      backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#aab4be",
      borderRadius: 20 / 2,
    },
  }));
  const [open, setOpen] = React.useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Check the window width and update the isHidden state accordingly
      setIsHidden(window.innerWidth < 400);
    };

    // Initial check on component mount
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div>
      <div>
        <div
          className="text-warning shadow"
          style={{ backgroundColor: isDarkMode ? "black" : "white" }}
        >
          <nav className="navbar navbar-expand-lg">
            <div className="container d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <div className="d-flex align-items-center gap-2">
                  
                  <Button
                    variant="soft"
                    color="none"
                    className=" px-0 d-lg-none "
                    type="button"
                    onClick={() => setOpen(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      className="bi bi-list"
                      viewBox="0 0 16 16"
                      style={{
                        fill: isDarkMode ? "white" : "black", // Inverted colors for better readability
                        fillRule: "evenodd",
                      }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                      />
                    </svg>
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
                      style={{ color: isDarkMode ? "white" : "black" }}
                    >
                      HOME
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className={`nav-link  ${
                        location.pathname === "/about" && "active"
                      }`}
                      style={{ color: isDarkMode ? "white" : "black" }}
                      to="/about"
                    >
                      About Us
                    </Link>
                  </li>
                </ul>
              </div>
              <Drawer
                style={{ width: "100%", backgroundColor: "black" }}
                open={open}
                onClose={() => setOpen(false)}
              >
                <ModalClose />
                <DialogTitle>
                  <div className="text-center m-auto py-5">
                    <div className="mb-4" onClick={() => setOpen(false)}>
                      <Link
                        className={`nav-link  ${
                          location.pathname === "/" && "active"
                        }`}
                        to="/"
                        style={{ color: "black" }} // Set text color to black
                      >
                        HOME
                      </Link>
                    </div>
                    <div onClick={() => setOpen(false)}>
                      <Link
                        className={`nav-link  ${
                          location.pathname === "/about" && "active"
                        }`}
                        style={{ color: "black" }} // Set text color to black
                        to="/about"
                      >
                        About Us
                      </Link>
                    </div>
                  </div>
                </DialogTitle>
              </Drawer>

              <div className="d-flex position-relative">
                {isLoggedIn ? (
                  <div className="d-flex align-items-center gap-2">
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <MaterialUISwitch
                            sx={{ m: 1 }}
                            checked={isDarkMode}
                            onChange={handleSwitchChange}
                          />
                        }
                      />
                    </FormGroup>
                    <Link to="/Product-profile" className="nav-link">
                      <Avatar
                        size={"large"}
                        alt={userName}
                        src={profileData.profileImage}
                      />
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
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <MaterialUISwitch
                            sx={{ m: 1 }}
                            checked={isDarkMode}
                            onChange={handleSwitchChange}
                          />
                        }
                      />
                    </FormGroup>
                    <Link
                      style={{ color: "#518EF8", fontWeight: "700" }}
                      className={`nav-link`}
                      to={{
                        pathname: "/login",
                      }}
                      // onClick={handleLoginClick}
                    >
                      Login
                    </Link>
                    <Link
                      style={{ color: "#df439b", fontWeight: "700" }}
                      className={`nav-link  ${
                        location.pathname === "/register" && "active"
                      }`}
                      to={{
                        pathname: "/register",
                      }}
                      // onClick={handleregisterClick}
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
    </div>
  );
}

export default Navbar;
