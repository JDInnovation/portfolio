import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Fade } from "react-reveal";
import { NavLink } from "react-router-dom";
import { motion } from 'framer-motion';
import "./Footer.css";

const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } }
};

export default function Footer(props) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    
    <div className="footer-div">
      <div className="footer-line"></div>
      <Fade>
        <motion.div 
          className="footer-content"
          initial="hidden"
          animate="visible"
          variants={footerVariants}
        >
          <motion.div className="footer-section">
            <h4>Páginas</h4>
            <ul>
              <li>
                <NavLink 
                  to="/home" 
                  className={({ isActive }) => isActive ? "current-link" : ""}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/portfolio" 
                  className={({ isActive }) => isActive ? "current-link" : ""}
                >
                  Portfólio
                </NavLink>
              </li>
              <li>
                <NavLink 
                  to="/contacto" 
                  className={({ isActive }) => isActive ? "current-link" : ""}
                >
                  Contato
                </NavLink>
              </li>
            </ul>
          </motion.div>
          <motion.div className="footer-section">
            <h4>Perfil Zaask</h4>
            <a href="https://www.zaask.pt/user/jdinnovationstudio" target="_blank" rel="noopener noreferrer">
              <img src="https://www.zaask.pt/widget?user=681918&widget=pro-findme" alt="Zaask Logo" className="zaask-logo" />
            </a>
          </motion.div>
          <motion.div className="footer-section footer-contact">
            <h4>Contato</h4>
            <ul>
              <li><span>Email:</span> <a href="mailto:geral@click-spot.com">geral@click-spot.com</a></li>
              <li><span>Telemovel:</span> <a href="tel:+35913467759">+351 913 467 759 </a></li>
              <li><span>Telemovel:</span> <a href="tel:+35912084991">+351 912 084 991 </a></li>
              <li><span>Endereço:</span> Ponte de Vagos, Aveiro, Portugal</li>
            </ul>
          </motion.div>
        </motion.div>
        <motion.p 
          className="footer-text" 
          style={{ color: props.theme.secondaryText }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
        >
          JD Invest Group © 2024
        </motion.p>
      </Fade>
    </div>
  );
}