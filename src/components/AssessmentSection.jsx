import React, { useState } from 'react';
import { Phone, CheckCircle2, Send, ShieldCheck } from 'lucide-react';

export default function AssessmentSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    program: 'Tuitions For Intermediate',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="assessment" className="section-spacing" style={{ backgroundColor: '#ffffff', position: 'relative' }}>
      <div className="container">
        
        <div className="light-card" style={{
          padding: 'clamp(24px, 5vw, 44px)',
          border: '1px solid #cbd5e1',
          background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
          boxShadow: '0 20px 40px rgba(15, 23, 42, 0.07)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            alignItems: 'center'
          }}>

            {/* Left Info Column */}
            <div>
              <div className="light-pill" style={{ marginBottom: '16px' }}>
                <span className="light-pill-dot"></span>
                COURSE ENQUIRY & INFORMATION
              </div>

              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0f172a', marginBottom: '16px', lineHeight: 1.2 }}>
                Enquire About Courses Offered at <br className="desktop-only" />
                <span className="gradient-text">JK Educational Academy.</span>
              </h2>

              <p style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '28px', lineHeight: 1.6 }}>
                Get exact details on Tuitions For Intermediate, Tuitions For B. Com, 2. Corporate Trainings (Non-IT), 3. IT Courses, 4. Other Domains (Non-IT), and 5. Basic Courses.
              </p>

              {/* Direct Phone Box */}
              <div style={{
                padding: '18px 20px',
                borderRadius: '16px',
                background: 'rgba(37, 99, 235, 0.08)',
                border: '1px solid rgba(37, 99, 235, 0.2)',
                display: 'flex',
                alignItems: 'center',
                gap: '14px'
              }}>
                <div style={{
                  width: '42px', height: '42px', borderRadius: '12px',
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff'
                }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', fontWeight: 700, color: '#1d4ed8', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    DIRECT HELPLINE
                  </div>
                  <div style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginTop: '2px' }}>
                    +91 9177893905
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form Column */}
            <div>
              {submitted ? (
                <div style={{
                  padding: '40px',
                  textAlign: 'center',
                  background: 'rgba(37, 99, 235, 0.06)',
                  borderRadius: '20px',
                  border: '1px solid rgba(37, 99, 235, 0.2)'
                }}>
                  <div style={{
                    width: '60px', height: '60px', borderRadius: '50%',
                    background: '#2563eb', color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 20px', boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)'
                  }}>
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
                    Enquiry Submitted!
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.9rem', marginBottom: '24px' }}>
                    Thank you, {formData.fullName || 'Student'}! We will contact you shortly.
                  </p>
                  <button onClick={() => setSubmitted(false)} className="btn-outline-light" style={{ fontSize: '0.85rem' }}>
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  
                  <div>
                    <label style={labelStyle}>FULL NAME</label>
                    <input
                      type="text"
                      required
                      placeholder="Enter full name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      style={inputStyle}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label style={labelStyle}>MOBILE NUMBER</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        style={inputStyle}
                      />
                    </div>
                    <div>
                      <label style={labelStyle}>EMAIL ADDRESS</label>
                      <input
                        type="email"
                        required
                        placeholder="email@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>COURSE CATEGORY OF INTEREST</label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      style={inputStyle}
                    >
                      <option style={optionStyle} value="Tuitions For Intermediate">Tuitions For Intermediate</option>
                      <option style={optionStyle} value="Tuitions For B. Com">Tuitions For B. Com</option>
                      <option style={optionStyle} value="2. Corporate Trainings (Non-IT) - Finance Domain">2. Corporate Trainings (Non-IT) - Finance Domain</option>
                      <option style={optionStyle} value="2. Corporate Trainings (Non-IT) - Human Resource Domain">2. Corporate Trainings (Non-IT) - Human Resource Domain</option>
                      <option style={optionStyle} value="3. IT Courses">3. IT Courses</option>
                      <option style={optionStyle} value="4. Other Domains (Non-IT)">4. Other Domains (Non-IT)</option>
                      <option style={optionStyle} value="5. Basic Courses">5. Basic Courses</option>
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>MESSAGE</label>
                    <textarea
                      rows={3}
                      placeholder="Enter your message..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ ...inputStyle, resize: 'vertical' }}
                    />
                  </div>

                  <button type="submit" className="btn-blue-light" style={{ padding: '14px', fontSize: '0.95rem', width: '100%', marginTop: '6px' }}>
                    <Send size={16} /> Submit Course Enquiry
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: '#64748b', fontSize: '0.72rem', marginTop: '4px' }}>
                    <ShieldCheck size={14} style={{ color: '#059669' }} />
                    <span>Your data is strictly confidential.</span>
                  </div>

                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

const labelStyle = {
  display: 'block',
  fontSize: '0.7rem',
  fontWeight: 700,
  color: '#334155',
  letterSpacing: '0.06em',
  marginBottom: '6px'
};

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '10px',
  background: '#ffffff',
  border: '1px solid #cbd5e1',
  color: '#0f172a',
  fontSize: '0.88rem',
  fontFamily: 'var(--font-body)',
  outline: 'none',
  transition: 'border-color 0.2s ease'
};

const optionStyle = {
  backgroundColor: '#ffffff',
  color: '#0f172a'
};
