import React from 'react';
import SectionHeading from '../components/common/SectionHeading';
import { counsellingFeatures } from '../data/academyData';
import { Compass, CheckCircle, PhoneCall, Target, BookOpen, Briefcase } from 'lucide-react';

const pillars = [
  {
    icon: BookOpen,
    title: 'Academic Alignment',
    desc: 'Identify whether Tuitions For Intermediate (MPC, BiPC, CEC, MEC, AEC) or Tuitions For B. Com fits your goals.'
  },
  {
    icon: Target,
    title: 'Domain Training Choice',
    desc: 'Evaluate your interest in Corporate Trainings (Non-IT), 3. IT Courses, 4. Other Domains (Non-IT), or 5. Basic Courses.'
  },
  {
    icon: Briefcase,
    title: 'Course Counselling',
    desc: 'Understand program structure, course options, and learning outcomes.'
  },
];

export default function CareerCounsellingPage({ onEnquire }) {
  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span style={{
            display: 'inline-block', padding: '4px 12px', borderRadius: '9999px',
            backgroundColor: 'rgba(220,38,38,0.15)', color: '#fca5a5',
            fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px'
          }}>CAREER GUIDANCE</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', marginBottom: '16px', maxWidth: '680px' }}>
            Your Career. Your Direction. Our Guidance.
          </h1>
          <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.65, maxWidth: '560px' }}>
            Get guidance on course offerings at JK Educational Academy.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '56px', alignItems: 'center', marginBottom: '72px' }} className="responsive-2-col">
            <div>
              <SectionHeading
                badge="COURSE GUIDANCE"
                title="Personalised Mentorship & Course Guidance"
                subtitle="We help students explore courses and learning paths with confidence."
                align="left"
              />
              <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.7, marginBottom: '32px' }}>
                Choosing the right course stream is essential. At JK Educational Academy, our experienced advisors provide structured guidance on all our course offerings.
              </p>
              <button
                onClick={onEnquire}
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  padding: '13px 28px', backgroundColor: '#dc2626', color: '#fff',
                  border: 'none', borderRadius: '10px', cursor: 'pointer',
                  fontSize: '0.9rem', fontWeight: 700, letterSpacing: '-0.01em',
                  boxShadow: '0 2px 10px rgba(220,38,38,0.3)',
                  transition: 'all 0.2s ease'
                }}
              >
                <PhoneCall size={16} />
                Enquire Now
              </button>
            </div>

            {/* Counselling Features Card */}
            <div style={{
              backgroundColor: '#f8fafc', borderRadius: '16px', padding: '32px',
              border: '1px solid #e8edf3'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '20px', letterSpacing: '-0.02em' }}>
                What Our Guidance Covers
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {counsellingFeatures.map((item) => (
                  <div key={item.title} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <div style={{ width: '28px', height: '28px', borderRadius: '7px', backgroundColor: '#fef2f2', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <CheckCircle size={14} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '2px' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.5 }}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Pillars Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="responsive-3-col">
            {pillars.map((p) => {
              const IconC = p.icon;
              return (
                <div key={p.title} style={{
                  padding: '24px', backgroundColor: '#fff', borderRadius: '12px',
                  border: '1px solid #e2e8f0'
                }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                    <IconC size={20} />
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>{p.title}</h4>
                  <p style={{ fontSize: '0.84rem', color: '#64748b', lineHeight: 1.6 }}>{p.desc}</p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .responsive-2-col, .responsive-3-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
