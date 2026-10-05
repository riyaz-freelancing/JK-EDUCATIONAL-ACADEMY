import React from 'react';
import { ArrowRight, UserCheck, HeartPulse, Landmark, Truck } from 'lucide-react';

export default function SpecializedDomains({ onEnquire }) {
  const domains = [
    {
      title: 'US IT Recruiter Training',
      tag: 'RECRUITMENT',
      icon: <UserCheck size={20} style={{ color: '#2563eb' }} />,
      desc: 'End-to-end US staffing processes, W2/1099/C2C tax terms, Boolean string construction, LinkedIn Recruiter, Monster, Dice & ATS portal management.',
      linkText: 'Explore Recruitment'
    },
    {
      title: 'Healthcare BPO & Medical Coding',
      tag: 'HEALTHCARE OPERATIONS',
      icon: <HeartPulse size={20} style={{ color: '#dc2626' }} />,
      desc: 'ICD-10-CM, CPT coding conventions, HIPAA compliance, US healthcare revenue cycle management (RCM), medical billing & claim adjudication.',
      linkText: 'Explore Healthcare'
    },
    {
      title: 'Banking & Financial Operations',
      tag: 'FINANCIAL SERVICES',
      icon: <Landmark size={20} style={{ color: '#4f46e5' }} />,
      desc: 'Core banking operations, KYC/AML compliance verification, anti-money laundering frameworks, credit risk analysis & financial transaction processing.',
      linkText: 'Explore Banking Ops'
    },
    {
      title: 'Supply Chain & Logistics Ops',
      tag: 'LOGISTICS & SCM',
      icon: <Truck size={20} style={{ color: '#059669' }} />,
      desc: 'Inventory optimization, warehouse management systems (WMS), procurement operations, vendor management & international freight documentation.',
      linkText: 'Explore Supply Chain'
    }
  ];

  return (
    <section id="specialized" className="section-spacing" style={{ backgroundColor: '#f8fafc', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
          <div className="light-pill" style={{ marginBottom: '14px' }}>
            <span className="light-pill-dot"></span>
            SPECIALIZED SKILLS | RECRUITMENT & OPERATIONS
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.8vw, 2.6rem)', fontWeight: 800, color: '#0f172a' }}>
            Specialized Domains <span className="gradient-text">(Non-IT Operations)</span>
          </h2>
          <p style={{ marginTop: '10px', color: '#475569' }}>
            Domain-specific training for high-demand non-IT careers in multinational corporations and global shared service centers.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px'
        }}>
          {domains.map((item, idx) => (
            <div key={idx} className="light-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '10px',
                    background: '#f1f5f9', border: '1px solid #e2e8f0',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    {item.icon}
                  </div>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.06em' }}>
                    {item.tag}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.84rem', color: '#475569', lineHeight: 1.55 }}>
                  {item.desc}
                </p>
              </div>

              <button onClick={onEnquire} style={{
                marginTop: '20px',
                background: 'none',
                border: 'none',
                color: '#2563eb',
                fontSize: '0.82rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer',
                padding: 0
              }}>
                {item.linkText} <ArrowRight size={13} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
