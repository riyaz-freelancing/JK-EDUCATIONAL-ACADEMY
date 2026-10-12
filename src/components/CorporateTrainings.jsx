import React from 'react';
import { ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { corporateTrainingData } from '../data/academyData';

const CourseCard = ({ children, accent }) => (
  <div style={{
    background: '#fff', border: '2px solid #e2e8f0', borderRadius: '20px',
    overflow: 'hidden', boxShadow: '0 4px 24px rgba(15,23,42,0.06)',
    display: 'flex', flexDirection: 'column', transition: 'box-shadow .25s, border-color .25s',
  }}
  onMouseEnter={e => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,99,235,0.14)'; }}
  onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(15,23,42,0.06)'; }}
  >
    <div style={{ height: '5px', background: accent, flexShrink: 0 }} />
    {children}
  </div>
);

function DomainSection({ title, emoji, courses, accentBar, iconBg, btnBg, btnShadow, onEnquire }) {
  return (
    <CourseCard accent={accentBar}>
      <div style={{ padding: '22px 24px', display: 'flex', flexDirection: 'column', gap: '0' }}>
        {/* Domain header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', paddingBottom: '16px', borderBottom: '1.5px solid #f1f5f9', marginBottom: '16px' }}>
          <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', flexShrink: 0 }}>
            {emoji}
          </div>
          <div>
            <span style={{ fontSize: '10px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', color: '#64748b', display: 'block' }}>Domain</span>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 900, color: '#0f172a', margin: 0 }}>{title}</h3>
          </div>
        </div>

        {/* Course rows */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
          {courses.map((c) => (
            <div key={c.id} style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '12px', padding: '12px 14px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', flex: 1, minWidth: 0 }}>
                <CheckCircle2 size={16} color="#2563eb" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: '12px', fontWeight: 700, color: '#0f172a', margin: 0, lineHeight: 1.3 }}>{c.title}</p>
                  <span style={{ fontSize: '11px', color: '#64748b', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '3px' }}>
                    <Clock size={11} /> {c.duration}
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontSize: '13px', fontWeight: 900, color: '#0f172a', display: 'block' }}>{c.fee}</span>
                  <span style={{ fontSize: '10px', color: '#94a3b8', textDecoration: 'line-through', display: 'block' }}>{c.originalFee}</span>
                </div>
                <button type="button" onClick={() => onEnquire(c)}
                  style={{ fontSize: '11px', fontWeight: 800, color: '#fff', background: btnBg, border: 'none', padding: '6px 12px', borderRadius: '8px', cursor: 'pointer', whiteSpace: 'nowrap' }}>
                  Enroll
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Full package CTA */}
        <button type="button"
          onClick={() => onEnquire({ title: `${title} Complete Package`, fee: courses[0].fee })}
          style={{ width: '100%', height: '48px', background: btnBg, color: '#fff', border: 'none', borderRadius: '12px', fontSize: '14px', fontWeight: 900, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: btnShadow, transition: 'transform .2s, box-shadow .2s' }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; }}
        >
          Enquire Full {title.split(' ')[0]} Package <ArrowRight size={16} />
        </button>
      </div>
    </CourseCard>
  );
}

export default function CorporateTrainings({ onEnquire }) {
  const { financeDomain, hrDomain } = corporateTrainingData;

  return (
    <section id="corporate" className="section-spacing" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
          <div className="light-pill" style={{ marginBottom: '14px', display: 'inline-flex' }}>
            <span className="light-pill-dot" /> 2. CORPORATE TRAININGS (NON-IT)
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem,3.8vw,2.6rem)', fontWeight: 800, color: '#0f172a' }}>
            2. Corporate Trainings & Domain Programs <span className="gradient-text">(Non-IT)</span>
          </h2>
          <p style={{ color: '#475569', fontSize: '0.95rem', marginTop: '8px' }}>
            Practical corporate domain modules with real-time exposure & affordable Hyderabad course pricing.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(380px,1fr))', gap: '28px' }}>
          <DomainSection
            title="Finance & Accounting Modules"
            emoji="💼"
            courses={financeDomain}
            accentBar="linear-gradient(90deg,#2563eb,#6366f1,#8b5cf6)"
            iconBg="#eff6ff"
            btnBg="linear-gradient(135deg,#2563eb,#6366f1)"
            btnShadow="0 4px 18px rgba(37,99,235,.30)"
            onEnquire={onEnquire}
          />
          <DomainSection
            title="Human Resource Management"
            emoji="👥"
            courses={hrDomain}
            accentBar="linear-gradient(90deg,#7c3aed,#6366f1,#06b6d4)"
            iconBg="#ede9fe"
            btnBg="linear-gradient(135deg,#7c3aed,#6366f1)"
            btnShadow="0 4px 18px rgba(124,58,237,.30)"
            onEnquire={onEnquire}
          />
        </div>

      </div>
    </section>
  );
}
