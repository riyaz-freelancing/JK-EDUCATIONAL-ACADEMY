import React from 'react';
import { ArrowRight, ShieldAlert, Headphones, CheckSquare, Compass } from 'lucide-react';
import { corporateTrainingData } from '../data/academyData';

export default function SpecializedDomains({ onEnquire }) {
  const { otherDomains } = corporateTrainingData;

  const icons = [
    <ShieldAlert size={20} style={{ color: '#2563eb' }} />,
    <Headphones size={20} style={{ color: '#2563eb' }} />,
    <CheckSquare size={20} style={{ color: '#2563eb' }} />,
    <Compass size={20} style={{ color: '#2563eb' }} />
  ];

  return (
    <section id="specialized" className="section-spacing" style={{ backgroundColor: '#f8fafc', position: 'relative' }}>
      <div className="container">
        
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
          <div className="light-pill" style={{ marginBottom: '14px' }}>
            <span className="light-pill-dot"></span>
            4. OTHER DOMAINS (NON-IT)
          </div>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.8vw, 2.6rem)', fontWeight: 800, color: '#0f172a' }}>
            4. Other Domains (Non-IT)
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '20px'
        }}>
          {otherDomains.map((item, idx) => (
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
                  <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#64748b', letterSpacing: '0.06em' }}>
                    Process {idx + 1}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px' }}>
                  {item.title}
                </h3>
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
                Enquire <ArrowRight size={13} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
