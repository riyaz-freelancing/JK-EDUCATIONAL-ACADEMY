import React from 'react';
import { Monitor, FileSpreadsheet, Calculator, Cpu, Layers, GraduationCap, HardDrive, ArrowRight } from 'lucide-react';
import { corporateTrainingData } from '../data/academyData';

export default function BasicCourses({ onEnquire }) {
  const { basicCourses } = corporateTrainingData;

  const icons = [
    <Monitor size={20} style={{ color: '#2563eb' }} />,
    <FileSpreadsheet size={20} style={{ color: '#2563eb' }} />,
    <Calculator size={20} style={{ color: '#2563eb' }} />,
    <Cpu size={20} style={{ color: '#2563eb' }} />,
    <Layers size={20} style={{ color: '#2563eb' }} />,
    <GraduationCap size={20} style={{ color: '#2563eb' }} />,
    <HardDrive size={20} style={{ color: '#2563eb' }} />
  ];

  return (
    <section id="basic" className="section-spacing" style={{ backgroundColor: '#ffffff', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
          <div className="light-pill" style={{ marginBottom: '14px' }}>
            <span className="light-pill-dot"></span>
            5. BASIC COURSES
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.8vw, 2.6rem)', fontWeight: 800, color: '#0f172a' }}>
            5. Basic Courses
          </h2>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px'
        }}>
          {basicCourses.map((item, idx) => (
            <div key={item.id} className="light-card" style={{ padding: '24px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div style={{
                    width: '38px', height: '38px', borderRadius: '10px',
                    background: '#f1f5f9', border: '1px solid #e2e8f0',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    {icons[idx % icons.length]}
                  </div>
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#64748b' }}>
                    Course {idx + 1}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                  {item.title}
                </h3>
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
                Enquire <ArrowRight size={13} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
