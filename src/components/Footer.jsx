import React from 'react';
import { NavLink } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronRight, Award } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#090d16',
      color: '#94a3b8',
      paddingTop: '70px',
      paddingBottom: '30px',
      borderTop: '1px solid #1e293b'
    }}>
      <div className="container">
        
        {/* Main Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1fr',
          gap: '36px',
          marginBottom: '50px',
          textAlign: 'left'
        }} className="footer-grid-5">
          
          {/* Brand Col */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: '#dc2626',
                color: 'white',
                fontWeight: 800,
                fontSize: '1.1rem',
                display: 'flex',
                alignItems: 'center',
                justify: 'center'
              }}>
                JK
              </div>
              <span style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff' }}>
                JK Educational Academy
              </span>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
              Quality education, professional corporate training, and career guidance tailored for student success and corporate workforce readiness.
            </p>
            <div style={{ fontSize: '0.825rem', color: '#cbd5e1', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Phone size={14} style={{ color: '#dc2626' }} />
                <span>+91 98765 43210</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <Mail size={14} style={{ color: '#dc2626' }} />
                <span>info@jkeducationalacademy.com</span>
              </div>
            </div>
          </div>

          {/* Col 1: Academy */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '18px' }}>
              Academy
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
              <li><NavLink to="/academy" style={{ color: '#94a3b8', textDecoration: 'none' }}>About Courses</NavLink></li>
              <li><NavLink to="/academy" style={{ color: '#94a3b8', textDecoration: 'none' }}>Intermediate Streams</NavLink></li>
              <li><NavLink to="/academy" style={{ color: '#94a3b8', textDecoration: 'none' }}>Degree Programs (B.Com / BBA)</NavLink></li>
              <li><NavLink to="/academy" style={{ color: '#94a3b8', textDecoration: 'none' }}>Postgraduate (M.Com / MBA)</NavLink></li>
              <li><NavLink to="/about" style={{ color: '#94a3b8', textDecoration: 'none' }}>10+ Yrs Experienced Faculty</NavLink></li>
            </ul>
          </div>

          {/* Col 2: Training */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '18px' }}>
              Training
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
              <li><NavLink to="/corporate-training" style={{ color: '#94a3b8', textDecoration: 'none' }}>Corporate Training</NavLink></li>
              <li><NavLink to="/corporate-training" style={{ color: '#94a3b8', textDecoration: 'none' }}>Full Stack Development</NavLink></li>
              <li><NavLink to="/corporate-training" style={{ color: '#94a3b8', textDecoration: 'none' }}>Software Testing (QA)</NavLink></li>
              <li><NavLink to="/corporate-training" style={{ color: '#94a3b8', textDecoration: 'none' }}>SAP &amp; Mainframe Training</NavLink></li>
              <li><NavLink to="/corporate-training" style={{ color: '#94a3b8', textDecoration: 'none' }}>Non-IT Business Processes</NavLink></li>
            </ul>
          </div>

          {/* Col 3: Career */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '18px' }}>
              Career
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
              <li><NavLink to="/career-counselling" style={{ color: '#94a3b8', textDecoration: 'none' }}>Career Counselling</NavLink></li>
              <li><NavLink to="/services" style={{ color: '#94a3b8', textDecoration: 'none' }}>Placement Assistance</NavLink></li>
              <li><NavLink to="/career-counselling" style={{ color: '#94a3b8', textDecoration: 'none' }}>Resume Guidance</NavLink></li>
              <li><NavLink to="/corporate-training" style={{ color: '#94a3b8', textDecoration: 'none' }}>Fresher Interview Prep</NavLink></li>
              <li><NavLink to="/services" style={{ color: '#94a3b8', textDecoration: 'none' }}>Student Mentorship</NavLink></li>
            </ul>
          </div>

          {/* Col 4: Company */}
          <div>
            <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#ffffff', marginBottom: '18px' }}>
              Company
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.875rem' }}>
              <li><NavLink to="/about" style={{ color: '#94a3b8', textDecoration: 'none' }}>About Us</NavLink></li>
              <li><NavLink to="/contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Contact Us</NavLink></li>
              <li><NavLink to="/contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>Location &amp; Hours</NavLink></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} style={{ color: '#94a3b8', textDecoration: 'none' }}>Privacy Policy</a></li>
              <li><a href="#" onClick={(e) => e.preventDefault()} style={{ color: '#94a3b8', textDecoration: 'none' }}>Terms of Service</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #1e293b',
          paddingTop: '24px',
          display: 'flex',
          justify: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.8125rem',
          color: '#64748b'
        }}>
          <div>
            © 2026 JK Educational Academy. All Rights Reserved.
          </div>
          <div>
            Empowering Education &amp; Corporate Career Success
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 992px) {
          .footer-grid-5 {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 28px !important;
          }
        }
        @media (max-width: 576px) {
          .footer-grid-5 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
