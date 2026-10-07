import React from 'react';
import { Code, Globe, ArrowRight } from 'lucide-react';
import { corporateTrainingData } from '../data/academyData';

export default function TechCertifications({ onEnquire }) {
  const { itDomain } = corporateTrainingData;

  return (
    <section id="tech" className="section-spacing" style={{ backgroundColor: '#ffffff', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
          <div className="light-pill" style={{ marginBottom: '14px' }}>
            <span className="light-pill-dot"></span>
            3. IT COURSES
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.8vw, 2.6rem)', fontWeight: 800, color: '#0f172a' }}>
            3. IT Courses
          </h2>
        </div>

        {/* 2 Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {itDomain.map((card, idx) => (
            <div key={card.id} className="light-card" style={{ padding: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '12px',
                    background: 'rgba(37, 99, 235, 0.08)', border: '1px solid rgba(37, 99, 235, 0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    {idx === 0 ? <Code size={22} style={{ color: '#2563eb' }} /> : <Globe size={22} style={{ color: '#2563eb' }} />}
                  </div>

                  <span style={{
                    fontSize: '0.7rem', fontWeight: 700, color: '#2563eb',
                    background: 'rgba(37, 99, 235, 0.08)', border: '1px solid rgba(37, 99, 235, 0.2)',
                    padding: '4px 10px', borderRadius: '9999px'
                  }}>
                    3. IT Courses
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
                  {card.title}
                </h3>
              </div>

              <div style={{ paddingTop: '20px', borderTop: '1px solid #f1f5f9' }}>
                <button onClick={onEnquire} className="btn-blue-light" style={{ width: '100%', justifyContent: 'center' }}>
                  Enquire Now <ArrowRight size={15} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
