import React from 'react';
import { ArrowLeft, ShieldCheck, CheckCircle2, Lock, FileText, PhoneCall, Mail } from 'lucide-react';

export default function PrivacyPolicyPage({ onBack }) {
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
              <ShieldCheck size={22} />
            </div>
            <span style={{
              fontSize: '0.75rem', fontWeight: 700, color: '#38bdf8',
              letterSpacing: '0.08em', textTransform: 'uppercase'
            }}>LEGAL DOCUMENT</span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 800,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            marginBottom: '12px'
          }}>
            Privacy Policy
          </h1>
          <p style={{ fontSize: '1rem', color: '#94a3b8', maxWidth: '640px', lineHeight: 1.6 }}>
            JK Educational Academy is committed to safeguarding the privacy and personal information of our students, guardians, and website visitors.
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
                <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginTop: '2px' }}>Data Protection & Privacy Policy</h2>
              </div>
              <span style={{ fontSize: '0.8rem', color: '#64748b', backgroundColor: '#f1f5f9', padding: '6px 12px', borderRadius: '8px', fontWeight: 600 }}>
                Effective Date: October 2026
              </span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', color: '#334155', lineHeight: 1.75, fontSize: '0.95rem' }}>
              
              {/* Section 1 */}
              <div>
                <h3 style={sectionHeadingStyle}>1. Information We Collect</h3>
                <p style={{ marginBottom: '12px' }}>
                  When you enquire or register for academic tuitions (Intermediate M.P.C, BiPC, MEC, CEC, AEC; Graduation B.Com, BBA; Masters M.Com, MBA) or Corporate Training programs, we collect personal information necessary to assist you. This includes:
                </p>
                <ul style={bulletListStyle}>
                  <li><strong>Personal Identifiers:</strong> Full Name, Mobile Number, Email Address.</li>
                  <li><strong>Academic Preferences:</strong> Stream of interest (Intermediate, Graduation, Masters, Corporate Non-IT, IT, Basic Courses).</li>
                  <li><strong>Communication Records:</strong> Messages, feedback, or enquiry notes submitted through our helpline forms.</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div>
                <h3 style={sectionHeadingStyle}>2. Purpose of Data Usage</h3>
                <p style={{ marginBottom: '12px' }}>
                  The collected information is used solely for legitimate educational and administrative purposes:
                </p>
                <ul style={bulletListStyle}>
                  <li>Providing academic counseling, course syllabus details, and batch timings.</li>
                  <li>Processing student registrations and managing academic records.</li>
                  <li>Sending notification alerts regarding class schedules, examination updates, and placement opportunities.</li>
                  <li>Responding to helpline inquiries submitted via phone (+91 89789 19712) or online forms.</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div>
                <h3 style={sectionHeadingStyle}>3. Strict Non-Disclosure Policy</h3>
                <p>
                  We treat all student and guardian information as strictly confidential. <strong>JK Educational Academy does not sell, rent, lease, or trade personal data to third-party marketing companies.</strong> Data is accessible only by authorised academy counselors and administrative staff.
                </p>
              </div>

              {/* Section 4 */}
              <div>
                <h3 style={sectionHeadingStyle}>4. Data Security Safeguards</h3>
                <p>
                  We implement robust administrative, physical, and technical security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. Online form transmissions are encrypted using standard SSL (HTTPS) technology.
                </p>
              </div>

              {/* Section 5 */}
              <div>
                <h3 style={sectionHeadingStyle}>5. Student Rights & Control</h3>
                <p style={{ marginBottom: '12px' }}>
                  You retain complete control over your personal data:
                </p>
                <ul style={bulletListStyle}>
                  <li>You may request corrections or updates to your registered phone number or email address.</li>
                  <li>You can request deletion of your enquiry data if you no longer wish to receive updates.</li>
                  <li>You may opt out of promotional communications at any time.</li>
                </ul>
              </div>

              {/* Section 6 */}
              <div style={{
                backgroundColor: '#f8fafc',
                borderRadius: '14px',
                padding: '24px',
                border: '1px solid #e2e8f0',
                marginTop: '12px'
              }}>
                <h3 style={{ ...sectionHeadingStyle, marginBottom: '8px' }}>6. Contact Us Regarding Privacy</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: '16px' }}>
                  If you have questions or concerns regarding our Privacy Policy or data handling practices, please reach out to us:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.88rem', fontWeight: 600, color: '#0f172a' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <PhoneCall size={16} style={{ color: '#2563eb' }} /> Helpline: +91 89789 19712
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Mail size={16} style={{ color: '#2563eb' }} /> Email: info@jkeducationalacademy.com
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
