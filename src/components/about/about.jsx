import React, { useState } from "react";
import "./about.css";
import ME from "../../assets/me-about.png";
import { GiArtificialIntelligence } from "react-icons/gi";
import { MdComputer } from "react-icons/md";
import bezteq from "../../assets/bezteq-logo.png";
import awfghani from "../../assets/awfghani-logo.png";
import naqs from "../../assets/naqstechdigital_logo.png";
import DOT from "../../assets/DOT-logo.png";
import stonefort from "../../assets/stonefort.png";

import { FaAward, FaRegMoneyBillAlt } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  const [activeTab, setActiveTab] = useState("experience");

  const renderContent = () => {
    switch (activeTab) {
      case "experience":
        return (
          <div>
            <h3>About Me</h3>
            <p className="about-me-p">
              I am dedicated to ongoing learning and professional growth in web
              development, with a focus on staying ahead of emerging industry
              trends. My objective is to design innovative, user-centric
              applications that address real-world challenges, while actively
              contributing to open-source projects. Looking ahead, I aspire to
              lead development teams, fostering collaboration and driving
              successful project outcomes.
            </p>
          </div>
        );
      case "skills":
        return (
          <div className="experience__cont">
            <div className="experience__item">
              <h5>Full Stack Developer</h5>
              <h4 class="company-logos">
                <img
                  src={stonefort}
                  alt="stonefort"
                  style={{
                    width: "30px",
                    height: "30px",
                    objectFit: "contain",
                  }}
                />
                Stonefort Securities
              </h4>
              <p class="exp-year">
                <strong>Years:</strong> 2025 - Present
              </p>
              <p>
                <strong className="experience-year">Experience:</strong> Senior
                developer at Stonefort Securities, specializing in WordPress,
                Next.js, API integrations, performance, and security.
              </p>
            </div>
            <div className="experience__item">
              <h5>IT Manager</h5>
              <h4 class="company-logos">
                <img
                  src={awfghani}
                  alt="AWF Ghani"
                  style={{ width: "30px", height: "30px" }}
                />
                AWF Ghani
              </h4>
              <p class="exp-year">
                <strong>Years:</strong> 2024 - 2025
              </p>
              <p>
                <strong className="experience-year">Experience:</strong>{" "}
                Developed multiple web applications using React.js and Node.js.
              </p>
            </div>
            <div className="experience__item">
              <h5>Full Stack Developer</h5>
              <h4 class="company-logos">
                <img
                  src={bezteq}
                  alt="Bezteq"
                  style={{ width: "30px", height: "30px" }}
                />
                BezTeq
              </h4>
              <p class="exp-year">
                <strong className="experience-year">Years:</strong> 2024 - 2025
              </p>
              <p>
                <strong>Experience:</strong> Developed multiple web applications
                using React.js and Node.js.
              </p>
            </div>
            <div className="experience__item">
              <h5>Web Developer</h5>
              <h4 class="company-logos">
                <img
                  src={naqs}
                  alt="NaqsTech"
                  style={{ width: "40px", height: "30px" }}
                />
                NaqsTech Digital
              </h4>
              <p class="exp-year">
                <strong className="experience-year">Years:</strong> 2021 - 2023
              </p>
              <p>
                <strong>Experience:</strong> Worked on front-end development
                using HTML, CSS, and JavaScript.
              </p>
            </div>
            <div className="experience__item">
              <h5>Front-end Developer</h5>
              <h4 className="dot-d">
                <img
                  src={DOT}
                  alt="NaqsTech"
                  style={{
                    width: "20px",
                    height: "20px",
                    margin: "1px",
                    objectFit: "contain",
                  }}
                />
                Dynamic Online Technologies
              </h4>
              <p class="exp-year">
                <strong className="experience-year">Years:</strong> 2019 - 2021
              </p>
              <p>
                <strong>Experience:</strong> Assisted in developing e-commerce
                websites and managing client projects.
              </p>
            </div>
          </div>
        );
      case "education":
        return (
          <div className="experience__cont">
            <div className="experience__item">
              <h5>
                <span>
                  <MdComputer />
                </span>{" "}
                BS(CS)
              </h5>
              <h4>University of South Asia</h4>
              <p class="exp-year">
                <strong>Years:</strong> 2017 - 2021{" "}
              </p>
              <p>
                I completed my Bachelor's degree from the University in 2021.
                During this period, I enhanced my web development expertise
                through internships and freelancing
              </p>
            </div>
            <div className="experience__item">
              <h5>
                <span>
                  <GiArtificialIntelligence />
                </span>{" "}
                AI(ML)
              </h5>
              <h4>Corvit Networks</h4>
              <p class="exp-year">
                <strong>Years:</strong> 2023
              </p>
              <p>
                I am certified in Artificial Intelligence from Corvit Networks,
                completing an 8-month course covering Python, data analysis,
                visualization, machine learning, and deep learning, where I
                earned an A grade through strong performance in assessments and
                practical labs.
              </p>
            </div>
            <div className="experience__item">
              <h5>
                <span>
                  <MdComputer />
                </span>{" "}
                Web Developer
              </h5>
              <h4>Aptech Computer Education</h4>
              <p class="exp-year">
                <strong>Years:</strong> 2016
              </p>
              <p>
                {" "}
                I completed a 1-year Web Development course at APTECH, where I
                learned HTML, CSS, and JavaScript, gaining proficiency in web
                development and strengthening my technical skills.
              </p>
            </div>
            <div className="experience__item">
              <h5>
                <span>
                  <MdComputer />
                </span>{" "}
                ICS
              </h5>
              <h4>Punjab Group of Colleges</h4>
              <p class="exp-year">
                <strong>Years:</strong> 2013 - 2015
              </p>
              <p>
                I completed my intermediate in Computer Science from Punjab
                College, where I was recognized as a brilliant student.
              </p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} alt="Umair" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__tabs">
            <button
              onClick={() => setActiveTab("experience")}
              className={activeTab === "experience" ? "active" : ""}
            >
              Bio
            </button>
            <button
              onClick={() => setActiveTab("skills")}
              className={activeTab === "skills" ? "active" : ""}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab("education")}
              className={activeTab === "education" ? "active" : ""}
            >
              Education
            </button>
          </div>

          <div className="about__tab-content">{renderContent()}</div>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
