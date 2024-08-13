import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import "./Header.css";
import logo from "../../assets/images/logojd.png";

function Header(props) {
  const theme = props.theme;
  const link = settings.isSplash ? "/splash" : "home";

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
        <header className="header">
          <NavLink to={link} tag={Link} className="logo">
            <img src={logo} alt="Logo" className="logo-image" />
          </NavLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li className="homei-li">
              <NavLink
                className={({ isActive }) => (isActive ? "current-link" : "homei")}
                to="/home"
                tag={Link}
                style={{ color: theme.text }}
              >
                Quem Somos
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "current-link" : "xp")}
                to="/experience"
                tag={Link}
                style={{ color: theme.text }}
              >
                Portfolio
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "current-link" : "cr")}
                to="/contact"
                tag={Link}
                style={{ color: theme.text }}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
        </header>
      </div>

      {isMobile && (
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
            <img src={logo} alt="Logo" className="mobile-logo-image" />
          </div>

          <NavLink
            to="/contact"
            className="mobile-menu-item"
          >
            Contacto
          </NavLink>
          <NavLink
            to="/contact"
            className="mobile-menu-item"
          >
            Orçamento
          </NavLink>
        </div>
      )}
    </>
  );
}

export default Header;
