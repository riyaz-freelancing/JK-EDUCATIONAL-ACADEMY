import React from 'react';
import { ArrowRight, BookMarked } from 'lucide-react';

export default function DegreeTuitions({ onEnquire }) {
  const degreeSubjects = [
    { code: 'BCOM 101', name: 'Financial Accounting I & II', desc: 'Ledger accounts, final accounts, trial balance, depreciation & bank reconciliation.' },
    { code: 'BCOM 102', name: 'Advanced Accounting', desc: 'Partnership accounts, issue of shares/debentures, goodwill valuation & single entry.' },
    { code: 'BCOM 201', name: 'Corporate Accounting', desc: 'Amalgamation, internal reconstruction, liquidation accounts & holding company statements.' },
    { code: 'BCOM 202', name: 'Cost & Management Accounting', desc: 'Cost sheets, marginal costing, budgetary control, variance analysis & ratio analysis.' },
    { code: 'BCOM 301', name: 'Business Statistics I & II', desc: 'Central tendency, dispersion, correlation, regression, probability & index numbers.' },
    { code: 'BCOM 302', name: 'Business Law & Company Law', desc: 'Indian Contract Act, Sale of Goods Act, Companies Act 2013 & legal case studies.' },
    { code: 'BCOM 401', name: 'Income Tax & Direct Taxes', desc: 'Heads of income (Salary, House Property, PGBP, Capital Gains) & tax computation.' },
    { code: 'BCOM 402', name: 'Auditing & Assurance', desc: 'Internal control, voucher verification, audit procedures & statutory auditor duties.' },
    { code: 'BCOM 501', name: 'Quantitative Techniques', desc: 'Linear programming, PERT/CPM, decision theory, inventory control & queuing theory.' },
    { code: 'BCOM 502', name: 'Financial Management', desc: 'Capital budgeting, cost of capital, capital structure theories & working capital.' },
    { code: 'BCOM 601', name: 'Business Economics', desc: 'Micro & macro economics, demand forecasting, market structures & price determination.' },
    { code: 'BCOM 602', name: 'E-Commerce & Web Tech', desc: 'E-commerce frameworks, online payment gateways, web basics & information security.' }
  ];

  return (
    <section id="degree" className="section-spacing" style={{ backgroundColor: '#ffffff', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
          gap: '20px',
          marginBottom: '48px'
        }}>
          <div>
            <div className="light-pill" style={{ marginBottom: '14px' }}>
              <span className="light-pill-dot"></span>
              DEGREE & PG TUITIONS | OU, KU, AU, BRAOU, ETC.
            </div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0f172a' }}>
              Tuitions for B.Com <span className="gradient-text">(Gen, Comp & Honors)</span>
            </h2>
            <p style={{ maxWidth: '680px', marginTop: '8px', color: '#475569' }}>
              Personalized academic support aligned with major university curriculums across Telangana & AP. Concept clarification, problem-solving, and university exam preparation.
            </p>
          </div>

          <button onClick={onEnquire} className="btn-outline-light" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
            Explore All Degree Subjects <ArrowRight size={15} />
          </button>
        </div>

        {/* Subjects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {degreeSubjects.map((sub, idx) => (
            <div key={idx} className="light-card" style={{ padding: '20px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <span style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: '#2563eb',
                    background: 'rgba(37, 99, 235, 0.08)',
                    border: '1px solid rgba(37, 99, 235, 0.2)',
                    padding: '3px 8px',
                    borderRadius: '6px'
                  }}>
                    {sub.code}
                  </span>
                  <BookMarked size={16} style={{ color: '#475569' }} />
                </div>

                <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px', lineHeight: 1.3 }}>
                  {sub.name}
                </h3>

                <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.5 }}>
                  {sub.desc}
                </p>
              </div>

              <button onClick={onEnquire} style={{
                marginTop: '16px',
                background: 'none',
                border: 'none',
                color: '#2563eb',
                fontSize: '0.8rem',
                fontWeight: 700,
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                cursor: 'pointer',
                padding: 0
              }}>
                Enquire for Batch Timings <ArrowRight size={13} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
