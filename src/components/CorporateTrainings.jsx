import React from 'react';
import { CheckCircle2, ArrowRight, Calculator, Users, Clock, Tag } from 'lucide-react';
import { corporateTrainingData } from '../data/academyData';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
            2. Corporate Trainings & Domain Programs <span className="gradient-text">(Non-IT)</span>
          </h2>
          <p className="text-slate-600 text-sm mt-2 max-w-xl mx-auto">
            Practical corporate domain modules with real-time exposure & affordable Hyderabad course pricing.
          </p>
        </div>

        {/* 2 Feature Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '30px'
        }}>

          {/* Card 1: Finance Domain */}
          <Card animate className="p-7 bg-white border border-slate-200">
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                  <Calculator size={22} />
                </div>
                <div>
                  <Badge variant="secondary" className="mb-0.5 text-xs text-blue-700">Finance Domain</Badge>
                  <h3 className="text-xl font-extrabold text-slate-900">Finance & Accounting Modules</h3>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {financeDomain.map((course) => (
                <div key={course.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between flex-wrap gap-2 hover:bg-blue-50/40 transition-colors">
                  <div className="flex items-center gap-2.5 max-w-[65%]">
                    <CheckCircle2 size={16} className="text-blue-600 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{course.title}</h4>
                      <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1 mt-0.5">
                        <Clock size={11} className="text-slate-400" /> {course.duration}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="text-right">
                      <span className="text-sm font-black text-slate-900 block">{course.fee}</span>
                      <span className="text-[10px] line-through text-slate-400 block">{course.originalFee}</span>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs h-8 px-2.5" onClick={() => onEnquire(course)}>
                      Enroll
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="gradient" className="w-full" onClick={() => onEnquire({ title: 'Finance Domain Complete Combo', fee: '₹15,000 Package' })}>
              Enroll Full Finance Package <ArrowRight size={15} />
            </Button>
          </Card>

          {/* Card 2: Human Resource Domain */}
          <Card animate className="p-7 bg-white border border-slate-200">
            <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  <Users size={22} />
                </div>
                <div>
                  <Badge variant="indigo" className="mb-0.5 text-xs text-indigo-700">HR Domain</Badge>
                  <h3 className="text-xl font-extrabold text-slate-900">Human Resource Management</h3>
                </div>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              {hrDomain.map((course) => (
                <div key={course.id} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between flex-wrap gap-2 hover:bg-indigo-50/40 transition-colors">
                  <div className="flex items-center gap-2.5 max-w-[65%]">
                    <CheckCircle2 size={16} className="text-indigo-600 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-bold text-slate-900">{course.title}</h4>
                      <span className="text-[11px] font-semibold text-slate-500 flex items-center gap-1 mt-0.5">
                        <Clock size={11} className="text-slate-400" /> {course.duration}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="text-right">
                      <span className="text-sm font-black text-slate-900 block">{course.fee}</span>
                      <span className="text-[10px] line-through text-slate-400 block">{course.originalFee}</span>
                    </div>
                    <Button size="sm" variant="outline" className="text-xs h-8 px-2.5 text-indigo-700 hover:bg-indigo-50" onClick={() => onEnquire(course)}>
                      Enroll
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="gradient" className="w-full" onClick={() => onEnquire({ title: 'HR Domain Complete Package', fee: '₹14,999 Package' })}>
              Enroll Full HR Package <ArrowRight size={15} />
            </Button>
          </Card>

        </div>

      </div>
    </section>
  );
}
