import React from 'react';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { corporateTraining, trainingToOpportunityProcess } from '../data/academyData';
import { Code, Briefcase, CheckCircle, Clock } from 'lucide-react';

export default function CorporateTrainingPage({ onEnquire }) {
  return (
    <div style={{ textAlign: 'left' }}>
      
      {/* Header */}
      <section style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '60px 0' }}>
        <div className="container">
          <SectionHeading
            badge="CORPORATE TRAINING"
            title="Corporate Training for the Future Workforce"
            subtitle="Industry-focused training programs designed for freshers, graduates and working professionals."
            light
          />
        </div>
      </section>

      {/* IT Training Section */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          
          <SectionHeading
            badge="IT COURSES"
            title="IT Training Programs"
            subtitle="Hands-on software development, testing, ERP, and enterprise computing modules."
            align="left"
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px',
            marginBottom: '60px'
          }} className="responsive-2-col">
            {corporateTraining.it.map((program) => {
              const IconC = program.icon;
              return (
                <Card key={program.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: '#fef2f2',
                      color: '#dc2626',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'center'
                    }}>
                      <IconC size={22} />
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                    {program.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, marginBottom: '20px' }}>
                    {program.description}
                  </p>

                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ fontSize: '0.7875rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                      SKILLS COVERED:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {program.skills.map((s) => (
                        <span key={s} style={{ fontSize: '0.75rem', fontWeight: 600, backgroundColor: '#f1f5f9', color: '#334155', padding: '4px 10px', borderRadius: '6px' }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button variant="primary" size="sm" fullWidth onClick={onEnquire}>
                    View Program Details
                  </Button>
                </Card>
              );
            })}
          </div>

          {/* NON-IT TRAINING SECTION */}
          <SectionHeading
            badge="NON-IT COURSES"
            title="Non-IT &amp; Business Process Training"
            subtitle="Targeted coaching for process management, interview preparation, and corporate communication."
            align="left"
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '24px',
            marginBottom: '60px'
          }} className="responsive-2-col">
            {corporateTraining.nonIt.map((program) => {
              const IconC = program.icon;
              return (
                <Card key={program.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      backgroundColor: '#eff6ff',
                      color: '#2563eb',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'center'
                    }}>
                      <IconC size={22} />
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                    {program.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, marginBottom: '20px' }}>
                    {program.description}
                  </p>

                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ fontSize: '0.7875rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                      SKILLS COVERED:
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {program.skills.map((s) => (
                        <span key={s} style={{ fontSize: '0.75rem', fontWeight: 600, backgroundColor: '#f1f5f9', color: '#334155', padding: '4px 10px', borderRadius: '6px' }}>
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Button variant="navy" size="sm" fullWidth onClick={onEnquire}>
                    View Program Details
                  </Button>
                </Card>
              );
            })}
          </div>

          {/* PROCESS ROADMAP */}
          <SectionHeading
            badge="OUR PROCESS"
            title="From Training to Opportunity"
            subtitle="A clear, structured path from concept learning to corporate placement support."
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '20px'
          }} className="responsive-4-col">
            {trainingToOpportunityProcess.map((st) => (
              <Card key={st.step} style={{ textAlign: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
                <div style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  backgroundColor: '#dc2626',
                  color: 'white',
                  fontWeight: 800,
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  marginBottom: '16px'
                }}>
                  {st.step}
                </div>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                  {st.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5 }}>
                  {st.description}
                </p>
              </Card>
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
