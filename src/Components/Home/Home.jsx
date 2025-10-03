import React from "react";
import "./Home.css";

const Home = () => {
  const technologies = [
    {
      id: 1,
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      id: 2,
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      id: 3,
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      id: 4,
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      id: 5,
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
  ];

  const handleGetInTouch = () => {
    window.location.href = "#contact";
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/path-to-your-cv.pdf";
    link.download = "My_CV.pdf";
    link.click();
  };

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          {/* Profile Image */}
          <div className="profile-wrapper">
            <div className="profile-gradient-border">
              <img
                src="https://via.placeholder.com/200"
                alt="Profile"
                className="profile-img"
              />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="hero-heading">
            I do code and
            <br />
            make content <span className="text-orange">about</span>{" "}
            <span className="text-purple">it!</span>
          </h1>

          {/* Description */}
          <p className="hero-description">
            Hi, i'm luka, a beginner web developer exploring the world of HTML,CSS and Javascript
            <br />
            I've started building projects with React on the Frontend and Node.js on the backend.
            <br />
            I enjoy turning ideas into clean, responsive websites that people can actually use
            <br />
            This portfolio is part of my learning journey and i'm excited to grow and <br/>
            share more projects along the way
          </p>

          {/* Action Buttons */}
          <div className="hero-buttons">
            <button className="btn btn-white" onClick={handleGetInTouch}>
              Get In Touch
            </button>
            <button className="btn btn-outlined" onClick={handleDownloadCV}>
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <h2 className="experience-title">EXPERIENCE WITH</h2>

       <div className="tech-grid">
      {technologies.map((tec) => (
        <div key={tec.id} className="tech-item">
          <div className="tech-icon-container">
            <img
              src={tec.icon}
              alt={tec.name}
              className="tech-icon-image"
            />
          </div>
          <span className="tech-name">{tec.name}</span>
        </div>
      ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
