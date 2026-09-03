import React from "react";
import Navbar from "../Components/Navbar"
import "./Home.css";
import Skills from "./Skills";
import Projects from "./Projects";
import Education from "./Education";
import Contact from "./Contact";
import photo from '../photo.png'
function Home() {

  return (
    <div className="home">

      {/* Navbar */}
      <Navbar />

      {/* Hero */}
      <main id="home">

        <section className="hero">

          <div className="hero-content">

            <p className="hello">
              Hi, I'm
            </p>
            <h1>
              Durga <span>Prasad</span>
            </h1>

            <h2>
              Python Full Stack Developer
            </h2>

            <div className="hero-line"></div>

            <p className="hero-description">
              I build scalable web applications using Python,
              Django, Django REST Framework and React.js.
            </p>

            <div className="hero-buttons">

              <a
                href="#projects"
                className="primary-btn"
              >
                View My Work
                <span>→</span>
              </a>

              <a
                href="#contact"
                className="secondary-btn"
              >
                Contact Me
                <span>✉</span>
              </a>

            </div>

            <div className="social-links">

              <a href="https://github.com/Durgaprasad909?tab=repositories/">
                Git
              </a>

              <a href="https://www.linkedin.com/in/durga-prasad-ganisetti-01393b300/">
                in
              </a>

              <a href="mailto:prasadganisetti18@gmail.com">
                @
              </a>

            </div>

          </div>


          {/* Hero Image */}

          <div className="hero-image-container">
            <div className="image-circle"></div>

            <div className="small-dot dot-one"></div>

            <div className="small-dot dot-two"></div>

            <div className="small-dot dot-three"></div>

            <img
              src={photo}
              alt="Durga Prasad"
              className="profile-image"
            />

          </div>
           
        </section>
        <Skills />
        <Projects/>
        <Education/>
        <Contact/>
      </main>

    </div>
  );
}

export default Home;