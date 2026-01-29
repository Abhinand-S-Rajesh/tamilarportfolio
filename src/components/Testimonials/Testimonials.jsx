import React from 'react';
import './Testimonials.css';

const Testimonials = () => {

  const recognitions = [
    {
      img: '/assets/images/d2c.jpg',
      title: 'D2C Connect Summit',
      role: 'Outreach Partner'
    },
    {
      img: '/assets/images/ecom.jpg',
      title: 'Ecom Scale Masterclass',
      role: 'Associate Sponsor'
    },
    {
      img: '/assets/images/vibe.jpg',
      title: 'Vibe Marketing Summit',
      role: 'Community Partner'
    },
    {
      img: '/assets/images/medverse.jpg',
      title: 'Medverse Hospital Growth Summit',
      role: 'Outreach Partner'
    },
    {
      img: '/assets/images/sakthi.jpg',
      title: "Sakthi Women's Confluence",
      role: 'Community Partner'
    }
  ];

  const moments = [
    {
      img: '/assets/images/award.jpg',
      caption: 'Award & recognition ceremony at tech summit'
    },
    {
      img: '/assets/images/team.jpg',
      caption: 'Strategic partnerships and collaborations'
    }
  ];

  return (
    <section className="testimonials-section">

      <h3 className="section-title">Trusted & Recognized By Industry Leaders</h3>
      <p className="section-subtitle">
        Our partnerships, sponsorships, and collaborations across events
      </p>


      {/* Recognition Posters */}
      <div className="recognition-grid">
        {recognitions.map((item, index) => (
          <div key={index} className="recognition-card">
            <img src={item.img} alt={item.title} />
            <h4>{item.title}</h4>
            <span>{item.role}</span>
          </div>
        ))}
      </div>


      {/* Event Moments */}
      <h3 className="moments-title">Event Highlights</h3>

      <div className="moments-grid">
        {moments.map((item, index) => (
          <div key={index} className="moment-card">
            <img src={item.img} alt="" />
            <div className="moment-caption">
              <p>{item.caption}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Testimonials;
