import React from 'react';
import { ArrowRight } from 'lucide-react';
import { intermediateCourses } from '../data/academyData';

export default function IntermediateTuitions({ onEnquire }) {
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
              TUITIONS FOR INTERMEDIATE
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0f172a' }}>
              Tuitions For Intermediate
            </h2>
            <p style={{ maxWidth: '680px', marginTop: '8px', color: '#475569' }}>
              Courses offered under Tuitions For Intermediate at JK Educational Academy.
            </p>
          </div>

          <button onClick={onEnquire} className="btn-outline-light" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
            Enquire Now <ArrowRight size={15} />
          </button>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {intermediateCourses.map((stream, idx) => (
            <div key={idx} className="light-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '24px' }}>
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
                  Course {idx + 1}
                </div>
                
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '10px' }}>
                  {stream.title}
                </h3>
              </div>

              <div style={{
                paddingTop: '16px',
                borderTop: '1px solid #f1f5f9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <button onClick={onEnquire} style={{
                  background: 'none',
                  border: 'none',
                  color: '#2563eb',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  padding: 0
                }}>
                  Enquire <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
