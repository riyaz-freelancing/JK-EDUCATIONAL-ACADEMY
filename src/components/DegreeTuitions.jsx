import React from 'react';
import { ArrowRight, BookMarked, CheckCircle2, MapPin } from 'lucide-react';
import { bcomSubjects, graduationCourses } from '../data/academyData';

// ── Reusable inline Card shell ──────────────────────────────────────────────
const CourseCard = ({ accentColor = '#2563eb', children }) => (
  <div style={{
    background: '#fff', border: '2px solid #e2e8f0', borderRadius: '20px',
    overflow: 'hidden', boxShadow: '0 4px 24px rgba(15,23,42,0.06)',
    display: 'flex', flexDirection: 'column', transition: 'box-shadow .25s, border-color .25s',
  }}
  onMouseEnter={e => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,99,235,0.14)'; }}
  onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(15,23,42,0.06)'; }}
  >
    <div style={{ height: '5px', background: `linear-gradient(90deg,${accentColor},#6366f1,#8b5cf6)`, flexShrink: 0 }} />
    {children}
  </div>
);

export default function DegreeTuitions({ onEnquire }) {
  return (
    <section id="degree" className="section-spacing" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
          <div>
            <div className="light-pill" style={{ marginBottom: '12px' }}>
              <span className="light-pill-dot" /> GRADUATION TUITIONS & PRICING
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', fontWeight: 800, color: '#0f172a' }}>
              Tuitions For Graduation <span className="gradient-text">(B.Com & BBA)</span>
            </h2>
            <p style={{ maxWidth: '680px', marginTop: '6px', color: '#475569', fontSize: '0.95rem' }}>
              Osmania & Kakatiya University syllabus coverage with full semester packages or single subject enrollment at <strong style={{ color: '#2563eb' }}>₹1,500 / subject</strong>.
            </p>
          </div>
          <span style={{ fontSize: '12px', fontWeight: 800, color: '#4f46e5', background: '#eef2ff', border: '1px solid #c7d2fe', padding: '6px 14px', borderRadius: '999px' }}>
            ⚡ Individual Subject Coaching Available
          </span>
        </div>

        {/* Graduation Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '24px', marginBottom: '44px' }}>
          {graduationCourses.map((course) => {
            const IconC = course.icon;
            return (
              <CourseCard key={course.id} accentColor="#2563eb">
                <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                  {/* Badges */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#1d4ed8', background: '#eff6ff', border: '1px solid #bfdbfe', padding: '5px 11px', borderRadius: '7px' }}>
                      {course.badge}
                    </span>
                    <span style={{ fontSize: '11px', fontWeight: 900, color: '#065f46', background: '#d1fae5', border: '1px solid #6ee7b7', padding: '5px 11px', borderRadius: '7px' }}>
                      {course.discount}
                    </span>
                  </div>

                  {/* Title row */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '14px', flexShrink: 0, background: 'linear-gradient(135deg,#2563eb,#4f46e5)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(37,99,235,.25)', color: '#fff' }}>
                      <IconC size={24} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '1.2rem', fontWeight: 900, color: '#0f172a', margin: 0 }}>{course.title}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '5px' }}>
                        <MapPin size={13} color="#2563eb" />
                        <span style={{ fontSize: '11px', fontWeight: 700, color: '#2563eb' }}>{course.mode}</span>
                      </div>
                      <p style={{ fontSize: '12px', color: '#475569', marginTop: '6px', lineHeight: 1.5 }}>{course.description}</p>
                    </div>
                  </div>

                  {/* Price box */}
                  <div style={{ background: '#f8fafc', border: '1.5px solid #e2e8f0', borderRadius: '14px', padding: '14px 16px' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                        <span style={{ fontSize: '1.9rem', fontWeight: 900, color: '#0f172a', lineHeight: 1 }}>{course.fee}</span>
                        <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748b' }}>{course.feePeriod}</span>
                      </div>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: '#94a3b8', textDecoration: 'line-through' }}>{course.originalFee}</span>
                    </div>
                    {course.perSubject && (
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #e2e8f0' }}>
                        <span style={{ fontSize: '12px', fontWeight: 700, color: '#1d4ed8' }}>Per Subject Tuition:</span>
                        <span style={{ fontSize: '12px', fontWeight: 900, color: '#1d4ed8', background: '#eff6ff', padding: '4px 10px', borderRadius: '7px', border: '1px solid #bfdbfe' }}>{course.perSubject}</span>
                      </div>
                    )}
                  </div>

                  {/* Highlights */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {course.highlights.map((h, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <CheckCircle2 size={15} color="#2563eb" style={{ flexShrink: 0 }} />
                        <span style={{ fontSize: '12px', fontWeight: 600, color: '#334155' }}>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enroll button */}
                <div style={{ padding: '0 22px 20px' }}>
                  <button type="button" onClick={() => onEnquire(course)} style={{ width: '100%', height: '48px', background: 'linear-gradient(135deg,#2563eb,#6366f1)', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '14px', fontWeight: 900, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 4px 18px rgba(37,99,235,.30)', transition: 'transform .2s, box-shadow .2s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,99,235,.40)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 18px rgba(37,99,235,.30)'; }}
                  >
                    Enroll In {course.title.split(' ')[0]} <ArrowRight size={16} />
                  </button>
                </div>
              </CourseCard>
            );
          })}
        </div>

        {/* B.Com 13 Subjects breakdown */}
        <div style={{ backgroundColor: '#f8fafc', borderRadius: '20px', padding: '32px', border: '1.5px solid #e2e8f0' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '24px' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>B.Com — All 13 Core Subjects Covered</h3>
              <p style={{ fontSize: '12px', color: '#64748b', marginTop: '4px' }}>Enroll per subject or take the complete 13-subject tuition bundle.</p>
            </div>
            <span style={{ fontSize: '12px', fontWeight: 900, color: '#4f46e5', background: '#eef2ff', border: '1px solid #c7d2fe', padding: '7px 16px', borderRadius: '999px' }}>Fee: ₹1,500 / Per Subject</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: '12px' }}>
            {bcomSubjects.map((sub, idx) => (
              <div key={sub.id} style={{ padding: '12px 16px', backgroundColor: '#fff', borderRadius: '12px', border: '1.5px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 2px 6px rgba(15,23,42,.03)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#2563eb', background: 'rgba(37,99,235,.08)', padding: '3px 8px', borderRadius: '6px' }}>#{idx + 1}</span>
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#0f172a' }}>{sub.title}</span>
                </div>
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#059669', background: '#d1fae5', padding: '3px 10px', borderRadius: '6px' }}>{sub.fee}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
