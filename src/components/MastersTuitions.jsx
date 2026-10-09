import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { mastersCourses } from '../data/academyData';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function MastersTuitions({ onEnquire }) {
  return (
    <section id="masters" className="section-spacing" style={{ backgroundColor: '#f8fafc', position: 'relative' }}>
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
            <div className="light-pill" style={{ marginBottom: '14px' }}>
              <span className="light-pill-dot"></span>
              POST-GRADUATION COACHING
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0f172a' }}>
              Tuitions For Masters <span className="gradient-text">(M.Com & MBA)</span>
            </h2>
            <p style={{ maxWidth: '680px', marginTop: '8px', color: '#475569', fontSize: '0.95rem' }}>
              Specialised post-graduate coaching for M.Com and MBA subjects with experienced Hyderabad university faculty.
            </p>
          </div>

          <Badge variant="indigo" className="px-3.5 py-1.5 font-bold">
            🎓 Post-Graduate Faculty Led
          </Badge>
        </div>

        {/* Masters Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {mastersCourses.map((course) => {
            const IconC = course.icon;
            return (
              <Card key={course.id} animate className="p-6 flex flex-col justify-between bg-white border border-slate-200">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="secondary" className="font-bold text-indigo-700 bg-indigo-50">{course.badge}</Badge>
                    <Badge variant="success" className="font-bold">{course.discount}</Badge>
                  </div>

                  <div className="flex items-start gap-3.5 mb-4">
                    <div className="p-3 rounded-xl bg-emerald-50 text-emerald-600">
                      <IconC size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{course.title}</h3>
                      <p className="text-xs text-slate-500 font-semibold mt-0.5">{course.mode}</p>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 mb-4 leading-relaxed">{course.description}</p>

                  {/* Pricing Box */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 mb-4">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-2xl font-black text-slate-900 font-heading">{course.fee}</span>
                        <span className="text-xs font-bold text-slate-500 ml-1">{course.feePeriod}</span>
                      </div>
                      <span className="text-xs line-through text-slate-400 font-semibold">{course.originalFee}</span>
                    </div>

                    <div className="mt-2 pt-2 border-t border-slate-200 flex items-center justify-between text-xs font-semibold text-slate-600">
                      <span>Monthly Fee Option:</span>
                      <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-bold">{course.monthlyFee}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {course.highlights.map((h, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-600">
                        <CheckCircle2 size={14} className="text-emerald-600 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="gradient" className="w-full" onClick={() => onEnquire(course)}>
                  Enroll In {course.title.split(' ')[0]} <ArrowRight size={15} />
                </Button>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
