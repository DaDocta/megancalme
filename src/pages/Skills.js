import React from 'react';
import '../styles/Skills.css';
import { FaCamera, FaUsers, FaTools, FaVideo, FaHandshake } from 'react-icons/fa';

const skills = [
  { name: 'Event Management', level: 'Expert', progress: 90, description: 'Organizing and managing professional events.', icon: <FaHandshake /> },
  { name: 'Videography', level: 'Advanced', progress: 80, description: 'Recording and editing professional videos.', icon: <FaVideo /> },
  { name: 'Photography', level: 'Advanced', progress: 75, description: 'Capturing and editing high-quality photos.', icon: <FaCamera /> },
  { name: 'Relationship Building', level: 'Advanced', progress: 85, description: 'Building meaningful connections.', icon: <FaUsers /> },
  { name: 'Problem Solving', level: 'Intermediate', progress: 65, description: 'Effectively addressing challenges.', icon: <FaTools /> },
];

const Skills = () => {
  return (
    <div className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <div className="skill-icon">{skill.icon}</div>
            <div className="skill-details">
              <div className="skill-name">{skill.name}</div>
              <div className="skill-description">{skill.description}</div>
              <div className="skill-bar-container">
                <div
                  className="skill-bar"
                  style={{
                    width: `${skill.progress}%`,
                    backgroundColor: skill.progress > 75 ? '#AC3B61' : '#C08497', // Adjust color based on level
                  }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
