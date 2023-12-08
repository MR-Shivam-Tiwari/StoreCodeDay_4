import { Button } from "@mui/joy";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(
    window.innerWidth <= 767
  );

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
                    className={`nav-link btn ${
                      location.pathname === "/" && "active"
                    }`}
                    to="/"
                  >
                    HOME
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link btn ${
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
              <form className="d-flex align-items-center gap-2">
                <Link
                  style={{ color: "#518EF8", fontWeight: "700" }}
                  className={`nav-link btn ${
                    location.pathname === "/login" && "active"
                  }`}
                  to="/login"
                >
                  Login
                </Link>
                <Link
                  style={{ color: "#df439b", fontWeight: "700" }}
                  className={`nav-link btn ${
                    location.pathname === "/register" && "active"
                  }`}
                  to="/register"
                >
                  Register
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
