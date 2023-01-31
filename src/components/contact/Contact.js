import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <h2 className="section__title"> Get in touch</h2>
      <span className="section__subtitle">Contact me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me </h3>
          <div className="contact__info">
            <div className="contact__card">
              <i class="uil uil-fast-mail contact__card-icon"></i>
              <h3 className="contact__card-title"> Email</h3>
              <span className="contact__card-data">vasothom@hotmail.com</span>

              <a href="mailto:vasothom@hotmail.com" className="contact__button">
                Send
                <i class="uil uil-arrow-right contact__button-icon"></i>
              </a>
            </div>
            <div className="contact__card">
              <i class="uil uil-whatsapp contact__card-icon"></i>

              <h3 className="contact__card-title"> WhatsApp</h3>
              <span className="contact__card-data">whatsapp Nachricht</span>

              <a
                href="https://api.whatsapp.com/send?phone=01727583062&text=Hallo,"
                className="contact__button"
              >
                Send
                <i class="uil uil-arrow-right contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="contact__content">
          <h3 className="contact__title">Formullar</h3>
          <form className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Name eingeben"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Email eingeben"
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Nachricht</label>
              <textarea
                name="nachricht"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Nachricht :)"
              ></textarea>
            </div>
            <button href="#contact" className="button button--flex">
              Nachricht Senden &nbsp;
              <span>
                <i className="uil uil-envelope-star button__icon "></i>
              </span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
