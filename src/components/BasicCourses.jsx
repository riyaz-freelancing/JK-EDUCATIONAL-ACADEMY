import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { corporateTrainingData } from '../data/academyData';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function BasicCourses({ onEnquire }) {
  const { basicCourses } = corporateTrainingData;

  return (
    <section id="basic" className="section-spacing" style={{ backgroundColor: '#ffffff', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
          <div className="light-pill" style={{ marginBottom: '14px' }}>
            <span className="light-pill-dot"></span>
            5. ESSENTIAL COMPUTER COURSES
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.8vw, 2.6rem)', fontWeight: 800, color: '#0f172a' }}>
            5. Basic Computer & Diploma Courses <span className="gradient-text">(Tally, Excel, DCA)</span>
          </h2>
          <p className="text-slate-600 text-sm mt-2 max-w-xl mx-auto">
            Build core digital skills with affordable MS Office, Advanced Excel, Tally ERP & Diploma computer courses in Hyderabad.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {basicCourses.map((item) => {
            const IconC = item.icon;
            return (
              <Card
                key={item.id}
                animate
                className="p-6 flex flex-col justify-between bg-white border border-slate-200/90 rounded-2xl shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 h-full"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-xs">
                      <IconC size={22} />
                    </div>
                    <Badge variant="secondary" className="text-xs font-bold text-slate-600 px-3 py-1 bg-slate-100">
                      <Clock size={12} className="mr-1.5 inline text-blue-500" /> {item.duration}
                    </Badge>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug font-heading">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium mb-3">
                    Practical computer lab training & certified completion certificate.
                  </p>
                </div>

                {/* Price & Action */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-2xl font-black text-slate-900 font-heading block">{item.fee}</span>
                    <span className="text-xs line-through text-slate-400 block font-semibold">{item.originalFee}</span>
                  </div>

                  <Button variant="gradient" size="default" className="h-10 px-5 text-xs font-bold shadow-md hover:shadow-lg" onClick={() => onEnquire(item)}>
                    Enroll Course <ArrowRight size={14} />
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
