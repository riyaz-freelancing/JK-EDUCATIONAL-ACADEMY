import React from 'react';
import { Code, Globe, ArrowRight, CheckCircle2, Sparkles, CreditCard } from 'lucide-react';
import { corporateTrainingData } from '../data/academyData';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function TechCertifications({ onEnquire }) {
  const { itDomain } = corporateTrainingData;

  return (
    <section id="tech" className="section-spacing" style={{ backgroundColor: '#ffffff', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
          <div className="light-pill" style={{ marginBottom: '14px' }}>
            <span className="light-pill-dot"></span>
            3. HIGH IMPACT IT COURSES
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.8vw, 2.6rem)', fontWeight: 800, color: '#0f172a' }}>
            3. IT Courses & Career Bootcamps <span className="gradient-text">(With Internship)</span>
          </h2>
          <p className="text-slate-600 text-sm mt-2 max-w-xl mx-auto">
            Practical hands-on IT courses in Hyderabad with live capstone projects and flexible EMI payment options.
          </p>
        </div>

        {/* 2 IT Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '28px'
        }}>
          {itDomain.map((card, idx) => {
            const IconComp = card.icon;
            return (
              <Card key={card.id} animate className="p-7 flex flex-col justify-between bg-white border border-slate-200">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="indigo" className="font-bold">{card.duration}</Badge>
                    <Badge variant="success" className="font-bold">{card.discount}</Badge>
                  </div>

                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3.5 rounded-xl bg-blue-50 text-blue-600 flex-shrink-0">
                      <IconComp size={26} />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold text-slate-900">{card.title}</h3>
                      <p className="text-xs text-slate-500 font-semibold mt-0.5">{card.mode}</p>
                    </div>
                  </div>

                  {/* Pricing Box */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 my-4">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-3xl font-black text-slate-900 font-heading">{card.fee}</span>
                        <span className="text-xs font-bold text-slate-500">{card.feePeriod}</span>
                      </div>
                      <span className="text-xs line-through text-slate-400 font-semibold">{card.originalFee}</span>
                    </div>

                    {card.emi && (
                      <div className="mt-3 pt-2.5 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-blue-700">
                        <span className="flex items-center gap-1">
                          <CreditCard size={13} className="text-blue-600" /> Flexible EMI Option:
                        </span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-extrabold">{card.emi}</span>
                      </div>
                    )}
                  </div>

                  {/* Highlights */}
                  <div className="space-y-2.5 mb-6">
                    {card.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 size={15} className="text-emerald-500 flex-shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Button variant="gradient" size="lg" className="w-full" onClick={() => onEnquire(card)}>
                  Enroll Now <ArrowRight size={16} />
                </Button>
              </Card>
            );
          })}
        </div>

      </div>
    </section>
  );
}
