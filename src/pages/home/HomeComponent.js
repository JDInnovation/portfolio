import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Greeting from "../../containers/greeting/Greeting";
import Skills from "../../containers/skills/Skills";
import Footer from "../../components/footer/Footer";

function Home(props) {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#precos") {
      const precosSection = document.getElementById("precos");
      if (precosSection) {
        precosSection.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [location]);

  return (
    <div>
      <Header theme={props.theme} setTheme={props.setTheme} />
      <Greeting theme={props.theme} />
      <Skills theme={props.theme} />
      <Footer theme={props.theme} />
    </div>
  );
}

export default Home;
