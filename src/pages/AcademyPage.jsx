import React from 'react';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { academicCourses, whyChooseUsItems } from '../data/academyData';
import { BookOpen, CheckCircle, GraduationCap, Award, Users } from 'lucide-react';

export default function AcademyPage({ onEnquire }) {
  return (
    <div style={{ textAlign: 'left' }}>
      
      {/* Page Header */}
      <section style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '60px 0' }}>
        <div className="container">
          <SectionHeading
            badge="ACADEMY TUITIONS"
            title="Build a Strong Academic Foundation"
            subtitle="Personalized academic support with experienced faculty, structured learning and continuous assessment."
            light
          />
        </div>
      </section>

      {/* Courses Grid Section */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          
          <SectionHeading
            badge="OUR COURSES"
            title="Tuition Classes for All Levels"
            subtitle="Specialized academic streams designed for Intermediate, Undergraduate, and Postgraduate excellence."
          />

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '28px',
            marginBottom: '60px'
          }} className="responsive-3-col">
            {academicCourses.map((course) => {
              const IconC = course.icon;
              return (
                <Card key={course.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <div style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '12px',
                      backgroundColor: '#fef2f2',
                      color: '#dc2626',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'center'
                    }}>
                      <IconC size={24} />
                    </div>
                    <span style={{ fontSize: '0.725rem', fontWeight: 800, color: '#dc2626', backgroundColor: '#fef2f2', padding: '4px 10px', borderRadius: '6px' }}>
                      {course.badge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                    {course.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6, marginBottom: '20px' }}>
                    {course.description}
                  </p>

                  <div style={{ marginBottom: '24px' }}>
                    <div style={{ fontSize: '0.7875rem', fontWeight: 800, color: '#0f172a', uppercase: 'true', marginBottom: '8px' }}>
                      KEY FEATURES:
                    </div>
                    {course.highlights.map((h) => (
                      <div key={h} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.825rem', color: '#475569', marginBottom: '4px' }}>
                        <CheckCircle size={14} style={{ color: '#dc2626' }} />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <Button variant="primary" size="sm" fullWidth onClick={onEnquire}>
                    Enquire for Admission
                  </Button>
                </Card>
              );
            })}
          </div>

          {/* WHY STUDENTS CHOOSE US */}
          <section style={{ backgroundColor: '#f8fafc', padding: '48px', borderRadius: '24px', border: '1px solid #e2e8f0' }}>
            <SectionHeading
              badge="WHY STUDENTS CHOOSE US"
              title="Academic Highlights &amp; Faculty Excellence"
              subtitle="Our proven formula for academic improvement and student confidence."
            />

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px'
            }} className="responsive-3-col">
              {whyChooseUsItems.map((item) => {
                const IconC = item.icon;
                return (
                  <div key={item.title} style={{ backgroundColor: '#ffffff', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '10px',
                      backgroundColor: '#fef2f2',
                      color: '#dc2626',
                      display: 'flex',
                      alignItems: 'center',
                      justify: 'center',
                      marginBottom: '14px'
                    }}>
                      <IconC size={22} />
                    </div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>{item.title}</h4>
                    <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.5 }}>{item.description}</p>
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
