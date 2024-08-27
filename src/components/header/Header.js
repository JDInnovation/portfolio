import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { settings } from "../../portfolio.js";
import "./Header.css";
import logo from "../../assets/images/logo_gif.gif";

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
              <span className="blob-container">
                <svg
                  className="blob-svg"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#b6d109"
                    d="M39.4,-63.7C49.3,-56.2,52.8,-40.6,59.5,-26.6C66.2,-12.6,76,-0.3,74.4,11.5C72.8,23.3,59.7,34.7,47.3,44.3C34.9,53.8,22.9,61.6,11,65.6C-0.8,69.6,-12.6,69.8,-23.1,66.4C-33.5,63,-42.5,56,-53.2,47.4C-63.9,38.7,-76.2,28.4,-78.6,16.3C-81,4.2,-73.5,-9.5,-64.4,-21.3C-55.2,-33.1,-44.3,-42.9,-32.3,-50.1C-20.4,-57.3,-10.2,-61.9,3.4,-66.2C17,-70.5,34.1,-74.5,39.4,-63.7Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </span>
              Home
            </NavLink>
            <NavLink
              to="/experience"
              className={({ isActive }) => (isActive ? "desktop-menu-item active" : "desktop-menu-item")}
            >
              <span className="blob-container">
                <svg
                  className="blob-svg"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#b6d109"
                    d="M39.4,-63.7C49.3,-56.2,52.8,-40.6,59.5,-26.6C66.2,-12.6,76,-0.3,74.4,11.5C72.8,23.3,59.7,34.7,47.3,44.3C34.9,53.8,22.9,61.6,11,65.6C-0.8,69.6,-12.6,69.8,-23.1,66.4C-33.5,63,-42.5,56,-53.2,47.4C-63.9,38.7,-76.2,28.4,-78.6,16.3C-81,4.2,-73.5,-9.5,-64.4,-21.3C-55.2,-33.1,-44.3,-42.9,-32.3,-50.1C-20.4,-57.3,-10.2,-61.9,3.4,-66.2C17,-70.5,34.1,-74.5,39.4,-63.7Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </span>
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
              <span className="blob-container">
                <svg
                  className="blob-svg"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#b6d109"
                    d="M39.4,-63.7C49.3,-56.2,52.8,-40.6,59.5,-26.6C66.2,-12.6,76,-0.3,74.4,11.5C72.8,23.3,59.7,34.7,47.3,44.3C34.9,53.8,22.9,61.6,11,65.6C-0.8,69.6,-12.6,69.8,-23.1,66.4C-33.5,63,-42.5,56,-53.2,47.4C-63.9,38.7,-76.2,28.4,-78.6,16.3C-81,4.2,-73.5,-9.5,-64.4,-21.3C-55.2,-33.1,-44.3,-42.9,-32.3,-50.1C-20.4,-57.3,-10.2,-61.9,3.4,-66.2C17,-70.5,34.1,-74.5,39.4,-63.7Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </span>
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
              <span className="blob-container">
                <svg
                  className="blob-svg"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#b6d109"
                    d="M39.4,-63.7C49.3,-56.2,52.8,-40.6,59.5,-26.6C66.2,-12.6,76,-0.3,74.4,11.5C72.8,23.3,59.7,34.7,47.3,44.3C34.9,53.8,22.9,61.6,11,65.6C-0.8,69.6,-12.6,69.8,-23.1,66.4C-33.5,63,-42.5,56,-53.2,47.4C-63.9,38.7,-76.2,28.4,-78.6,16.3C-81,4.2,-73.5,-9.5,-64.4,-21.3C-55.2,-33.1,-44.3,-42.9,-32.3,-50.1C-20.4,-57.3,-10.2,-61.9,3.4,-66.2C17,-70.5,34.1,-74.5,39.4,-63.7Z"
                    transform="translate(100 100)"
                  />
                </svg>
              </span>
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
