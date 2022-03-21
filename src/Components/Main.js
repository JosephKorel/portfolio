import React, { useState } from "react";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";
import TypeWriterEffect from "react-typewriter-effect";

function Main() {
  const [aboutshow, setAboutshow] = useState(false);
  const [skillsshow, setSkillsshow] = useState(false);
  const [projectshow, setProjectshow] = useState(false);
  const [contactshow, setContactshow] = useState(false);

  function ShowAbout() {
    aboutshow == true ? setAboutshow(false) : setAboutshow(true);
  }

  function ShowSkills() {
    skillsshow == true ? setSkillsshow(false) : setSkillsshow(true);
  }

  function ShowProjects() {
    projectshow == true ? setProjectshow(false) : setProjectshow(true);
  }

  function ShowContact() {
    contactshow == true ? setContactshow(false) : setContactshow(true);
  }

  const [myicon, setMyicon] = useState("./about.png");
  const [codeicon, setCodeicon] = useState("./code.png");
  const [projicon, setProjicon] = useState("./projects.png");
  const [contacticon, setContacticon] = useState("./contact.png");

  return (
    <div className="main-page">
      <About aboutshow={aboutshow} setAboutshow={setAboutshow}></About>
      <Skills skillsshow={skillsshow} setSkillsshow={setSkillsshow}></Skills>
      <Projects
        projectshow={projectshow}
        setProjectshow={setProjectshow}
      ></Projects>
      <Contact
        contactshow={contactshow}
        setContactshow={setContactshow}
      ></Contact>
      <div className="header">
        <div className="hello">
          <h1>
            {" "}
            <TypeWriterEffect
              cursorColor="#f5f3f4"
              text="<"
              textStyle={{
                color: " #ffb84d",
                fontSize: "3em",
                fontFamily: "'Ubuntu Mono', monospace",
                fontWeight: "400",
              }}
              hideCursorAfterText={true}
            ></TypeWriterEffect>
          </h1>
          <h1>
            <TypeWriterEffect
              cursorColor="#f5f3f4"
              textSize="3em"
              text="Hello World!"
              textStyle={{
                fontSize: "3em",
                fontFamily: "'Ubuntu Mono', monospace",
                fontWeight: "400",
                fontStyle: "italic",
              }}
              startDelay={300}
              hideCursorAfterText={true}
            ></TypeWriterEffect>
          </h1>
          <h1>
            <TypeWriterEffect
              cursorColor="#f5f3f4"
              text="/>"
              startDelay={1850}
              textStyle={{
                color: " #ffb84d",
                fontSize: "3em",
                fontFamily: "'Ubuntu Mono', monospace",
                fontWeight: "400",
              }}
              hideCursorAfterText={true}
            ></TypeWriterEffect>
          </h1>
        </div>
        <h1 id="typewriter">
          <TypeWriterEffect
            text="Prazer, José Carlos"
            textStyle={{
              fontFamily: "'Ubuntu Mono', monospace",
              fontWeight: "500",
              fontStyle: "italic",
            }}
            typeSpeed={95}
            cursorColor="#f5f3f4"
            startDelay={2200}
            hideCursorAfterText={true}
          ></TypeWriterEffect>
        </h1>
        <div id="glitch">
          <h1 className="glitch">Front end developer</h1>
        </div>
      </div>
      <div className="card-div">
        <div className="card-container">
          <div
            className="card"
            id="card-1"
            onClick={() => ShowAbout()}
            onMouseEnter={() => setMyicon("./about black.png")}
            onMouseOut={() => setMyicon("./about.png")}
          >
            <img src={myicon} alt="About me"></img>
            <p>Sobre mim</p>
          </div>
          <div
            className="card"
            onClick={() => ShowSkills()}
            id="card-2"
            onMouseEnter={() => setCodeicon("./code black.png")}
            onMouseOut={() => setCodeicon("./code.png")}
          >
            <img src={codeicon} alt="Skills"></img>
            <p>Habilidades</p>
          </div>
          <div
            className="card"
            onClick={() => ShowProjects()}
            id="card-3"
            onMouseEnter={() => setProjicon("./projects black.png")}
            onMouseOut={() => setProjicon("./projects.png")}
          >
            <img src={projicon} alt="Projects"></img>
            <p>Projetos</p>
          </div>
          <div
            className="card"
            onClick={() => ShowContact()}
            id="card-4"
            onMouseEnter={() => setContacticon("./contact black.png")}
            onMouseOut={() => setContacticon("./contact.png")}
          >
            <img src={contacticon} alt="Contact"></img>
            <p>Contato</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
