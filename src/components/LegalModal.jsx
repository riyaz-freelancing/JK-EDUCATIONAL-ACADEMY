import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, FileText, Lock, CheckCircle2 } from 'lucide-react';

export default function LegalModal({ isOpen, initialTab = 'privacy', onClose }) {
  const [activeTab, setActiveTab] = useState(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 2500,
      backgroundColor: 'rgba(15, 23, 42, 0.75)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justify: 'center',
      padding: '20px'
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '780px',
        maxHeight: '85vh',
        backgroundColor: '#ffffff',
        borderRadius: '24px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 25px 60px rgba(15, 23, 42, 0.3)',
        overflow: 'hidden',
        animation: 'modalFadeIn 0.25s ease'
      }}>
        {/* Modal Header */}
        <div style={{
          padding: '24px 32px 16px',
          borderBottom: '1px solid #e2e8f0',
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between',
          backgroundColor: '#f8fafc'
        }}>
          <div>
            <div className="light-pill" style={{ marginBottom: '6px' }}>
              <span className="light-pill-dot"></span>
              LEGAL & POLICIES
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              JK Educational Academy Policies
            </h3>
          </div>

          <button
            onClick={onClose}
            style={{
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              color: '#0f172a',
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Tabs */}
        <div style={{
          display: 'flex',
          gap: '8px',
          padding: '12px 32px',
          backgroundColor: '#ffffff',
          borderBottom: '1px solid #f1f5f9',
          overflowX: 'auto'
        }}>
          {[
            { id: 'privacy', label: 'Privacy Policy', icon: ShieldCheck },
            { id: 'terms', label: 'Terms & Conditions', icon: FileText },
            { id: 'security', label: 'Security Policy', icon: Lock }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  borderRadius: '9999px',
                  fontSize: '0.82rem',
                  fontWeight: isActive ? 700 : 600,
                  cursor: 'pointer',
                  border: isActive ? '1.5px solid #2563eb' : '1px solid #e2e8f0',
                  backgroundColor: isActive ? 'rgba(37, 99, 235, 0.08)' : '#ffffff',
                  color: isActive ? '#1d4ed8' : '#475569',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.2s ease'
                }}
              >
                <Icon size={15} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Modal Content Body */}
        <div style={{
          padding: '28px 32px',
          overflowY: 'auto',
          fontSize: '0.9rem',
          lineHeight: 1.7,
          color: '#334155',
          flex: 1
        }}>

          {/* 1. PRIVACY POLICY */}
          {activeTab === 'privacy' && (
            <div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
                Privacy Policy
              </h4>
              <p style={{ color: '#64748b', fontSize: '0.82rem', marginBottom: '20px' }}>
                Last updated: October 2026
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <h5 style={subHeadingStyle}>1. Information We Collect</h5>
                  <p>
                    JK Educational Academy respects your privacy. When you enquire or register for our courses (Intermediate, Graduation, Masters, Corporate Training, IT, or Basic Courses), we collect essential personal information such as your full name, contact phone number, email address, and academic category interest.
                  </p>
                </div>

                <div>
                  <h5 style={subHeadingStyle}>2. How We Use Your Information</h5>
                  <p>
                    We use your details strictly to:
                  </p>
                  <ul style={listStyle}>
                    <li>Provide course guidance, counseling, and class schedules.</li>
                    <li>Process admissions and maintain academic student records.</li>
                    <li>Send relevant updates regarding batch starts, exams, and placement opportunities.</li>
                    <li>Respond directly to direct helpline enquiries submitted via our portal.</li>
                  </ul>
                </div>

                <div>
                  <h5 style={subHeadingStyle}>3. Data Non-Disclosure & Confidentiality</h5>
                  <p>
                    Your personal information is strictly confidential. We <strong>do not sell, rent, or trade</strong> student information to third-party marketing vendors. Information is accessed only by authorised academy coordinators and counselors.
                  </p>
                </div>

                <div>
                  <h5 style={subHeadingStyle}>4. Data Rights & Opt-Out</h5>
                  <p>
                    Students and guardians have the right to request updates to their records or opt out of non-essential SMS/Email notifications at any time by contacting our direct helpline (+91 89789 19712) or visiting our campus.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 2. TERMS & CONDITIONS */}
          {activeTab === 'terms' && (
            <div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
                Terms & Conditions
              </h4>
              <p style={{ color: '#64748b', fontSize: '0.82rem', marginBottom: '20px' }}>
                Last updated: October 2026
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <h5 style={subHeadingStyle}>1. Course Enrollment & Admissions</h5>
                  <p>
                    Enrollment in Tuitions (Intermediate M.P.C, BiPC, MEC, CEC, AEC; Graduation B.Com, BBA; Masters M.Com, MBA) and Corporate Training programs is subject to seat availability and completion of admission formalities.
                  </p>
                </div>

                <div>
                  <h5 style={subHeadingStyle}>2. Code of Conduct & Attendance</h5>
                  <p>
                    Students are expected to maintain regular attendance and adhere to classroom discipline. The academy reserves the right to take administrative action in case of persistent absenteeism or inappropriate conduct.
                  </p>
                </div>

                <div>
                  <h5 style={subHeadingStyle}>3. Fee Structure & Batch Policies</h5>
                  <p>
                    Tuition fees and corporate training fees must be paid according to the agreed schedule. Batch changes or module adjustments are granted at the discretion of the management.
                  </p>
                </div>

                <div>
                  <h5 style={subHeadingStyle}>4. Intellectual Property</h5>
                  <p>
                    All study material, reference guides, tests, and training resources provided by JK Educational Academy are proprietary and intended solely for enrolled students' personal academic use.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* 3. SECURITY POLICY */}
          {activeTab === 'security' && (
            <div>
              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px' }}>
                Security Policy
              </h4>
              <p style={{ color: '#64748b', fontSize: '0.82rem', marginBottom: '20px' }}>
                Last updated: October 2026
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <h5 style={subHeadingStyle}>1. Data Protection & Encryption</h5>
                  <p>
                    Our web portal employs industry-standard SSL encryption (HTTPS) to protect all form data, enquiry submissions, and student communications in transit.
                  </p>
                </div>

                <div>
                  <h5 style={subHeadingStyle}>2. Physical & Campus Security</h5>
                  <p>
                    JK Educational Academy maintains a safe, secure learning environment equipped with modern infrastructure and supervised campus premises for all students.
                  </p>
                </div>

                <div>
                  <h5 style={subHeadingStyle}>3. Academic Record Integrity</h5>
                  <p>
                    Student academic records, assessment logs, and certificate records are stored securely with restricted access control to prevent unauthorised access or tampering.
                  </p>
                </div>

                <div>
                  <h5 style={subHeadingStyle}>4. Reporting Security Concerns</h5>
                  <p>
                    If you identify any security issue or data concern, please reach out directly to our administration team at <strong>info@jkeducationalacademy.com</strong> or call <strong>+91 89789 19712</strong>.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div style={{
          padding: '16px 32px',
          borderTop: '1px solid #e2e8f0',
          backgroundColor: '#f8fafc',
          display: 'flex',
          alignItems: 'center',
          justify: 'space-between',
          flexWrap: 'wrap',
          gap: '12px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#16a34a', fontSize: '0.78rem', fontWeight: 600 }}>
            <CheckCircle2 size={15} /> Verified JK Educational Academy Policy
          </div>
          <button
            onClick={onClose}
            className="btn-blue-light"
            style={{ padding: '8px 20px', fontSize: '0.84rem' }}
          >
            I Understand
          </button>
        </div>

      </div>

      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

const subHeadingStyle = {
  fontSize: '0.95rem',
  fontWeight: 700,
  color: '#0f172a',
  marginBottom: '6px'
};

const listStyle = {
  paddingLeft: '20px',
  marginTop: '6px',
  marginBottom: '6px'
};
