import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  // Mobile nav state
  const [navOpen, setNavOpen] = useState(false);

  // Close nav after clicking a link (on mobile)
  const handleNavLinkClick = () => setNavOpen(false);

  return (
    <div className="dark-bg text-light">
      {/* Responsive Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow-sm custom-navbar">
        <div className="container">
          <a className="navbar-brand" href="/">
            Dhruv Bhatt Portfolio
          </a>
          <button
            className="navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={navOpen}
            onClick={() => setNavOpen((open) => !open)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse${navOpen ? " show" : ""}`} id="navbarNav">
            <ul className="navbar-nav ms-auto text-center">
              <li className="nav-item">
                <a className="nav-link" href="#about" onClick={handleNavLinkClick}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#education" onClick={handleNavLinkClick}>
                  Education
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects" onClick={handleNavLinkClick}>
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={handleNavLinkClick}>
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact" onClick={handleNavLinkClick}>
                  Feedback
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <header className="hero-section text-center text-light position-relative">
  {/* Coder background image */}
  <img
    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80"
    alt="coder background"
    className="hero-bg-img"
  />
  <div className="container hero-content position-relative">
    <img
      src="/dhruv.png"
      alt="Dhruv Bhatt"
      className="profile-img mb-3"
    />
    <h1>Dhruv Bhatt</h1>
    <p className="lead accent-text">
      AI/ML Developer | PHP | Python | ML
    </p>
    <a href="#projects" className="btn btn-accent mt-3">
      View Projects
    </a>
  </div>
</header>

      <section id="about" className="py-5 dark-section">
        <div className="container">
          <h2 className="mb-4 section-title">About Me</h2>
          <p>
            Hi! I'm <b>Dhruv Bhatt</b>, an AI/ML and frontend developer passionate about building intelligent, beautiful, and responsive web applications using PHP, Python, and modern Machine Learning frameworks. I love bringing ideas to life with data-driven solutions, clean code, and creative design.
          </p>
        </div>
      </section>

      {/* ------------ Education Section ------------- */}
      <section id="education" className="py-5 dark-section">
        <div className="container">
          <h2 className="mb-4 section-title">Education</h2>
          <div className="row">
            <div className="col-md-6 mb-4">
              <div className="card h-100 education-card dark-card">
                <div className="card-body">
                  <h5 className="card-title">Master of Computer Applications (MCA)</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Gyanmajari Innovative University (GMIT), Bhavnagar</h6>
                  <p className="mb-1">Expected: 2025</p>
                  <p>CGPA: 7.5</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100 education-card dark-card">
                <div className="card-body">
                  <h5 className="card-title">Bachelor of Computer Applications (BCA)</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Maharaja Krishnakumarsinhji Bhavnagar University (MKBU)</h6>
                  <p className="mb-1">2024</p>
                  <p>Percentage: 76%</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100 education-card dark-card">
                <div className="card-body">
                  <h5 className="card-title">Higher Secondary Education (Class 12th)</h5>
                  <h6 className="card-subtitle mb-2 text-muted">GSEB</h6>
                  <p className="mb-1">2021</p>
                  <p>Percentage: 78%</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card h-100 education-card dark-card">
                <div className="card-body">
                  <h5 className="card-title">Secondary Education (Class 10th)</h5>
                  <h6 className="card-subtitle mb-2 text-muted">GSEB</h6>
                  <p className="mb-1">2019</p>
                  <p>Percentage: 74%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ------------ End Education Section ------------- */}

      <section id="projects" className="py-5 dark-section">
        <div className="container">
          <h2 className="mb-4 section-title">Projects</h2>
          <div className="row">

              {/* --- Project 1: Railway Detection System --- */}
              <div className="col-md-4 mb-4">
                <div className="card project-card shadow project-card-theme dark-card h-100">
                  <img
                    src="/raailway.webp"
                    className="card-img-top project-img hover-zoom"
                    alt="Railway Detection System"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Railway Detection System (Hardware Project)</h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                      Tools: HC-SR04 Ultrasonic Sensor, Arduino Uno R3, LED, Buzzer
                    </h6>
                    <ul className="card-text text-start">
                      <li>Designed a hardware system to detect incoming trains using ultrasonic sensing.</li>
                      <li>Triggered visual (LED) and audio (buzzer) alerts for early warning and safety.</li>
                      <li>Improved proximity detection for public safety in railway zones.</li>
                    </ul>
                  </div>
                </div>
              </div>

            {/* --- Project 2: Person Detection System --- */}
            <div className="col-md-4 mb-4">
              <div className="card project-card shadow project-card-theme dark-card h-100">
                <img
                    src="/people-detection-768x432.png"
                    className="card-img-top project-img hover-zoom"
                    alt="Railway Detection System"
                  />
                <div className="card-body">
                  <h5 className="card-title">Person Detection System (Hardware Project)</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Tools: HC-SR04 Ultrasonic Sensor, Arduino Uno R3, LED, Buzzer, LCD Display
                  </h6>
                  <ul className="card-text text-start">
                    <li>Built a person detection model for identifying motion or presence.</li>
                    <li>Real-time status on LCD, with visual and audio alerts.</li>
                    <li>Demonstrated automation/security concepts with embedded components.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* --- Project 3: Workout Journal Website --- */}
            <div className="col-md-4 mb-4">
              <div className="card project-card shadow project-card-theme dark-card h-100">
                <img
                  src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&w=400"
                  className="card-img-top project-img hover-zoom"
                  alt="Workout Journal Website"
                />
                <div className="card-body">
                  <h5 className="card-title">Workout Journal Website (Software Project)</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    Tools: PHP, HTML, CSS, Bootstrap
                  </h6>
                  <ul className="card-text text-start">
                    <li>Developed a responsive website to log and track daily workouts.</li>
                    <li>Enabled adding, updating, and viewing workout history.</li>
                    <li>Designed using Bootstrap for UI/UX accessibility.</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

       {/* ---- Contact & Feedback Section ---- */}
      <section id="contact" className="py-5 dark-section">
        <div className="container d-flex flex-column align-items-center">
          {/* Contact Card (upper) */}
          <div
            className="card shadow-lg p-4 mb-4"
            style={{
              maxWidth: 430,
              width: "100%",
              background: "#222831",
              borderRadius: "1rem",
            }}
          >
            <h2 className="mb-4 accent-text border-bottom pb-2 section-title" style={{ fontWeight: 700 }}>
              Contact
            </h2>
            <p className="mb-2 text-light">
              Email:{" "}
              <a href="mailto:dhruvbhatt77777@gmail.com" className="text-accent">
                dhruvbhatt77777@gmail.com
              </a>
            </p>
            <p className="mb-2 text-light">
              LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/dhruvbhatt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent"
              >
                linkedin.com/in/dhruvbhatt
              </a>
            </p>
            <p className="mb-0 text-light">
              GitHub:{" "}
              <a
                href="https://github.com/dhruvbhatt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent"
              >
                github.com/dhruvbhatt
              </a>
            </p>
          </div>

          {/* Feedback & Inquiry Card (lower) */}
          <div
            className="card shadow-lg p-4"
            style={{
              maxWidth: 430,
              width: "100%",
              background: "#222831",
              borderRadius: "1rem",
              marginTop: "2rem",
            }}
          >
            <h2 className="mb-4 accent-text border-bottom pb-2 section-title" style={{ fontWeight: 700 }}>
              Feedback & Inquiry
            </h2>
            <form className="contact-form">
              <div className="mb-3">
                <label className="form-label accent-text">Your Name</label>
                <input
                  type="text"
                  className="form-control dark-input"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label accent-text">Your Email</label>
                <input
                  type="email"
                  className="form-control dark-input"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label accent-text">Your Message</label>
                <textarea
                  className="form-control dark-input"
                  rows="4"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-accent w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-dark text-white text-center py-3">
        © {new Date().getFullYear()} Dhruv Bhatt. All rights reserved.
      </footer>
    </div>
  );
}

export default App;