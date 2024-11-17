import React from 'react';
import '../styles/About.css';
import Picture from '../assets/Picture.jpg';
import { FaLightbulb, FaBriefcase, FaUsers } from 'react-icons/fa'; // Icons

const About = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <div className="about-text">
          <h2 className="about-title">About Me</h2>
          <p>
            Hi, I'm Megan Calme, a driven and creative communicator studying Integrated Strategic
            Communication at the University of Kentucky. My passion lies in connecting people
            through storytelling, event management, and visual media.
          </p>
          <p>
            Whether behind the camera or organizing impactful events, I aim to bring people together
            and create memorable experiences. I thrive on building relationships and developing
            innovative solutions to any challenge.
          </p>
          <div className="about-icons">
            <div className="icon-item">
              <FaLightbulb className="icon" />
              <span>Creative Thinker</span>
            </div>
            <div className="icon-item">
              <FaBriefcase className="icon" />
              <span>Strategic Planner</span>
            </div>
            <div className="icon-item">
              <FaUsers className="icon" />
              <span>Relationship Builder</span>
            </div>
          </div>
        </div>
        <img
          src={Picture}
          alt="Megan Calme"
          className="about-image"
        />
      </div>
    </div>
  );
};

export default About;
