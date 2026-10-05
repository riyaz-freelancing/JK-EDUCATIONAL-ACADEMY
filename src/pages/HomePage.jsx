import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight, CheckCircle, Star, Target, Sparkles,
  Briefcase, Code, BookOpen, PhoneCall, Users, Award, TrendingUp
} from 'lucide-react';
import HeroSection from '../components/HeroSection';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import FAQAccordion from '../components/FAQAccordion';
import {
  academicCourses, corporateTraining, counsellingFeatures,
  allServices, placementHighlights, aboutStats, testimonials,
  trainingToOpportunityProcess
} from '../data/academyData';

const SectionDivider = () => (
  <div style={{ height: '1px', background: '#f1f5f9', margin: '0' }} />
);

const IconBox = ({ icon: Icon, color = 'accent', size = 20 }) => {
  const colors = {
    accent: { bg: '#fef2f2', fg: '#dc2626' },
    blue: { bg: '#eff6ff', fg: '#2563eb' },
    green: { bg: '#f0fdf4', fg: '#16a34a' },
    navy: { bg: '#f8fafc', fg: '#0f172a' },
  };
  const c = colors[color] || colors.accent;
  return (
    <div style={{
      width: size + 22, height: size + 22,
      borderRadius: '10px', backgroundColor: c.bg, color: c.fg,
      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
    }}>
      <Icon size={size} />
    </div>
  );
};

