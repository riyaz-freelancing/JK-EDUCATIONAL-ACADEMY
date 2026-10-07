import React, { useState, useEffect } from 'react';
import { Phone, Calendar, Menu, X } from 'lucide-react';

export default function Navbar({ onEnquire }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.96)' : '#ffffff',
      backdropFilter: 'blur(16px)',
      borderBottom: '1px solid #e2e8f0',
      boxShadow: isScrolled ? '0 4px 20px rgba(15, 23, 42, 0.06)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>

        {/* Brand Logo */}
        <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }} style={{ display: 'flex', alignItems: 'center', gap: '14px', textDecoration: 'none' }}>
          <div style={{
            width: '42px', height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 900, fontSize: '1.1rem', color: '#ffffff',
            boxShadow: '0 4px 12px rgba(15, 23, 42, 0.2)',
            letterSpacing: '-0.02em'
          }}>
            JK
          </div>
          <div>
            <div style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              JK ACADEMY<span style={{ color: '#2563eb', fontSize: '1.2rem' }}>.</span>
            </div>
            <div style={{ fontSize: '0.62rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '2px' }}>
              Educational Academy
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
          <button onClick={() => scrollToSection('intermediate')} style={navLinkStyle}>Intermediate</button>
          <button onClick={() => scrollToSection('degree')} style={navLinkStyle}>B. Com</button>
          <button onClick={() => scrollToSection('corporate')} style={navLinkStyle}>Corporate Trainings</button>
          <button onClick={() => scrollToSection('tech')} style={navLinkStyle}>IT Courses</button>
          <button onClick={() => scrollToSection('specialized')} style={navLinkStyle}>Other Domains</button>
          <button onClick={() => scrollToSection('basic')} style={navLinkStyle}>Basic Courses</button>
        </nav>

        {/* Right Info & CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          
          {/* Phone Badge */}
          <a href="tel:+919177893905" className="desktop-only" style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            padding: '7px 14px', borderRadius: '9999px',
            background: 'rgba(37, 99, 235, 0.08)',
            border: '1px solid rgba(37, 99, 235, 0.2)',
            color: '#1d4ed8', fontSize: '0.8rem', fontWeight: 700,
            textDecoration: 'none'
          }}>
            <Phone size={14} style={{ color: '#2563eb' }} />
            +91 9177893905
          </a>

          {/* Consultation CTA */}
          <button onClick={onEnquire} className="btn-blue-light" style={{ padding: '9px 18px', fontSize: '0.85rem' }}>
            <Calendar size={15} />
            <span>Enquire</span>
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-only"
            style={{
              background: '#f1f5f9',
              border: '1px solid #cbd5e1',
              color: '#0f172a',
              padding: '8px',
              borderRadius: '8px',
              cursor: 'pointer'
            }}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #e2e8f0',
          padding: '20px 24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          boxShadow: '0 10px 30px rgba(15, 23, 42, 0.08)'
        }}>
          <button onClick={() => scrollToSection('intermediate')} style={mobileNavLinkStyle}>Tuitions For Intermediate</button>
          <button onClick={() => scrollToSection('degree')} style={mobileNavLinkStyle}>Tuitions For B. Com</button>
          <button onClick={() => scrollToSection('corporate')} style={mobileNavLinkStyle}>2. Corporate Trainings (Non-IT)</button>
          <button onClick={() => scrollToSection('tech')} style={mobileNavLinkStyle}>3. IT Courses</button>
          <button onClick={() => scrollToSection('specialized')} style={mobileNavLinkStyle}>4. Other Domains (Non-IT)</button>
          <button onClick={() => scrollToSection('basic')} style={mobileNavLinkStyle}>5. Basic Courses</button>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-only { display: none !important; }
        }
        @media (min-width: 901px) {
          .mobile-only { display: none !important; }
        }
      `}</style>
    </header>
  );
}

const navLinkStyle = {
  background: 'none',
  border: 'none',
  color: '#334155',
  fontSize: '0.85rem',
  fontWeight: 600,
  cursor: 'pointer',
  transition: 'color 0.2s ease',
  padding: '6px 4px'
};

const mobileNavLinkStyle = {
  background: 'none',
  border: 'none',
  color: '#0f172a',
  fontSize: '0.95rem',
  fontWeight: 600,
  textAlign: 'left',
  padding: '10px 0',
  borderBottom: '1px solid #f1f5f9',
  cursor: 'pointer'
};
