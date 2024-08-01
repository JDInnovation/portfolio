import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import loadingGif from '../../assets/images/loading.gif'; // Importe o gif de loading

export default function Contact(props) {
  const theme = props.theme;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    contactTime: '',
    service: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false); // Estado de loading

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Ativar loading

    setTimeout(() => {
      emailjs.sendForm('service_dq9gfwh', 'template_cp61hip', e.target, 'dXVyQQhCKcgjFrK0q')
        .then((result) => {
          setLoading(false); // Desativar loading
          setFormSubmitted(true);
        }, (error) => {
          setLoading(false); // Desativar loading
          alert('Erro ao enviar a mensagem. Tente novamente.');
        });
    }, 2000); // Simulando um tempo de carregamento adicional de 2 segundos
  };

  const handleNewContact = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      contactTime: '',
      service: '',
      message: ''
    });
    setFormSubmitted(false);
  };

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
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
                    <label>Horário de Contacto:</label>
                    <select
                      name="contactTime"
                      value={formData.contactTime}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Selecione um horário</option>
                      <option value="9-10">9-10</option>
                      <option value="10-11">10-11</option>
                      <option value="11-12">11-12</option>
                      <option value="12-13">12-13</option>
                      <option value="13-14">13-14</option>
                      <option value="14-15">14-15</option>
                      <option value="15-16">15-16</option>
                      <option value="16-17">16-17</option>
                      <option value="17-18">17-18</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Serviço:</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Selecione um serviço</option>
                      <option value="website">Criação de Website</option>
                      <option value="branding">Criação de Branding</option>
                      <option value="marketing">Campanha de Marketing</option>
                      <option value="ecommerce">Desenvolvimento de E-commerce</option>
                      <option value="seo">Otimização SEO</option>
                    </select>
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

                  <button type="submit" className="form-button">LIGUEM-ME GRÁTIS!</button>
                </form>

                {loading && (
                  <div className="loading">
                    <img src={loadingGif} alt="Loading..." />
                  </div>
                )}
              </>
            )}
          </div>
        </Fade>
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-info">
            <div className="contact-info-left">
              <h2>Contato</h2>
              <p><strong>David Claro</strong><br />CEO<br />913467759</p>
              <p><strong>João Brites</strong><br />CEO<br />912084991</p>
            </div>
            <div className="contact-info-right">
              <h2>Localização</h2>
              <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.406877614601!2d-122.07851468468238!3d37.38557427982913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5e33d9c6e1d%3A0x6c1e9451c3be4a70!2sGoogleplex!5e0!3m2!1sen!2sus!4v1634863112130!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
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
