import React from 'react';
import { FaCode, FaMobile, FaChartLine, FaPalette, FaCloud, FaShieldAlt } from 'react-icons/fa';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies and best practices.'
    },
    {
      icon: <FaMobile />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.'
    },
    {
      icon: <FaChartLine />,
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns to boost your online presence and reach.'
    },
    {
      icon: <FaPalette />,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive designs that enhance user experience.'
    },
    {
      icon: <FaCloud />,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Consulting',
      description: 'Expert advice and guidance to help your business grow.'
    }
  ];

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive solutions tailored to meet your business needs
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
