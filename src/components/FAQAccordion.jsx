import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqList } from '../data/academyData';
import SectionHeading from './common/SectionHeading';

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section id="faq" className="section-padding" style={{ backgroundColor: '#ffffff' }}>
      <div className="container" style={{ maxWidth: '840px' }}>
        
        <SectionHeading
          badge="FREQUENTLY ASKED QUESTIONS"
          title="Questions &amp; Answers"
          subtitle="Find clear answers to common questions about our academic tuition, corporate training, counselling, and placement support."
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqList.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={item.question}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '14px',
                  border: isOpen ? '1.5px solid #dc2626' : '1px solid #e2e8f0',
                  boxShadow: isOpen ? '0 4px 14px rgba(220, 38, 38, 0.08)' : '0 2px 6px rgba(15, 23, 42, 0.03)',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease',
                  textAlign: 'left'
                }}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'space-between',
                    textAlign: 'left',
                    fontWeight: 700,
                    fontSize: '1.025rem',
                    color: isOpen ? '#dc2626' : '#0f172a',
                    border: 'none',
                    backgroundColor: 'transparent',
                    cursor: 'pointer'
                  }}
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.25s ease',
                      color: isOpen ? '#dc2626' : '#64748b',
                      flexShrink: 0,
                      marginLeft: '12px'
                    }}
                  />
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 24px 20px 24px',
                    fontSize: '0.925rem',
                    color: '#475569',
                    lineHeight: 1.65,
                    borderTop: '1px solid #f1f5f9',
                    paddingTop: '16px'
                  }}>
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
