import React, { useState } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { intermediateCourses, bcomSubjects, academicCourses, whyChooseUsItems } from '../data/academyData';
import { CheckCircle, ArrowRight } from 'lucide-react';

const tabs = [
  { id: 'intermediate', label: 'Intermediate Tuitions' },
  { id: 'bcom', label: 'B.Com 13 Subjects' },
  { id: 'degree-pg', label: 'BBA / M.Com / MBA' },
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
            Intermediate & Degree Tuition Excellence
          </h1>
          <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.65, maxWidth: '580px' }}>
            Specialised tuitions for MPC, BiPC, CEC, MEC, AEC, 1st & 2nd Year CBSE English, and all 13 B.Com degree subjects.
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
                title="Tuitions for 1st & 2nd Year (CBSE & State Board)"
                subtitle="Expert faculty, chapter-wise problem solving, diagram practice, and English fluency drills."
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
                        <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#dc2626', backgroundColor: '#fef2f2', padding: '3px 9px', borderRadius: '6px', letterSpacing: '0.04em' }}>
                          {course.badge}
                        </span>
                      </div>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                        {course.title}
                      </h3>
                      <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6, marginBottom: '14px' }}>
                        {course.description}
                      </p>
                      {course.subjects && (
                        <div style={{ backgroundColor: '#f8fafc', borderRadius: '8px', padding: '12px', border: '1px solid #e8edf3', marginBottom: '14px' }}>
                          <div style={{ fontSize: '0.68rem', fontWeight: 700, color: '#475569', letterSpacing: '0.06em', textTransform: 'uppercase', marginBottom: '8px' }}>Subjects Included</div>
                          {course.subjects.map((sub) => (
                            <div key={sub} style={{ fontSize: '0.8rem', color: '#334155', fontWeight: 500, marginBottom: '3px' }}>• {sub}</div>
                          ))}
                        </div>
                      )}
                      {course.highlights && (
                        <div style={{ marginBottom: '18px' }}>
                          {course.highlights.map((h) => (
                            <div key={h} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#475569', marginBottom: '4px' }}>
                              <CheckCircle size={13} style={{ color: '#16a34a', flexShrink: 0 }} />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      <button
                        onClick={onEnquire}
                        style={{
                          width: '100%', padding: '10px', backgroundColor: '#dc2626', color: '#fff',
                          border: 'none', borderRadius: '8px', cursor: 'pointer',
                          fontSize: '0.85rem', fontWeight: 700, transition: 'background 0.2s'
                        }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b91c1c'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#dc2626'}
                      >
                        Enquire for Batch Timings
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
                title="B.Com — All 13 Core Subjects"
                subtitle="University syllabus guidance with step-by-step numerical solving, accounts ledger practice, and exam techniques."
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
                        <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#64748b' }}>{subject.level}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                        <div style={{ width: '34px', height: '34px', borderRadius: '8px', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <IconC size={18} />
                        </div>
                        <h4 style={{ fontSize: '0.975rem', fontWeight: 700, color: '#0f172a', margin: 0, letterSpacing: '-0.015em' }}>{subject.title}</h4>
                      </div>
                      <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.6, marginBottom: '16px' }}>{subject.desc}</p>
                      <button
                        onClick={onEnquire}
                        style={{
                          width: '100%', padding: '9px', backgroundColor: 'transparent', color: '#dc2626',
                          border: '1.5px solid rgba(220,38,38,0.25)', borderRadius: '8px', cursor: 'pointer',
                          fontSize: '0.82rem', fontWeight: 700, transition: 'all 0.2s'
                        }}
                        onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#fef2f2'; e.currentTarget.style.borderColor = '#dc2626'; }}
                        onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'rgba(220,38,38,0.25)'; }}
                      >
                        Enquire for {subject.title}
                      </button>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 3: DEGREE & PG */}
          {activeTab === 'degree-pg' && (
            <div>
              <SectionHeading
                badge="DEGREE & POSTGRADUATE"
                title="BBA, M.Com & MBA Coaching"
                subtitle="Structured degree preparation for undergraduate and postgraduate university students."
              />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '60px' }} className="responsive-3-col">
                {academicCourses.filter(c => c.category !== 'Intermediate').map((course) => {
                  const IconC = course.icon;
                  return (
                    <Card key={course.id}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                        <div style={{ width: '42px', height: '42px', borderRadius: '10px', backgroundColor: '#fef2f2', color: '#dc2626', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <IconC size={20} />
                        </div>
                        <span style={{ fontSize: '0.68rem', fontWeight: 700, color: '#dc2626', backgroundColor: '#fef2f2', padding: '3px 9px', borderRadius: '6px' }}>
                          {course.badge}
                        </span>
                      </div>
                      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                        {course.title}
                      </h3>
                      <p style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.6, marginBottom: '16px' }}>
                        {course.description}
                      </p>
                      {course.highlights && (
                        <div style={{ marginBottom: '18px' }}>
                          {course.highlights.map((h) => (
                            <div key={h} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: '#475569', marginBottom: '4px' }}>
                              <CheckCircle size={13} style={{ color: '#16a34a', flexShrink: 0 }} />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      <button
                        onClick={onEnquire}
                        style={{
                          width: '100%', padding: '10px', backgroundColor: '#dc2626', color: '#fff',
                          border: 'none', borderRadius: '8px', cursor: 'pointer',
                          fontSize: '0.85rem', fontWeight: 700, transition: 'background 0.2s'
                        }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b91c1c'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#dc2626'}
                      >
                        Enquire for Admission
                      </button>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* Why Choose Us */}
          <section style={{
            backgroundColor: '#f8fafc', borderRadius: '16px', border: '1px solid #e8edf3',
            padding: '48px 40px'
          }}>
            <SectionHeading
              badge="WHY CHOOSE US"
              title="Academic Highlights & Faculty Excellence"
              subtitle="Our proven formula for academic improvement and student confidence."
            />
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }} className="responsive-3-col">
              {whyChooseUsItems.map((item) => {
                const IconC = item.icon;
                return (
                  <div key={item.title} style={{
                    backgroundColor: '#ffffff', padding: '22px', borderRadius: '12px',
                    border: '1px solid #e8edf3'
                  }}>
                    <div style={{
                      width: '40px', height: '40px', borderRadius: '10px',
                      backgroundColor: '#fef2f2', color: '#dc2626',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '14px'
                    }}>
                      <IconC size={20} />
                    </div>
                    <h4 style={{ fontSize: '0.975rem', fontWeight: 700, color: '#0f172a', marginBottom: '7px', letterSpacing: '-0.02em' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.82rem', color: '#64748b', lineHeight: 1.6 }}>{item.description}</p>
                  </div>
                );
              })}
            </div>
          </section>
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
