import React from 'react';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { aboutStats } from '../data/academyData';
import { Users, Award, CheckCircle, Sparkles, BookOpen, Target } from 'lucide-react';

export default function AboutPage({ onEnquire }) {
  return (
    <div style={{ textAlign: 'left' }}>
      
      {/* Header */}
      <section style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '60px 0' }}>
        <div className="container">
          <SectionHeading
            badge="OUR STORY"
            title="About JK Educational Academy"
            subtitle="Dedicated to student success through quality academic tuition, corporate workforce training, and personalized career mentorship."
            light
          />
        </div>
      </section>

      {/* Main Content Story */}
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
                badge="ACADEMY VISION"
                title="Empowering Students &amp; Professionals Since 10+ Years"
                subtitle="JK Educational Academy was founded with a single mission: to bridge academic learning with real-world corporate readiness."
                align="left"
              />

              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.65, marginBottom: '20px' }}>
                With over a decade of dedicated experience, our faculty delivers high-impact coaching for Intermediate (Civics, Economics, Commerce), Undergraduate (B.Com, BBA), and Postgraduate (M.Com, MBA) courses.
              </p>

              <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.6, marginBottom: '28px' }}>
                Recognizing the evolving needs of the corporate job market, we expanded our offerings to include IT training (Full Stack, Testing, SAP, Mainframe) and Non-IT business process training, equipping candidates with market-ready skills and placement assistance.
              </p>

              <Button variant="primary" size="lg" onClick={onEnquire}>
                Talk to Our Team
              </Button>
            </div>

            {/* Stats Cards Block */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px'
            }}>
              {aboutStats.map((st) => (
                <div key={st.label} style={{
                  backgroundColor: '#f8fafc',
                  borderRadius: '20px',
                  padding: '28px 20px',
                  border: '1px solid #e2e8f0',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#dc2626', lineHeight: 1.1 }}>{st.value}</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0f172a', marginTop: '6px' }}>{st.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* CORE PILLARS */}
          <SectionHeading
            badge="OUR VALUES"
            title="What Defines Our Academy"
            subtitle="Principles that guide our teaching and career mentorship every day."
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px'
          }} className="responsive-3-col">
            {[
              { icon: Users, title: 'Experienced Faculty', desc: 'Over 10 years of subject matter expertise and proven teaching track record.' },
              { icon: Target, title: 'Student-Focused Education', desc: 'Small batches ensuring individual attention and customized learning speed.' },
              { icon: BookOpen, title: 'Practical & Conceptual Learning', desc: 'Emphasizing core understanding, practical exercises, and mock assessments.' },
              { icon: Sparkles, title: 'Career-Oriented Training', desc: 'Curriculum structured around modern corporate expectations across IT & Non-IT.' },
              { icon: CheckCircle, title: 'Personal Mentorship', desc: 'One-to-one counseling to guide stream selection and job interview readiness.' },
              { icon: Award, title: 'Continuous Progress Tracking', desc: 'Regular feedback, parent updates, and mock test evaluations to guarantee improvement.' }
            ].map((v) => {
              const IconC = v.icon;
              return (
                <Card key={v.title}>
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    backgroundColor: '#fef2f2',
                    color: '#dc2626',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    marginBottom: '16px'
                  }}>
                    <IconC size={22} />
                  </div>
                  <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>{v.title}</h4>
                  <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.5 }}>{v.desc}</p>
                </Card>
              );
            })}
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
