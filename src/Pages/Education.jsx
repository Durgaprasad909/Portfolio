import React from "react";
import "./Education.css";

function Education() {

  const education = [
    {
      year: "2024 - 2027",
      degree: "B.Tech - Artificial Intelligence & Data Science",
      institution: "BVC Institute of Technology & Science",
      description:
        "Currently pursuing my Bachelor's degree with a focus on Artificial Intelligence, Data Science, programming and software development."
    },

    {
      year: "2021 - 2024",
      degree: "Diploma - Computer Engineering",
      institution: "BVC Institute of Technology & Science",
      description:
        "Completed Diploma in Computer Engineering with a strong foundation in programming, databases, web technologies and computer fundamentals."
    },

    {
      year: "2021",
      degree: "SSC / 10th Class",
      institution: "Secondary School",
      description:
        "Completed secondary education and developed an early interest in computers and technology."
    }
  ];

  return (
    <section className="education-section" id="education">

      {/* Heading */}

      <div className="education-heading">

        <p className="section-label">
          MY JOURNEY
        </p>

        <h2>
          Education
        </h2>

        <p className="education-description">
          My academic journey and the foundation that helped
          me build my skills in technology and software development.
        </p>

      </div>


      {/* Timeline */}

      <div className="education-timeline">

        {education.map((item, index) => (

          <div
            className="education-item"
            key={index}
          >

            {/* Timeline year */}

            <div className="education-year">
              {item.year}
            </div>


            {/* Timeline line */}

            <div className="timeline">

              <div className="timeline-dot"></div>

              {index !== education.length - 1 && (
                <div className="timeline-line"></div>
              )}

            </div>


            {/* Education content */}

            <div className="education-card">

              <h3>
                {item.degree}
              </h3>

              <h4>
                {item.institution}
              </h4>

              <p>
                {item.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Education;