import React, { useState } from 'react';
import { Phone, CheckCircle2, Send, ShieldCheck } from 'lucide-react';

export default function AssessmentSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    program: 'Intermediate Tuitions (TS & AP Board)',
    mode: 'Offline Classroom Coaching',
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
                1-ON-1 COUNSELLING & CAREER ASSESSMENT
              </div>

              <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', fontWeight: 800, color: '#0f172a', marginBottom: '16px', lineHeight: 1.2 }}>
                Schedule Your 1-on-1 <br className="desktop-only" />
                <span className="gradient-text">Academic Audit or Career Assessment.</span>
              </h2>

              <p style={{ color: '#475569', fontSize: '0.95rem', marginBottom: '28px', lineHeight: 1.6 }}>
                Receive a personalized skill map, course roadmap, and career pathway analysis with our senior faculty. Zero cost, no commitment required.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={18} style={{ color: '#2563eb', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: '#0f172a', fontWeight: 600 }}>
                    Personalized Learning Pathway & Stream Assessment
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={18} style={{ color: '#2563eb', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: '#0f172a', fontWeight: 600 }}>
                    1-on-1 Guidance with Senior Academic & Corporate Faculty
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <CheckCircle2 size={18} style={{ color: '#2563eb', flexShrink: 0 }} />
                  <span style={{ fontSize: '0.9rem', color: '#0f172a', fontWeight: 600 }}>
                    Comprehensive Skill Gap Analysis & Industry Roadmap
                  </span>
                </div>
              </div>

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
                    DIRECT COUNSELLING HELPLINE
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
                    Assessment Scheduled!
                  </h3>
                  <p style={{ color: '#475569', fontSize: '0.9rem', marginBottom: '24px' }}>
                    Thank you, {formData.fullName || 'Student'}! Our academic counselor will call you shortly at {formData.mobile || 'your phone number'} to confirm your slot.
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
                      placeholder="e.g. Rahul Sharma"
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
                        placeholder="rahul@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        style={inputStyle}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>PROGRAM OF INTEREST</label>
                    <select
                      value={formData.program}
                      onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                      style={inputStyle}
                    >
                      <option style={optionStyle} value="Intermediate Tuitions (TS & AP Board)">Intermediate Tuitions (TS & AP Board)</option>
                      <option style={optionStyle} value="Tuitions for B.Com (Gen, Comp & Honors)">Tuitions for B.Com (Gen, Comp & Honors)</option>
                      <option style={optionStyle} value="Corporate Trainings (Finance & Accounting)">Corporate Trainings (Finance & Accounting)</option>
                      <option style={optionStyle} value="Corporate Trainings (Human Resources)">Corporate Trainings (Human Resources)</option>
                      <option style={optionStyle} value="IT & Technology Certifications">IT & Technology Certifications</option>
                      <option style={optionStyle} value="Specialized Non-IT Operations">Specialized Non-IT Operations</option>
                      <option style={optionStyle} value="Basic Courses & Office Tools">Basic Courses & Office Tools</option>
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>MESSAGE / SPECIFIC REQUIREMENTS</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us your current stream, college/year, or career goal..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{ ...inputStyle, resize: 'vertical' }}
                    />
                  </div>

                  <button type="submit" className="btn-blue-light" style={{ padding: '14px', fontSize: '0.95rem', width: '100%', marginTop: '6px' }}>
                    <Send size={16} /> Enquire / Request Free Consultation And Resources
                  </button>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: '#64748b', fontSize: '0.72rem', marginTop: '4px' }}>
                    <ShieldCheck size={14} style={{ color: '#059669' }} />
                    <span>Your data is 100% secure & confidential. Zero spam policy.</span>
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
