import React, { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import loadingGif from '../../assets/images/logo_gif.gif';
import davide from "../../assets/images/d12.png";
import joaoe from "../../assets/images/j12.png";

export default function Contact(props) {
  const theme = props.theme;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js-eu1.hsforms.net/forms/embed/v2.js";
    script.async = true;
    document.body.appendChild(script);
    script.onload = () => {
      window.hbspt.forms.create({
        region: "eu1",
        portalId: "145502623",
        formId: "7fd1034c-a952-4319-b988-20b49c9d25d6", // Novo formId
        target: "#hubspot-form"
      });
    };
  }, []);

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">
        <Fade bottom duration={300} distance="40px">
          <div className="contact-heading-div">
            <h1 className="contact-heading-text" style={{ color: theme.text }}>
              Peça o seu orçamento grátis!
            </h1>
            <p className="contact-header-detail-text" style={{ color: theme.secondaryText }}>
              Quer saber quanto custa transformar sua ideia em realidade? Preencha o formulário abaixo e receba um orçamento gratuito! <br />
              Não está pronto para um orçamento? Sem problemas! Use este formulário para nos fazer qualquer pergunta. Estamos aqui para ajudar!
            </p>
            <ul className="bullet-points">
              <li>Resposta em menos de 24 horas</li>
              <li>Sem compromisso</li>
              <li>Solução dedicada ao seu negócio</li>
              <li>Atendimento personalizado</li>
            </ul>
          </div>
        </Fade>
        <Fade bottom duration={1000} distance="40px">
          {/* Formulário centralizado */}<div className="contact-form-section">
          <div className="contact-form-div" id="hubspot-form"></div></div>
        </Fade>
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-info">
            <div className="contact-box">
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="our-team">
                  <div className="picture">
                    <img src={joaoe} alt="Descrição da Imagem" className="img-fluid" title="Branding" />
                  </div>
                  <div className="team-content width-team">
                    <h3 className="name">João Teixeira</h3>
                    <h4>912084991</h4>
                    <h4 className="title">Web Developer</h4>
                  </div>
                  <ul className="social">
                    <p>joaoteixeira@click-spot.com</p>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                <div className="our-team">
                  <div className="picture">
                    <img src={davide} alt="Descrição da Imagem" className="img-fluid" title="Branding" />
                  </div>
                  <div className="team-content  width-team ">
                    <h3 className="name">David Claro</h3>
                    <h4>913467759</h4>
                    <h4 className="title">Web Developer</h4>
                  </div>
                  <ul className="social">
                    <p>davidclaro@click-spot.com</p>
                  </ul>
                </div>
              </div>
            </div>
            <div className="contact-info-right">
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3163.9025144765485!2d-8.670123!3d40.473271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI4JzI1LjgiTiA4wrA0MCczOS40Ilc!5e0!3m2!1sen!2sus!4v1634863112130!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, flexGrow: 1 }}
                allowFullScreen=""
                loading="lazy">
              </iframe>
            </div>
          </div>
        </Fade>
      </div>
      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
    
  );
}
