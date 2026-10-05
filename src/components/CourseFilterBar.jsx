import React, { useState } from 'react';

export default function CourseFilterBar() {
  const [activeFilter, setActiveFilter] = useState('ALL COURSES');

  const filterOptions = [
    { label: 'ALL COURSES', targetId: 'hero' },
    { label: 'INTERMEDIATE', targetId: 'intermediate' },
    { label: 'DEGREE (B.COM)', targetId: 'degree' },
    { label: 'CORPORATE NON-IT', targetId: 'corporate' },
    { label: 'IT CERTIFICATIONS', targetId: 'tech' },
    { label: 'BASIC TOOLS', targetId: 'basic' }
  ];

  const handleSelect = (item) => {
    setActiveFilter(item.label);
    const element = document.getElementById(item.targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{
      position: 'relative',
      padding: '24px 0',
      background: '#f8fafc',
      borderTop: '1px solid #e2e8f0',
      borderBottom: '1px solid #e2e8f0',
      margin: '40px 0'
    }}>
      <div className="container">
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justify: 'center',
          gap: '12px',
          flexWrap: 'wrap'
        }}>
          {filterOptions.map((item) => {
            const isActive = activeFilter === item.label;
            return (
              <button
                key={item.label}
                onClick={() => handleSelect(item)}
                style={{
                  padding: '8px 20px',
                  borderRadius: '9999px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: isActive
                    ? 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
                    : '#ffffff',
                  color: isActive ? '#ffffff' : '#475569',
                  border: isActive
                    ? '1px solid #0f172a'
                    : '1px solid #cbd5e1',
                  boxShadow: isActive ? '0 4px 12px rgba(15, 23, 42, 0.15)' : '0 1px 3px rgba(15, 23, 42, 0.04)'
                }}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
