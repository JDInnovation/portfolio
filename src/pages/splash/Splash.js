import React, { useState } from "react";
import "./Splash.css";
import { Navigate } from "react-router-dom";
import logoGif from "../../assets/images/logo_gif.gif";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="loading">
        <img
                  src={logoGif}
                  alt="Logo"></img>
      </div>
    </div>
  );
}

function Splash(props) {
  const [redirect, setRedirect] = useState(false);
  setTimeout(() => setRedirect(true), 2000);

  return redirect ? (
    <Navigate to="/home" />
  ) : (
    <AnimatedSplash theme={props.theme} />
  );
}

export default Splash;