export default function HomePage({ onEnquire }) {
  const navigate = useNavigate();

  return (
    <div>
      {/* 1. HERO */}
      <HeroSection onEnquire={onEnquire} />

      {/* 2. STATS TRUST BAR */}
      <section style={{ backgroundColor: '#0f172a', padding: '28px 0' }}>
        <div className="container">
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            gap: '20px', flexWrap: 'wrap'
          }}>
            {aboutStats.map((s, i) => (
              <div key={s.label} style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                borderRight: i < aboutStats.length - 1 ? '1px solid rgba(255,255,255,0.1)' : 'none',
                paddingRight: i < aboutStats.length - 1 ? '20px' : '0',
                flex: 1, minWidth: '140px'
              }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#f87171', letterSpacing: '-0.04em' }}>{s.value}</div>
                <div style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.4, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 3. ACADEMY COURSES PREVIEW */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <SectionHeading
            badge="ACADEMY COURSES"
            title="Comprehensive Academic Tuitions"
            subtitle="Structured, personalised coaching by experienced faculty — from Intermediate to Post-Graduate levels."
          />

          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px', marginBottom: '36px'
          }} className="responsive-3-col">
            {academicCourses.slice(0, 6).map((course) => {
              const IconC = course.icon;
              return (
                <Card key={course.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <IconBox icon={IconC} color="accent" />
                    <span style={{
                      fontSize: '0.68rem', fontWeight: 700, color: '#dc2626',
                      backgroundColor: '#fef2f2', padding: '3px 9px',
                      borderRadius: '6px', letterSpacing: '0.04em'
                    }}>{course.badge}</span>
                  </div>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                    {course.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6, marginBottom: '20px' }}>
                    {course.description}
                  </p>
                  <button
                    onClick={() => navigate('/academy')}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      fontSize: '0.82rem', fontWeight: 600, color: '#dc2626',
                      background: 'none', border: 'none', cursor: 'pointer', padding: 0
                    }}
                  >
                    Learn More <ArrowRight size={14} />
                  </button>
                </Card>
              );
            })}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              onClick={() => navigate('/academy')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 28px', backgroundColor: '#0f172a', color: '#fff',
                border: 'none', borderRadius: '10px', cursor: 'pointer',
                fontSize: '0.9rem', fontWeight: 600, letterSpacing: '-0.01em',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1e293b'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#0f172a'; e.currentTarget.style.transform = ''; }}
            >
              View All Courses <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 4. CORPORATE TRAINING PREVIEW */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <SectionHeading
            badge="CORPORATE & IT TRAINING"
            title="Industry-Ready Training Programs"
            subtitle="Finance, HR, IT, Non-IT, and Computer Applications — all built around real-world corporate standards."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '36px' }} className="responsive-3-col">
            {[
              {
                icon: Briefcase, color: 'accent',
                title: 'Finance & HR Domains',
                sub: 'R2R · P2P · O2C · Saudi Payroll',
                desc: 'Record to Report, Procure to Pay, Order to Cash, Indian & Saudi Payroll, and Talent Acquisition.',
                path: '/corporate-training'
              },
              {
                icon: Code, color: 'blue',
                title: 'IT & Digital Courses',
                sub: 'Full Stack · Digital Marketing',
                desc: 'Practical training in Full Stack Development (React, Node, SQL) and Digital Marketing (SEO, Google Ads, SMM).',
                path: '/corporate-training'
              },
              {
                icon: Sparkles, color: 'green',
                title: 'Basic & Non-IT Courses',
                sub: 'Excel · Tally · DCA · AML/KYC',
                desc: 'MS Office, Advanced Excel, Tally ERP, DCA, ADCA, PGDCA, Hardware, and AML/KYC process training.',
                path: '/corporate-training'
              }
            ].map((item) => (
              <Card key={item.title} style={{ backgroundColor: '#ffffff' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <IconBox icon={item.icon} color={item.color} />
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', margin: 0, letterSpacing: '-0.02em' }}>{item.title}</h3>
                    <span style={{ fontSize: '0.72rem', color: item.color === 'blue' ? '#2563eb' : item.color === 'green' ? '#16a34a' : '#dc2626', fontWeight: 600 }}>{item.sub}</span>
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6, marginBottom: '18px' }}>{item.desc}</p>
                <button
                  onClick={() => navigate(item.path)}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    fontSize: '0.82rem', fontWeight: 600, color: '#0f172a',
                    background: 'none', border: '1.5px solid #e2e8f0', borderRadius: '8px',
                    cursor: 'pointer', padding: '7px 14px', transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#f8fafc'; e.currentTarget.style.borderColor = '#cbd5e1'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = '#e2e8f0'; }}
                >
                  Explore <ArrowRight size={13} />
                </button>
              </Card>
            ))}
          </div>

          {/* Process Steps */}
          <div style={{
            backgroundColor: '#ffffff', borderRadius: '16px', padding: '36px',
            border: '1px solid #e8edf3', marginTop: '40px'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#dc2626', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '8px' }}>OUR PROCESS</div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f172a', letterSpacing: '-0.02em' }}>From Training to Opportunity</h3>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }} className="responsive-4-col">
              {trainingToOpportunityProcess.map((st, i) => (
                <div key={st.step} style={{ textAlign: 'center' }}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '50%',
                    backgroundColor: '#dc2626', color: 'white',
                    fontWeight: 800, fontSize: '1rem', display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 14px auto'
                  }}>{st.step}</div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px', letterSpacing: '-0.01em' }}>{st.title}</h4>
                  <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.55 }}>{st.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 5. CAREER COUNSELLING PREVIEW */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'center' }} className="responsive-2-col">
            <div>
              <SectionHeading
                badge="CAREER COUNSELLING"
                title="Your Direction. Our Guidance."
                subtitle="Get 1-on-1 personalised career guidance to identify your strengths, explore your options, and choose the right path."
                align="left"
              />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
                {counsellingFeatures.map((f) => (
                  <div key={f.title} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle size={18} style={{ color: '#16a34a', flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: '2px' }}>{f.title}</div>
                      <div style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.5 }}>{f.description}</div>
                    </div>
                  </div>
                ))}
              </div>
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
                Book a Free Session
              </button>
            </div>

            <div style={{ backgroundColor: '#0f172a', borderRadius: '20px', padding: '40px', color: 'white' }}>
              <h3 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#fff', marginBottom: '12px', letterSpacing: '-0.025em' }}>
                1-on-1 Personalised Mentorship
              </h3>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.65, marginBottom: '28px' }}>
                Every student receives individual focus from faculty and domain advisors to choose academic streams, resolve subject challenges, and navigate career paths with clarity.
              </p>
              {[
                'Fresher & Graduate Career Alignment',
                'Targeted Interview & Aptitude Training',
                'MNC & Domestic Opportunity Referrals'
              ].map((item) => (
                <div key={item} style={{
                  display: 'flex', alignItems: 'center', gap: '10px',
                  backgroundColor: '#1e293b', padding: '13px 16px',
                  borderRadius: '10px', border: '1px solid #334155',
                  marginBottom: '10px', fontSize: '0.875rem', fontWeight: 600, color: '#e2e8f0'
                }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#dc2626', flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 6. SERVICES GRID */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <SectionHeading
            badge="OUR SERVICES"
            title="End-to-End Education & Career Services"
            subtitle="From school coaching to corporate workforce training — we support your entire learning and growth lifecycle."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px' }} className="responsive-5-col">
            {allServices.map((srv) => {
              const IconC = srv.icon;
              return (
                <Card key={srv.id} style={{ padding: '22px 18px' }}>
                  <IconBox icon={IconC} color="accent" size={18} />
                  <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', margin: '12px 0 6px' }}>{srv.title}</h4>
                  <p style={{ fontSize: '0.78rem', color: '#64748b', lineHeight: 1.55 }}>{srv.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 7. PLACEMENT BANNER */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <SectionHeading
            badge="PLACEMENT ASSISTANCE"
            title="Training That Connects You to Opportunities"
            subtitle="Career support, resume optimisation, and placement assistance for candidates across IT and Non-IT domains."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '40px' }} className="responsive-4-col">
            {placementHighlights.map((p) => (
              <Card key={p.title}>
                <IconBox icon={Target} color="blue" />
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', margin: '14px 0 8px', letterSpacing: '-0.02em' }}>{p.title}</h4>
                <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.55 }}>{p.description}</p>
              </Card>
            ))}
          </div>

          {/* CTA Banner */}
          <div style={{
            background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            borderRadius: '16px', padding: '36px 40px', color: 'white',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: '20px'
          }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#fff', marginBottom: '6px', letterSpacing: '-0.02em' }}>
                Ready to Start Your Career Preparation?
              </h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b', margin: 0 }}>
                Connect with our placement team to discuss training options and opportunities.
              </p>
            </div>
            <button
              onClick={onEnquire}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '12px 26px', backgroundColor: '#dc2626', color: '#fff',
                border: 'none', borderRadius: '10px', cursor: 'pointer',
                fontSize: '0.9rem', fontWeight: 600, whiteSpace: 'nowrap',
                boxShadow: '0 2px 10px rgba(220,38,38,0.4)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#b91c1c'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#dc2626'; e.currentTarget.style.transform = ''; }}
            >
              Enquire for Placements <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 8. TESTIMONIALS */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <SectionHeading
            badge="STUDENT FEEDBACK"
            title="What Our Students Say"
            subtitle="Feedback from students and professionals who trained with JK Educational Academy."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="responsive-3-col">
            {testimonials.map((t) => (
              <Card key={t.id} style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '3px', marginBottom: '14px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} style={{ color: '#f59e0b', fill: '#f59e0b' }} />
                  ))}
                </div>
                <p style={{ fontSize: '0.875rem', color: '#334155', lineHeight: 1.65, fontStyle: 'italic', flex: 1, marginBottom: '20px' }}>
                  "{t.content}"
                </p>
                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                    color: 'white', fontWeight: 800, fontSize: '0.9rem',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0
                  }}>{t.name.charAt(0)}</div>
                  <div>
                    <div style={{ fontSize: '0.875rem', fontWeight: 700, color: '#0f172a' }}>{t.name}</div>
                    <div style={{ fontSize: '0.75rem', color: '#dc2626', fontWeight: 600 }}>{t.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <FAQAccordion />
    </div>
  );
}
