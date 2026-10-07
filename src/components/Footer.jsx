import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer style={{
      position: 'relative',
      background: '#0f172a',
      borderTop: '1px solid #1e293b',
      paddingTop: '70px',
      paddingBottom: '30px',
      color: '#cbd5e1'
    }}>
      <div className="container">
        
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>

          {/* Brand Info Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <div style={{
                width: '38px', height: '38px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 900, fontSize: '1rem', color: '#ffffff',
                boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
              }}>
                JK
              </div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>
                JK ACADEMY<span style={{ color: '#38bdf8' }}>.</span>
              </div>
            </div>

            <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
              JK Educational Academy — Offering Tuitions For Intermediate, Tuitions For B. Com, Corporate Trainings (Non-IT), IT Courses, Other Domains (Non-IT), and Basic Courses.
            </p>

            <a href="tel:+919177893905" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '8px 16px', borderRadius: '8px',
              background: 'rgba(37, 99, 235, 0.15)', border: '1px solid rgba(37, 99, 235, 0.3)',
              color: '#ffffff', fontSize: '0.85rem', fontWeight: 700, textDecoration: 'none'
            }}>
              <Phone size={15} style={{ color: '#38bdf8' }} />
              +91 9177893905
            </a>
          </div>

          {/* Column 2: Tuitions */}
          <div>
            <h4 style={columnTitleStyle}>TUITIONS</h4>
            <ul style={ulStyle}>
              <li><button onClick={() => scrollToSection('intermediate')} style={footerLinkStyle}>Tuitions For Intermediate</button></li>
              <li><button onClick={() => scrollToSection('intermediate')} style={footerLinkStyle}>MPC (Maths Physics, Chemistry)</button></li>
              <li><button onClick={() => scrollToSection('intermediate')} style={footerLinkStyle}>BiPC (Botany, Zoology, Physics, Chemistry)</button></li>
              <li><button onClick={() => scrollToSection('intermediate')} style={footerLinkStyle}>CEC (Civics, Economics, Commerce)</button></li>
              <li><button onClick={() => scrollToSection('intermediate')} style={footerLinkStyle}>MEC (Maths, Economics, Commerce)</button></li>
              <li><button onClick={() => scrollToSection('intermediate')} style={footerLinkStyle}>AEC (Accounts, Economics, Commerce)</button></li>
              <li><button onClick={() => scrollToSection('degree')} style={footerLinkStyle}>Tuitions For B. Com</button></li>
            </ul>
          </div>

          {/* Column 3: Corporate & Domains */}
          <div>
            <h4 style={columnTitleStyle}>CORPORATE & DOMAINS</h4>
            <ul style={ulStyle}>
              <li><button onClick={() => scrollToSection('corporate')} style={footerLinkStyle}>2. Corporate Trainings (Non-IT)</button></li>
              <li><button onClick={() => scrollToSection('corporate')} style={footerLinkStyle}>Finance Domain</button></li>
              <li><button onClick={() => scrollToSection('corporate')} style={footerLinkStyle}>Human Resource Domain</button></li>
              <li><button onClick={() => scrollToSection('tech')} style={footerLinkStyle}>3. IT Courses</button></li>
              <li><button onClick={() => scrollToSection('specialized')} style={footerLinkStyle}>4. Other Domains (Non-IT)</button></li>
              <li><button onClick={() => scrollToSection('basic')} style={footerLinkStyle}>5. Basic Courses</button></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 style={columnTitleStyle}>GET IN TOUCH</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <MapPin size={16} style={{ color: '#38bdf8', flexShrink: 0, marginTop: '3px' }} />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Phone size={16} style={{ color: '#38bdf8', flexShrink: 0 }} />
                <span>+91 9177893905</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid #1e293b',
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.78rem'
        }}>
          <div>
            © {new Date().getFullYear()} JK Educational Academy. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
}

const columnTitleStyle = {
  fontSize: '0.75rem',
  fontWeight: 800,
  color: '#ffffff',
  letterSpacing: '0.08em',
  marginBottom: '16px',
  textTransform: 'uppercase'
};

const ulStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '10px'
};

const footerLinkStyle = {
  background: 'none',
  border: 'none',
  color: '#94a3b8',
  fontSize: '0.84rem',
  fontFamily: 'var(--font-body)',
  cursor: 'pointer',
  padding: 0,
  textAlign: 'left',
  transition: 'color 0.2s ease'
};
