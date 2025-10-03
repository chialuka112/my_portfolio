import React from 'react';
import './Projects.css';
import Image1 from "../../assets/project-thumbnail-1.png"
import Image2 from "../../assets/project-thumbnail-2.png"

const Project = () => {

   const projects = [
    {
      id: 1,
      name: 'HTML TUTORIAL',
      para: 'CLICK HERE TO VIEW',
      image: Image1,
      // Or use your own image: image: '/images/html-tutorial.jpg'
    },
    {
      id: 2,
      name: 'CSS TUTORIAL',
      para: 'CLICK HERE TO VIEW',
      image: Image2,
      // Or use your own image: image: '/images/css-tutorial.jpg'
    },
    {
      id: 3,
      name: 'JAVASCRIPT TUTORIAL',
      para: 'CLICK HERE TO VIEW',
      image: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=600&h=400&fit=crop',
    },
    {
      id: 4,
      name: 'REACT TUTORIAL',
      para: 'CLICK HERE TO VIEW',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
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
              <span>{proj.para}</span>
            </div>
            <div className="project-label">{proj.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;