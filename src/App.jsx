import "./App.css";
import { useState } from "react";
import React from "react";

function App() {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Service: "",
    Message: "",
  });
const [jobFormData, setJobFormData] = useState({
  Company: "",
  RecruiterName: "",
  Email: "",
  JobRole: "",
  JobType: "",
  WorkMode: "",
  Location: "",
  Salary: "",
  Message: "",
});

const [jobStatus, setJobStatus] = useState("");

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleJobChange = (e) => {
  setJobFormData({
    ...jobFormData,
    [e.target.name]: e.target.value,
  });
};

const handleJobSubmit = async (e) => {
  e.preventDefault();

  setJobStatus("Sending...");

  try {
    const response = await fetch(
      "http://localhost:5000/api/job-opportunity",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(jobFormData),
      }
    );

    const data = await response.json();

    if (data.success) {
      setJobStatus("Job opportunity sent successfully!");

      setJobFormData({
        Company: "",
        RecruiterName: "",
        Email: "",
        JobRole: "",
        JobType: "",
        WorkMode: "",
        Location: "",
        Salary: "",
        Message: "",
      });
    } else {
      setJobStatus(data.message || "Failed to send.");
    }
  } catch (error) {
    console.error(error);
    setJobStatus("Unable to connect to server.");
  }
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus("Message sent successfully!");

        setFormData({
          Name: "",
          Email: "",
          Service: "",
          Message: "",
        });
      } else {
        setStatus(data.message || "Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Unable to connect to server.");
    }
  };
  const handleDemoRequest = (projectName) => {
    setFormData((prev) => ({
      ...prev,
      Service: "Request Demo",
      Message: `Hello Saurabh,

I would like to request a demo of your project: ${projectName}.

Please share the demo details with me.

Thank you.`,
    }));

    setStatus("");

    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <div className="app">
      {/* Navbar */}
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo">
            S<span>P</span>
          </a>

          {/* Desktop Navigation */}
          <div className="nav-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#job-opportunity" className="nav-hire-btn">
  Hire Me
</a>
          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => {
              const menu = document.querySelector(".mobile-menu");
              menu.classList.toggle("active");
            }}
            aria-label="Open menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className="mobile-menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>

          <a href="#job-opportunity" className="mobile-hire-btn">
  Hire Me
