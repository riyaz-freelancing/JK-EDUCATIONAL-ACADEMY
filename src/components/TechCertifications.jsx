import React from 'react';
import { ArrowRight, CheckCircle2, CreditCard, MapPin } from 'lucide-react';
import { corporateTrainingData } from '../data/academyData';

const CourseCard = ({ children, accentColor = '#2563eb,#6366f1,#8b5cf6' }) => (
  <div style={{
    background: '#fff', border: '2px solid #e2e8f0', borderRadius: '20px',
    overflow: 'hidden', boxShadow: '0 4px 24px rgba(15,23,42,0.06)',
    display: 'flex', flexDirection: 'column', transition: 'box-shadow .25s, border-color .25s',
  }}
  onMouseEnter={e => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,99,235,0.14)'; }}
  onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(15,23,42,0.06)'; }}
  >
    <div style={{ height: '5px', background: `linear-gradient(90deg,${accentColor})`, flexShrink: 0 }} />
    {children}
  </div>
);

export default function TechCertifications({ onEnquire }) {
  const { itDomain } = corporateTrainingData;

  return (
    <section id="tech" className="section-spacing" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
          <div className="light-pill" style={{ marginBottom: '14px', display: 'inline-flex' }}>
            <span className="light-pill-dot" /> 3. HIGH IMPACT IT COURSES
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.8vw,2.6rem)', fontWeight: 800, color: '#0f172a' }}>
            3. IT Courses & Career Bootcamps <span className="gradient-text">(With Internship)</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '0.95rem', marginTop: '8px' }}>
            Practical hands-on IT courses in Hyderabad with live capstone projects and flexible EMI payment options.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(340px,1fr))', gap: '28px' }}>
          {itDomain.map((card) => {
            const IconComp = card.icon;
            return (
              <CourseCard key={card.id} accentColor="#2563eb,#6366f1,#8b5cf6">
                <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                  {/* Badges */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#1d4ed8', background: '#eff6ff', border: '1px solid #bfdbfe', padding: '5px 11px', borderRadius: '7px' }}>
                      {card.duration}
                    </span>
                    <span style={{ fontSize: '11px', fontWeight: 900, color: '#065f46', background: '#d1fae5', border: '1px solid #6ee7b7', padding: '5px 11px', borderRadius: '7px' }}>
                      {card.discount}
                    </span>
                  </div>

                  {/* Title */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '14px', flexShrink: 0, background: 'linear-gradient(135deg,#2563eb,#4f46e5)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(37,99,235,.25)', color: '#fff' }}>
                      <IconComp size={24} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#0f172a', margin: 0 }}>{card.title}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '5px' }}>
                        <MapPin size={13} color="#2563eb" />
                        <span style={{ fontSize: '11px', fontWeight: 700, color: '#2563eb' }}>{card.mode}</span>
                      </div>
                    </div>
                  </div>

                  {/* Price box */}
                  <div style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '14px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                        <span style={{ fontSize: '2rem', fontWeight: 900, color: '#0f172a', lineHeight: 1 }}>{card.fee}</span>
                        <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748b' }}>{card.feePeriod}</span>
                      </div>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: '#94a3b8', textDecoration: 'line-through' }}>{card.originalFee}</span>
                    </div>
                    {card.emi && (
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #e2e8f0' }}>
                        <span style={{ fontSize: '12px', fontWeight: 700, color: '#1d4ed8', display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <CreditCard size={13} /> Flexible EMI Option:
                        </span>
                        <span style={{ fontSize: '12px', fontWeight: 900, color: '#1d4ed8', background: '#eff6ff', border: '1px solid #bfdbfe', padding: '4px 10px', borderRadius: '7px' }}>{card.emi}</span>
                      </div>
                    )}
                  </div>

                  {/* Highlights */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {card.highlights.map((h, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <CheckCircle2 size={15} color="#10b981" style={{ flexShrink: 0 }} />
                        <span style={{ fontSize: '12px', fontWeight: 600, color: '#334155' }}>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ padding: '0 22px 20px' }}>
                  <button type="button" onClick={() => onEnquire(card)}
                    style={{ width: '100%', height: '48px', background: 'linear-gradient(135deg,#2563eb,#6366f1)', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '14px', fontWeight: 900, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 4px 18px rgba(37,99,235,.30)', transition: 'transform .2s, box-shadow .2s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,99,235,.40)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 18px rgba(37,99,235,.30)'; }}
                  >
                    Enroll Now ({card.fee}) <ArrowRight size={16} />
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
