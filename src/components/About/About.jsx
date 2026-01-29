import React from 'react';
import './About.css';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">

        <h2 className="section-title">About Us</h2>
        <p className="section-subtitle">
          We are a passionate team dedicated to delivering excellence and innovation
        </p>

        {/* ================= About Content ================= */}
        <div className="about-content">

          <div className="about-text">
            <h3>Our Story</h3>

            <p>
              Tamilar Startup is a dynamic platform that fosters innovation and entrepreneurship in Tamil Nadu.
            </p>

            <p>
              Our mission is to create a thriving ecosystem that empowers startups, connects talent with opportunities, and drives technological advancement.
            </p>

            <p>
              Through our flagship event, the Future Tech AI Summit & Expo, we bring together industry leaders, investors, and entrepreneurs to collaborate and innovate.
            </p>

            <p>
              We provide mentorship, networking opportunities, and real-world exposure for startups to grow.
            </p>

            <div className="about-stats">
              <div className="stat-item">
                <h4>50+</h4>
                <p>Events & Projects</p>
              </div>

              <div className="stat-item">
                <h4>30+</h4>
                <p>Partners</p>
              </div>

              <div className="stat-item">
                <h4>5+</h4>
                <p>Years Experience</p>
              </div>
            </div>
          </div>

          <div className="about-image">
            <img
              src="/assets/images/team.jpeg"
              alt="Team"
              className="about-img"
            />
          </div>

        </div>


        


        {/* ================= Values ================= */}


        {/* ================= Values ================= */}
        <div className="values">
          <div className="value-card">
            <h4>Innovation</h4>
            <p>We stay ahead with modern technology and ideas.</p>
          </div>

          <div className="value-card">
            <h4>Excellence</h4>
            <p>We deliver quality experiences and events.</p>
          </div>

          <div className="value-card">
            <h4>Integrity</h4>
            <p>Transparency and trust guide everything we do.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
