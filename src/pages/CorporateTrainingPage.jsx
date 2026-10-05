import React, { useState } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import { corporateTrainingData, trainingToOpportunityProcess } from '../data/academyData';
import { Code, Briefcase, CheckCircle, DollarSign, Users, ShieldAlert, Laptop, Clock } from 'lucide-react';

const categories = [
  { id: 'finance', label: 'Finance Domain', sub: 'R2R / P2P / O2C / Payroll', icon: DollarSign },
  { id: 'hr', label: 'HR Domain', sub: 'Talent Acquisition & Lifecycle', icon: Users },
  { id: 'it', label: 'IT Courses', sub: 'Full Stack & Digital Marketing', icon: Code },
  { id: 'other-nonit', label: 'Other Domains', sub: 'AML/KYC, Chat, Content, Mapping', icon: ShieldAlert },
  { id: 'basic', label: 'Basic Courses', sub: 'MS Office, Excel, Tally, DCA', icon: Laptop },
];

export default function CorporateTrainingPage({ onEnquire }) {
  const [activeDomain, setActiveDomain] = useState('finance');
  const currentCat = categories.find(c => c.id === activeDomain);
  const domainData = {
    finance: corporateTrainingData.financeDomain,
    hr: corporateTrainingData.hrDomain,
    it: corporateTrainingData.itDomain,
    'other-nonit': corporateTrainingData.otherDomains,
    basic: corporateTrainingData.basicCourses,
  };
  const data = domainData[activeDomain] || [];

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span style={{
            display: 'inline-block', padding: '4px 12px', borderRadius: '9999px',
            backgroundColor: 'rgba(220,38,38,0.15)', color: '#fca5a5',
            fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px'
          }}>CORPORATE & IT TRAINING</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', marginBottom: '16px', maxWidth: '680px' }}>
            Corporate Training for the Future Workforce
          </h1>
          <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.65, maxWidth: '580px' }}>
            Industry-focused training across Finance, HR, IT, Non-IT domains, and Basic Computer Applications.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">

          {/* Domain Filter Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '52px', flexWrap: 'wrap' }}>
            {categories.map((cat) => {
              const IconC = cat.icon;
              const isActive = activeDomain === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveDomain(cat.id)}
                  style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
                    padding: '12px 20px', borderRadius: '12px', cursor: 'pointer',
                    border: isActive ? '1.5px solid #dc2626' : '1.5px solid #e2e8f0',
                    backgroundColor: isActive ? '#fef2f2' : '#f8fafc',
                    transition: 'all 0.2s ease',
                    minWidth: '120px',
                  }}
                >
                  <IconC size={20} style={{ color: isActive ? '#dc2626' : '#64748b' }} />
                  <span style={{ fontSize: '0.8rem', fontWeight: isActive ? 700 : 500, color: isActive ? '#dc2626' : '#475569', whiteSpace: 'nowrap' }}>{cat.label}</span>
                  <span style={{ fontSize: '0.68rem', color: '#94a3b8', textAlign: 'center', lineHeight: 1.3 }}>{cat.sub}</span>
                </button>
              );
            })}
          </div>

          {/* Active domain heading */}
          <div style={{ marginBottom: '32px', paddingBottom: '24px', borderBottom: '1px solid #f1f5f9' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              {currentCat && <currentCat.icon size={20} style={{ color: '#dc2626' }} />}
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#0f172a', letterSpacing: '-0.025em' }}>
                {currentCat?.label} — {currentCat?.sub}
              </h2>
            </div>
            <p style={{ fontSize: '0.875rem', color: '#64748b', marginTop: '6px' }}>
              Specialised domain modules structured with real-time exposure and corporate standards.
            </p>
          </div>

          {/* Program Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '60px' }} className="responsive-2-col">
            {data.map((program) => {
              const IconC = program.icon;
              return (
                <Card key={program.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#fef2f2', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <IconC size={20} />
                    </div>
                    <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#dc2626', backgroundColor: '#fef2f2', padding: '3px 9px', borderRadius: '6px', letterSpacing: '0.04em' }}>
                      {program.category}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                    {program.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6, marginBottom: '16px' }}>
                    {program.description}
                  </p>

                  {program.skills && (
                    <div style={{ marginBottom: '16px' }}>
                      <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>Skills Covered</div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {program.skills.map(s => (
                          <span key={s} style={{ fontSize: '0.75rem', fontWeight: 600, backgroundColor: '#f1f5f9', color: '#334155', padding: '3px 9px', borderRadius: '5px' }}>{s}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {program.highlights && (
                    <div style={{ marginBottom: '16px' }}>
                      {program.highlights.map(h => (
                        <div key={h} style={{ display: 'flex', alignItems: 'center', gap: '7px', fontSize: '0.82rem', color: '#475569', marginBottom: '5px' }}>
                          <CheckCircle size={13} style={{ color: '#16a34a', flexShrink: 0 }} />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {program.duration && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 600, color: '#2563eb', marginBottom: '16px' }}>
                      <Clock size={13} />
                      <span>Duration: {program.duration}</span>
                    </div>
                  )}

                  <button
                    onClick={onEnquire}
                    style={{
                      width: '100%', padding: '10px', backgroundColor: '#dc2626', color: '#fff',
                      border: 'none', borderRadius: '8px', cursor: 'pointer',
                      fontSize: '0.85rem', fontWeight: 700, transition: 'background 0.2s'
                    }}
                    onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b91c1c'}
                    onMouseLeave={e => e.currentTarget.style.backgroundColor = '#dc2626'}
                  >
                    Enquire for Batch Details
                  </button>
                </Card>
              );
            })}
          </div>

          {/* Process Roadmap */}
          <SectionHeading
            badge="OUR PROCESS"
            title="From Training to Opportunity"
            subtitle="A structured path from learning to corporate onboarding."
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }} className="responsive-4-col">
            {trainingToOpportunityProcess.map((st) => (
              <div key={st.step} style={{
                backgroundColor: '#f8fafc', borderRadius: '14px', border: '1px solid #e8edf3',
                padding: '24px', textAlign: 'center'
              }}>
                <div style={{
                  width: '44px', height: '44px', borderRadius: '50%',
                  backgroundColor: '#dc2626', color: 'white', fontWeight: 800,
                  fontSize: '1rem', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', margin: '0 auto 14px auto'
                }}>{st.step}</div>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: '7px', letterSpacing: '-0.015em' }}>{st.title}</h4>
                <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.55 }}>{st.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .responsive-2-col { grid-template-columns: 1fr !important; }
          .responsive-4-col { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .responsive-4-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
