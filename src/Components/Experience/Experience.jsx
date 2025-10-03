import React from 'react';
import './Experience.css';

const Experience = () => {
  return (
  <div className='expe'>
    <h2 className='expe-title'>EXPERIENCE</h2>
    <div className='expe-writeup'>
        <p className='expe-p'>Self-Taught / Personal Projects | 2025 – Present</p>
        <ul className='expe-list'>
          <li className='expe-list-li'>
            Developed responsive and user-friendly web pages using HTML5 and CSS3.
          </li>
          <li>
            Built interactive features and dynamic functionality with JavaScript (ES6).
          </li>
          <li>
            Designed and implemented React components with basic state and props management.
          </li>
          <li>
            Created and integrated RESTful APIs with Node.js and Express for backend functionality.
          </li>
          <li>
            Applied version control practices using Git & GitHub for project management.
          </li>
          <li>
            Completed personal projects, including a portfolio website, a React-based to-do list app, and a basic Node.js REST API.
          </li>
        </ul>

    </div>
    </div>
  );
};

export default Experience;