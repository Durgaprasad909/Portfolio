import React, { useState } from "react";
import "./Contact.css";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Thank you! Your message has been submitted.");

    setFormData({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <section className="contact-section" id="contact">

      {/* ================= HEADING ================= */}

      <div className="contact-heading">

        <p className="section-label">
          GET IN TOUCH
        </p>

        <h2>
          Let's Work Together
        </h2>

        <p className="contact-description">
          Have a project, opportunity, or just want to
          say hello? Feel free to get in touch with me.
        </p>

      </div>


      {/* ================= CONTACT CONTAINER ================= */}

      <div className="contact-container">


        {/* ================= LEFT SIDE ================= */}

        <div className="contact-info">

          <h3>
            Let's connect.
          </h3>

          <p>
            I'm currently looking for internship and
            entry-level opportunities in Python Full Stack
            Development.
          </p>


          {/* Email */}

          <div className="contact-item">

            <div className="contact-icon">
              @
            </div>

            <div>
              <span>Email</span>

              <a href="mailto:yourmail@gmail.com">
                prasadganisetti18@gmail.com
              </a>
            </div>

          </div>


          {/* Location */}

          <div className="contact-item">

            <div className="contact-icon">
              📍
            </div>

            <div>
              <span>Location</span>

              <p>
                Andhra Pradesh, India
              </p>
            </div>

          </div>


          {/* GitHub */}

          <div className="contact-item">

            <div className="contact-icon">
              Git
            </div>

            <div>
              <span>GitHub</span>

              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
              >
                github.com/Durgaprasad909
              </a>
            </div>

          </div>


          {/* LinkedIn */}

          <div className="contact-item">

            <div className="contact-icon">
              in
            </div>

            <div>
              <span>LinkedIn</span>

              <a
                href="https://www.linkedin.com/in/durga-prasad-ganisetti-01393b300/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn Profile
              </a>
            </div>

          </div>

        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div className="contact-form-container">

          <h3>
            Send me a message
          </h3>

          <form onSubmit={handleSubmit}>

            {/* Name */}

            <div className="form-group">

              <label htmlFor="name">
                Your Name
              </label>

              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />

            </div>


            {/* Email */}

            <div className="form-group">

              <label htmlFor="email">
                Email Address
              </label>

              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />

            </div>


            {/* Message */}

            <div className="form-group">

              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Write your message..."
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>

            </div>


            {/* Submit */}

            <button
              type="submit"
              className="send-btn"
            >
              Send Message
              <span>→</span>
            </button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contact;