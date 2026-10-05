import React from 'react';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import { counsellingFeatures } from '../data/academyData';
import { Compass, CheckCircle, PhoneCall, Target, BookOpen, Briefcase } from 'lucide-react';

const pillars = [
  {
    icon: BookOpen,
    title: 'Academic Alignment',
    desc: 'Identify whether Intermediate Civics, Eco, Commerce, or B.Com/BBA/MBA fits your career goals and strengths.'
  },
  {
    icon: Target,
    title: 'Domain Training Choice',
    desc: 'Evaluate your interest in Full Stack Development, QA Testing, SAP, Digital Marketing, or Non-IT Operations.'
  },
  {
    icon: Briefcase,
    title: 'Interview & Placement Prep',
    desc: 'Understand corporate expectations, resume formatting, aptitude training, and mock interview techniques.'
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
            Get personalised career guidance to understand your strengths, explore opportunities, and choose the right learning path.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '56px', alignItems: 'center', marginBottom: '72px' }} className="responsive-2-col">
            <div>
              <SectionHeading
                badge="1-ON-1 COUNSELLING"
                title="Personalised Mentorship & Career Roadmaps"
                subtitle="We help students, freshers, and experienced professionals navigate education streams and career choices with confidence."
                align="left"
              />
              <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.7, marginBottom: '32px' }}>
                Choosing the right academic stream or transitioning into a professional corporate role can feel overwhelming. At JK Educational Academy, our experienced advisors provide structured, 1-on-1 counselling tailored to your individual background, skills, and aspirations.
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
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#b91c1c'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#dc2626'; e.currentTarget.style.transform = ''; }}
              >
                <PhoneCall size={16} />
                Book a Counselling Session
              </button>
            </div>

            {/* Counselling Features Card */}
            <div style={{
              backgroundColor: '#f8fafc', borderRadius: '16px', padding: '32px',
              border: '1px solid #e8edf3'
            }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '20px', letterSpacing: '-0.02em' }}>
                What Our Counselling Covers
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

          {/* How Counselling Helps */}
          <SectionHeading
            badge="OUR APPROACH"
            title="How Our Counselling Helps You Succeed"
            subtitle="Clear, practical steps to align your education with real-world corporate opportunities."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '60px' }} className="responsive-3-col">
            {pillars.map((p) => {
              const IconC = p.icon;
              return (
                <Card key={p.title}>
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#fef2f2', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                    <IconC size={20} />
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px', letterSpacing: '-0.02em' }}>{p.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6 }}>{p.desc}</p>
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            borderRadius: '16px', padding: '40px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: '24px'
          }}>
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#dc2626', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '10px' }}>FREE FIRST SESSION</div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '8px', letterSpacing: '-0.025em' }}>
                Not Sure Which Path to Choose?
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b', maxWidth: '480px', lineHeight: 1.6 }}>
                Book a free 30-minute career assessment session with one of our experienced advisors. We'll help you identify the right stream, domain, and training path.
              </p>
            </div>
            <button
              onClick={onEnquire}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '13px 28px', backgroundColor: '#dc2626', color: '#fff',
                border: 'none', borderRadius: '10px', cursor: 'pointer',
                fontSize: '0.9rem', fontWeight: 700, whiteSpace: 'nowrap',
                boxShadow: '0 2px 12px rgba(220,38,38,0.4)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#b91c1c'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#dc2626'; e.currentTarget.style.transform = ''; }}
            >
              <PhoneCall size={16} />
              Book Free Session
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .responsive-2-col { grid-template-columns: 1fr !important; }
          .responsive-3-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
