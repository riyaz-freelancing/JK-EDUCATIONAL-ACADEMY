import React, { useState, useEffect } from 'react';
import { Calendar, Menu, X, Phone } from 'lucide-react';
import logoJk from '../assets/logo-jk.jpeg';

const navLinks = [
  { id: 'intermediate', label: 'Intermediate' },
  { id: 'degree',       label: 'Graduation' },
  { id: 'masters',      label: 'Masters' },
  { id: 'corporate',   label: 'Corporate' },
  { id: 'tech',         label: 'IT Courses' },
  { id: 'specialized',  label: 'Other Domains' },
  { id: 'basic',        label: 'Basic Courses' },
];

export default function Navbar({ onEnquire, onLogoClick, onNavSectionClick }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      // Highlight active nav link based on scroll position
      let current = '';
      navLinks.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) current = id;
        }
      });
      setActiveId(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    setMobileOpen(false);
    onLogoClick ? onLogoClick() : window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id) => {
    setMobileOpen(false);
    if (onNavSectionClick) {
      onNavSectionClick(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ── MAIN NAVBAR ── */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backgroundColor: scrolled ? 'rgba(255,255,255,0.97)' : '#ffffff',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: '1.5px solid #e2e8f0',
          boxShadow: scrolled ? '0 2px 24px rgba(15,23,42,0.08)' : '0 1px 4px rgba(15,23,42,0.04)',
          transition: 'box-shadow 0.3s ease, background-color 0.3s ease',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '70px',
            gap: '12px',
          }}
        >
          {/* ── LOGO ── */}
          <button
            type="button"
            onClick={handleLogoClick}
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              flexShrink: 0,
            }}
          >
            <img
              src={logoJk}
              alt="JK Educational Academy"
              style={{ height: '42px', width: 'auto', borderRadius: '8px', objectFit: 'contain' }}
            />
            <div style={{ lineHeight: 1 }}>
              <div style={{ fontSize: '1.1rem', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.02em' }}>
                JK ACADEMY<span style={{ color: '#2563eb' }}>.</span>
              </div>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '3px' }}>
                Educational Academy
              </div>
            </div>
          </button>

          {/* ── DESKTOP NAV ── */}
          <nav id="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            {navLinks.map(({ id, label }) => {
              const isActive = activeId === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => scrollTo(id)}
                  style={{
                    background: isActive ? '#eff6ff' : 'none',
                    border: 'none',
                    color: isActive ? '#2563eb' : '#475569',
                    fontSize: '0.82rem',
                    fontWeight: isActive ? 700 : 600,
                    cursor: 'pointer',
                    padding: '7px 11px',
                    borderRadius: '8px',
                    transition: 'all 0.2s ease',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={e => {
                    if (!isActive) e.currentTarget.style.color = '#2563eb';
                    if (!isActive) e.currentTarget.style.background = '#f8fafc';
                  }}
                  onMouseLeave={e => {
                    if (!isActive) e.currentTarget.style.color = '#475569';
                    if (!isActive) e.currentTarget.style.background = 'none';
                  }}
                >
                  {label}
                </button>
              );
            })}
          </nav>

          {/* ── RIGHT CTA + HAMBURGER ── */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
            {/* Enquire CTA */}
            <button
              type="button"
              onClick={onEnquire}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
                background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
                color: '#fff',
                border: 'none',
                padding: '9px 18px',
                borderRadius: '10px',
                fontSize: '0.83rem',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(37,99,235,0.28)',
                transition: 'box-shadow 0.2s ease, transform 0.2s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(37,99,235,0.38)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 14px rgba(37,99,235,0.28)'; }}
            >
              <Calendar size={15} />
              Enquire Now
            </button>

            {/* Hamburger (mobile only) */}
            <button
              type="button"
              id="hamburger-btn"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: '#f1f5f9',
                border: '1.5px solid #e2e8f0',
                color: '#0f172a',
                padding: '8px',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'none',
              }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* ── MOBILE DROPDOWN ── */}
        {mobileOpen && (
          <div
            style={{
              backgroundColor: '#ffffff',
              borderTop: '1px solid #f1f5f9',
              padding: '16px 24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              boxShadow: '0 12px 40px rgba(15,23,42,0.10)',
            }}
          >
            {navLinks.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollTo(id)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#1e293b',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  textAlign: 'left',
                  padding: '11px 0',
                  borderBottom: '1px solid #f1f5f9',
                  cursor: 'pointer',
                }}
              >
                {label}
              </button>
            ))}

            <button
              type="button"
              onClick={() => { setMobileOpen(false); onEnquire(); }}
              style={{
                marginTop: '8px',
                background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
                color: '#fff',
                border: 'none',
                padding: '12px',
                borderRadius: '10px',
                fontSize: '0.95rem',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
              }}
            >
              <Calendar size={16} /> Enquire Now
            </button>
          </div>
        )}
      </header>

      {/* ── SPACER so content is NOT hidden under fixed nav ── */}
      <div style={{ height: '70px' }} />

      {/* ── RESPONSIVE RULES ── */}
      <style>{`
        @media (max-width: 960px) {
          #desktop-nav { display: none !important; }
          #hamburger-btn { display: flex !important; }
        }
        @media (min-width: 961px) {
          #hamburger-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