</a>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <p className="hero-small-text">👋 Hello, I'm Saurabh Prajapati</p>

            <h1>
              ML Engineer & <span>Full Stack Developer</span>
            </h1>

            <p className="hero-description">
              I build AI-powered applications, machine learning solutions, REST
              APIs, and modern full-stack web applications using Python, Django,
              React, Node.js and AI technologies.
            </p>

            <div className="hero-buttons">
              <a
                href="/Saurabh_Prajapati_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="primary-btn"
              >
                View Resume
              </a>

              <a
                href="/Saurabh_Prajapati_Resume.pdf"
                download="Saurabh_Prajapati_Resume.pdf"
                className="secondary-btn"
              >
                Download CV
              </a>

              <a href="#contact" className="secondary-btn">
                Contact Me
              </a>
            </div>

            <div className="hero-social">
              <a
                href="https://github.com/Saurabh-Prajapati123"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a href="https://www.upwork.com" target="_blank" rel="noreferrer">
                Upwork
              </a>
            </div>
          </div>

          {/* Profile Card */}
          <div className="hero-card">
            <div className="profile-circle">Saurabh Prajapati</div>

            <h2>Saurabh Prajapati</h2>

            <p>ML Engineer • Python Developer • Full Stack Developer</p>

            <div className="availability">
              <span></span>
              Available for opportunities
            </div>

            <div className="hero-card-stats">
              <div>
                <strong>AI/ML</strong>
                <small>Projects</small>
              </div>

              <div>
                <strong>MERN</strong>
                <small>Development</small>
              </div>

              <div>
                <strong>API</strong>
                <small>Development</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      {/* About */}
      <section id="about" className="section">
        <div className="section-container">
          <p className="section-label">ABOUT ME</p>

          <h2 className="section-title">
            Building solutions with <span>AI & Code.</span>
          </h2>

          <div className="about-grid">
            {/* About Text */}
            <div className="about-content">
              <p>
                I am Saurabh Prajapati, a Software Developer and AI/ML
                enthusiast focused on building practical, scalable and
                user-friendly applications.
              </p>

              <p>
                I work with Python, Django, REST APIs, React.js, Node.js,
                Express.js, MongoDB and MySQL. I also build AI and Machine
                Learning applications using Python, Scikit-learn and Generative
                AI technologies.
              </p>

              <p>
                I enjoy solving real-world problems through automation, data
                analysis, machine learning and full-stack development. I am also
                available for freelance projects and software development
                opportunities.
              </p>
            </div>

            {/* Quick Information */}
            <div className="about-info">
              <div className="info-card">
                <span className="info-label">Education</span>
                <h3>BCA</h3>
                <p>Silver Oak University</p>
                <small>2023 – 2026</small>
              </div>

              <div className="info-card">
                <span className="info-label">Location</span>
                <h3>Ahmedabad</h3>
                <p>Gujarat, India</p>
              </div>

              <div className="info-card">
                <span className="info-label">Focus</span>
                <h3>AI + Full Stack</h3>
                <p>Python • React • Node.js</p>
              </div>

              <div className="info-card">
                <span className="info-label">Available For</span>
                <h3>Jobs & Freelance</h3>
                <p>Open to opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <div className="section-container">
          <p className="section-label">EXPERIENCE</p>

          <h2 className="section-title">
            My <span>experience.</span>
          </h2>

          <div className="experience-timeline">
            {/* Experience 1 */}
            <div className="experience-card">
              <div className="experience-date">June 2026 – Present</div>

              <div className="experience-content">
                <h3>Software Developer</h3>

                <h4>Vinexa Infotech Solutions</h4>

                <p>
                  Working on full-stack web applications using MERN technologies
                  and Python services. Developing REST APIs, backend services
                  and integrating frontend applications with backend systems.
                </p>

                <div className="experience-tags">
                  <span>React.js</span>
                  <span>Node.js</span>
                  <span>Express.js</span>
                  <span>MongoDB</span>
                  <span>Python</span>
                  <span>REST API</span>
                </div>
              </div>
            </div>

            {/* Experience 2 */}
            <div className="experience-card">
              <div className="experience-date">Mar 2026 – Apr 2026</div>

              <div className="experience-content">
                <h3>AI/ML Developer Intern</h3>

                <h4>Conva Technology</h4>

                <p>
                  Worked on Artificial Intelligence and Machine Learning
                  development tasks, including data preparation, model
                  development and practical implementation of ML solutions.
                </p>

                <div className="experience-tags">
                  <span>Python</span>
                  <span>Machine Learning</span>
                  <span>Data Analysis</span>
                  <span>Scikit-learn</span>
                </div>
              </div>
            </div>

            {/* Experience 3 */}
            <div className="experience-card">
              <div className="experience-date">Nov 2025 – Jan 2026</div>

              <div className="experience-content">
                <h3>AI/ML Developer Intern</h3>

                <h4>Spark to Ideas</h4>

                <p>
                  Developed multiple Machine Learning and Data Analysis
                  projects. Worked on data preprocessing, feature engineering,
                  model training, evaluation and Flask-based REST API
                  deployment.
                </p>

                <div className="experience-tags">
                  <span>Python</span>
                  <span>Pandas</span>
                  <span>NumPy</span>
                  <span>Scikit-learn</span>
                  <span>Flask</span>
                  <span>REST API</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section dark-section">
        <div className="section-container">
          <p className="section-label">MY SKILLS</p>
          <h2 className="section-title">
            Technologies I <span>work with</span>
          </h2>

          <div className="skills-grid">
            <div className="skill-box">
              <h3>AI / ML</h3>
              <p>
                Python, Scikit-learn, Regression, Classification, NLP, LLM
                Integration
              </p>
            </div>

            <div className="skill-box">
              <h3>Python</h3>
              <p>Python, Pandas, NumPy, Flask, Django, REST APIs</p>
            </div>

            <div className="skill-box">
              <h3>Full Stack</h3>
              <p>React.js, Node.js, Express.js, MongoDB, Mongoose</p>
            </div>

            <div className="skill-box">
              <h3>Tools</h3>
              <p>Git, GitHub, Postman, Render, Google Gemini API</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}

      {/* Projects */}
      <section id="projects" className="section">
        <div className="section-container">
          <p className="section-label">PORTFOLIO</p>

          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>

          <p className="section-description">
            A selection of AI, machine learning, data analysis, and full-stack
            projects that demonstrate my practical development experience.
          </p>

          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card">
              <span className="project-number">01</span>

              <h3>Tally AI Assistant</h3>

              <p>
                An AI-powered business assistant that allows users to upload
                Tally ERP CSV reports and ask questions in natural language. It
                generates useful business insights such as sales trends, top
                customers, GST summaries, and inventory analysis.
              </p>

              <div className="tech-list">
  <span>React.js</span>
  <span>Node.js</span>
  <span>Express.js</span>
  <span>Gemini API</span>
  <span>CSV</span>
