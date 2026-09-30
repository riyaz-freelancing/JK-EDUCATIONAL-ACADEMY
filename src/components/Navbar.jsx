import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar({ onEnquire }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Academy', path: '/academy' },
    { name: 'Corporate Training', path: '/corporate-training' },
    { name: 'Career Counselling', path: '/career-counselling' },
    { name: 'Our Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : '#ffffff',
      backdropFilter: isScrolled ? 'blur(12px)' : 'none',
      borderBottom: '1px solid #e2e8f0',
      boxShadow: isScrolled ? '0 4px 20px rgba(15, 23, 42, 0.08)' : 'none',
      transition: 'all 0.25s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '76px'
      }}>
        
        {/* Brand Logo & Tagline */}
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', flexShrink: 0, marginRight: '16px' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '10px',
            background: '#0f172a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ef4444',
            boxShadow: '0 4px 10px rgba(15, 23, 42, 0.15)',
            fontWeight: 900,
            fontSize: '1.2rem',
            border: '2px solid #ef4444',
            flexShrink: 0
          }}>
            JK
          </div>
          <div style={{ textAlign: 'left', whiteSpace: 'nowrap' }}>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
              JK ACADEMY
            </div>
            <div style={{ fontSize: '0.625rem', fontWeight: 800, color: '#dc2626', letterSpacing: '0.07em', textTransform: 'uppercase', marginTop: '2px' }}>
              Academic &amp; Career Excellence
            </div>
          </div>
        </NavLink>

        {/* Desktop Nav Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '20px', flexShrink: 1 }} className="desktop-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              style={({ isActive }) => ({
                fontSize: '0.875rem',
                fontWeight: isActive ? 700 : 600,
                color: isActive ? '#dc2626' : '#334155',
                textDecoration: 'none',
                position: 'relative',
                padding: '26px 0',
                whiteSpace: 'nowrap',
                display: 'inline-flex',
                alignItems: 'center',
                transition: 'color 0.2s ease'
              })}
            >
              {({ isActive }) => (
                <>
                  <span>{link.name}</span>
                  {isActive && (
                    <span style={{
                      position: 'absolute',
                      bottom: '0px',
                      left: '0px',
                      right: '0px',
                      height: '3px',
                      backgroundColor: '#dc2626',
                      borderRadius: '3px 3px 0 0'
                    }} />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA Button & Mobile Trigger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0, marginLeft: '16px' }}>
          <button
            onClick={onEnquire}
            style={{
              height: '42px',
              padding: '0 22px',
              fontSize: '0.875rem',
              fontWeight: 700,
              borderRadius: '9999px',
              backgroundColor: '#dc2626',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              boxShadow: '0 4px 14px rgba(220, 38, 38, 0.35)',
              transition: 'all 0.25s ease',
              display: 'inline-flex',
              alignItems: 'center',
              justify: 'center',
              gap: '6px'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.backgroundColor = '#b91c1c'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.backgroundColor = '#dc2626'; }}
          >
            <span>Enquire Now</span>
            <ArrowRight size={16} />
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="mobile-hamburger"
            style={{
              display: 'none',
              padding: '8px',
              borderRadius: '8px',
              backgroundColor: '#f1f5f9',
              color: '#0f172a',
              border: 'none',
              cursor: 'pointer'
            }}
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileOpen && (
        <div style={{
          backgroundColor: '#ffffff',
          borderTop: '1px solid #e2e8f0',
          padding: '20px 24px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          animation: 'fadeUp 0.25s ease'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', textAlign: 'left' }}>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                style={({ isActive }) => ({
                  fontSize: '0.95rem',
                  fontWeight: isActive ? 700 : 600,
                  color: isActive ? '#dc2626' : '#1e293b',
                  textDecoration: 'none',
                  padding: '8px 0',
                  borderBottom: '1px solid #f1f5f9'
                })}
              >
                {link.name}
              </NavLink>
            ))}
            <button
              onClick={() => { setMobileOpen(false); onEnquire(); }}
              style={{
                width: '100%',
                height: '44px',
                borderRadius: '9999px',
                backgroundColor: '#dc2626',
                color: 'white',
                fontWeight: 700,
                fontSize: '0.95rem',
                border: 'none',
                cursor: 'pointer',
                marginTop: '10px'
              }}
            >
              Enquire Now
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 1140px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-hamburger {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
