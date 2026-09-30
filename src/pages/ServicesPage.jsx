import React from 'react';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { allServices } from '../data/academyData';

export default function ServicesPage({ onEnquire }) {
  return (
    <div style={{ textAlign: 'left' }}>
      
      {/* Header */}
      <section style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '60px 0' }}>
        <div className="container">
          <SectionHeading
            badge="OUR SERVICES"
            title="Complete Education &amp; Training Services"
            subtitle="From academic tuitions to corporate training and placement assistance, discover our end-to-end service suite."
            light
          />
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '28px',
            marginBottom: '50px'
          }} className="responsive-3-col">
            {allServices.map((srv) => {
              const IconC = srv.icon;
              return (
                <Card key={srv.id}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: '#fef2f2',
                    color: '#dc2626',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    marginBottom: '16px'
                  }}>
                    <IconC size={24} />
                  </div>

                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                    {srv.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, marginBottom: '20px' }}>
                    {srv.description}
                  </p>

                  <Button variant="outline" size="sm" onClick={onEnquire}>
                    Enquire for Service
                  </Button>
                </Card>
              );
            })}
          </div>

          {/* Banner */}
          <div style={{
            backgroundColor: '#f8fafc',
            borderRadius: '24px',
            padding: '40px',
            border: '1px solid #e2e8f0',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
              Need Custom Corporate Training or Academic Support?
            </h3>
            <p style={{ fontSize: '0.95rem', color: '#64748b', marginBottom: '24px', maxWidth: '600px', margin: '0 auto 24px auto' }}>
              Contact our team to discuss customized training solutions, batch schedules, or individual counseling.
            </p>
            <Button variant="primary" size="lg" onClick={onEnquire}>
              Contact Us Today
            </Button>
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
