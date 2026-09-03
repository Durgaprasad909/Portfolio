import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <header className="navbar">
      <div className="logo">
        Durga Prasad Ganisetti
      </div>

      {/* Navigation Links */}
      <nav className={`nav-links ${menuOpen ? "mobile-active" : ""}`}>

        <a href="#home" onClick={closeMenu}>
          Home
        </a>

        <a href="#about" onClick={closeMenu}>
          About
        </a>

        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>

        <a href="#education" onClick={closeMenu}>
          Education
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

      </nav>

      {/* Resume */}
      <a href="resume.pdf" className="resume-btn" download="Durga-Prasad-Resume.pdf">
        Download Resume
        <span>↓</span>
      </a>

      {/* Mobile Menu Button */}
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

    </header>
  );
}

export default Navbar;