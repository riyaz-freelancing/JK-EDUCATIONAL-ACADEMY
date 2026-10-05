import React from 'react';
import { CheckCircle2, ArrowRight, Download, Calculator, Users } from 'lucide-react';

export default function CorporateTrainings({ onEnquire }) {
  const financePoints = [
    'GST Return Filing & Compliance (GSTR-1, GSTR-3B, GSTR-9, Reconciliation & E-Way Bills)',
    'Tally Prime Mastery with Inventory, Multi-Location & Multi-Currency Management',
    'Payroll Management & Statutory Deductions (Provident Fund, ESI, Professional Tax & TDS)',
    'Auditing Support, Ledger Scrutiny & Financial Statement Balance Sheet Preparation',
    'Direct Tax Compliance & Income Tax Return (ITR) Processing for Individuals & Firms',
    'Advanced Excel for Financial Modeling, VLOOKUP/XLOOKUP, Pivot Tables & Dashboards'
  ];

  const hrPoints = [
    'End-to-End HR Operations, Talent Acquisition Strategies & Recruitment Funnel Management',
    'Labor Law & Statutory Compliance Frameworks (Factories Act, Shops & Establishment Act)',
    'Payroll Administration, CTC Structuring, Attendance Software & Salary Processing',
    'Employee Relations, Onboarding Workflows & Performance Management Systems (PMS)',
    'Corporate HR Policies Drafting, Offer Letters & Grievance Redressal Mechanisms',
    'HR Analytics, Exit Interviews & Statutory Documentation for Corporate Audit'
  ];

  return (
    <section id="corporate" className="section-spacing" style={{ backgroundColor: '#f8fafc', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 50px' }}>
          <div className="light-pill" style={{ marginBottom: '14px' }}>
            <span className="light-pill-dot"></span>
            CORPORATE & SKILL DEVELOPMENT PROGRAMS
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.8vw, 2.6rem)', fontWeight: 800, color: '#0f172a' }}>
            Corporate Trainings <span className="gradient-text">(Non-IT)</span>
          </h2>
          <p style={{ marginTop: '10px', color: '#475569' }}>
            Tailored upskilling solutions designed to bridge the gap between academic knowledge and corporate operational demands. Perfect for fresh graduates and working professionals.
          </p>
        </div>

        {/* 2 Feature Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '30px'
        }}>

          {/* Card 1: Finance & Accounting */}
          <div className="light-card" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: 'rgba(37, 99, 235, 0.1)', border: '1px solid rgba(37, 99, 235, 0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb'
              }}>
                <Calculator size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#2563eb', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  FINANCE & ACCOUNTING OPERATIONS
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>
                  Finance & Accounting Excellence
                </h3>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
              {financePoints.map((pt, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={17} style={{ color: '#2563eb', flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.5 }}>{pt}</span>
                </div>
              ))}
            </div>

            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap',
              paddingTop: '20px', borderTop: '1px solid #f1f5f9'
            }}>
              <button onClick={onEnquire} className="btn-blue-light" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
                Explore F&A Modules <ArrowRight size={15} />
              </button>
              <button onClick={onEnquire} className="btn-outline-light" style={{ padding: '10px 18px', fontSize: '0.85rem' }}>
                <Download size={14} /> Download Syllabus
              </button>
            </div>
          </div>

          {/* Card 2: HR Management */}
          <div className="light-card" style={{ padding: '32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{
                width: '44px', height: '44px', borderRadius: '12px',
                background: 'rgba(79, 70, 229, 0.1)', border: '1px solid rgba(79, 70, 229, 0.2)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4f46e5'
              }}>
                <Users size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#4f46e5', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  HUMAN RESOURCE OPERATIONS
                </div>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a' }}>
                  Human Resource Management
                </h3>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '32px' }}>
              {hrPoints.map((pt, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={17} style={{ color: '#4f46e5', flexShrink: 0, marginTop: '3px' }} />
                  <span style={{ fontSize: '0.88rem', color: '#334155', lineHeight: 1.5 }}>{pt}</span>
                </div>
              ))}
            </div>

            <div style={{
              display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap',
              paddingTop: '20px', borderTop: '1px solid #f1f5f9'
            }}>
              <button onClick={onEnquire} className="btn-primary-light" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
                Explore HR Modules <ArrowRight size={15} />
              </button>
              <button onClick={onEnquire} className="btn-outline-light" style={{ padding: '10px 18px', fontSize: '0.85rem' }}>
                <Download size={14} /> Request HR PDF
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
