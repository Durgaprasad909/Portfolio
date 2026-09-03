import React from "react";
import "./Skills.css";

function Skills() {

  const skills = [
    {
      name: "Python",
      category: "Programming",
      icon: "🐍"
    },
    {
      name: "Django",
      category: "Backend",
      icon: "🟢"
    },
    {
      name: "Django REST",
      category: "Backend",
      icon: "⚡"
    },
    {
      name: "React.js",
      category: "Frontend",
      icon: "⚛️"
    },
    {
      name: "JavaScript",
      category: "Frontend",
      icon: "JS"
    },
    {
      name: "HTML & CSS",
      category: "Frontend",
      icon: "🌐"
    },
    {
      name: "SQL",
      category: "Database",
      icon: "🗄️"
    },
    {
      name: "Git & GitHub",
      category: "Tools",
      icon: "🔧"
    }
  ];

  return (
    <section className="skills-section" id="skills">

      <div className="skills-heading">

        <p className="section-label">
          MY SKILLS
        </p>

        <h2>
          Technologies I work with
        </h2>

        <p className="skills-description">
          Here are the technologies and tools I use to
          build modern and scalable web applications.
        </p>

      </div>


      <div className="skills-container">

        {skills.map((skill, index) => (

          <div
            className="skill-card"
            key={index}
          >

            <div className="skill-icon">
              {skill.icon}
            </div>

            <div className="skill-info">

              <h3>
                {skill.name}
              </h3>

              <p>
                {skill.category}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;