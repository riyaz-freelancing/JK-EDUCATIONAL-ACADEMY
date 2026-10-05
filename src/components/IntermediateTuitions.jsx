import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function IntermediateTuitions({ onEnquire }) {
  const intermediateStreams = [
    {
      badge: 'MPC',
      title: 'Maths, Physics, Chemistry',
      description: 'Rigorous problem-solving, formula application, and conceptual depth tailored for TS & AP board exams alongside competitive exam foundations.',
      linkText: 'View Stream Curriculum'
    },
    {
      badge: 'BiPC',
      title: 'Botany, Zoology, Physics, Chemistry',
      description: 'Extensive diagrammatic training, theory clarification, and systematic memory techniques for biology and medical career aspirational streams.',
      linkText: 'Detailed Syllabus'
    },
    {
      badge: 'CEC',
      title: 'Civics, Economics, Commerce',
      description: 'Detailed explanations of economic models, commercial practices, accounting fundamentals, and governance structures tailored for high board scoring.',
      linkText: 'View Curriculum'
    },
    {
      badge: 'MEC',
      title: 'Maths, Economics, Commerce',
      description: 'Strong mathematical foundation combined with commerce and economic analytical skills essential for future finance, CA & business analytics majors.',
      linkText: 'Explore Stream'
    },
    {
      badge: 'HEC / ARTS',
      title: 'Arts & Humanities / Modern Languages',
      description: 'In-depth coverage of history, economics, civics, and language proficiency modules with structured answer-writing techniques for board excellence.',
      linkText: 'Learn More'
    },
    {
      badge: 'INTEGRATED ENTRANCE PREP',
      title: 'Integrated Entrance Coaching',
      description: 'Dual-track preparation for EAMCET, NEET & JEE foundation parallel to TS & AP Intermediate board syllabus with daily practice sheets.',
      linkText: 'Explore Foundation Program'
    }
  ];

  return (
    <section id="intermediate" className="section-spacing" style={{ backgroundColor: '#f8fafc', position: 'relative' }}>
      <div className="container">
        
        {/* Header Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '48px'
        }}>
          <div>
            <div className="light-pill" style={{ marginBottom: '14px' }}>
              <span className="light-pill-dot"></span>
              TS & AP BOARD INTERMEDIATE TUITIONS
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0f172a' }}>
              Tuitions for Intermediate <span className="gradient-text">(TS & AP Board)</span>
            </h2>
            <p style={{ maxWidth: '680px', marginTop: '8px', color: '#475569' }}>
              Comprehensive, syllabus-aligned coaching for MPC, BiPC, CEC & MEC streams with concept-driven focus, rigorous test series, and board exam mastery.
            </p>
          </div>

          <button onClick={onEnquire} className="btn-outline-light" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
            View All Intermediate Streams <ArrowRight size={15} />
          </button>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {intermediateStreams.map((stream, idx) => (
            <div key={idx} className="light-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  borderRadius: '8px',
                  background: 'rgba(37, 99, 235, 0.08)',
                  border: '1px solid rgba(37, 99, 235, 0.2)',
                  color: '#1d4ed8',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  marginBottom: '16px'
                }}>
                  {stream.badge}
                </div>
                
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                  {stream.title}
                </h3>
                
                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
                  {stream.description}
                </p>
              </div>

              <div style={{
                paddingTop: '16px',
                borderTop: '1px solid #f1f5f9',
                display: 'flex',
                alignItems: 'center',
                justify: 'space-between'
              }}>
                <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748b' }}>
                  Board & Concept Focused
                </span>

                <button onClick={onEnquire} style={{
                  background: 'none',
                  border: 'none',
                  color: '#2563eb',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer'
                }}>
                  {stream.linkText} <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
