import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Navbar from "./HomeComponent/Navbar";
import StorecodeSearchBar from "./HomeComponent/StorecodeSearchBar";
import GetCode from "./HomeComponent/GetCode";
import MostSearched from "./HomeComponent/MostSearched";
import TopInfluencer from "./HomeComponent/TopInfluencer";
import ExploreGuides from "./HomeComponent/ExploreGuides";
import Benifits from "./HomeComponent/Benifits";
import TestiMonials from "./HomeComponent/TestiMonials";
import Footer from "./HomeComponent/Footer";
import PopularCodes from "./HomeComponent/PopularCodes";
import Switch from "@mui/material/Switch";
import { FormControlLabel, FormGroup } from "@mui/material";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@mui/joy";
import { Avatar } from "antd";
import { useNavigate  } from "react-router-dom";
import { useCombinedContext } from "./DataContext";
function Home({isDarkMode}) {
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
  // const { isDarkMode } = useCombinedContext();

  // const handleSwitchChange = () => {
  //   setIsDarkMode(!isDarkMode);
  // };

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
  const handleLoginClick = () => {
    // Reload the entire page when navigating to /login
    window.location.href = '/login';
  };
  const handleregisterClick = () => {
    // Reload the entire page when navigating to /login
    window.location.href = '/register';
  };
  const handlprofileClick = () => {
    // Reload the entire page when navigating to /login
    window.location.href = '/Product-profile';
  };
  useEffect(() => {
    if (location.pathname === '/login') {
      window.location.reload();
    }
  }, [location.pathname]);
  return (
    <div
      className=""
      style={{
        background: `linear-gradient(to bottom, ${
          isDarkMode ? "#031737" : "#fff"
        } 90%, ${isDarkMode ? "#EF175F" : "#eee"} 100%)`,
        marginTop:"-20px"
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          background: "white",
        }}
      ></div>
      {/* <div>
        <Navbar />
      </div>
       */}
      <div>
        <StorecodeSearchBar isDarkMode={isDarkMode} />
      </div>

      <MostSearched isDarkMode={isDarkMode} />
      <div>
        <PopularCodes isDarkMode={isDarkMode} />
      </div>
      <div
        className=" w-100 h-100 "
        style={{
          background: isDarkMode ? "black" : "white",
        }}
      >
        <div className="">
          <TopInfluencer />
        </div>
        <div className="">
          <ExploreGuides />
        </div>
        <div className="">
          <Benifits />
        </div>
        <div className="">
          <TestiMonials isDarkMode={isDarkMode} />
        </div>
      </div>
      <div className="py-5">
        <Footer isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}

export default Home;
