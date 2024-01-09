import { React, useState } from "react";
import "./style.scss";

function Competences() {
  const techSkills = [
    {
      name: "HTML",
      category: "Frontend",
      img: "https://img.icons8.com/?size=64&id=59916&format=png",
    },

    {
      name: "CSS",
      category: "Frontend",
      img: "https://img.icons8.com/?size=64&id=5cVdiiKKi0vX&format=png",
    },
    {
      name: "UI / UX",
      category: "Frontend",
      img: "https://img.icons8.com/?size=80&id=7rimLou8lu9W&format=png",
    },
    {
      name: "PHP",
      category: "Backend",
      img: "https://img.icons8.com/?size=64&id=UGYn5TapNioV&format=png",
    },
    {
      name: "Symfony",
      category: "Framework",
      img: "https://img.icons8.com/?size=80&id=PtXpYRJkVmd1&format=png",
    },
    {
      name: "MySQL",
      category: "BDD",
      img: "https://img.icons8.com/?size=48&id=9nLaR5KFGjN0&format=png",
    },
    {
      name: "MongoDB",
      category: "BDD",
      img: "https://img.icons8.com/?size=80&id=8rKdRqZFLurS&format=png",
    },
    {
      name: "PostgreSQL",
      category: "BDD",
      img: "https://img.icons8.com/?size=48&id=38561&format=png",
    },

    {
      name: "JavaScript",
      category: "Frontend",
      img: "https://img.icons8.com/?size=48&id=108784&format=png",
    },
    {
      name: "React",
      category: "Framework",
      img: "https://img.icons8.com/?size=80&id=asWSSTBrDlTW&format=png",
    },
    {
      name: "Node",
      category: "Backend",
      img: "https://img.icons8.com/?size=48&id=hsPbhkOH4FMe&format=png",
    },

    {
      name: "GitHub",
      category: "Tools",
      img: "https://img.icons8.com/?size=48&id=bVGqATNwfhYq&format=png",
    },
    {
      name: "VS Code",
      category: "Outils",
      img: "https://img.icons8.com/?size=48&id=y7WGoWNuIWac&format=png",
    },
    {
      name: "Figma",
      category: "Outils",
      img: "https://img.icons8.com/?size=48&id=zfHRZ6i1Wg0U&format=png",
    },
    {
      name: "Adobe XD",
      category: "Outils",
      img: "https://img.icons8.com/?size=48&id=4VVL78edhbW9&format=png",
    },
    {
      name: "Trello",
      category: "Outils",
      img: "https://img.icons8.com/?size=80&id=HxCJ3JvA06ml&format=png",
    },
    {
      name: "Bootstrap",
      category: "Frontend",
      img: "https://img.icons8.com/?size=48&id=g9mmSxx3SwAI&format=png",
    },
    {
      name: "WordPress",
      category: "CMS",
      img: "https://img.icons8.com/?size=64&id=46972&format=png",
    },
  ];

  const [currentCategory, setCurrentCategory] = useState(0);
  const [displayedSkills, setDisplayedSkills] = useState(techSkills);
  const categories = [
    "Toutes",
    "Frontend",
    "Backend",
    "Framework",
    "BDD",
    "Outils",
    "CMS",
  ];

  const filter = (category, index) => {
    setCurrentCategory(index);
    if (category === "Toutes") {
      setDisplayedSkills(techSkills);
    } else {
      const filtered = techSkills.filter(
        (skill) => skill.category === category
      );
      setDisplayedSkills(filtered);
    }
  };

  return (
    <div className="skills_container">
      <h1>Compétences</h1>

      {/* Création des boutons pour filtrer les différentes catégories */}
      <div className="skills_buttons">
        {categories.map((category, index) => (
          <button
            key={index}
            className={currentCategory === index ? "active" : ""}
            onClick={() => filter(category, index)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Création de la liste des compétences */}
      <div className="skills_list">
        {displayedSkills.map((skill, index) => (
          <div key={index} className="skills_card">
            <img src={skill.img} alt={skill.name} />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Competences;
