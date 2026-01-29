import React from 'react';
import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Team.css';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'John Doe',
      role: 'CTO',
      bio: 'Expert in cloud architecture and system design.'
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Lead Designer',
      bio: 'Creative mind behind our stunning UI/UX designs.'
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'Senior Developer',
      bio: 'Full-stack developer with 10+ years of experience.'
    },
    {
      id: 4,
      name: 'Sarah Williams',
      role: 'Marketing Head',
      bio: 'Strategic marketing expert driving business growth.'
    }
  ];

  return (
    <section id="team" className="team section">
      <div className="container">
        <h2 className="section-title">Our Team</h2>
        <p className="section-subtitle">
          Meet the talented individuals who make it all possible
        </p>
        
        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="team-image">
                <div className="team-placeholder">
                  <span>{member.name.charAt(0)}</span>
                </div>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-bio">{member.bio}</p>
                <div className="team-social">
                  <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
                  <a href="#" aria-label="Twitter"><FaTwitter /></a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
