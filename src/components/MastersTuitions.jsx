import React from 'react';
import { ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { mastersCourses } from '../data/academyData';

const CourseCard = ({ children }) => (
  <div style={{
    background: '#fff', border: '2px solid #e2e8f0', borderRadius: '20px',
    overflow: 'hidden', boxShadow: '0 4px 24px rgba(15,23,42,0.06)',
    display: 'flex', flexDirection: 'column', transition: 'box-shadow .25s, border-color .25s',
  }}
  onMouseEnter={e => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,99,235,0.14)'; }}
  onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(15,23,42,0.06)'; }}
  >
    <div style={{ height: '5px', background: 'linear-gradient(90deg,#059669,#10b981,#6366f1)', flexShrink: 0 }} />
    {children}
  </div>
);

export default function MastersTuitions({ onEnquire }) {
  return (
    <section id="masters" className="section-spacing" style={{ backgroundColor: '#f8fafc' }}>
      <div className="container">

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
          <div>
            <div className="light-pill" style={{ marginBottom: '14px' }}>
              <span className="light-pill-dot" /> POST-GRADUATION COACHING
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', fontWeight: 800, color: '#0f172a' }}>
              Tuitions For Masters <span className="gradient-text">(M.Com & MBA)</span>
            </h2>
            <p style={{ maxWidth: '680px', marginTop: '8px', color: '#475569', fontSize: '0.95rem' }}>
              Specialised post-graduate coaching for M.Com and MBA subjects with experienced Hyderabad university faculty.
            </p>
          </div>
          <span style={{ fontSize: '12px', fontWeight: 800, color: '#059669', background: '#d1fae5', border: '1px solid #6ee7b7', padding: '7px 16px', borderRadius: '999px' }}>
            🎓 Post-Graduate Faculty Led
          </span>
        </div>

        {/* Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(320px,1fr))', gap: '24px' }}>
          {mastersCourses.map((course) => {
            const IconC = course.icon;
            return (
              <CourseCard key={course.id}>
                <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
                  {/* Badges */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.07em', color: '#065f46', background: '#d1fae5', border: '1px solid #6ee7b7', padding: '5px 11px', borderRadius: '7px' }}>
                      {course.badge}
                    </span>
                    <span style={{ fontSize: '11px', fontWeight: 900, color: '#065f46', background: '#d1fae5', border: '1px solid #6ee7b7', padding: '5px 11px', borderRadius: '7px' }}>
                      {course.discount}
                    </span>
                  </div>

                  {/* Title */}
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '14px', flexShrink: 0, background: 'linear-gradient(135deg,#059669,#10b981)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(5,150,105,.25)', color: '#fff' }}>
                      <IconC size={24} />
                    </div>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ fontSize: '1.15rem', fontWeight: 900, color: '#0f172a', margin: 0 }}>{course.title}</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '5px' }}>
                        <MapPin size={13} color="#059669" />
                        <span style={{ fontSize: '11px', fontWeight: 700, color: '#059669' }}>{course.mode}</span>
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
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #e2e8f0' }}>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: '#334155' }}>Monthly Fee Option:</span>
                      <span style={{ fontSize: '12px', fontWeight: 900, color: '#fff', background: '#059669', padding: '4px 12px', borderRadius: '7px' }}>{course.monthlyFee}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {course.highlights.map((h, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <CheckCircle2 size={15} color="#059669" style={{ flexShrink: 0 }} />
                        <span style={{ fontSize: '12px', fontWeight: 600, color: '#334155' }}>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enroll button */}
                <div style={{ padding: '0 22px 20px' }}>
                  <button type="button" onClick={() => onEnquire(course)}
                    style={{ width: '100%', height: '48px', background: 'linear-gradient(135deg,#059669,#10b981)', color: '#fff', border: 'none', borderRadius: '12px', fontSize: '14px', fontWeight: 900, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxShadow: '0 4px 18px rgba(5,150,105,.30)', transition: 'transform .2s, box-shadow .2s' }}
                    onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(5,150,105,.40)'; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 18px rgba(5,150,105,.30)'; }}
                  >
                    Enroll In {course.title.split(' ')[0]} <ArrowRight size={16} />
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
