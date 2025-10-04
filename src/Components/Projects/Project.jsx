import React from 'react';
import './Projects.css';
import Image1 from "../../assets/project-thumbnail-1.png"
import Image2 from "../../assets/project-thumbnail-2.png"
import Image3 from "../../assets/Screenshot 2025-10-03 162147.png"
import image4 from "../../assets/Screenshot 2025-10-04 103325.png"

const Project = () => {

   const projects = [
    {
      id: 1,
      name: 'HTML TUTORIAL',
      para: 'CLICK HERE TO VIEW',
      image: Image1,
      link:"",
      // Or use your own image: image: '/images/html-tutorial.jpg'
    },
    {
      id: 2,
      name: 'CSS TUTORIAL',
      para: 'CLICK HERE TO VIEW',
      image: Image2,
      link:"",
      // Or use your own image: image: '/images/css-tutorial.jpg'
    },
    {
      id: 3,
      name: 'furniro dummy e-commerce',
      para: 'CLICK HERE TO VIEW',
      image:image4 ,
      link:"https://github.com/chialuka112/Furniro",
    },
    {
      id: 4,
      name: 'REACT TUTORIAL to do',
      para: 'CLICK HERE TO VIEW',
      image:Image3,
      link:"https://github.com/chialuka112/my_keeper_App",
    }
  ];

  return (
    <div className="project-section">
      <h2 className="project-title">PROJECTS</h2>
      
      <div className="project-types">
        {projects.map((proj) => (
          <div key={proj.id} className="project-item">
            <div className="project-icon-container">
              <img 
                src={proj.image} 
                alt={proj.name}
              />
            </div>
            <div className="project-name">
              <span>{proj.para} </span>
              <a href= {proj.link}>
                {proj.name}
              </a>
            </div>
            <div className="project-label">{proj.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;