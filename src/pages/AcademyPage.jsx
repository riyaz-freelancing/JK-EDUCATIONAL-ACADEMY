import React, { useState } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import { intermediateCourses, bcomSubjects, whyChooseUsItems } from '../data/academyData';
import { ArrowRight } from 'lucide-react';

const tabs = [
  { id: 'intermediate', label: 'Tuitions For Intermediate' },
  { id: 'bcom', label: 'Tuitions For B. Com' }
];

export default function AcademyPage({ onEnquire }) {
  const [activeTab, setActiveTab] = useState('intermediate');

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span style={{
            display: 'inline-block', padding: '4px 12px', borderRadius: '9999px',
            backgroundColor: 'rgba(220,38,38,0.15)', color: '#fca5a5',
            fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px'
          }}>ACADEMY TUITIONS</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', marginBottom: '16px', maxWidth: '680px' }}>
            Tuitions For Intermediate & B. Com
          </h1>
          <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.65, maxWidth: '580px' }}>
            Tuitions For Intermediate (MPC, BiPC, CEC, MEC, AEC) and Tuitions For B. Com (all 13 subjects).
          </p>
        </div>
      </section>

      {/* Tab Navigation + Content */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">

          {/* Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '48px', flexWrap: 'wrap' }}>
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '10px 22px', borderRadius: '9999px',
                    fontSize: '0.875rem', fontWeight: isActive ? 700 : 500,
                    cursor: 'pointer', transition: 'all 0.2s ease',
                    border: isActive ? '1.5px solid #dc2626' : '1.5px solid #e2e8f0',
                    backgroundColor: isActive ? '#dc2626' : '#ffffff',
                    color: isActive ? '#ffffff' : '#475569',
                    boxShadow: isActive ? '0 4px 12px rgba(220,38,38,0.25)' : 'none',
                  }}
                >{tab.label}</button>
              );
            })}
          </div>

          {/* TAB 1: INTERMEDIATE */}
          {activeTab === 'intermediate' && (
            <div>
              <SectionHeading
                badge="INTERMEDIATE TUITIONS"
                title="Tuitions For Intermediate"
                subtitle="MPC, BiPC, CEC, MEC, AEC"
              />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '60px' }} className="responsive-3-col">
                {intermediateCourses.map((course) => {
                  const IconC = course.icon;
                  return (
                    <Card key={course.id}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                        <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#fef2f2', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <IconC size={20} />
                        </div>
                      </div>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                        {course.title}
                      </h3>
                      <button
                        onClick={onEnquire}
                        style={{
                          width: '100%', padding: '10px', backgroundColor: '#dc2626', color: '#fff',
                          border: 'none', borderRadius: '8px', cursor: 'pointer',
                          fontSize: '0.85rem', fontWeight: 700, transition: 'background 0.2s', marginTop: '16px'
                        }}
                      >
                        Enquire Now
                      </button>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 2: B.COM */}
          {activeTab === 'bcom' && (
            <div>
              <SectionHeading
                badge="DEGREE COACHING"
                title="Tuitions For B. Com"
                subtitle="All 13 core subjects"
              />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '18px', marginBottom: '60px' }} className="responsive-3-col">
                {bcomSubjects.map((subject, idx) => {
                  const IconC = subject.icon;
                  return (
                    <Card key={subject.id}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                        <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#dc2626', backgroundColor: '#fef2f2', padding: '3px 9px', borderRadius: '6px' }}>
                          Subject #{idx + 1}
                        </span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                        <div style={{ width: '34px', height: '34px', borderRadius: '8px', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <IconC size={18} />
                        </div>
                        <h4 style={{ fontSize: '0.975rem', fontWeight: 700, color: '#0f172a', margin: 0, letterSpacing: '-0.015em' }}>{subject.title}</h4>
                      </div>
                      <button
                        onClick={onEnquire}
                        style={{
                          width: '100%', padding: '9px', backgroundColor: 'transparent', color: '#dc2626',
                          border: '1.5px solid rgba(220,38,38,0.25)', borderRadius: '8px', cursor: 'pointer',
                          fontSize: '0.82rem', fontWeight: 700, transition: 'all 0.2s', marginTop: '16px'
                        }}
                      >
                        Enquire Now
                      </button>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
}
