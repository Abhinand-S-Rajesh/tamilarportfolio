import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Tamil Startup</h3>
            <p>Building innovative solutions for the future. Empowering businesses with cutting-edge technology and creative strategies.</p>
            <div className="social-links">
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><a href="#about">About Us</a></li>
              <li><Link to="/founder">Founder & CEO</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <ul className="contact-info">
              <li>
                <FaEnvelope />
                <span>vijaypraba1985@gmail.com</span>
              </li>
              <li>
                <FaPhone />
                <span>+91 9500878965</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Tamil Startup. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
