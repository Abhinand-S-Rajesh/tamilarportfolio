import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';
import './ResumeBtn.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };



  return (
    <header className={`header ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container header-container">
        <a href="/assets/resume.pdf" download className="resume-btn">
          Resume
        </a>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => { closeMenu(); window.scrollTo(0, 0); }} className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/album" onClick={() => { closeMenu(); window.scrollTo(0, 0); }} className={`nav-link ${location.pathname === '/album' ? 'active' : ''}`}>
                Album
              </Link>
            </li>
            <li>
              <Link to="/tamilar-startup" onClick={() => { closeMenu(); window.scrollTo(0, 0); }} className={`nav-link ${location.pathname === '/tamilar-startup' ? 'active' : ''}`}>
                Tamilar Startup
              </Link>
            </li>
            <li>
              <button onClick={() => { closeMenu(); const el = document.querySelector('.founder-cta') || document.getElementById('contact'); if(el) el.scrollIntoView({behavior: 'smooth'}) }} className="nav-link btn-contact">
                Contact
              </button>
            </li>
          </ul>
        </nav>

        <div className="hamburger" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        
        {/* Overlay for mobile menu */}
        <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={closeMenu}></div>
      </div>
    </header>
  );
};

export default Header;
