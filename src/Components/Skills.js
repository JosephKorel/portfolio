import React from "react";
import "../Styles/Skills.css";

function Skills(props) {
  function Return() {
    props.setSkillsshow(false);
  }
  return (
    <div className={props.skillsshow == true ? "skills" : "hide"}>
      <div className="skill-content">
        <div className="icons">
          <img src="./html.png" alt="HTML" id="html"></img>
          <img src="./css.png" alt="CSS" id="css"></img>
          <img src="./js.png" alt="JavaScript" id="js"></img>
          <img src="./react.png" alt="React" id="react"></img>
          <img src="./git-icon.png" alt="Git" id="git-icon"></img>
          <img src="./firebase.png" alt="Firebase" id="firebase"></img>
          <img src="./tailwind.png" alt="Tailwind CSS" id="tailwind"></img>
          <img src="./mui.png" alt="Material UI" id="mui"></img>
          <img src="./chakra.png" alt="Chakra UI" id="chakra"></img>
        </div>
        <p>
          Estas são as tecnologias que eu mais possuo familiaridade, sendo React
          o framework que utilizo atualmente. Todos meus projetos até então
          foram feitos utilizando <span className="react">React</span>. Além
          disso, utilizo Tailwind CSS e componentes das bibliotecas Material UI
          e Chakra UI.
        </p>
        <button className="skill-return" onClick={() => Return()}>
          <img src="./return.png" alt="Voltar"></img>
          Voltar
        </button>
      </div>
    </div>
  );
}

export default Skills;
