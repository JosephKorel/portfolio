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
        </p>
        <div className="contact-icons">
          <img src="./git black.png" alt="GitHub" id="git"></img>
          <img src="./wpp black.png" alt="WhatsApp" id="wpp"></img>
          <img src="./linkedin black.png" alt="LinkedIn" id="linkedin"></img>
        </div>
        <button className="contact-return" onClick={() => Return()}>
          Voltar
        </button>
      </div>
    </div>
  );
}

export default Contact;
