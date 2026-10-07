import React from 'react';
import { ArrowRight, BookMarked } from 'lucide-react';
import { bcomSubjects } from '../data/academyData';

export default function DegreeTuitions({ onEnquire }) {
  return (
    <section id="degree" className="section-spacing" style={{ backgroundColor: '#ffffff', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
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
              TUITIONS FOR B. COM
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0f172a' }}>
              Tuitions For B. Com
            </h2>
            <p style={{ maxWidth: '680px', marginTop: '8px', color: '#475569' }}>
              All 13 subjects offered under Tuitions For B. Com at JK Educational Academy.
            </p>
          </div>

          <button onClick={onEnquire} className="btn-outline-light" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
            Enquire Now <ArrowRight size={15} />
          </button>
        </div>

        {/* Subjects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {bcomSubjects.map((sub, idx) => (
            <div key={idx} className="light-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: '#2563eb',
                    background: 'rgba(37, 99, 235, 0.08)',
                    border: '1px solid rgba(37, 99, 235, 0.2)',
                    padding: '3px 8px',
                    borderRadius: '6px'
                  }}>
                    Subject {idx + 1}
                  </span>
                  <BookMarked size={16} style={{ color: '#475569' }} />
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px', lineHeight: 1.3 }}>
                  {sub.title}
                </h3>
              </div>

              <button onClick={onEnquire} style={{
                marginTop: '16px',
                background: 'none',
                border: 'none',
                color: '#2563eb',
                fontSize: '0.8rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer',
                padding: 0
              }}>
                Enquire <ArrowRight size={13} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
