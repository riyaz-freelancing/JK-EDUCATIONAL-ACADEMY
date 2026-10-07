import React from 'react';
import { CheckCircle2, ArrowRight, Calculator, Users } from 'lucide-react';
import { corporateTrainingData } from '../data/academyData';

export default function CorporateTrainings({ onEnquire }) {
  const { financeDomain, hrDomain } = corporateTrainingData;

  return (
    <section id="corporate" className="section-spacing" style={{ backgroundColor: '#f8fafc', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px' }}>
          <div className="light-pill" style={{ marginBottom: '14px' }}>
            <span className="light-pill-dot"></span>
            2. CORPORATE TRAININGS (NON-IT)
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.8vw, 2.6rem)', fontWeight: 800, color: '#0f172a' }}>
            2. Corporate Trainings (Non-IT)
          </h2>
        </div>

        {/* 2 Feature Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '30px'
        }}>

          {/* Card 1: Finance Domain */}
          <div className="light-card" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: 'rgba(37, 99, 235, 0.1)', border: '1px solid rgba(37, 99, 235, 0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb'
              }}>
                <Calculator size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>
                  Finance Domain
                </h3>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
              {financeDomain.map((course) => (
                <div key={course.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={17} style={{ color: '#2563eb', flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }}>{course.title}</span>
                </div>
              ))}
            </div>

            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap',
              paddingTop: '20px', borderTop: '1px solid #f1f5f9'
            }}>
              <button onClick={onEnquire} className="btn-blue-light" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
                Enquire <ArrowRight size={15} />
              </button>
            </div>
          </div>

          {/* Card 2: Human Resource Domain */}
          <div className="light-card" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: 'rgba(79, 70, 229, 0.1)', border: '1px solid rgba(79, 70, 229, 0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4f46e5'
              }}>
                <Users size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>
                  Human Resource Domain
                </h3>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
              {hrDomain.map((course) => (
                <div key={course.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={17} style={{ color: '#4f46e5', flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ fontSize: '0.92rem', color: '#334155', fontWeight: 600 }}>{course.title}</span>
                </div>
              ))}
            </div>

            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap',
              paddingTop: '20px', borderTop: '1px solid #f1f5f9'
            }}>
              <button onClick={onEnquire} className="btn-primary-light" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
                Enquire <ArrowRight size={15} />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
