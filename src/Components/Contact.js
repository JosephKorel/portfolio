import React, { useState } from "react";

import "../Styles/Contact.css";

function Contact(props) {
  function Return() {
    props.setContactshow(false);
  }
  return (
    <div className={props.contactshow == true ? "contact" : "hide"}>
      <div className="contact-content">
        <p>
          Gostaria de ser parte de um time que me possibilite crescimento tanto
          profissional quanto pessoal. Sou proativo, aprendo rápido e estou
          sempre disposto a novos desafios.
          <br></br>Entre em contato comigo por um dos links abaixo
        </p>
        <div className="icon-container">
          <div className="contact-icons">
            <img src="./linkedin.png" alt="LinkedIn" id="linkedin"></img>
            <a href={"mailto:jcjosecarlos03@gmail.com"}>
              <img src="./email.png" alt="Email" id="email"></img>
            </a>
            <img src="./git.png" alt="GitHub" id="git"></img>
            <img src="./wpp.png" alt="WhatsApp" id="wpp"></img>
          </div>
          <button className="contact-return" onClick={() => Return()}>
            <img src="./return.png" alt="Voltar"></img>
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
