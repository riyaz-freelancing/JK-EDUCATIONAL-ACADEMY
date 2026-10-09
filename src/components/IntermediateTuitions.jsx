import React from 'react';
import { intermediateCourses } from '../data/academyData';
import FlipCourseCard from './FlipCourseCard';
import { Badge } from '@/components/ui/badge';

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
              HYD ACADEMIC TUITIONS
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 3.8vw, 2.6rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>
              Tuitions For Intermediate <span className="gradient-text">(MPC, BiPC, MEC, CEC, AEC)</span>
            </h2>
            <p style={{ maxWidth: '720px', marginTop: '8px', color: '#475569', fontSize: '1.05rem', lineHeight: 1.6 }}>
              Interactive 3D Cards — Hover or tap any card to view detailed syllabus, batch timings & curriculum!
            </p>
          </div>

          <Badge variant="indigo" className="text-xs sm:text-sm px-4 py-2 font-extrabold shadow-sm">
            🏷️ Special HYD Board Batch Discount Active
          </Badge>
        </div>

        {/* 3D Flip Cards Grid - 3 Generous Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '28px'
        }}>
          {intermediateCourses.map((stream) => (
            <FlipCourseCard
              key={stream.id}
              stream={stream}
              onEnquire={onEnquire}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
