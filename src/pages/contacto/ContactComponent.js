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
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    contactTime: '',
    service: '',
    message: '',
    consent: false
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const loadingRef = useRef(null);

  useEffect(() => {
    if (loading && loadingRef.current) {
      loadingRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [loading]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!recaptchaValue) {
      alert("Por favor, confirme o reCAPTCHA.");
      return;
    }
    if (!formData.consent) {
      alert("Por favor, dê seu consentimento.");
      return;
    }
    setLoading(true);

    setTimeout(() => {
      emailjs.sendForm('service_dq9gfwh', 'template_cp61hip', e.target, 'dXVyQQhCKcgjFrK0q')
        .then((result) => {
          setLoading(false);
          setFormSubmitted(true);
        }, (error) => {
          setLoading(false);
          alert('Erro ao enviar a mensagem. Tente novamente.');
        });
    }, 2000);
  };

  const handleNewContact = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      contactTime: '',
      service: '',
      message: '',
      consent: false
    });
    setFormSubmitted(false);
    setRecaptchaValue(null);
  };
  

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
          <div className="contact-form-div">
            {formSubmitted ? (
              <div className="thank-you-message">
                <h2>Obrigado!</h2>
                <p>Entraremos em contato em breve. Esteja atento.</p>
                <button onClick={handleNewContact} className="form-button">Enviar outro contato</button>
              </div>
            ) : (
              <>
                <form onSubmit={handleSubmit} className={loading ? 'hidden' : ''}>
                  <h2 className="form-title">ORÇAMENTO GRÁTIS:</h2>
                  <div className="form-group">
                    <label>Nome:</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Seu nome"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email:</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Seu email"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Número de Telefone:</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Seu número de telefone"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Mensagem:</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Mensagem (opcional)"
                    />
                  </div>
                  <div className="form-group consent-container">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={formData.consent}
                      onChange={handleChange}
                      required
                    />
                    <label className="consent-text">
                      Mediante o seu consentimento, os seus dados pessoais serão tratados pela CLICKSPOT para uma questão de marketing.
                    </label>
                  </div>
                
                  <div className="form-group recaptcha-container">
                    <ReCAPTCHA
                      sitekey="6LeFvjYqAAAAAEY4hb5yqd1d2-9BTv4hJ6uZbvQ7"
                      onChange={(value) => setRecaptchaValue(value)}
                    />
                  </div> 
               
                  <button type="submit" className="form-button">LIGUEM-ME GRÁTIS!</button>
                </form>

                {loading && (
                  <div className="loading" ref={loadingRef}>
                    <img src={loadingGif} alt="Loading..." />
                  </div>
                )}
              </>
            )}
          </div>
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
