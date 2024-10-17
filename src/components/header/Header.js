import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { settings } from "../../portfolio.js";
import "./Header.css";
import logoGif from "../../assets/images/logo_gif.gif"; // GIF animado
import logoStatic from "../../assets/images/feature.png"; // Versão estática do logo

function Header(props) {
  const theme = props.theme;
  const link = settings.isSplash ? "/splash" : "home";
  const location = useLocation();

  const [isMobile, setIsMobile] = useState(false);
  const [logo, setLogo] = useState(logoGif); // Estado para o logo

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

    // Reproduzir o GIF ao carregar a página
    setTimeout(() => {
      setLogo(logoStatic); // Troca para o logo estático após 2 segundos
    }, 3000);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseEnter = () => {
    setLogo(logoGif); // Troca para o GIF ao passar o mouse
  };

  const handleMouseLeave = () => {
    setLogo(logoStatic); // Retorna ao logo estático ao tirar o mouse
  };

  return (
    <>
      <div
        className={`${theme.name === "light" ? "header-container-light" : "header-container-dark"
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
              to="/portfolio"
              className={({ isActive }) => (isActive ? "desktop-menu-item active" : "desktop-menu-item")}
            >
              Portfolio
            </NavLink>

            <div className="desktop-menu-logo">
              <NavLink to="/home">
                <img
                  src={logo}
                  alt="Logo"
                  className="desktop-logo-image"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </NavLink>
            </div>

            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                location.pathname === "/contacto" && location.search !== "?type=orcamento"
                  ? "desktop-menu-item active"
                  : "desktop-menu-item"
              }
            >
              Contacto
            </NavLink>

            {/* Alteração no botão Preços */}
            <NavLink
              to="/home#solucoes-digitais"
              className={({ isActive }) =>
                location.search === "?type=orcamento"
                  ? "desktop-menu-item active"
                  : "desktop-menu-item"
              }
            >
              Serviços
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
              to="/portfolio"
              className={({ isActive }) => (isActive ? "mobile-menu-item active" : "mobile-menu-item")}
            >
              Portfolio
            </NavLink>

            <div className="mobile-menu-logo">
              <NavLink to="/home">
                <img
                  src={logo}
                  alt="Logo"
                  className="mobile-logo-image"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              </NavLink>
            </div>

            <NavLink
              to="/contacto"
              className={({ isActive }) =>
                location.pathname === "/contacto" && location.search !== "?type=orcamento"
                  ? "mobile-menu-item active"
                  : "mobile-menu-item"
              }
            >
              Contacto
            </NavLink>

            {/* Alteração no botão Preços */}
            <NavLink
              to="/home#solucoes-digitais"
              className={({ isActive }) =>
                location.search === "?type=orcamento"
                  ? "mobile-menu-item active"
                  : "mobile-menu-item"
              }
            >
            Serviços
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
}

export default Header;