</div>

<div className="project-buttons">
  <a
    href="https://github.com/Saurabh-Prajapati123/tally-ai-assistant"
    target="_blank"
    rel="noreferrer"
    className="project-btn github-btn"
  >
    GitHub
  </a>

  <button
    type="button"
    className="project-btn demo-btn"
    onClick={() => handleDemoRequest("Tally AI Assistant")}
  >
    Request Demo
  </button>
</div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <span className="project-number">02</span>

              <h3>AI Company Research Agent</h3>

              <p>
                An AI-powered research agent that collects and summarizes
                company information from multiple public sources and helps users
                quickly understand companies and their latest information.
              </p>

              <div className="tech-list">
                <span>Python</span>
                <span>LLM</span>
                <span>AI</span>
                <span>Automation</span>
              </div>

              <div className="project-buttons">
  <a
    href="https://github.com/Saurabh-Prajapati123/AI-Powered-Research-Recommendation-Agent"
    target="_blank"
    rel="noreferrer"
    className="project-btn github-btn"
  >
    GitHub
  </a>

  <button
    type="button"
    className="project-btn demo-btn"
    onClick={() => handleDemoRequest("AI Company Research Agent")}
  >
    Request Demo
  </button>
</div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <span className="project-number">03</span>

              <h3>House Price Prediction</h3>

              <p>
                An end-to-end machine learning regression project including data
                preprocessing, feature scaling, Ridge Regression model training,
                and Flask REST API deployment.
              </p>

              <div className="tech-list">
                <span>Python</span>
                <span>Scikit-learn</span>
                <span>Ridge Regression</span>
                <span>Flask</span>
                <span>Postman</span>
              </div>

              <div className="project-buttons">
                <a href="#contact" className="project-btn github-btn">
                  GitHub →
                </a>

                <button
                  type="button"
                  className="project-btn demo-btn"
                  onClick={() => handleDemoRequest("House Price Prediction")}
                >
                  Request Demo
                </button>
              </div>
            </div>

            {/* Project 4 */}
            <div className="project-card">
              <span className="project-number">04</span>

              <h3>Medical Insurance Cost Prediction</h3>

              <p>
                A machine learning regression application that predicts medical
                insurance costs and demonstrates model deployment using Flask,
                Gunicorn, and Render.
              </p>

              <div className="tech-list">
                <span>Python</span>
                <span>Scikit-learn</span>
                <span>Flask</span>
                <span>Gunicorn</span>
                <span>Render</span>
              </div>

              <div className="project-buttons">
                <a href="#contact" className="project-btn github-btn">
                  GitHub →
                </a>

                <button
                  type="button"
                  className="project-btn demo-btn"
                  onClick={() =>
                    handleDemoRequest("Medical Insurance Cost Prediction")
                  }
                >
                  Request Demo
                </button>
              </div>
            </div>

            {/* Project 5 */}
            <div className="project-card">
              <span className="project-number">05</span>

              <h3>Weather Data Analysis</h3>

              <p>
                Performed exploratory data analysis on weather datasets, using
                visualizations to identify trends, distributions, and
                relationships between variables.
              </p>

              <div className="tech-list">
                <span>Python</span>
                <span>Pandas</span>
                <span>NumPy</span>
                <span>Matplotlib</span>
              </div>

              <div className="project-buttons">
                <a href="#contact" className="project-btn github-btn">
                  GitHub →
                </a>

                <button
                  type="button"
                  className="project-btn demo-btn"
                  onClick={() => handleDemoRequest("Weather Data Analysis")}
                >
                  Request Demo
                </button>
              </div>
            </div>

            {/* Project 6 */}
            <div className="project-card">
              <span className="project-number">06</span>

              <h3>Smartphone Sales Analysis</h3>

              <p>
                Analysed smartphone sales data to identify top-selling brands
                and price trends and created comparative charts for business
                insights.
              </p>

              <div className="tech-list">
                <span>Python</span>
                <span>Pandas</span>
                <span>NumPy</span>
                <span>Matplotlib</span>
              </div>

              <div className="project-buttons">
                <a href="#contact" className="project-btn github-btn">
                  GitHub →
                </a>

                <button
                  type="button"
                  className="project-btn demo-btn"
                  onClick={() => handleDemoRequest("Smartphone Sales Analysis")}
                >
                  Request Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      {/* Services */}

      {/* Services */}
      <section id="services" className="section dark-section">
        <div className="section-container">
          <p className="section-label">FREELANCE SERVICES</p>

          <h2 className="section-title">
            I can help you <span>build it.</span>
          </h2>

          <p className="section-description">
            I help businesses, startups, and individuals build modern web
            applications, AI solutions, machine learning systems, and REST APIs.
          </p>

          <div className="services-grid">
            {/* Service 1 */}
            <div className="service-card">
              <div className="service-icon">AI</div>

              <h3>AI & Machine Learning</h3>

              <p>
                Build machine learning models, AI applications, NLP solutions,
                and LLM-powered applications for real-world use cases.
              </p>

              <ul className="service-list">
                <li>Machine Learning Models</li>
                <li>AI Applications</li>
                <li>NLP Solutions</li>
                <li>LLM Integration</li>
              </ul>
            </div>

            {/* Service 2 */}
            <div className="service-card">
              <div className="service-icon">WEB</div>

              <h3>Full Stack Development</h3>

              <p>
                Develop modern and responsive web applications with powerful
                frontend and backend technologies.
              </p>

              <ul className="service-list">
                <li>React.js Applications</li>
                <li>Node.js Backend</li>
                <li>Python / Django</li>
                <li>MongoDB Integration</li>
              </ul>
            </div>

            {/* Service 3 */}
            <div className="service-card">
              <div className="service-icon">API</div>

              <h3>REST API Development</h3>

              <p>
                Build reliable backend APIs and connect your application with
                databases and third-party services.
              </p>

              <ul className="service-list">
                <li>REST APIs</li>
                <li>Authentication</li>
                <li>Database Integration</li>
                <li>Third-party APIs</li>
              </ul>
            </div>

            {/* Service 4 */}
            <div className="service-card">
              <div className="service-icon">DATA</div>

              <h3>Data Analysis</h3>

              <p>
                Transform raw data into useful insights through cleaning,
                analysis, visualization, and reporting.
              </p>

              <ul className="service-list">
                <li>Data Cleaning</li>
                <li>Exploratory Data Analysis</li>
                <li>Data Visualization</li>
                <li>Business Insights</li>
              </ul>
            </div>
          </div>

          {/* Hire CTA */}
          <div className="hire-cta">
            <div>
              <h3>Have an idea or project?</h3>

              <p>
                Let's discuss your requirements and build a solution together.
              </p>
            </div>

            <a href="#contact" className="primary-btn">
              Start a Project →
            </a>
          </div>
        </div>
      </section>

      {/* Contact */}
      {/* Job Opportunity */}
      <section id="job-opportunity" className="section job-opportunity-section">
  <div className="section-container">

    <p className="section-label">JOB OPPORTUNITY</p>

    <h2 className="section-title">
      Hire <span>Me</span>
    </h2>

    <p className="section-description">
      Are you a company looking to hire a developer?
      Send me the job opportunity details.
    </p>

    <div className="contact-grid">

      <div className="contact-info">
        <div className="contact-item">
          <div className="contact-icon">JOB</div>

          <div>
            <h3>Looking for a Developer?</h3>
            <p>
              Share the job details and I will get back to you.
            </p>
          </div>
        </div>
      </div>

      <div className="contact-form">

        <form onSubmit={handleJobSubmit}>

          <input
            type="text"
            name="Company"
            placeholder="Company Name"
            value={jobFormData.Company}
            onChange={handleJobChange}
            required
          />

          <input
            type="text"
            name="RecruiterName"
            placeholder="HR / Recruiter Name"
            value={jobFormData.RecruiterName}
            onChange={handleJobChange}
            required
          />

          <input
            type="email"
            name="Email"
            placeholder="HR Email"
            value={jobFormData.Email}
            onChange={handleJobChange}
            required
          />

          <select
            name="JobRole"
            value={jobFormData.JobRole}
            onChange={handleJobChange}
            required
          >
            <option value="">Select Job Role</option>
            <option value="Software Developer">Software Developer</option>
            <option value="Full Stack Developer">Full Stack Developer</option>
            <option value="MERN Stack Developer">MERN Stack Developer</option>
            <option value="Python Developer">Python Developer</option>
            <option value="Django Developer">Django Developer</option>
            <option value="AI/ML Engineer">AI/ML Engineer</option>
            <option value="Data Analyst">Data Analyst</option>
            <option value="Backend Developer">Backend Developer</option>
            <option value="Frontend Developer">Frontend Developer</option>
          </select>

          <select
            name="JobType"
            value={jobFormData.JobType}
            onChange={handleJobChange}
            required
          >
            <option value="">Select Job Type</option>
            <option value="Full-Time">Full-Time</option>
            <option value="Part-Time">Part-Time</option>
            <option value="Internship">Internship</option>
            <option value="Contract">Contract</option>
          </select>

          <select
            name="WorkMode"
            value={jobFormData.WorkMode}
            onChange={handleJobChange}
            required
          >
            <option value="">Select Work Mode</option>
            <option value="On-Site">On-Site</option>
            <option value="Hybrid">Hybrid</option>
            <option value="Remote">Remote</option>
          </select>

          <input
            type="text"
            name="Location"
            placeholder="Job Location"
            value={jobFormData.Location}
            onChange={handleJobChange}
          />

          <input
            type="text"
            name="Salary"
            placeholder="Salary / CTC"
            value={jobFormData.Salary}
            onChange={handleJobChange}
          />

          <textarea
            name="Message"
            placeholder="Job Description / Opportunity Details"
            value={jobFormData.Message}
            onChange={handleJobChange}
            required
          ></textarea>

          <button type="submit" className="submit-btn">
            Send Job Opportunity
          </button>

          {jobStatus && (
            <p className="form-status">{jobStatus}</p>
          )}

        </form>

      </div>
    </div>
  </div>
