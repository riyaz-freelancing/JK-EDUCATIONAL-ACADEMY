import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function EnquiryModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'Tuitions For Intermediate',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 2000,
      backgroundColor: 'rgba(15, 23, 42, 0.6)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justify: 'center',
      padding: '20px'
    }}>
      <div style={{
        position: 'relative',
        width: '100%',
        maxWidth: '520px',
        backgroundColor: '#ffffff',
        border: '1px solid #cbd5e1',
        borderRadius: '24px',
        padding: '32px',
        boxShadow: '0 25px 60px rgba(15, 23, 42, 0.2)',
        animation: 'modalFadeIn 0.25s ease'
      }}>
        {/* Close Button */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: '#f1f5f9',
            border: '1px solid #cbd5e1',
            color: '#0f172a',
            width: '36px',
            height: '36px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justify: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{
              width: '54px', height: '54px', borderRadius: '50%',
              background: '#2563eb', color: '#fff',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 16px', boxShadow: '0 4px 15px rgba(37, 99, 235, 0.3)'
            }}>
              <CheckCircle2 size={30} />
            </div>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
              Enquiry Received!
            </h3>
            <p style={{ color: '#475569', fontSize: '0.88rem', marginBottom: '24px' }}>
              Thank you, {formData.name || 'Student'}! Our team will contact you shortly.
            </p>
            <button onClick={handleClose} className="btn-blue-light" style={{ width: '100%', justifyContent: 'center' }}>
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="light-pill" style={{ marginBottom: '10px' }}>
              <span className="light-pill-dot"></span>
              QUICK ADMISSION ENQUIRY
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
              Course Enquiry
            </h3>
            <p style={{ fontSize: '0.84rem', color: '#64748b', marginBottom: '20px' }}>
              Fill in your details below to get instant course info.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <div>
                <label style={labelStyle}>YOUR FULL NAME</label>
                <input
                  type="text"
                  required
                  placeholder="Enter full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>PHONE / MOBILE NUMBER</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>COURSE CATEGORY OF INTEREST</label>
                <select
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
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
                  rows={2}
                  placeholder="Enter your message..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn-blue-light" style={{ width: '100%', justifyContent: 'center', marginTop: '6px', padding: '12px' }}>
                <Send size={15} /> Submit Quick Enquiry
              </button>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', color: '#64748b', fontSize: '0.7rem' }}>
                <ShieldCheck size={14} style={{ color: '#059669' }} />
                <span>Your contact details are strictly confidential.</span>
              </div>
            </form>
          </div>
        )}
      </div>

      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}

const labelStyle = {
  display: 'block',
  fontSize: '0.68rem',
  fontWeight: 700,
  color: '#334155',
  letterSpacing: '0.06em',
  marginBottom: '4px'
};

const inputStyle = {
  width: '100%',
  padding: '10px 14px',
  borderRadius: '8px',
  background: '#ffffff',
  border: '1px solid #cbd5e1',
  color: '#0f172a',
  fontSize: '0.85rem',
  fontFamily: 'var(--font-body)',
  outline: 'none'
};

const optionStyle = {
  backgroundColor: '#ffffff',
  color: '#0f172a'
};
