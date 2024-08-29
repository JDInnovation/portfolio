import React from "react";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import { style } from "glamor";
import Typewriter from "typewriter-effect";
import FeelingProud from "./FeelingProud";
import "./Greeting.css";
import { FaPhoneFlip } from "react-icons/fa6";

export default function Greeting(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    padding: "15px 30px !important",
    letterSpacing: "0.125rem",
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div className="greeting-text-container">
              <h1 className="greeting-text">
                {greeting.title}
                {greeting.title2}
              </h1>
              <div
                className="greeting-text-div subTitle"
                style={{ color: theme.secondaryText }}
              >
                <span className="greeting-text-static">Desenvolvemos</span>
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(500)
                      .typeString(
                        `<span style="color: ${theme.greetingColor}">${greeting.subTitle1}</span>`
                      )
                      .pauseFor(300)
                      .deleteChars(21)
                      .typeString(
                        `<span style="color: ${theme.greetingColor}">${greeting.subTitle2}</span>`
                      )
                      .pauseFor(1000)
                      .start();
                  }}
                />
              </div>
              <div className="portfolio-repo-btn-div">
                <a

                  className="button2"
                  rel="noopener noreferrer"
                  href="#/contact"
                >
                  Fale com um especialista
          

                </a>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
    
  );

}
