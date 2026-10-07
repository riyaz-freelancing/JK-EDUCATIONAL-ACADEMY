import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export default function HeroSection({ onEnquire }) {
  const scrollToAssessment = () => {
    const element = document.getElementById('assessment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      onEnquire();
    }
  };

  return (
    <section id="hero" className="section-spacing" style={{
      position: 'relative',
      paddingTop: '60px',
      paddingBottom: '80px',
      backgroundColor: '#ffffff',
      overflow: 'hidden'
    }}>
      {/* Background Soft Glow Accents */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, rgba(241, 245, 249, 0) 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>

        {/* Top Light Pill Tag */}
        <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
          <div className="light-pill">
            <span className="light-pill-dot"></span>
            LIST OF COURSES OFFERED BY JK EDUCATIONAL ACADEMY
          </div>
        </div>

        {/* Main Hero Headline */}
        <h1 style={{
          fontSize: 'clamp(2.4rem, 6vw, 4.2rem)',
          fontWeight: 800,
          color: '#0f172a',
          letterSpacing: '-0.03em',
          maxWidth: '960px',
          margin: '0 auto 20px',
          lineHeight: 1.15
        }}>
          Courses Offered by <br className="desktop-only" />
          <span className="gradient-text">JK Educational Academy</span>
        </h1>

        {/* Hero Subtitle */}
        <p style={{
          fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
          color: '#475569',
          maxWidth: '780px',
          margin: '0 auto 36px',
          lineHeight: 1.6
        }}>
          Tuitions For Intermediate, Tuitions For B. Com, 2. Corporate Trainings (Non-IT), 3. IT Courses, 4. Other Domains (Non-IT), and 5. Basic Courses.
        </p>

        {/* Call-to-action buttons */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justify: 'center',
          gap: '16px',
          flexWrap: 'wrap',
          marginBottom: '60px'
        }}>
          <button onClick={onEnquire} className="btn-blue-light">
            Enquire Now <ArrowRight size={17} />
          </button>
        </div>

        {/* Node Flow Tree Diagram matching layout on light background */}
        <div style={{
          position: 'relative',
          maxWidth: '920px',
          margin: '0 auto 70px',
          padding: '0 10px'
        }}>
          {/* Top Star Node */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
              border: '1px solid #cbd5e1',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              color: '#38bdf8',
              boxShadow: '0 4px 14px rgba(15, 23, 42, 0.15)'
            }}>
              <Star size={24} fill="#38bdf8" />
            </div>
          </div>

          {/* Vertical Connecting Line */}
          <div style={{
            width: '2px',
            height: '24px',
            background: 'linear-gradient(180deg, #cbd5e1 0%, #2563eb 100%)',
            margin: '0 auto'
          }} />

          {/* Horizontal Branching Bar */}
          <div style={{
            width: '70%',
            height: '2px',
            background: '#cbd5e1',
            margin: '0 auto',
            position: 'relative'
          }}>
            <div style={{ position: 'absolute', left: '0', top: '0', width: '2px', height: '16px', background: '#cbd5e1' }} />
            <div style={{ position: 'absolute', left: '50%', top: '0', width: '2px', height: '16px', background: '#cbd5e1', transform: 'translateX(-50%)' }} />
            <div style={{ position: 'absolute', right: '0', top: '0', width: '2px', height: '16px', background: '#cbd5e1' }} />
          </div>

          {/* 3 Node Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            marginTop: '16px'
          }}>
            <div className="light-card" style={{ padding: '16px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#2563eb', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>
                TUITIONS
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a' }}>
                Intermediate & B. Com
              </div>
            </div>

            <div className="light-card" style={{ padding: '16px 20px', textAlign: 'center', borderColor: '#2563eb' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#1d4ed8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>
                CORPORATE
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a' }}>
                2. Corporate Trainings (Non-IT)
              </div>
            </div>

            <div className="light-card" style={{ padding: '16px 20px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#4f46e5', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '4px' }}>
                DOMAINS & IT
              </div>
              <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a' }}>
                IT, Non-IT & Basic Courses
              </div>
            </div>
          </div>
        </div>

        {/* Metric Stats Banner Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '24px',
          padding: '30px 24px',
          background: '#f8fafc',
          border: '1px solid #e2e8f0',
          borderRadius: '24px',
          boxShadow: '0 4px 20px rgba(15, 23, 42, 0.05)'
        }}>
          <div>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#2563eb', letterSpacing: '-0.04em', lineHeight: 1 }}>
              5
            </div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.08em', marginTop: '6px', textTransform: 'uppercase' }}>
              INTERMEDIATE STREAMS
            </div>
          </div>

          <div>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.04em', lineHeight: 1 }}>
              13
            </div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.08em', marginTop: '6px', textTransform: 'uppercase' }}>
              B. COM SUBJECTS
            </div>
          </div>

          <div>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#4f46e5', letterSpacing: '-0.04em', lineHeight: 1 }}>
              12
            </div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.08em', marginTop: '6px', textTransform: 'uppercase' }}>
              CORPORATE NON-IT COURSES
            </div>
          </div>

          <div>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#dc2626', letterSpacing: '-0.04em', lineHeight: 1 }}>
              13
            </div>
            <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.08em', marginTop: '6px', textTransform: 'uppercase' }}>
              IT, NON-IT & BASIC COURSES
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
