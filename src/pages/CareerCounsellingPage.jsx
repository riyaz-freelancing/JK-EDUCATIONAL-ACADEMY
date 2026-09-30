import React from 'react';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { counsellingFeatures } from '../data/academyData';
import { Compass, CheckCircle, PhoneCall, Sparkles } from 'lucide-react';

export default function CareerCounsellingPage({ onEnquire }) {
  return (
    <div style={{ textAlign: 'left' }}>
      
      {/* Page Header */}
      <section style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '60px 0' }}>
        <div className="container">
          <SectionHeading
            badge="CAREER GUIDANCE"
            title="Your Career. Your Direction. Our Guidance."
            subtitle="Get personalized career guidance to understand your strengths, explore opportunities and choose the right learning path."
            light
          />
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '48px',
            alignItems: 'center',
            marginBottom: '60px'
          }} className="responsive-2-col">
            
            <div>
              <SectionHeading
                badge="1-ON-1 COUNSELLING"
                title="Personalized Mentorship &amp; Roadmaps"
                subtitle="We help students, freshers, and experienced professionals navigate education streams and career choices with confidence."
                align="left"
              />

              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.65, marginBottom: '28px' }}>
                Choosing the right academic stream or transitioning into a professional corporate role can feel challenging. At JK Educational Academy, our experienced advisors provide structured, 1-on-1 counseling tailored to your individual background, skills, and aspirations.
              </p>

              <Button variant="primary" size="lg" icon={PhoneCall} onClick={onEnquire}>
                Book a Counselling Session
              </Button>
            </div>

            {/* Features Highlight */}
            <div style={{ backgroundColor: '#f8fafc', borderRadius: '24px', padding: '36px', border: '1px solid #e2e8f0' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '20px' }}>
                What Our Counselling Covers:
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {counsellingFeatures.map((item) => (
                  <div key={item.title} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle size={20} style={{ color: '#dc2626', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5 }}>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Counselling Pillars Grid */}
          <SectionHeading
            badge="OUR APPROACH"
            title="How Our Counselling Helps You Succeed"
            subtitle="Clear steps to align your education with real-world corporate opportunities."
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px'
          }} className="responsive-3-col">
            {[
              { title: 'Academic Alignment', desc: 'Identify whether Intermediate Civics, Eco, Commerce, or B.Com/BBA/MBA fits your career goals.' },
              { title: 'Domain Training Choice', desc: 'Evaluate your interest in Full Stack Development, QA Testing, SAP, or Non-IT Operations.' },
              { title: 'Interview & Placement Prep', desc: 'Understand corporate expectations, resume formatting, and mock interview techniques.' }
            ].map((pillar) => (
              <Card key={pillar.title}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  backgroundColor: '#fef2f2',
                  color: '#dc2626',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  marginBottom: '14px'
                }}>
                  <Compass size={22} />
                </div>
                <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>{pillar.title}</h4>
                <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6 }}>{pillar.desc}</p>
              </Card>
            ))}
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
