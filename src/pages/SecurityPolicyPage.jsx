import React from 'react';
import { ArrowLeft, Lock, CheckCircle2, PhoneCall, Mail } from 'lucide-react';

export default function SecurityPolicyPage({ onBack }) {
  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh', paddingBottom: '80px' }}>
      
      {/* Page Header */}
      <section className="page-header" style={{
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        padding: '60px 0 50px',
        color: '#ffffff',
        borderBottom: '1px solid #1e293b'
      }}>
        <div className="container">
          <button
            onClick={onBack}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              padding: '8px 16px',
              borderRadius: '9999px',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              marginBottom: '24px',
              transition: 'all 0.2s ease'
            }}
          >
            <ArrowLeft size={15} /> Back to Main Page
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{
              width: '40px', height: '40px', borderRadius: '10px',
              backgroundColor: 'rgba(37, 99, 235, 0.2)', color: '#38bdf8',
              display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>
              <Lock size={22} />
            </div>
            <span style={{
              fontSize: '0.75rem', fontWeight: 700, color: '#38bdf8',
              letterSpacing: '0.08em', textTransform: 'uppercase'
            }}>SECURITY STANDARDS</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            marginBottom: '12px'
          }}>
            Security Policy
          </h1>
          <p style={{ fontSize: '1rem', color: '#94a3b8', maxWidth: '640px', lineHeight: 1.6 }}>
            Our infrastructure, digital data security standards, and campus safety protocols for JK Educational Academy.
          </p>
        </div>
      </section>

      {/* Main Content Body */}
      <section className="section-padding">
        <div className="container" style={{ maxWidth: '920px', margin: '0 auto' }}>
          
          <div style={{
            backgroundColor: '#ffffff',
            borderRadius: '20px',
            border: '1px solid #e2e8f0',
            padding: 'clamp(24px, 5vw, 48px)',
            boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)'
          }}>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '20px', marginBottom: '32px' }}>
              <div>
                <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#2563eb', textTransform: 'uppercase', letterSpacing: '0.06em' }}>JK EDUCATIONAL ACADEMY</span>
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginTop: '2px' }}>Information & Campus Security</h2>
              </div>
              <span style={{ fontSize: '0.8rem', color: '#64748b', backgroundColor: '#f1f5f9', padding: '6px 12px', borderRadius: '8px', fontWeight: 600 }}>
                Effective Date: October 2026
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: '#334155', lineHeight: 1.75, fontSize: '0.95rem' }}>
              
              {/* Section 1 */}
              <div>
                <h3 style={sectionHeadingStyle}>1. Data Encryption & Online Security</h3>
                <p style={{ marginBottom: '12px' }}>
                  All data transmitted across our web portal (including student contact numbers, enquiry messages, and registration forms) is encrypted in transit using industry-standard SSL/TLS (HTTPS) protocols.
                </p>
              </div>

              {/* Section 2 */}
              <div>
                <h3 style={sectionHeadingStyle}>2. Campus & Facility Security</h3>
                <p style={{ marginBottom: '12px' }}>
                  JK Educational Academy maintains a secure learning environment at our campus premises:
                </p>
                <ul style={bulletListStyle}>
                  <li>Supervised campus entries with visitor logs and student identification.</li>
                  <li>Clean, safe, and well-lit classroom infrastructure.</li>
                  <li>Regular safety audits for student peace of mind.</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h3 style={sectionHeadingStyle}>3. Academic Record Integrity</h3>
                <p>
                  Student academic evaluations, mark sheets, and certification logs are backed up securely with strict role-based access control to prevent unauthorized tampering or loss.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h3 style={sectionHeadingStyle}>4. Confidentiality Controls</h3>
                <p>
                  Staff members and faculty undergo strict data privacy and security orientation to safeguard student information and preserve confidentiality.
                </p>
              </div>

              {/* Section 5 */}
              <div style={{
                backgroundColor: '#f8fafc',
                borderRadius: '14px',
                padding: '24px',
                border: '1px solid #e2e8f0',
                marginTop: '12px'
              }}>
                <h3 style={{ ...sectionHeadingStyle, marginBottom: '8px' }}>5. Security Inquiries & Reporting</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '16px' }}>
                  If you discover a security vulnerability or have concerns regarding facility security, please contact our team:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', fontWeight: 600, color: '#0f172a' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <PhoneCall size={16} style={{ color: '#2563eb' }} /> Direct Helpline: +91 89789 19712
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Mail size={16} style={{ color: '#2563eb' }} /> Security Email: info@jkeducationalacademy.com
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

const sectionHeadingStyle = {
  fontSize: '1.15rem',
  fontWeight: 800,
  color: '#0f172a',
  marginBottom: '10px',
  letterSpacing: '-0.02em'
};

const bulletListStyle = {
  paddingLeft: '22px',
  display: 'flex',
  flexDirection: 'column',
  gap: '8px'
};
