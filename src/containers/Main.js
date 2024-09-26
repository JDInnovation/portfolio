import React from "react";
import { Route, Routes, HashRouter, Navigate } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/portfolio/Experience";
import Contact from "../pages/contacto/ContactComponent.js";
import Ecommerce from "../pages/ecommerce/ecommerce.js";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";

export default function Main(propss) {
  if (settings.isSplash) {
    return (
      <div>
        <HashRouter basename="/">
          <Routes>
            <Route
              path="/"
              element={
                <Splash theme={propss.theme} setTheme={propss.setTheme} />
              }
            />
            <Route
              path="/home"
              element={<Home theme={propss.theme} setTheme={propss.setTheme} />}
            />
            <Route
              path="/portfolio"
              element={
                <Experience theme={propss.theme} setTheme={propss.setTheme} />
              }
            />
            <Route
              path="/education"
              element={
                <Education theme={propss.theme} setTheme={propss.setTheme} />
              }
            />
            <Route
              path="/contacto"
              element={
                <Contact theme={propss.theme} setTheme={propss.setTheme} />
              }
            />
            <Route
              path="/splash"
              element={
                <Splash theme={propss.theme} setTheme={propss.setTheme} />
              }
            />
            <Route
              path="/projects"
              element={
                <Projects theme={propss.theme} setTheme={propss.setTheme} />
              }
            />
            <Route
              path="/ecommerce"
              element={
                <Ecommerce theme={propss.theme} setTheme={propss.setTheme} />
              }
            />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </HashRouter>
      </div>
    );
  } else {
    return (
      <div>
        <HashRouter basename="/">
          <Routes>
            <Route
              path="/"
              element={<Home theme={propss.theme} setTheme={propss.setTheme} />}
            />
            <Route
              path="/home"
              element={<Home theme={propss.theme} setTheme={propss.setTheme} />}
            />
            <Route
              path="/portfolio"
              element={
                <Experience theme={propss.theme} setTheme={propss.setTheme} />
              }
            />
            <Route
              path="/education"
              element={
                <Education theme={propss.theme} setTheme={propss.setTheme} />
              }
            />
            <Route
              path="/contacto"
              element={
                <Contact theme={propss.theme} setTheme={propss.setTheme} />
              }
            />
            <Route
              path="/projects"
              element={
                <Projects theme={propss.theme} setTheme={propss.setTheme} />
              }
            />
            <Route path="*" element={<Navigate to={"/"} />} />
          </Routes>
        </HashRouter>
      </div>
    );
  }
}
