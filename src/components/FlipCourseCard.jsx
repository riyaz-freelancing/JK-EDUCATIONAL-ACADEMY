import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MapPin, BookOpen, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

export default function FlipCourseCard({ stream, onEnquire }) {
  const [showSyllabus, setShowSyllabus] = useState(false);
  const IconComponent = stream.icon;

  // Split "M.P.C (Maths, Physics, Chemistry)" → code + subjects
  const parenIdx = stream.title.indexOf('(');
  const streamCode = parenIdx > -1 ? stream.title.slice(0, parenIdx).trim() : stream.title;
  const subjectsText = parenIdx > -1 ? stream.title.slice(parenIdx) : '';

  return (
    <div style={{
      background: '#ffffff',
      border: '2px solid #e2e8f0',
      borderRadius: '20px',
      overflow: 'hidden',        /* keeps rounded corners */
      boxShadow: '0 4px 24px rgba(15,23,42,0.06)',
      display: 'flex',
      flexDirection: 'column',
      transition: 'box-shadow 0.25s ease, border-color 0.25s ease',
    }}
    onMouseEnter={e => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,99,235,0.14)'; }}
    onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(15,23,42,0.06)'; }}
    >
      {/* ── TOP COLOUR BAR ── */}
      <div style={{ height: '5px', background: 'linear-gradient(90deg,#2563eb,#6366f1,#8b5cf6)', flexShrink: 0 }} />

      {/* ── CARD BODY ── */}
      <div style={{ padding: '20px 22px', display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>

        {/* Row 1: Duration badge  +  Discount badge */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px' }}>
          <span style={{
            fontSize: '11px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.07em',
            color: '#475569', background: '#f1f5f9', border: '1px solid #e2e8f0',
            padding: '5px 11px', borderRadius: '7px',
          }}>
            {stream.duration}
          </span>
          <span style={{
            fontSize: '11px', fontWeight: 900,
            color: '#065f46', background: '#d1fae5', border: '1px solid #6ee7b7',
            padding: '5px 11px', borderRadius: '7px',
          }}>
            {stream.discount}
          </span>
        </div>

        {/* Row 2: Icon + Course Name + Subjects */}
        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
          <div style={{
            width: '50px', height: '50px', borderRadius: '14px', flexShrink: 0,
            background: 'linear-gradient(135deg,#2563eb,#4f46e5)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(37,99,235,0.25)',
            color: '#fff',
          }}>
            <IconComponent size={24} />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0f172a', lineHeight: 1, margin: 0 }}>
              {streamCode}
            </h3>
            <p style={{ fontSize: '0.82rem', fontWeight: 700, color: '#475569', margin: '5px 0 0', lineHeight: 1.35 }}>
              {subjectsText}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginTop: '6px' }}>
              <MapPin size={13} color="#2563eb" />
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#2563eb' }}>{stream.mode}</span>
            </div>
          </div>
        </div>

        {/* Row 3: Price box */}
        <div style={{
          background: '#f8fafc', border: '1.5px solid #e2e8f0',
          borderRadius: '14px', padding: '14px 16px',
        }}>
          {/* Fee row */}
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
              <span style={{ fontSize: '2rem', fontWeight: 900, color: '#0f172a', lineHeight: 1 }}>
                {stream.fee}
              </span>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#64748b' }}>
                {stream.feePeriod}
              </span>
            </div>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#94a3b8', textDecoration: 'line-through' }}>
              {stream.originalFee}
            </span>
          </div>

          {/* Monthly fee row */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            marginTop: '10px', paddingTop: '10px', borderTop: '1px solid #e2e8f0',
          }}>
            <span style={{ fontSize: '12px', fontWeight: 700, color: '#334155' }}>Monthly Fee Option:</span>
            <span style={{
              fontSize: '12px', fontWeight: 900, color: '#fff',
              background: '#2563eb', padding: '4px 12px', borderRadius: '7px',
            }}>
              {stream.monthlyFee}
            </span>
          </div>
        </div>

        {/* Row 4: Highlights */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {stream.highlights.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle2 size={15} color="#10b981" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: '12px', fontWeight: 600, color: '#334155' }}>{item}</span>
            </div>
          ))}
        </div>

        {/* Row 5: Syllabus toggle */}
        <button
          type="button"
          onClick={() => setShowSyllabus(!showSyllabus)}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            width: '100%', background: '#eff6ff', border: '1.5px solid #bfdbfe',
            borderRadius: '10px', padding: '10px 14px', cursor: 'pointer',
            fontSize: '12px', fontWeight: 800, color: '#1d4ed8',
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <BookOpen size={14} />
            {showSyllabus ? 'Hide Syllabus & Batch Timings' : 'View Syllabus & Batch Timings'}
          </span>
          {showSyllabus ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {/* Expandable syllabus panel */}
        {showSyllabus && (
          <div style={{
            background: '#0f172a', borderRadius: '14px', padding: '16px',
            display: 'flex', flexDirection: 'column', gap: '12px',
          }}>
            <div>
              <div style={{ fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#67e8f9', marginBottom: '6px' }}>
                📚 Core Curriculum Covered
              </div>
              <p style={{ fontSize: '12px', fontWeight: 600, color: '#e2e8f0', lineHeight: 1.5, margin: 0 }}>
                Full 1st & 2nd year Board Syllabus with Chapter-wise Notes & 10-Yr Previous Question Papers.
              </p>
            </div>
            <div style={{ borderTop: '1px solid #1e293b', paddingTop: '12px' }}>
              <div style={{ fontSize: '10px', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#fbbf24', marginBottom: '8px' }}>
                ⏰ HYD Campus Batch Timings
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {['Morning: 7:00 – 9:00 AM', 'Evening: 5:00 – 7:00 PM'].map(t => (
                  <span key={t} style={{ fontSize: '11px', fontWeight: 800, color: '#f1f5f9', background: '#1e293b', padding: '5px 10px', borderRadius: '7px', border: '1px solid #334155' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ borderTop: '1px solid #1e293b', paddingTop: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <ShieldCheck size={16} color="#34d399" style={{ flexShrink: 0 }} />
              <span style={{ fontSize: '12px', fontWeight: 800, color: '#34d399' }}>100% Board Exam Pass & Score Booster Guarantee</span>
            </div>
          </div>
        )}

      </div>

      {/* ── ENROLL BUTTON ── */}
      <div style={{ padding: '0 22px 20px' }}>
        <button
          type="button"
          onClick={() => onEnquire(stream)}
          style={{
            width: '100%', height: '48px',
            background: 'linear-gradient(135deg,#2563eb,#6366f1)',
            color: '#fff', border: 'none', borderRadius: '12px',
            fontSize: '14px', fontWeight: 900, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            boxShadow: '0 4px 18px rgba(37,99,235,0.30)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(37,99,235,0.40)'; }}
          onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '0 4px 18px rgba(37,99,235,0.30)'; }}
        >
          Enroll Now ({stream.fee}) <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}
