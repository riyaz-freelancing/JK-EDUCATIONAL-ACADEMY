import React from 'react';
import { ArrowRight, BookMarked, CheckCircle2 } from 'lucide-react';
import { bcomSubjects, graduationCourses } from '../data/academyData';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
          marginBottom: '40px'
        }}>
          <div>
            <div className="light-pill" style={{ marginBottom: '12px' }}>
              <span className="light-pill-dot"></span>
              GRADUATION TUITIONS & PRICING
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0f172a' }}>
              Tuitions For Graduation <span className="gradient-text">(B.Com & BBA)</span>
            </h2>
            <p style={{ maxWidth: '680px', marginTop: '6px', color: '#475569', fontSize: '0.95rem' }}>
              Osmania & Kakatiya University syllabus coverage with full semester packages or single subject enrollment at <strong className="text-blue-600">₹1,500 / subject</strong>.
            </p>
          </div>

          <Badge variant="secondary" className="px-3.5 py-1.5 font-bold text-xs shadow-xs">
            ⚡ Individual Subject Coaching Available
          </Badge>
        </div>

        {/* Graduation Cards (B.Com & BBA) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '44px'
        }}>
          {graduationCourses.map((course) => {
            const IconC = course.icon;
            return (
              <Card key={course.id} animate className="p-6 flex flex-col justify-between border border-slate-200/90 rounded-2xl shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 h-full">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200/60">
                      {course.badge}
                    </span>
                    <span className="text-[11px] font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200/60">
                      {course.discount}
                    </span>
                  </div>

                  <div className="flex items-start gap-3.5 mb-4">
                    <div className="p-3 rounded-xl bg-blue-50 text-blue-600 shadow-xs">
                      <IconC size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900 font-heading tracking-tight">{course.title}</h3>
                      <p className="text-xs text-slate-500 font-semibold mt-0.5">{course.mode}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">{course.description}</p>

                  {/* Pricing Box */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 mb-4">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-2xl font-black text-slate-900 font-heading">{course.fee}</span>
                        <span className="text-xs font-bold text-slate-500 ml-1">{course.feePeriod}</span>
                      </div>
                      <span className="text-xs line-through text-slate-400 font-semibold">{course.originalFee}</span>
                    </div>

                    {course.perSubject && (
                      <div className="mt-2.5 pt-2 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-blue-700">
                        <span>Per Subject Tuition:</span>
                        <span className="bg-blue-100 px-2 py-0.5 rounded text-blue-800 font-extrabold text-[11px]">{course.perSubject}</span>
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 mb-6">
                    {course.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                        <CheckCircle2 size={14} className="text-blue-600 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="gradient" className="w-full h-11 text-sm font-bold shadow-md hover:shadow-lg" onClick={() => onEnquire(course)}>
                  Enroll In {course.title.split(' ')[0]} <ArrowRight size={15} />
                </Button>
              </Card>
            );
          })}
        </div>

        {/* B.Com 13 Subjects Detailed Breakdown with Fee Badges */}
        <div style={{
          backgroundColor: '#f8fafc',
          borderRadius: '20px',
          padding: '32px',
          border: '1px solid #e2e8f0'
        }}>
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0f172a' }}>
                B.Com — All 13 Core Subjects Covered
              </h3>
              <p className="text-xs text-slate-500 mt-1">Enroll per subject or take the complete 13-subject tuition bundle.</p>
            </div>
            <Badge variant="indigo" className="px-3.5 py-1 text-xs font-bold">
              Fee: ₹1,500 / Per Subject
            </Badge>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '14px'
          }}>
            {bcomSubjects.map((sub, idx) => (
              <div key={sub.id} style={{
                padding: '14px 18px',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                border: '1px solid #e2e8f0',
                display: 'flex',
                alignItems: 'center',
                justify: 'space-between',
                boxShadow: '0 2px 6px rgba(15, 23, 42, 0.02)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#2563eb', background: 'rgba(37, 99, 235, 0.08)', padding: '3px 8px', borderRadius: '6px' }}>
                    #{idx + 1}
                  </span>
                  <span style={{ fontSize: '0.88rem', fontWeight: 700, color: '#0f172a' }}>{sub.title}</span>
                </div>
                <span className="text-xs font-extrabold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                  {sub.fee}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
