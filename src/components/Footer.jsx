import React, { useState } from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import logoJk from '../assets/logo-jk.jpeg';

export default function Footer({ onOpenLegal }) {
  const [hoveredLink, setHoveredLink] = useState('');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const getBottomLinkStyle = (key) => ({
    background: 'none',
    border: 'none',
    color: hoveredLink === key ? '#38bdf8' : '#94a3b8',
    fontSize: '0.82rem',
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    cursor: 'pointer',
    padding: '4px 0',
    textDecoration: hoveredLink === key ? 'underline' : 'none',
    transition: 'all 0.2s ease'
  });

  return (
    <footer style={{
      position: 'relative',
      background: '#0f172a',
      borderTop: '1px solid #1e293b',
      paddingTop: '60px',
      paddingBottom: '30px',
      color: '#cbd5e1'
    }}>
      <div className="container">
        
        {/* Main Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '40px',
          marginBottom: '48px'
        }}>

          {/* Brand Info Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img
                src={logoJk}
                alt="JK Educational Academy Logo"
                style={{
                  height: '44px',
                  width: 'auto',
                  borderRadius: '8px',
                  objectFit: 'contain'
                }}
              />
              <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>
                JK ACADEMY<span style={{ color: '#38bdf8' }}>.</span>
              </div>
            </div>

            <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
              JK Educational Academy — Offering Tuitions For Intermediate, Graduation (B.Com, BBA), Masters (M.Com, MBA), Corporate Trainings (Non-IT), IT Courses, and Basic Courses.
            </p>

            <a href="tel:+918978919712" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '8px 16px', borderRadius: '8px',
              background: 'rgba(37, 99, 235, 0.15)', border: '1px solid rgba(37, 99, 235, 0.3)',
              color: '#ffffff', fontSize: '0.85rem', fontWeight: 700, textDecoration: 'none'
            }}>
              <Phone size={15} style={{ color: '#38bdf8' }} />
              +91 89789 19712
            </a>
          </div>

          {/* Column 2: Tuitions */}
          <div>
            <h4 style={columnTitleStyle}>TUITIONS</h4>
            <ul style={ulStyle}>
              <li><button onClick={() => scrollToSection('intermediate')} style={footerLinkStyle}>Intermediate (M.P.C, BiPC, MEC, CEC, AEC)</button></li>
              <li><button onClick={() => scrollToSection('degree')} style={footerLinkStyle}>Graduation (B.Com, BBA)</button></li>
              <li><button onClick={() => scrollToSection('masters')} style={footerLinkStyle}>Masters (M.Com, MBA)</button></li>
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
                <span>+91 89789 19712</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Right Alignment */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid #1e293b',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.82rem',
          color: '#94a3b8'
        }}>
          <div>
            © {new Date().getFullYear()} JK Educational Academy. All rights reserved.
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flexWrap: 'wrap',
            marginLeft: 'auto'
          }}>
            <button
              onClick={() => onOpenLegal && onOpenLegal('privacy')}
              onMouseEnter={() => setHoveredLink('privacy')}
              onMouseLeave={() => setHoveredLink('')}
              style={getBottomLinkStyle('privacy')}
            >
              Privacy Policy
            </button>
            <span style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1 }}>•</span>
            <button
              onClick={() => onOpenLegal && onOpenLegal('terms')}
              onMouseEnter={() => setHoveredLink('terms')}
              onMouseLeave={() => setHoveredLink('')}
              style={getBottomLinkStyle('terms')}
            >
              Terms & Conditions
            </button>
            <span style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1 }}>•</span>
            <button
              onClick={() => onOpenLegal && onOpenLegal('security')}
              onMouseEnter={() => setHoveredLink('security')}
              onMouseLeave={() => setHoveredLink('')}
              style={getBottomLinkStyle('security')}
            >
              Security Policy
            </button>
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
