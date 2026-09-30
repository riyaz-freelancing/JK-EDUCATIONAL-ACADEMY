import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BookOpen,
  Code,
  Briefcase,
  Compass,
  ChevronRight,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export default function HeroSection({ onEnquire }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(0);

  const disciplines = [
    {
      id: 'academic',
      label: 'Academic Tuitions',
      icon: BookOpen,
      badge: 'After 10th & 12th',
      cardBadge: 'Featured Discipline',
      title: 'Intermediate, B.Com, BBA & MBA',
      description: 'Civics, Economics, Commerce, Accounts & Management coaching led by 10+ yrs experienced faculty.',
      image: '/images/hero_banner.jpg',
      labTag: '● BOARD EXAM & DEGREE FOCUS',
      statusTag: '100% Pass Focus',
      heroSubtext: 'Comprehensive concept mastery, regular assessments, and expert guidance for school, junior college, and degree success.'
    },
    {
      id: 'it',
      label: 'IT Training',
      icon: Code,
      badge: 'Job-Oriented Tech',
      cardBadge: 'MNC Hiring Track',
      title: 'Full Stack & Software QA Testing',
      description: 'Hands-on practical development, React, Node.js & Selenium QA testing automation.',
      image: '/images/career_mentorship.jpg',
      labTag: '● LIVE CODING & LABS',
      statusTag: 'Job Ready',
      heroSubtext: 'Industry-aligned tech curricula with practical assignments, real-world projects, and technical interview drills.'
    },
    {
      id: 'non-it',
      label: 'Non-IT & Corporate',
      icon: Briefcase,
      badge: 'Corporate Processes',
      cardBadge: 'Operations Track',
      title: 'Business Process & Operations Training',
      description: 'Process workflows, SLA execution, management processes, business communication & corporate etiquette.',
      image: '/images/ai_dashboard_preview.jpg',
      labTag: '● CORPORATE SIMULATION',
      statusTag: 'MNC Ready',
      heroSubtext: 'Specialized non-IT domain coaching preparing graduates for corporate operations, customer domains, and management roles.'
    },
    {
      id: 'counselling',
      label: 'Career Counselling',
      icon: Compass,
      badge: '1-on-1 Mentorship',
      cardBadge: 'Personalized Advisory',
      title: 'Career Assessment & Placement Guidance',
      description: 'Stream evaluation, resume optimization, 1-on-1 career direction, and placement drive preparation.',
      image: '/images/career_mentorship.jpg',
      labTag: '● EXPERT ADVISORY',
      statusTag: 'Career Aligned',
      heroSubtext: 'Personalized guidance helping students align their education with high-demand industry opportunities.'
    }
  ];

  const currentDisc = disciplines[activeTab];

  return (
    <section style={{
      backgroundColor: '#0a1122',
      color: '#ffffff',
      paddingTop: '60px',
      paddingBottom: '80px',
      position: 'relative',
      overflow: 'hidden',
      textAlign: 'left'
    }}>
      {/* Glow background effects */}
      <div style={{
        position: 'absolute',
        top: '-15%',
        right: '-5%',
        width: '600px',
        height: '600px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(239, 68, 68, 0.15) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-5%',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, transparent 70%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '48px',
          alignItems: 'center'
        }} className="hero-responsive-grid">
          
          {/* Left Content Column */}
          <div>
            
            {/* Top Govt Regd Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#f1f5f9',
              fontSize: '0.7875rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              marginBottom: '20px'
            }}>
              <span style={{ color: '#eab308', fontSize: '0.9rem', lineHeight: 1 }}>●</span>
              <span>REGD. ACADEMY &amp; CAREER CENTRE</span>
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontSize: '3.4rem',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.15,
              letterSpacing: '-0.03em',
              marginBottom: '18px'
            }} className="hero-main-title">
              Transform Your Future in <br />
              <span style={{ color: '#60a5fa' }}>Academic</span> &amp;{' '}
              <span style={{
                color: '#ef4444',
                position: 'relative',
                display: 'inline-block'
              }}>
                Education
                <span style={{
                  position: 'absolute',
                  bottom: '-4px',
                  left: 0,
                  right: 0,
                  height: '4px',
                  backgroundColor: '#ef4444',
                  borderRadius: '2px'
                }} />
              </span>
            </h1>

            {/* Paragraph Subhead */}
            <p style={{
              fontSize: '1.05rem',
              color: '#cbd5e1',
              lineHeight: 1.6,
              marginBottom: '32px',
              maxWidth: '560px',
              fontWeight: 400
            }}>
              JK ACADEMY offers practical, job-oriented diploma, tuition and corporate programs after{' '}
              <strong style={{ color: '#ffffff' }}>10th, 10+2 &amp; Degree</strong>. Build in-demand academic, IT, non-IT, and career expertise with official educational guidance.
            </p>

            {/* Select Discipline Preview Label & Tabs */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{
                fontSize: '0.75rem',
                fontWeight: 800,
                color: '#94a3b8',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}>
                SELECT DISCIPLINE PREVIEW:
              </div>

              <div style={{
                display: 'flex',
                gap: '10px',
                flexWrap: 'wrap',
                alignItems: 'center'
              }}>
                {disciplines.map((disc, idx) => {
                  const IconComp = disc.icon;
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={disc.id}
                      onClick={() => setActiveTab(idx)}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 18px',
                        borderRadius: '9999px',
                        fontSize: '0.85rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        transition: 'all 0.25s ease',
                        border: isActive ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.18)',
                        backgroundColor: isActive ? '#ef4444' : 'rgba(255, 255, 255, 0.05)',
                        color: isActive ? '#ffffff' : '#cbd5e1',
                        boxShadow: isActive ? '0 4px 14px rgba(239, 68, 68, 0.4)' : 'none'
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.12)';
                          e.currentTarget.style.color = '#ffffff';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                          e.currentTarget.style.color = '#cbd5e1';
                        }
                      }}
                    >
                      <IconComp size={16} style={{ color: isActive ? '#ffffff' : '#94a3b8' }} />
                      <span>{disc.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sub-Card Box (Lower Left Preview Box) */}
            <div style={{
              backgroundColor: '#131b2e',
              borderRadius: '16px',
              padding: '22px 26px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.25)',
              display: 'flex',
              alignItems: 'center',
              justify: 'space-between',
              gap: '20px',
              flexWrap: 'wrap'
            }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#fca5a5', backgroundColor: 'rgba(239, 68, 68, 0.15)', padding: '3px 10px', borderRadius: '4px' }}>
                    {currentDisc.badge}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 600 }}>
                    {currentDisc.cardBadge}
                  </span>
                </div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>
                  {currentDisc.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', margin: 0, maxWidth: '380px' }}>
                  {currentDisc.description}
                </p>
              </div>

              <button
                onClick={onEnquire}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  fontWeight: 700,
                  fontSize: '0.85rem',
                  padding: '12px 20px',
                  borderRadius: '10px',
                  border: 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 12px rgba(255, 255, 255, 0.15)',
                  transition: 'all 0.2s ease',
                  flexShrink: 0
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#f8fafc'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#ffffff'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                <span>Enquire Discipline</span>
                <ChevronRight size={16} />
              </button>
            </div>

          </div>

          {/* Right Hero Image Card Showcase */}
          <div style={{ position: 'relative' }}>
            
            {/* Image Wrapper Container */}
            <div style={{
              backgroundColor: '#131b2e',
              borderRadius: '24px',
              padding: '12px',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.6)',
              position: 'relative'
            }}>
              
              {/* Relative Canvas for Badges & Image */}
              <div style={{
                position: 'relative',
                borderRadius: '18px',
                overflow: 'hidden',
                aspectRatio: '4 / 3.2',
                backgroundColor: '#0f172a'
              }}>
                
                {/* Floating Badge Left: Hyderabad Campus */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  zIndex: 10,
                  backgroundColor: '#ef4444',
                  color: '#ffffff',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                }}>
                  <MapPin size={14} />
                  <span>Hyderabad Campus</span>
                </div>

                {/* Floating Badge Right: Govt Regd Centre */}
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  zIndex: 10,
                  backgroundColor: 'rgba(15, 23, 42, 0.88)',
                  backdropFilter: 'blur(8px)',
                  color: '#ffffff',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  fontSize: '0.7875rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
                }}>
                  <ShieldCheck size={14} style={{ color: '#eab308' }} />
                  <span>Govt. Regd. Centre</span>
                </div>

                {/* Main Showcase Image */}
                <img
                  src={currentDisc.image}
                  alt={currentDisc.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                    transition: 'all 0.4s ease'
                  }}
                />

                {/* Dark Gradient Overlay at Bottom of Image */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '60%',
                  background: 'linear-gradient(to top, rgba(10, 17, 34, 0.95) 0%, rgba(10, 17, 34, 0.4) 60%, transparent 100%)',
                  pointerEvents: 'none',
                  zIndex: 5
                }} />

                {/* Bottom Overlay Card over Image */}
                <div style={{
                  position: 'absolute',
                  bottom: '16px',
                  left: '16px',
                  right: '16px',
                  zIndex: 10,
                  backgroundColor: 'rgba(15, 23, 42, 0.92)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '14px',
                  padding: '16px 20px',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  textAlign: 'left'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.725rem', fontWeight: 800, color: '#4ade80', letterSpacing: '0.04em' }}>
                      {currentDisc.labTag}
                    </span>
                    <span style={{
                      fontSize: '0.7rem',
                      fontWeight: 800,
                      backgroundColor: '#1e293b',
                      color: '#ffffff',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      border: '1px solid #334155'
                    }}>
                      {currentDisc.statusTag}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff', lineHeight: 1.25, marginBottom: '4px' }}>
                    {currentDisc.title}
                  </h3>

                  <p style={{ fontSize: '0.8rem', color: '#cbd5e1', margin: 0, lineHeight: 1.4 }}>
                    {currentDisc.description}
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .hero-responsive-grid {
            grid-template-columns: 1fr !important;
          }
          .hero-main-title {
            font-size: 2.6rem !important;
          }
        }
      `}</style>
    </section>
  );
}
