import React from 'react';
import { Monitor, FileSpreadsheet, Calculator, MessageSquare, FileText, Keyboard, ArrowRight } from 'lucide-react';

export default function BasicCourses({ onEnquire }) {
  const basicList = [
    {
      title: 'MS Office Suite',
      badge: 'ESSENTIAL DESKTOP',
      icon: <Monitor size={20} style={{ color: '#2563eb' }} />,
      desc: 'Complete training in Microsoft Word, Excel basics, PowerPoint slide deck creation, Outlook email management & OneDrive storage.'
    },
    {
      title: 'Advanced Excel',
      badge: 'DATA ANALYTICS',
      icon: <FileSpreadsheet size={20} style={{ color: '#059669' }} />,
      desc: 'Master VLOOKUP, XLOOKUP, INDEX/MATCH, Pivot Tables, conditional formatting, data validation, and automated executive dashboards.'
    },
    {
      title: 'Tally Prime with GST',
      badge: 'FINANCIAL SOFTWARE',
      icon: <Calculator size={20} style={{ color: '#4f46e5' }} />,
      desc: 'Hands-on practice in Tally Prime software: voucher entries, inventory records, GST invoice creation, e-way bills & trial balance.'
    },
    {
      title: 'Workplace Communication',
      badge: 'SOFT SKILLS',
      icon: <MessageSquare size={20} style={{ color: '#d97706' }} />,
      desc: 'Professional English fluency, corporate email writing, presentation delivery, group discussions & client phone call etiquette.'
    },
    {
      title: 'Resume & Interview Prep',
      badge: 'CAREER READINESS',
      icon: <FileText size={20} style={{ color: '#dc2626' }} />,
      desc: 'ATS-compliant resume building, customized cover letters, LinkedIn profile optimization & mock interview practice sessions.'
    },
    {
      title: 'Typing & Computer Basics',
      badge: 'SPEED & ACCURACY',
      icon: <Keyboard size={20} style={{ color: '#0284c7' }} />,
      desc: 'Touch typing speed building (40+ WPM goal), OS navigation, shortcut keys, file organization & digital productivity tool usage.'
    }
  ];

  return (
    <section id="basic" className="section-spacing" style={{ backgroundColor: '#ffffff', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
          <div className="light-pill" style={{ marginBottom: '14px' }}>
            <span className="light-pill-dot"></span>
            BASIC SKILLS & ESSENTIAL OFFICE TOOLS
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.8vw, 2.6rem)', fontWeight: 800, color: '#0f172a' }}>
            Basic Courses & <span className="gradient-text">Essential Industry Tools</span>
          </h2>
          <p style={{ marginTop: '10px', color: '#475569' }}>
            Master fundamental computer skills and essential workplace software tools required in every professional office setup.
          </p>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {basicList.map((item, idx) => (
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
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#64748b' }}>
                    {item.badge}
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
                marginTop: '18px',
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
                Enquire for Timings <ArrowRight size={13} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
