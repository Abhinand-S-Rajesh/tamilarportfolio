import React, { useState, useRef } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Replace these with your actual Service ID, Template ID, and Public Key
    const SERVICE_ID = 'service_uykrzhh';
    const TEMPLATE_ID = 'template_c6jhq6i';
    const PUBLIC_KEY = 'v-UPikycAYH0YeBtV';

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log('SUCCESS!', result.status, result.text);
          setLoading(false);
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', phone: '', message: '' });
      }, (error) => {
          console.log('FAILED...', error);
          setLoading(false);
          alert(`Failed to send the message. Error: ${JSON.stringify(error)}`);
      });
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Have a project in mind? Let's discuss how we can help you achieve your goals
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>
            <p>Feel free to reach out to us through any of the following channels:</p>
            
            <div className="contact-items">
              <div className="contact-item">
                <div className="contact-icon">
                  <FaEnvelope />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>abhinandsrajesh16032004@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaPhone />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+91 8807363551</p>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon">
                  <FaMapMarkerAlt />
                </div>
                <div>
                  <h4>Address</h4>
                  <p>Chennai, Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>
          
          <form ref={form} className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name" // This name must match the variable in your EmailJS template (e.g., {{name}})
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email" // Match {{email}}
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone" // Match {{phone}}
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 8807363551"
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message" // Match {{message}}
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
