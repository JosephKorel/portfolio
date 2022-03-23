import React, { useState } from "react";
import "../Styles/Projects.css";
import MyCarousel from "./Carousel";

function Projects(props) {
  function Return() {
    props.setProjectshow(false);
  }

  return (
    <div className={props.projectshow == true ? "projects" : "projects hide"}>
      <div className="projects-content">
        <MyCarousel Return={Return}></MyCarousel>
      </div>
    </div>
  );
}

export default Projects;
