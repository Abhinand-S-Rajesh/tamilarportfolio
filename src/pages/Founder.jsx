import React from "react";
import {
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt
} from "react-icons/fa";
import "./Founder.css";

const Founder = () => {
  return (
    <main className="founder-page">

      {/* ================= HERO ================= */}
      <section className="founder-hero">
        <div className="container hero-grid">

          <img
            src="/assets/images/clearbackground.png"
            alt="Founder"
            className="founder-img"
          />

          <div>
            <h1 className="founder-name">M V Prabakar MBA</h1>

            <h3 className="founder-role">
              Founder & CEO – Tamilar Startup
            </h3>

            <p className="founder-tagline">
              Global Startup Ecosystem Catalyst • Funding Strategist • Venture Builder • Keynote Speaker • FinTech & Startup Growth Mentor
            </p>

            <div className="founder-contact">
              <span><FaPhone /> +91 9500878965</span>
              <span><FaEnvelope /> vijaypraba1985@gmail.com</span>
              <span><FaMapMarkerAlt /> Chennai, Tamil Nadu, India</span>
            </div>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/m-v-prabakar/"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </section>


      {/* ================= STATS ================= */}
      <section className="founder-stats container">
        <div className="stats-grid">
          <div className="stat-card"><h2>15+</h2><p>Years Experience</p></div>
          <div className="stat-card"><h2>1000+</h2><p>Startups Mentored</p></div>
          <div className="stat-card"><h2>50+</h2><p>Events Organized</p></div>
          <div className="stat-card"><h2>5+</h2><p>Ventures Founded</p></div>
        </div>
      </section>


      {/* ================= BIO ================= */}
      <section className="section container">
        <h2 className="section-title">About the Founder</h2>

        <p className="section-text">
          With over 15 years of leadership across financial services, insurance, pharmaceuticals, and entrepreneurship,
          M V Prabakar has built organizations that deliver measurable impact and sustainable growth.
          His expertise spans business strategy, funding ecosystems, startup acceleration, customer relations,
          and technology adoption.
        </p>

        <p className="section-text">
          Through Tamilar Startup, he is building a global AI-powered platform that connects founders,
          investors, and mentors — enabling startups to grow from idea stage to IPO.
        </p>
      </section>


      {/* ================= EDUCATION ================= */}
      <section className="section container">
        <h2 className="section-title">Education</h2>

        <div className="cards-grid">
          <div className="card">
            <h3>MBA – International Marketing</h3>
            <p>Periyar Maniammai University (2008 – 2010)</p>
          </div>

          <div className="card">
            <h3>BSc Physics</h3>
            <p>TSSGRH SEC School Pauparapatti</p>
          </div>

          <div className="card">
            <h3>Associate of Science – Physics</h3>
            <p>Erode Arts & Science College (2005 – 2008)</p>
          </div>
        </div>
      </section>


      {/* ================= VENTURES ================= */}
      <section className="section container">
        <h2 className="section-title">Ventures & Initiatives</h2>

        <div className="cards-grid">

          <div className="card">
            <h3>Tamilar Startup</h3>
            <p>AI-powered global startup ecosystem connecting founders, mentors and investors.</p>
          </div>

          <div className="card">
            <h3>Assetinvest Finserv</h3>
            <p>Financial advisory & investment solutions for individuals and businesses.</p>
          </div>

          <div className="card">
            <h3>GoGlobal Business Accelerator</h3>
            <p>Startup education, mentorship and scaling frameworks for early-stage founders.</p>
          </div>

        </div>
      </section>


      {/* ================= EXPERIENCE ================= */}
      <section className="section container">
        <h2 className="section-title">Professional Experience</h2>

        <ul className="timeline">
          <li>Founder & CEO – Tamilar Startup</li>
          <li>Founder & CEO – Assetinvest Finserv</li>
          <li>Co-Founder – GoGlobal Business School & Accelerator</li>
          <li>Funding Specialist – BNI Business Network International</li>
          <li>CSR Manager – JCI</li>
          <li>Sales Manager – HDB Financial Services</li>
          <li>Development Manager – ICICI Prudential</li>
          <li>Marketing Executive – Alkem Laboratories</li>
          <li>Business Officer – IPCA Pharma</li>
        </ul>
      </section>


      {/* ================= SKILLS ================= */}
      <section className="section container">
        <h2 className="section-title">Core Skills</h2>

        <p className="section-text">
          Media Relations • Business Intelligence • Team Building • Entrepreneurship • CRM • Marketing Automation • Project Management • Startup Mentorship • Financial Strategy • Funding & Investment Planning • Talent Development
        </p>
      </section>


      {/* ================= CTA ================= */}
      <section className="founder-cta">
        <h2>Let’s Collaborate</h2>
        <p>Open to partnerships, mentoring, startup acceleration & investment opportunities.</p>
        <a href="mailto:vijaypraba1985@gmail.com" className="cta-btn">Contact Now</a>
      </section>

    </main>
  );
};

export default Founder;
