import React, { useState } from "react";
import "../Styles/Projects.css";
import MyCarousel from "./Carousel";

function Projects(props) {
  function Return() {
    props.setProjectshow(false);
  }

  return (
    <div className={props.projectshow == true ? "projects" : "projects hide"}>
      <div className="projects-content" id="project-content">
        <MyCarousel></MyCarousel>
      </div>
      <button className="project-return" onClick={() => Return()}>
        <img src="./return.png" alt="Voltar"></img>
        Voltar
      </button>
    </div>
  );
}

export default Projects;
