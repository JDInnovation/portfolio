import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { settings } from "../../portfolio.js";
import "./Header.css";
import logo from "../../assets/images/logojd.png";

function Header(props) {
  const theme = props.theme;
  const link = settings.isSplash ? "/splash" : "home";
  const location = useLocation();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check on mount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div
        className={`${props.theme.name === "light" ? "header-container-light" : "header-container-dark"
          }`}
      >
        {!isMobile ? (
          <div className="desktop-menu">
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "desktop-menu-item active" : "desktop-menu-item")}
            >
              Home
            </NavLink>
            <NavLink
              to="/experience"
              className={({ isActive }) => (isActive ? "desktop-menu-item active" : "desktop-menu-item")}
            >
              Portfolio
            </NavLink>

            <div className="desktop-menu-logo">
              <NavLink to="/home">
                <img src={logo} alt="Logo" className="desktop-logo-image" />
              </NavLink>
            </div>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                location.pathname === "/contact" && location.search !== "?type=orcamento"
                  ? "desktop-menu-item active"
                  : "desktop-menu-item"
              }
            >
              Contacto
            </NavLink>
            <NavLink
              to="/contact?type=orcamento"
              className={({ isActive }) =>
                location.search === "?type=orcamento"
                  ? "desktop-menu-item active"
                  : "desktop-menu-item"
              }
            >
              Preços
            </NavLink>
          </div>
        ) : (
          <div className="mobile-menu">
            <NavLink
              to="/home"
              className={({ isActive }) => (isActive ? "mobile-menu-item active" : "mobile-menu-item")}
            >
              Home
            </NavLink>
            <NavLink
              to="/experience"
              className={({ isActive }) => (isActive ? "mobile-menu-item active" : "mobile-menu-item")}
            >
              Portfolio
            </NavLink>

            <div className="mobile-menu-logo">
              <NavLink to="/home">
                <img src={logo} alt="Logo" className="mobile-logo-image" />
              </NavLink>
            </div>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                location.pathname === "/contact" && location.search !== "?type=orcamento"
                  ? "mobile-menu-item active"
                  : "mobile-menu-item"
              }
            >
              Contacto
            </NavLink>
            <NavLink
              to="/contact?type=orcamento"
              className={({ isActive }) =>
                location.search === "?type=orcamento"
                  ? "mobile-menu-item active"
                  : "mobile-menu-item"
              }
            >
              Preços
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
