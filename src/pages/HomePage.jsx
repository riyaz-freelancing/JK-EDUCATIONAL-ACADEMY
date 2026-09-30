import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle,
  Users,
  Award,
  BookOpen,
  Briefcase,
  Compass,
  Sparkles,
  Target,
  ShieldCheck,
  PhoneCall,
  Star,
  Code
} from 'lucide-react';
import Button from '../components/common/Button';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import FAQAccordion from '../components/FAQAccordion';
import HeroSection from '../components/HeroSection';
import {
  academicCourses,
  whyChooseUsItems,
  corporateTraining,
  trainingToOpportunityProcess,
  counsellingFeatures,
  allServices,
  placementHighlights,
  aboutStats,
  testimonials
} from '../data/academyData';

export default function HomePage({ onEnquire }) {
  const navigate = useNavigate();

  return (
    <div style={{ textAlign: 'left' }}>
      
      {/* HERO SECTION */}
      <HeroSection onEnquire={onEnquire} />

      {/* ACADEMY PREVIEW SECTION */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <SectionHeading
            badge="ACADEMY COURSES"
            title="Build a Strong Academic Foundation"
            subtitle="Personalized academic support with experienced faculty, structured learning and continuous assessment."
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px',
            marginBottom: '40px'
          }} className="responsive-3-col">
            {academicCourses.slice(0, 6).map((course) => {
              const IconC = course.icon;
              return (
                <Card key={course.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: '#fef2f2',
                      color: '#dc2626',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'center'
                    }}>
                      <IconC size={24} />
                    </div>
                    <span style={{ fontSize: '0.725rem', fontWeight: 800, color: '#dc2626', backgroundColor: '#fef2f2', padding: '4px 10px', borderRadius: '6px' }}>
                      {course.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                    {course.title}
                  </h3>

                  <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.6, marginBottom: '20px' }}>
                    {course.description}
                  </p>

                  <Button variant="outline" size="sm" onClick={() => navigate('/academy')}>
                    Learn More
                  </Button>
                </Card>
              );
            })}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Button variant="navy" onClick={() => navigate('/academy')}>
              View All Academic Courses
            </Button>
          </div>
        </div>
      </section>

      {/* CORPORATE TRAINING PREVIEW */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <SectionHeading
            badge="CORPORATE TRAINING"
            title="Corporate Training for the Future Workforce"
            subtitle="Industry-focused training programs designed for freshers, graduates and working professionals."
          />

          {/* IT & Non-IT Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '32px',
            marginBottom: '60px'
          }} className="responsive-2-col">
            
            {/* IT Block */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '32px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <Code size={24} style={{ color: '#dc2626' }} />
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a' }}>IT Training Programs</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {corporateTraining.it.map((item) => (
                  <div key={item.id} style={{ padding: '16px', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Non-IT Block */}
            <div style={{ backgroundColor: '#ffffff', borderRadius: '20px', padding: '32px', border: '1px solid #e2e8f0' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <Briefcase size={24} style={{ color: '#2563eb' }} />
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a' }}>Non-IT Process Training</h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {corporateTraining.nonIt.map((item) => (
                  <div key={item.id} style={{ padding: '16px', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0' }}>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: '#64748b', margin: 0 }}>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* FROM TRAINING TO OPPORTUNITY PROCESS */}
          <SectionHeading
            badge="OUR PROCESS"
            title="From Training to Opportunity"
            subtitle="A clear, structured path from concept learning to corporate onboarding."
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px'
          }} className="responsive-4-col">
            {trainingToOpportunityProcess.map((st) => (
              <Card key={st.step} style={{ textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  backgroundColor: '#dc2626',
                  color: 'white',
                  fontWeight: 800,
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  marginBottom: '16px'
                }}>
                  {st.step}
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                  {st.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5 }}>
                  {st.description}
                </p>
              </Card>
            ))}
          </div>

        </div>
      </section>

      {/* CAREER COUNSELLING PREVIEW */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '48px',
            alignItems: 'center'
          }} className="responsive-2-col">
            
            <div>
              <SectionHeading
                badge="CAREER COUNSELLING"
                title="Your Career. Your Direction. Our Guidance."
                subtitle="Get personalized career guidance to understand your strengths, explore opportunities and choose the right learning path."
                align="left"
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {counsellingFeatures.map((f) => (
                  <div key={f.title} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle size={20} style={{ color: '#dc2626', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a' }}>{f.title}</h4>
                      <p style={{ fontSize: '0.85rem', color: '#64748b' }}>{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="primary" size="lg" onClick={onEnquire}>
                Book a Counselling Session
              </Button>
            </div>

            <div style={{
              backgroundColor: '#0f172a',
              borderRadius: '24px',
              padding: '40px',
              color: 'white'
            }}>
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '14px', color: '#ffffff' }}>
                1-on-1 Personalized Mentorship
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.6, marginBottom: '28px' }}>
                Every student receives individual focus from faculty and domain advisors to choose academic streams, resolve subject challenges, and navigate career paths.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {[
                  'Fresher & Graduate Career Alignment',
                  'Targeted Interview & Aptitude Training',
                  'MNC & Domestic Opportunity Referrals'
                ].map((item) => (
                  <div key={item} style={{
                    backgroundColor: '#1e293b',
                    padding: '14px 18px',
                    borderRadius: '12px',
                    border: '1px solid #334155',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontWeight: 700,
                    fontSize: '0.9rem'
                  }}>
                    <Sparkles size={16} style={{ color: '#dc2626' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <SectionHeading
            badge="OUR SERVICES"
            title="Comprehensive Education &amp; Career Services"
            subtitle="From school coaching to corporate workforce training, we support your entire learning &amp; growth lifecycle."
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '20px'
          }} className="responsive-5-col">
            {allServices.map((srv) => {
              const IconC = srv.icon;
              return (
                <Card key={srv.id} style={{ padding: '24px 18px' }}>
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
                    <IconC size={20} />
                  </div>
                  <h4 style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>{srv.title}</h4>
                  <p style={{ fontSize: '0.825rem', color: '#64748b', lineHeight: 1.5 }}>{srv.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* PLACEMENT SECTION */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <SectionHeading
            badge="PLACEMENT ASSISTANCE"
            title="Training That Connects You to Opportunities"
            subtitle="Career support, resume optimization, and placement assistance for candidates across IT and Non-IT domains."
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px',
            marginBottom: '40px'
          }} className="responsive-4-col">
            {placementHighlights.map((p) => (
              <Card key={p.title}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  backgroundColor: '#eff6ff',
                  color: '#2563eb',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  marginBottom: '14px'
                }}>
                  <Target size={20} />
                </div>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>{p.title}</h4>
                <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5 }}>{p.description}</p>
              </Card>
            ))}
          </div>

          <div style={{
            backgroundColor: '#0f172a',
            borderRadius: '20px',
            padding: '32px 40px',
            color: 'white',
            display: 'flex',
            alignItems: 'center',
            justify: 'space-between',
            flexWrap: 'wrap',
            gap: '20px'
          }}>
            <div>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#ffffff', marginBottom: '4px' }}>
                Ready to Start Your Career Preparation?
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#94a3b8' }}>
                Get in touch with our career support team to discuss training options and placement guidance.
              </p>
            </div>
            <Button variant="primary" onClick={onEnquire}>
              Enquire For Placements
            </Button>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
        <div className="container">
          <SectionHeading
            badge="STUDENT FEEDBACK"
            title="What Our Students Say"
            subtitle="Read feedback from students and professionals who trained with JK Educational Academy."
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '24px'
          }} className="responsive-3-col">
            {testimonials.map((t) => (
              <Card key={t.id}>
                <div style={{ display: 'flex', gap: '4px', color: '#f59e0b', marginBottom: '14px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} style={{ fill: '#f59e0b' }} />
                  ))}
                </div>
                <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.6, fontStyle: 'italic', marginBottom: '20px' }}>
                  "{t.content}"
                </p>
                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: '#dc2626',
                    color: 'white',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center'
                  }}>
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 800, color: '#0f172a' }}>{t.name}</h4>
                    <p style={{ fontSize: '0.7875rem', color: '#dc2626', fontWeight: 600 }}>{t.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <FAQAccordion />

      <style>{`
        @media (max-width: 1024px) {
          .responsive-5-col { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 900px) {
          .responsive-3-col { grid-template-columns: repeat(2, 1fr) !important; }
          .responsive-4-col { grid-template-columns: repeat(2, 1fr) !important; }
          .responsive-2-col { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          .responsive-5-col { grid-template-columns: 1fr !important; }
          .responsive-3-col { grid-template-columns: 1fr !important; }
          .responsive-4-col { grid-template-columns: 1fr !important; }
        }
      `}</style>

    </div>
  );
}
