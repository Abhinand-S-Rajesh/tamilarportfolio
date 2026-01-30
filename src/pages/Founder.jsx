import React, { useEffect } from "react";
import {
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
  FaAward,
  FaLightbulb,
  FaRocket,
  FaCheckCircle
} from "react-icons/fa";
import "./Founder.css";

const Founder = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="founder-page">

      {/* ================= HERO ================= */}
      <section className="founder-hero">
        <div className="container hero-grid">
          <div className="founder-image-wrapper">
            <img
              src="/assets/images/clearbackground.png"
              alt="M. V. Prabakar"
              className="founder-img"
            />
            <div className="experience-badge">
              <span className="years">15+</span>
              <span className="text">Years Exp.</span>
            </div>
          </div>

          <div className="founder-hero-content">
            <h1 className="founder-name">M. V. Prabakar, <span className="highlight-degree">MBA</span></h1>

            <h3 className="founder-role">
              Founder & CEO | Startup Ecosystem Builder | Funding Strategist
            </h3>

            <p className="founder-tagline">
              Empowering startups from Idea to IPO through AI, funding, and strategic growth.
            </p>

            <p className="founder-intro">
              Helping founders build, fund, and scale sustainable businesses across India and beyond.
            </p>

            <div className="founder-contact">
              <a href="tel:+919500878965" className="contact-item"><FaPhone /> +91 9500878965</a>
              <a href="mailto:vijaypraba1985@gmail.com" className="contact-item"><FaEnvelope /> vijaypraba1985@gmail.com</a>
              <span className="contact-item"><FaMapMarkerAlt /> Chennai, Tamil Nadu, India</span>
            </div>

            <div className="social-links">
              <a href="https://www.linkedin.com/in/m-v-prabakar/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="section container about-section">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-line"></div>
        </div>

        <div className="about-content">
          <p>
            I am an entrepreneur, ecosystem builder, and startup strategist with over a decade of experience in business development, financial services, and innovation-led growth.
          </p>
          <p>
            As the <strong>Founder & CEO of Tamilar Startup</strong>, I lead a mission-driven platform that supports founders from idea stage to IPO. We combine artificial intelligence, funding access, mentorship, and strategic guidance to help startups launch faster, scale smarter, and compete globally.
          </p>
          <p>
            My career spans marketing automation, customer relationship management, venture funding, and business intelligence. Having worked across banking, finance, pharmaceuticals, and startup ecosystems, I bring a practical, ground-level understanding of how businesses grow in the real world — not just on paper.
          </p>
          
          <div className="focus-areas">
            <h3>My Core Focus:</h3>
            <ul>
              <li><FaCheckCircle className="icon-check"/> Startup Acceleration</li>
              <li><FaCheckCircle className="icon-check"/> Fundraising Strategy</li>
              <li><FaCheckCircle className="icon-check"/> Business Scaling</li>
              <li><FaCheckCircle className="icon-check"/> Founder Mentorship</li>
              <li><FaCheckCircle className="icon-check"/> Innovation Communities</li>
            </ul>
          </div>
          
          <p className="quote-box">
            "I believe sustainable businesses are built with the right systems, strong relationships, and disciplined execution."
          </p>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}
      <section className="section bg-light experience-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Professional Experience</h2>
            <div className="section-line"></div>
          </div>

          <div className="experience-timeline">
            
            {/* Tamilar Startup */}
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="role-header">
                  <h3>Founder & CEO</h3>
                  <span className="company">Tamilar Startup</span>
                  <span className="duration">2024 – Present | Tamil Nadu, India</span>
                </div>
                <p className="role-desc">AI-powered startup ecosystem supporting entrepreneurs from ideation to public listing.</p>
                <ul className="achievements-list">
                  <li>Built a complete startup support ecosystem (mentorship, funding, strategy, AI tools)</li>
                  <li>Guided early-stage founders through validation and scaling</li>
                  <li>Connected startups with investors and funding networks</li>
                  <li>Designed AI-based market analysis and opportunity identification systems</li>
                  <li>Organized Future Tech AI Summit & Expo to foster innovation communities</li>
                </ul>
              </div>
            </div>

            {/* AssetInvest */}
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="role-header">
                  <h3>Founder & CEO</h3>
                  <span className="company">AssetInvest Finserv</span>
                  <span className="duration">2020 – Present | Hybrid</span>
                </div>
                <p className="role-desc">Financial services and investment advisory platform focused on retail and startup funding solutions.</p>
                <ul className="achievements-list">
                  <li>Structured funding models for businesses and individuals</li>
                  <li>Developed CRM-driven customer acquisition systems</li>
                  <li>Led business strategy and operations</li>
                  <li>Built sales and advisory teams</li>
                </ul>
              </div>
            </div>

            {/* GoGlobal Roles */}
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="role-header">
                  <h3>Co-Founder</h3>
                  <span className="company">GoGlobal Business School & Accelerator</span>
                  <span className="duration">2022 – Present</span>
                </div>
                <ul className="achievements-list">
                  <li>Startup education and entrepreneurship training</li>
                  <li>Accelerated early-stage startups with market-entry strategies</li>
                  <li>Investor readiness and pitch preparation</li>
                </ul>
              </div>
            </div>

            {/* Other Roles Grouped */}
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="role-header">
                  <h3>Previous Corporate & Leadership Roles</h3>
                </div>
                <div className="mini-roles">
                  <div className="mini-role">
                    <strong>Funding Specialist</strong> <span>BNI (Business Network International)</span>
                  </div>
                  <div className="mini-role">
                    <strong>CSR Manager</strong> <span>JCI (Junior Chamber International)</span>
                  </div>
                  <div className="mini-role">
                    <strong>Sales Manager</strong> <span>HDB Financial Services</span>
                  </div>
                  <div className="mini-role">
                    <strong>Development Manager</strong> <span>ICICI Prudential Life Insurance</span>
                  </div>
                  <div className="mini-role">
                    <strong>Marketing Executive</strong> <span>Alkem Laboratories</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="section container skills-section">
        <div className="section-header">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="section-line"></div>
        </div>

        <div className="skills-grid">
          <div className="skill-category">
            <h3><FaLightbulb /> Core Expertise</h3>
            <div className="tags">
              <span>Startup Strategy</span>
              <span>Venture Building</span>
              <span>Fundraising</span>
              <span>Investor Relations</span>
              <span>Business Development</span>
              <span>CRM Implementation</span>
              <span>Business Intelligence</span>
              <span>Team Leadership</span>
            </div>
          </div>

          <div className="skill-category">
            <h3><FaRocket /> Tools & Tech</h3>
            <div className="tags">
              <span>AI-driven Analytics</span>
              <span>UCaS Platforms</span>
              <span>CRM Systems</span>
              <span>Chatbots</span>
              <span>Automation Tools</span>
              <span>Microsoft Technologies</span>
            </div>
          </div>

          <div className="skill-category">
            <h3><FaBriefcase /> Interpersonal</h3>
            <div className="tags">
              <span>Public Speaking</span>
              <span>Mentorship</span>
              <span>Negotiation</span>
              <span>Relationship Building</span>
              <span>Community Leadership</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="section bg-dark text-white services-preview">
        <div className="container">
          <div className="section-header center">
            <h2 className="section-title text-white">What I Do</h2>
            <div className="section-line mx-auto bg-primary"></div>
          </div>
          
          <div className="services-list-grid">
            <div className="service-item">Startup Mentorship</div>
            <div className="service-item">Funding Strategy</div>
            <div className="service-item">Business Validation</div>
            <div className="service-item">Go-To-Market Planning</div>
            <div className="service-item">Pitch Preparation</div>
            <div className="service-item">Startup Acceleration</div>
            <div className="service-item">Market Research</div>
            <div className="service-item">Corporate Partnerships</div>
          </div>
        </div>
      </section>

      {/* ================= ACHIEVEMENTS ================= */}
      <section className="section container">
        <div className="section-header">
          <h2 className="section-title">Highlights & Achievements</h2>
          <div className="section-line"></div>
        </div>

        <div className="achievements-grid">
          <div className="achievement-card">
            <FaAward className="achieve-icon" />
            <p>Founder of Tamilar Startup Ecosystem</p>
          </div>
          <div className="achievement-card">
            <FaAward className="achieve-icon" />
            <p>Organized Future Tech AI Summit & Expo</p>
          </div>
          <div className="achievement-card">
            <FaAward className="achieve-icon" />
            <p>Supported multiple startups in funding & scaling</p>
          </div>
          <div className="achievement-card">
            <FaAward className="achieve-icon" />
            <p>Speaker & mentor for entrepreneurship programs</p>
          </div>
        </div>
      </section>

      {/* ================= CONTACT CTA ================= */}
      <section className="founder-cta">
        <div className="container">
          <h2>Let’s Collaborate</h2>
          <p>Open to partnerships, mentoring, startup acceleration & investment opportunities.</p>
          
          <div className="cta-contact-details">
             <div className="detail-box">
                <FaMapMarkerAlt />
                <span>Chennai, Tamil Nadu, India</span>
             </div>
             <div className="detail-box">
                <FaOrganizationWrapper />
                <span>Tamilar Startup</span>
             </div>
          </div>

          <a href="mailto:vijaypraba1985@gmail.com" className="cta-btn">Contact Me</a>
        </div>
      </section>

    </main>
  );
};

// Helper component for Icon
const FaOrganizationWrapper = () => <FaBriefcase />;

export default Founder;
