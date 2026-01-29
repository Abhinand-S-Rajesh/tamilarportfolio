import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Welcome to <span className="highlight">தமிழர் Startup</span>
            </h1>
            <p className="hero-subtitle">
              Empowering businesses with innovative solutions and cutting-edge technology. 
              We transform ideas into reality.
            </p>
            <div className="hero-buttons">
              <a href="#contact" className="btn btn-primary">Get Started</a>
              <Link to="/founder" className="btn btn-outline">Meet Our Founder</Link>
            </div>
          </div>
          <div className="hero-image">
            <img 
              src="/assets/images/tamilarlogo.png" 
              alt="Tamil Startup" 
              className="hero-img"
              onError={(e) => {
                // Fallback if image doesn't exist
                e.target.style.display = 'none';
                e.target.nextElementSibling.style.display = 'flex';
              }}
            />
            <div className="hero-placeholder" style={{ display: 'none' }}>
              <span>Add your image to: public/assets/images/hero-image.jpg</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
