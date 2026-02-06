import React, { useEffect } from 'react';
import { FaRocket, FaHandshake, FaChartLine, FaUsers, FaGlobeAsia, FaLightbulb } from 'react-icons/fa';
import './TamilarStartup.css';

const TamilarStartup = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tamilar-startup-page">
      {/* Hero Section */}
      <section className="ts-hero">
        <div className="ts-hero-content">
          <h1 className="ts-logo-text">
            Tamilar <span className="ts-logo-highlight">Startup</span>
          </h1>
          <p className="ts-tagline">Empowering Entrepreneurs Globally from IDEA to IPO</p>
          <p className="ts-description">
            A startup ecosystem powered by artificial intelligence, aiming to support entrepreneurs 
            globally from idea inception to IPO. We leverage AI-driven tools for market analysis, 
            funding opportunities, mentorship, and scaling solutions.
          </p>
          
          <div className="ts-hero-stats">
            <div className="ts-stat">
              <h3>13,997+</h3>
              <p>Followers</p>
            </div>
            <div className="ts-stat">
              <h3>500+</h3>
              <p>Connections</p>
            </div>
            <div className="ts-stat">
              <h3>15+</h3>
              <p>Years Integration</p>
            </div>
          </div>
        </div>
      </section>

      {/* About / Mission Section */}
      <section className="ts-section ts-mission">
        <div className="container">
          <div className="ts-mission-content">
            <p className="ts-mission-text">
              "We foster growth and empower businesses through the perfect blend of technology 
              and personalized engagement, navigating a complex landscape to deliver tailored solutions."
            </p>
            <p className="ts-mission-author">— M. V. Prabakar, Founder & CEO</p>
          </div>
        </div>
      </section>

      {/* Core Pillars Section */}
      <section className="ts-section ts-about">
        <div className="container">
          <div className="ts-section-header">
            <h2 className="ts-section-title">Our Ecosystem</h2>
            <div className="ts-section-line"></div>
          </div>

          <div className="ts-card-grid">
            <div className="ts-card">
              <h3><FaRocket className="ts-card-icon"/> Global Catalyst</h3>
              <p>
                Acting as a global startup ecosystem catalyst, we bridge the gap between local innovation 
                and global markets, ensuring Tamil entrepreneurs have a stage to shine.
              </p>
            </div>

            <div className="ts-card">
              <h3><FaChartLine className="ts-card-icon"/> AI-Driven Growth</h3>
              <p>
                Utilizing cutting-edge AI tools for deep market analysis, predictive modeling for 
                funding success, and personalized mentorship matching.
              </p>
            </div>

            <div className="ts-card">
              <h3><FaHandshake className="ts-card-icon"/> Strategic Funding</h3>
              <p>
                 Specializing in funding strategies and venture building to help startups secure the capital 
                 they need to scale sustainably from seed to series.
              </p>
            </div>

            <div className="ts-card">
              <h3><FaUsers className="ts-card-icon"/> Community & PR</h3>
              <p>
                Leveraging deep roots in Public Relations and community building (JCI, BNI) to create 
                a supportive network of mentors, investors, and peers.
              </p>
            </div>
             <div className="ts-card">
              <h3><FaLightbulb className="ts-card-icon"/> Innovation Hub</h3>
              <p>
                Organizers of major events like the Future Tech AI Summit and Expo, bringing together 
                thought leaders and innovators.
              </p>
            </div>
            <div className="ts-card">
              <h3><FaGlobeAsia className="ts-card-icon"/> Cross-Border Scale</h3>
              <p>
                Helping startups navigate international expansion with a focus on marketing automation 
                and unified communications (UCaaS).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Join Section */}
      <section className="ts-section">
        <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
          <h2 className="ts-section-title">Join the Revolution</h2>
          <p className="ts-description">
            Whether you are an aspiring entrepreneur, an investor looking for the next big thing, 
            or a mentor wanting to give back, Tamilar Startup is your platform.
          </p>
          <a href="/#contact" className="btn btn-primary" style={{ padding: '15px 40px', fontSize: '1.1rem' }}>
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default TamilarStartup;
