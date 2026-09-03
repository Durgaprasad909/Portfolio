import React from "react";
import "./Projects.css";

function Projects() {

  const projects = [
    {
      number: "01",
      title: "Student Management System",
      description:
        "A full-stack web application for managing student records with filtering based on year, branch, CGPA and attendance.",
      technologies: [
        "React.js",
        "Django",
        "Django REST Framework",
        "SQLite"
      ],
      type: "Full Stack",
      github: "https://github.com/",
      live: "#"
    },

    {
      number: "02",
      title: "Victory Bazar",
      description:
        "An online kirana shopping platform where users can browse products, manage their cart, checkout and place orders.",
      technologies: [
        "React.js",
        "Django",
        "REST API",
        "SQLite"
      ],
      type: "E-Commerce",
      github: "https://github.com/",
      live: "#"
    },

    {
      number: "03",
      title: "Library Management System",
      description:
        "A management application designed to organize books, users and borrowing records with a simple and efficient interface.",
      technologies: [
        "Python",
        "Django",
        "HTML",
        "CSS",
        "SQLite"
      ],
      type: "Web Application",
      github: "https://github.com/",
      live: "#"
    }
  ];

  return (
    <section className="projects-section" id="projects">

      {/* Heading */}

      <div className="projects-heading">

        <p className="section-label">
          MY WORK
        </p>

        <h2>
          Featured Projects
        </h2>

        <p className="projects-description">
          Some of the projects I've built while learning
          and working with modern web technologies.
        </p>

      </div>


      {/* Projects */}

      <div className="projects-container">

        {projects.map((project) => (

          <article
            className="project-card"
            key={project.number}
          >

            {/* Project top */}

            <div className="project-top">

              <span className="project-number">
                {project.number}
              </span>

              <span className="project-type">
                {project.type}
              </span>

            </div>


            {/* Project content */}

            <div className="project-content">

              <h3>
                {project.title}
              </h3>

              <p>
                {project.description}
              </p>


              {/* Technologies */}

              <div className="technology-list">

                {project.technologies.map((technology) => (

                  <span key={technology}>
                    {technology}
                  </span>

                ))}

              </div>

            </div>


            {/* Project buttons */}

            <div className="project-links">

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
                <span>↗</span>
              </a>

              <a href={project.live}>
                Live Demo
                <span>↗</span>
              </a>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Projects;