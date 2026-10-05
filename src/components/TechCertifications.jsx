import React from 'react';
import { Code, LineChart, ArrowRight } from 'lucide-react';

export default function TechCertifications({ onEnquire }) {
  const techCards = [
    {
      title: 'Full Stack Web Development',
      badge: 'LIVE PROJECTS & CERTIFICATION',
      icon: <Code size={22} style={{ color: '#2563eb' }} />,
      desc: 'Master full-stack modern web application development with real-world project building, REST APIs, database architecture, responsive design, and version control.',
      tags: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Git & GitHub']
    },
    {
      title: 'Digital Marketing & Data Analytics',
      badge: 'GROWTH & MARKETING TECH',
      icon: <LineChart size={22} style={{ color: '#dc2626' }} />,
      desc: 'Master targeted digital campaigns, search engine optimization (SEO), performance marketing, Google Ads, GA4 analytics, and executive dashboard metrics.',
      tags: ['SEO & SEM', 'Google Ads', 'Meta Ads Manager', 'GA4 Analytics', 'Content Strategy', 'Excel Analytics', 'Python Data Intro']
    }
  ];

  return (
    <section id="tech" className="section-spacing" style={{ backgroundColor: '#ffffff', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
          <div className="light-pill" style={{ marginBottom: '14px' }}>
            <span className="light-pill-dot"></span>
            TECH SKILLS | INDUSTRY RECOGNIZED CERTIFICATIONS
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.8vw, 2.6rem)', fontWeight: 800, color: '#0f172a' }}>
            IT & Technology <span className="gradient-text">Certifications</span>
          </h2>
          <p style={{ marginTop: '10px', color: '#475569' }}>
            Job-oriented tech training designed by industry experts with hands-on practical project building, live portfolio creation, and certification.
          </p>
        </div>

        {/* 2 Large Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '24px'
        }}>
          {techCards.map((card, idx) => (
            <div key={idx} className="light-card" style={{ padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '12px',
                    background: 'rgba(37, 99, 235, 0.08)', border: '1px solid rgba(37, 99, 235, 0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    {card.icon}
                  </div>

                  <span style={{
                    fontSize: '0.7rem', fontWeight: 700, color: '#2563eb',
                    background: 'rgba(37, 99, 235, 0.08)', border: '1px solid rgba(37, 99, 235, 0.2)',
                    padding: '4px 10px', borderRadius: '9999px'
                  }}>
                    {card.badge}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
                  {card.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, marginBottom: '20px' }}>
                  {card.desc}
                </p>

                {/* Tech Stack Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                  {card.tags.map((t, tIdx) => (
                    <span key={tIdx} style={{
                      fontSize: '0.75rem', fontWeight: 600, color: '#0f172a',
                      background: '#f1f5f9', border: '1px solid #e2e8f0',
                      padding: '4px 10px', borderRadius: '6px'
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ paddingTop: '20px', borderTop: '1px solid #f1f5f9' }}>
                <button onClick={onEnquire} className="btn-blue-light" style={{ width: '100%', justifyContent: 'center' }}>
                  Enquire & Detailed Syllabus <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
