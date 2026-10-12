import React from 'react';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { corporateTrainingData } from '../data/academyData';

const CourseCard = ({ children, accent = '#7c3aed,#6366f1' }) => (
  <div style={{
    background: '#fff', border: '2px solid #e2e8f0', borderRadius: '20px',
    overflow: 'hidden', boxShadow: '0 4px 24px rgba(15,23,42,0.06)',
    display: 'flex', flexDirection: 'column', transition: 'box-shadow .25s, border-color .25s',
  }}
  onMouseEnter={e => { e.currentTarget.style.borderColor = '#7c3aed'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(124,58,237,0.14)'; }}
  onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(15,23,42,0.06)'; }}
  >
    <div style={{ height: '5px', background: `linear-gradient(90deg,${accent})`, flexShrink: 0 }} />
    {children}
  </div>
);

export default function SpecializedDomains({ onEnquire }) {
  const { otherDomains } = corporateTrainingData;

  return (
    <section id="specialized" className="section-spacing" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
          <div className="light-pill" style={{ marginBottom: '14px', display: 'inline-flex' }}>
            <span className="light-pill-dot" /> 4. OTHER DOMAINS (NON-IT)
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.8vw,2.6rem)', fontWeight: 800, color: '#0f172a' }}>
            4. Specialized Process Training <span className="gradient-text">(Non-IT Operations)</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '0.95rem', marginTop: '8px' }}>
            Practical BPO, KPO, AML & KYC Operations training for top Hyderabad multinational companies.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))', gap: '24px' }}>
          {otherDomains.map((item) => {
            const IconC = item.icon;
            return (
              <CourseCard key={item.id}>
                <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                  {/* Icon + Duration */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'linear-gradient(135deg,#7c3aed,#6366f1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', boxShadow: '0 4px 12px rgba(124,58,237,.25)' }}>
                      <IconC size={22} />
                    </div>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#6d28d9', background: '#ede9fe', border: '1px solid #c4b5fd', padding: '5px 11px', borderRadius: '7px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Clock size={12} /> {item.duration}
                    </span>
                  </div>

                  {/* Title */}
                  <div>
                    <h3 style={{ fontSize: '1.05rem', fontWeight: 900, color: '#0f172a', margin: 0, lineHeight: 1.35 }}>{item.title}</h3>
                    <p style={{ fontSize: '12px', color: '#475569', marginTop: '6px', lineHeight: 1.5 }}>
                      Real-time operational workflow training & Hyderabad MNC interview guidance.
                    </p>
                  </div>

                  {/* Price box */}
                  <div style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '14px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '1.8rem', fontWeight: 900, color: '#0f172a', lineHeight: 1 }}>{item.fee}</span>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: '#94a3b8', textDecoration: 'line-through' }}>{item.originalFee}</span>
                    </div>
                  </div>
                </div>

                <div style={{ padding: '0 22px 20px' }}>
                  <button type="button" onClick={() => onEnquire(item)}
                    style={{ width: '100%', height: '48px', background: 'linear-gradient(135deg,#7c3aed,#6366f1)', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '14px', fontWeight: 900, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 4px 18px rgba(124,58,237,.30)', transition: 'transform .2s, box-shadow .2s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(124,58,237,.40)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 18px rgba(124,58,237,.30)'; }}
                  >
                    Enroll Now ({item.fee}) <ArrowRight size={16} />
                  </button>
                </div>
              </CourseCard>
            );
          })}
        </div>

      </div>
    </section>
  );
}
