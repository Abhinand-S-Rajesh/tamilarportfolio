import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Header.css';

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

  const handleNavClick = (sectionId) => {
    closeMenu();
    if (location.pathname !== '/') {
      navigate('/#' + sectionId);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled glass' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo" onClick={() => window.scrollTo(0, 0)}>
          <img
            src="/assets/images/tamilarlogo.png"
            alt="Tamilar Startup"
            className="logo-img"
          />
        </Link>

        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <button onClick={() => { closeMenu(); window.scrollTo(0,0); navigate('/'); }} className="nav-link">
                Home
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('about')} className="nav-link">
                About
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('services')} className="nav-link">
                Services
              </button>
            </li>
            <li>
              <Link to="/founder" onClick={closeMenu} className={`nav-link ${location.pathname === '/founder' ? 'active' : ''}`}>
                Founder & CEO
              </Link>
            </li>
            <li>
              <button onClick={() => handleNavClick('contact')} className="nav-link btn-contact">
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
