import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];
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
  return <img src="avatar.JPG" alt="avatar" className="avatar" />;
}
function Intro() {
  return (
    <div>
      <h1>Alex Zhang</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est autem eius
        eos ut aspernatur repellendus voluptas facilis tempore blanditiis, nulla
        optio error, praesentium totam voluptatum delectus quibusdam nemo amet
        doloremque?
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => {
        return (
          <div className="skill" style={{ backgroundColor: skill.color }}>
            {skill.skill}{" "}
            {skill.level === "beginner"
              ? "🧒"
              : skill.level === "intermediate"
              ? "📖"
              : "💪"}
          </div>
        );
      })}
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
