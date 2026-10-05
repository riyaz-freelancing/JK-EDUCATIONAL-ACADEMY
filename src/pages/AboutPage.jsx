import React from 'react';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { aboutStats } from '../data/academyData';
import { Users, Award, CheckCircle, Sparkles, BookOpen, Target, ArrowRight, PhoneCall } from 'lucide-react';

const values = [
  { icon: Users, title: 'Experienced Faculty', desc: 'Over 10 years of subject matter expertise and a proven teaching record across academic and corporate training.' },
  { icon: Target, title: 'Student-Focused Learning', desc: 'Small batches ensure individual attention and customised pacing for each student\'s unique needs.' },
  { icon: BookOpen, title: 'Practical & Conceptual', desc: 'Emphasising core understanding through practical exercises, mock assessments, and application-based learning.' },
  { icon: Sparkles, title: 'Career-Oriented Training', desc: 'Curriculum built around modern corporate expectations across IT, Non-IT, Finance, and HR domains.' },
  { icon: CheckCircle, title: 'Personal Mentorship', desc: 'One-to-one career counselling to guide stream selection, subject challenges, and interview readiness.' },
  { icon: Award, title: 'Progress Tracking', desc: 'Regular feedback sessions, parent updates, and mock test evaluations to guarantee measurable improvement.' },
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
            Dedicated to student success through quality academic tuition, professional corporate training, and personalised career mentorship.
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
                title="Empowering Students & Professionals Since 10+ Years"
                subtitle="JK Educational Academy was founded with a single mission: to bridge academic learning with real-world corporate readiness."
                align="left"
              />
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, marginBottom: '18px' }}>
                With over a decade of dedicated experience, our faculty delivers high-impact coaching for Intermediate (MPC, BiPC, CEC, MEC, AEC), Undergraduate (B.Com, BBA), and Postgraduate (M.Com, MBA) courses.
              </p>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.7, marginBottom: '32px' }}>
                Recognising the evolving needs of the corporate job market, we expanded to include IT training (Full Stack, Testing, SAP, Mainframe) and Non-IT business process training — equipping candidates with market-ready skills and placement assistance.
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
            subtitle="The principles that guide our teaching, training, and career mentorship every single day."
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
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px', letterSpacing: '-0.02em' }}>{v.title}</h4>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6 }}>{v.desc}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Banner */}
      <section style={{ backgroundColor: '#0f172a', padding: '64px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }} className="responsive-2-col">
            <div>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#dc2626', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>WHY CHOOSE JK ACADEMY</div>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', marginBottom: '16px' }}>
                A Complete Learning Ecosystem Under One Roof
              </h2>
              <p style={{ fontSize: '0.925rem', color: '#64748b', lineHeight: 1.7 }}>
                From Intermediate tuitions to MNC placement assistance, JK Academy is your all-in-one partner for academic success and professional growth.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {['Academic + Corporate Training under one roof', '10+ years of proven faculty excellence', 'Small batches with individual attention', 'End-to-end placement support for all domains'].map((item) => (
                <div key={item} style={{
                  display: 'flex', alignItems: 'center', gap: '12px',
                  backgroundColor: '#1e293b', padding: '14px 18px',
                  borderRadius: '10px', border: '1px solid #334155',
                  fontSize: '0.875rem', fontWeight: 600, color: '#e2e8f0'
                }}>
                  <CheckCircle size={16} style={{ color: '#4ade80', flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .responsive-2-col { grid-template-columns: 1fr !important; }
          .responsive-3-col { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .responsive-3-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
