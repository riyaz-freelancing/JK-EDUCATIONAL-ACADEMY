import React from 'react';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import { aboutStats } from '../data/academyData';
import { Users, Award, CheckCircle, Sparkles, BookOpen, Target, PhoneCall } from 'lucide-react';

const values = [
  { icon: Users, title: 'Experienced Faculty', desc: 'Subject matter expertise across academic tuitions and corporate training.' },
  { icon: Target, title: 'Student-Focused Learning', desc: 'Focused learning environment and customised pacing for each student.' },
  { icon: BookOpen, title: 'Practical & Conceptual', desc: 'Emphasising core understanding through application-based learning.' },
  { icon: Sparkles, title: 'Career-Oriented Training', desc: 'Training built around corporate expectations across IT, Non-IT, Finance, and HR domains.' },
  { icon: CheckCircle, title: 'Personal Mentorship', desc: 'One-to-one guidance for stream selection and course support.' },
  { icon: Award, title: 'Progress Tracking', desc: 'Regular evaluation to guarantee measurable improvement.' },
];

export default function AboutPage({ onEnquire }) {
  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ marginBottom: '12px' }}>
            <span style={{
              display: 'inline-block', padding: '4px 12px', borderRadius: '9999px',
              backgroundColor: 'rgba(220,38,38,0.15)', color: '#fca5a5',
              fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase'
            }}>OUR STORY</span>
          </div>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', marginBottom: '16px', maxWidth: '640px' }}>
            About JK Educational Academy
          </h1>
          <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.65, maxWidth: '560px' }}>
            Dedicated to student success through quality academic tuition and corporate training.
          </p>
        </div>
      </section>

      {/* Main Story Section */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '56px', alignItems: 'center', marginBottom: '72px' }} className="responsive-2-col">
            <div>
              <SectionHeading
                badge="ACADEMY VISION"
                title="Empowering Students & Professionals"
                subtitle="JK Educational Academy provides structured coaching aligned with academic and corporate demands."
                align="left"
              />
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '18px' }}>
                Our faculty delivers high-impact coaching for Tuitions For Intermediate (MPC, BiPC, CEC, MEC, AEC) and Tuitions For B. Com (all 13 subjects).
              </p>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.7, marginBottom: '32px' }}>
                We also offer 2. Corporate Trainings (Non-IT) in Finance Domain and Human Resource Domain, 3. IT Courses, 4. Other Domains (Non-IT), and 5. Basic Courses.
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
                <PhoneCall size={16} /> Talk to Our Team
              </button>
            </div>

            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
              {aboutStats.map((st) => (
                <div key={st.label} style={{
                  backgroundColor: '#f8fafc', borderRadius: '14px', padding: '28px 20px',
                  border: '1px solid #e8edf3', textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#dc2626', lineHeight: 1, letterSpacing: '-0.04em', marginBottom: '8px' }}>{st.value}</div>
                  <div style={{ fontSize: '0.8rem', fontWeight: 600, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{st.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Core Values */}
          <SectionHeading
            badge="OUR VALUES"
            title="What Defines Our Academy"
            subtitle="The principles that guide our teaching and training."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="responsive-3-col">
            {values.map((v) => {
              const IconC = v.icon;
              return (
                <Card key={v.title}>
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '10px',
                    backgroundColor: '#fef2f2', color: '#dc2626',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'
                  }}>
                    <IconC size={20} />
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>{v.title}</h4>
                  <p style={{ fontSize: '0.84rem', color: '#64748b', lineHeight: 1.6 }}>{v.desc}</p>
                </Card>
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
