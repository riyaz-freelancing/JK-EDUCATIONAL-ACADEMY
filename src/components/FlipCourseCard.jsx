import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, MapPin, RotateCw, BookOpen, Clock, Award, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function FlipCourseCard({ stream, onEnquire }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const IconComponent = stream.icon;
  const parts = stream.title.split(' ');
  const streamCode = parts[0];
  const subjectsText = stream.title.replace(streamCode, '').trim();

  return (
    <div
      className={`flip-card h-[480px] w-full cursor-pointer group ${isFlipped ? 'is-flipped' : ''}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flip-card-inner relative w-full h-full duration-700">
        
        {/* ==================== FRONT OF CARD ==================== */}
        <div className="flip-card-front absolute inset-0 w-full h-full bg-white border border-slate-200/90 rounded-2xl p-7 shadow-sm flex flex-col justify-between overflow-hidden">
          {/* Top Subtle Line Accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />

          <div>
            {/* Top Badges Bar */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-700 bg-slate-100 px-3 py-1 rounded-lg">
                {stream.duration}
              </span>
              <span className="text-xs font-black text-emerald-800 bg-emerald-100 px-3 py-1 rounded-lg border border-emerald-200">
                {stream.discount}
              </span>
            </div>

            {/* Title & Icon Header */}
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-700 text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-blue-500/20">
                <IconComponent size={26} />
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 font-heading tracking-tight">{streamCode}</h3>
                <p className="text-sm font-bold text-slate-700 mt-0.5 leading-snug">{subjectsText}</p>
                <div className="flex items-center gap-1.5 text-xs font-extrabold text-blue-600 mt-1.5">
                  <MapPin size={14} className="text-blue-600 flex-shrink-0" />
                  <span>{stream.mode}</span>
                </div>
              </div>
            </div>

            {/* Pricing Box */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 my-4">
              <div className="flex items-baseline justify-between">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-slate-900 font-heading tracking-tight">{stream.fee}</span>
                  <span className="text-sm font-bold text-slate-600">{stream.feePeriod}</span>
                </div>
                <span className="text-sm line-through text-slate-400 font-semibold">{stream.originalFee}</span>
              </div>

              <div className="flex items-center justify-between text-xs text-blue-900 font-extrabold mt-2.5 pt-2 border-t border-slate-200/80">
                <span>Monthly Fee Option:</span>
                <span className="bg-blue-100 text-blue-950 px-2.5 py-0.5 rounded-md font-black text-xs">{stream.monthlyFee}</span>
              </div>
            </div>

            {/* Highlights List */}
            <div className="space-y-2.5 mb-4">
              {stream.highlights.slice(0, 3).map((item, i) => (
                <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                  <CheckCircle2 size={15} className="text-emerald-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Flip Hint Bar */}
          <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-extrabold text-blue-600 group-hover:text-blue-700">
            <span className="flex items-center gap-1.5">
              <RotateCw size={13} className="animate-spin-slow" /> Hover to view Syllabus & Details
            </span>
            <ArrowRight size={14} />
          </div>
        </div>

        {/* ==================== BACK OF CARD (DETAILS & SYLLABUS) ==================== */}
        <div className="flip-card-back absolute inset-0 w-full h-full bg-slate-900 text-white border border-slate-800 rounded-2xl p-7 shadow-2xl flex flex-col justify-between overflow-hidden">
          {/* Top Subtle Line Accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400" />

          <div>
            {/* Header */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-blue-600/30 text-blue-400 flex items-center justify-center">
                  <BookOpen size={18} />
                </div>
                <div>
                  <h4 className="text-base font-black text-white font-heading">{streamCode} Course Details</h4>
                  <p className="text-[11px] text-slate-400 font-semibold">Comprehensive Syllabus & Schedule</p>
                </div>
              </div>
              <Badge variant="secondary" className="bg-blue-900/60 text-blue-300 text-[11px] font-bold">
                HYD Batch
              </Badge>
            </div>

            {/* Syllabus & Features */}
            <div className="space-y-3 my-4 text-xs">
              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-blue-400 block mb-1">
                  📚 Core Curriculum Covered:
                </span>
                <p className="text-slate-200 font-medium leading-relaxed">
                  Full 1st & 2nd year Board Syllabus with Chapter-wise Notes & 10-Yr Previous Question Papers.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-400 block mb-1">
                  ⏰ HYD Campus Batch Timings:
                </span>
                <div className="flex items-center justify-between text-slate-200 font-semibold">
                  <span>Morning: 7:00 AM – 9:00 AM</span>
                  <span>Evening: 5:00 PM – 7:00 PM</span>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <div className="flex items-center gap-2 text-slate-300 font-medium">
                  <ShieldCheck size={14} className="text-emerald-400 flex-shrink-0" />
                  <span>100% Board Exam Pass & Score Booster Guarantee</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300 font-medium">
                  <Award size={14} className="text-blue-400 flex-shrink-0" />
                  <span>Senior HYD Faculty with 12+ Yrs Experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Back CTA Button */}
          <div className="pt-3 border-t border-slate-800">
            <Button
              variant="gradient"
              size="lg"
              className="w-full h-12 text-sm font-extrabold shadow-lg"
              onClick={(e) => {
                e.stopPropagation();
                onEnquire(stream);
              }}
            >
              Enroll Now ({stream.fee}) <ArrowRight size={16} />
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
