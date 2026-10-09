import React, { useState } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import { intermediateCourses, graduationCourses, mastersCourses, bcomSubjects } from '../data/academyData';
import { ArrowRight, GraduationCap, Award, BookMarked } from 'lucide-react';

const tabs = [
  { id: 'intermediate', label: 'Intermediate' },
  { id: 'graduation', label: 'Graduation (B.Com, BBA)' },
  { id: 'masters', label: 'Masters (M.Com, MBA)' }
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
            Tuitions: Intermediate, Graduation & Masters
          </h1>
          <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.65, maxWidth: '620px' }}>
            Intermediate (M.P.C, BiPC, MEC, CEC, AEC) • Graduation (B.Com, BBA) • Masters (M.Com, MBA).
          </p>
        </div>
      </section>

      {/* Tab Navigation + Content */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">

          {/* Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '48px', flexWrap: 'wrap' }}>
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '10px 24px', borderRadius: '9999px',
                    fontSize: '0.875rem', fontWeight: isActive ? 700 : 600,
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
                subtitle="M.P.C, BiPC, MEC, CEC, AEC"
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
                        <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#dc2626', backgroundColor: '#fef2f2', padding: '3px 9px', borderRadius: '6px' }}>
                          INTERMEDIATE
                        </span>
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

          {/* TAB 2: GRADUATION */}
          {activeTab === 'graduation' && (
            <div>
              <SectionHeading
                badge="GRADUATION TUITIONS"
                title="Tuitions For Graduation"
                subtitle="B.Com (All 13 Core Subjects) & BBA"
              />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '40px' }} className="responsive-2-col">
                {graduationCourses.map((grad) => {
                  const IconC = grad.icon;
                  return (
                    <Card key={grad.id} style={{ border: '1.5px solid #e2e8f0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                        <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <IconC size={22} />
                        </div>
                        <div>
                          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#2563eb', backgroundColor: '#eff6ff', padding: '2px 8px', borderRadius: '4px' }}>GRADUATION</span>
                          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', margin: '4px 0 0 0' }}>{grad.title}</h3>
                        </div>
                      </div>
                      <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6, marginBottom: '16px' }}>{grad.description}</p>
                      <button
                        onClick={onEnquire}
                        style={{
                          padding: '9px 18px', backgroundColor: '#2563eb', color: '#fff',
                          border: 'none', borderRadius: '8px', cursor: 'pointer',
                          fontSize: '0.82rem', fontWeight: 700
                        }}
                      >
                        Enquire for {grad.title.split(' ')[0]}
                      </button>
                    </Card>
                  );
                })}
              </div>

              {/* B.Com Subjects Breakdown */}
              <div style={{ backgroundColor: '#f8fafc', padding: '32px', borderRadius: '16px', border: '1px solid #e2e8f0', marginBottom: '60px' }}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px' }}>
                  B.Com 13 Core Subjects Covered:
                </h4>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '14px' }} className="responsive-3-col">
                  {bcomSubjects.map((subject, idx) => (
                    <div key={subject.id} style={{ backgroundColor: '#ffffff', padding: '12px 16px', borderRadius: '8px', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <BookMarked size={16} style={{ color: '#dc2626', flexShrink: 0 }} />
                      <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1e293b' }}>{idx + 1}. {subject.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: MASTERS */}
          {activeTab === 'masters' && (
            <div>
              <SectionHeading
                badge="MASTERS TUITIONS"
                title="Tuitions For Masters"
                subtitle="M.Com & MBA Coaching"
              />
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '60px' }} className="responsive-2-col">
                {mastersCourses.map((m) => {
                  const IconC = m.icon;
                  return (
                    <Card key={m.id} style={{ border: '1.5px solid #e2e8f0' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px' }}>
                        <div style={{ width: '44px', height: '44px', borderRadius: '10px', backgroundColor: '#f0fdf4', color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <IconC size={22} />
                        </div>
                        <div>
                          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#16a34a', backgroundColor: '#f0fdf4', padding: '2px 8px', borderRadius: '4px' }}>MASTERS</span>
                          <h3 style={{ fontSize: '1.15rem', fontWeight: 700, color: '#0f172a', margin: '4px 0 0 0' }}>{m.title}</h3>
                        </div>
                      </div>
                      <p style={{ fontSize: '0.88rem', color: '#64748b', lineHeight: 1.6, marginBottom: '16px' }}>{m.description}</p>
                      <button
                        onClick={onEnquire}
                        style={{
                          padding: '9px 18px', backgroundColor: '#16a34a', color: '#fff',
                          border: 'none', borderRadius: '8px', cursor: 'pointer',
                          fontSize: '0.82rem', fontWeight: 700
                        }}
                      >
                        Enquire for {m.title.split(' ')[0]}
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