</section>


{/* Contact */}
<section id="contact" className="section contact-section"></section>
      <section id="contact" className="section contact-section">
        <div className="section-container">
          <p className="section-label">GET IN TOUCH</p>

          <h2 className="section-title">
            Let's build something <span>great.</span>
          </h2>

          <p className="section-description">
            Looking for a developer for your next project or interested in
            working together? Send me a message and let's discuss your idea.
          </p>

          <div className="contact-grid">
            {/* Contact Information */}
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">@</div>

                <div>
                  <h3>Email</h3>
                  <a href="mailto:saurabhprajapati246@gmail.com">
                    saurabhprajapati246@gmail.com
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">TEL</div>

                <div>
                  <h3>Phone</h3>
                  <a href="tel:+919173580417">+91 9173580417</a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">GH</div>

                <div>
                  <h3>GitHub</h3>
                  <a
                    href="https://github.com/Saurabh-Prajapati123"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Saurabh-Prajapati123
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">IN</div>

                <div>
                  <h3>LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/saurabh-prajapati-0956582ba"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Connect with me
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">UP</div>

                <div>
                  <h3>Upwork</h3>
                  <a
                    href="https://www.upwork.com/freelancers/~0174c1400b0712be51"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Hire me on Upwork
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h3>Send me a message</h3>

              <form onSubmit={handleSubmit} className="contact-form">
                <input
                  type="text"
                  name="Name"
                  placeholder="Your Name"
                  value={formData.Name}
                  onChange={handleChange}
                  required
                />

                <input
                  type="email"
                  name="Email"
                  placeholder="Your Email"
                  value={formData.Email}
                  onChange={handleChange}
                  required
                />

                <select
                  name="Service"
                  value={formData.Service}
                  onChange={handleChange}
                >
                  <option value="">Select Service</option>

                  <option value="Request Demo">Request Demo</option>

                  <option value="AI & Machine Learning">
                    AI & Machine Learning
                  </option>

                  <option value="Full Stack Development">
                    Full Stack Development
                  </option>

                  <option value="REST API Development">
                    REST API Development
                  </option>

                  <option value="Data Analysis">Data Analysis</option>
                </select>

                <textarea
                  name="Message"
                  placeholder="Your Message"
                  value={formData.Message}
                  onChange={handleChange}
                  required
                ></textarea>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>

                {status && <p className="form-status">{status}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="#home" className="footer-logo">
                S<span>P</span>
              </a>

              <p>ML Engineer & Full Stack Developer</p>

              <p className="footer-description">
                Building AI-powered applications, web solutions and practical
                software for real-world problems.
              </p>
            </div>

            <div className="footer-links">
              <h3>Quick Links</h3>

              <a href="#about">About</a>
              <a href="#experience">Experience</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#services">Services</a>
              <a href="#contact">Contact</a>
            </div>

            <div className="footer-links">
              <h3>Connect</h3>

              <a
                href="https://github.com/Saurabh-Prajapati123"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/saurabh-prajapati-0956582ba"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://www.upwork.com/freelancers/~0174c1400b0712be51"
                target="_blank"
                rel="noreferrer"
              >
                Upwork
              </a>

              <a href="mailto:saurabhprajapati246@gmail.com">Email</a>
            </div>

            <div className="footer-resume">
              <h3>Resume</h3>

              <p>
                Interested in working together? View my resume for more details.
              </p>

              <a
                href="/Saurabh_Prajapati_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="footer-resume-btn"
              >
                View Resume →
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 Saurabh Prajapati. All rights reserved.</p>

            <a href="#home">Back to top ↑</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
