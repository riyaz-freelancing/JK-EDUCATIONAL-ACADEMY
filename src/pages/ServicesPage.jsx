import React from 'react';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import { allServices } from '../data/academyData';
import { ArrowRight, PhoneCall } from 'lucide-react';

export default function ServicesPage({ onEnquire }) {
  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span style={{
            display: 'inline-block', padding: '4px 12px', borderRadius: '9999px',
            backgroundColor: 'rgba(220,38,38,0.15)', color: '#fca5a5',
            fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px'
          }}>OUR SERVICES</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', marginBottom: '16px', maxWidth: '680px' }}>
            Complete Education & Training Services
          </h1>
          <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.65, maxWidth: '560px' }}>
            From academic tuitions to corporate training and placement assistance — discover our end-to-end service suite.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <SectionHeading
            badge="ALL SERVICES"
            title="What We Offer"
            subtitle="Everything you need to succeed academically and professionally — all under one roof."
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '56px' }} className="responsive-3-col">
            {allServices.map((srv) => {
              const IconC = srv.icon;
              return (
                <Card key={srv.id}>
                  <div style={{
                    width: '44px', height: '44px', borderRadius: '10px',
                    backgroundColor: '#fef2f2', color: '#dc2626',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px'
                  }}>
                    <IconC size={20} />
                  </div>
                  <h3 style={{ fontSize: '1.025rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                    {srv.title}
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.65, marginBottom: '20px' }}>
                    {srv.description}
                  </p>
                  <button
                    onClick={onEnquire}
                    style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      padding: '8px 16px', fontSize: '0.82rem', fontWeight: 600,
                      color: '#dc2626', backgroundColor: 'transparent',
                      border: '1.5px solid rgba(220,38,38,0.2)', borderRadius: '8px', cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#fef2f2'; e.currentTarget.style.borderColor = '#dc2626'; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'rgba(220,38,38,0.2)'; }}
                  >
                    Enquire <ArrowRight size={13} />
                  </button>
                </Card>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div style={{
            backgroundColor: '#f8fafc', borderRadius: '16px', padding: '48px 40px',
            border: '1px solid #e8edf3', textAlign: 'center'
          }}>
            <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#dc2626', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>
              CUSTOM SOLUTIONS
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', marginBottom: '12px', letterSpacing: '-0.025em' }}>
              Need Custom Corporate Training or Academic Support?
            </h3>
            <p style={{ fontSize: '0.925rem', color: '#64748b', marginBottom: '28px', maxWidth: '520px', margin: '0 auto 28px auto', lineHeight: 1.65 }}>
              Contact our team to discuss customised training solutions, batch schedules, or individual counselling sessions tailored to your organisation's needs.
            </p>
            <button
              onClick={onEnquire}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '13px 32px', backgroundColor: '#dc2626', color: '#fff',
                border: 'none', borderRadius: '10px', cursor: 'pointer',
                fontSize: '0.95rem', fontWeight: 700, letterSpacing: '-0.01em',
                boxShadow: '0 2px 10px rgba(220,38,38,0.3)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#b91c1c'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#dc2626'; e.currentTarget.style.transform = ''; }}
            >
              <PhoneCall size={16} />
              Contact Us Today
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .responsive-3-col { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .responsive-3-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
