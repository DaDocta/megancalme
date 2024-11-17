import React from 'react';
import '../styles/Experience.css';

const experiences = [
  {
    title: 'Fedders Construction Intern',
    company: 'Fedders Construction',
    duration: 'May 2024 - Present',
    description: 'Event management, video production, and assisting with construction projects.',
  },
  {
    title: 'Team Alpha Videography Intern',
    company: 'Awesome Inc',
    duration: 'Jan 2024 - Apr 2024',
    description: 'Set up video equipment, edited interviews, and maintained the YouTube channel.',
  },
  {
    title: 'Nanny and Dog Sitter',
    company: 'Child and Animal Care',
    duration: 'May 2017 - Aug 2023',
    description: 'Cared for children and pets, scheduled activities, and prepared meals.',
  },
  {
    title: 'Camp Counselor and Videographer',
    company: 'National 4-H Council',
    duration: 'Jul 2021 - Jul 2023',
    description: 'Led camp activities and created video montages for social media promotion.',
  },
];

const Experience = () => {
  return (
    <div className="experience-section">
      <h2>Experience</h2>
      <div className="experience-timeline">
        <div className="timeline-line"></div>
        {experiences.map((experience, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-item-content">
              <h3>{experience.title}</h3>
              <h4>{experience.company}</h4>
              <p>
                <strong>Duration:</strong> {experience.duration}
              </p>
              <p>{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
