import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  const avatarPic = "avatar.jpeg";

  return <img className="avatar" src={avatarPic} alt="My Avatar"></img>;
}

function Intro() {
  return (
    <div>
      <h1>Nathaniel McKain</h1>
      <p>
        Hard working and dedicated Software Engineer as well as the Black Belt
        head coach of New Journey Jiu-Jitsu.
      </p>
    </div>
  );
}

/* skill list will be a component (the list) that contains other components in it (the individual skill)*/
function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="HTML/CSS" emoji="💪" backgroundColor="#ff0000" />
      <Skill skill="JavaScript" emoji="💪" backgroundColor="#ffff00" />
      <Skill skill="C/C++" emoji="💪" backgroundColor="#ff5050" />
      <Skill skill="C#" emoji="💪" backgroundColor="#99ff66" />
    </div>
  );
}

function Skill(props) {
  return (
    // even the className and style are called a prop
    <div className="skill" style={{ backgroundColor: props.backgroundColor }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
