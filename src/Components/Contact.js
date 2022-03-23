import React, { useState } from "react";
import MyCV from "../../src/my_cv.pdf";

import "../Styles/Contact.css";

function Contact(props) {
  function Return() {
    props.setContactshow(false);
  }
  return (
    <div className={props.contactshow == true ? "contact" : "hide"}>
      <div className="contact-container">
        <div className="contact-content">
          <p>
            Gostaria de ser parte de um time que me possibilite crescimento
            tanto profissional quanto pessoal. Sou proativo, aprendo rápido e
            estou sempre disposto a novos desafios.
            <br></br>Entre em contato comigo por um dos links abaixo
          </p>
          <div className="contact-icons">
            <a
              href="https://www.linkedin.com/in/jos%C3%A9-carlos-rolim-etchepare-13669b235/"
              target="_blank"
            >
              <img src="./linkedin.png" alt="LinkedIn"></img>
            </a>
            <a href={"mailto:jcjosecarlos03@gmail.com"}>
              <img src="./email.png" alt="Email"></img>
            </a>
            <a href="https://github.com/JosephKorel" target="_blank">
              <img src="./git.png" alt="GitHub"></img>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5551989030148"
              target="_blank"
            >
              <img src="./wpp.png" alt="WhatsApp"></img>
            </a>
            <a href={MyCV} download="my_cv.pdf">
              <img src="./cv.png" alt="Curriculum"></img>
            </a>
          </div>
        </div>
        <button className="contact-return" onClick={() => Return()}>
          <img src="./return.png" alt="Voltar"></img>
          Voltar
        </button>
      </div>
    </div>
  );
}

export default Contact;
