import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Tag } from 'lucide-react';

export default function EnquiryModal({ isOpen, onClose, selectedCourse }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'Tuitions For Intermediate',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedCourse?.title) {
      setFormData(prev => ({
        ...prev,
        course: selectedCourse.title
      }));
    }
  }, [selectedCourse]);

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
      backgroundColor: 'rgba(15, 23, 42, 0.65)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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
            justifyContent: 'center',
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
              Enquiry & Admission Request Sent!
            </h3>
            <p style={{ color: '#475569', fontSize: '0.88rem', marginBottom: '24px' }}>
              Thank you, {formData.name || 'Student'}! Our HYD counselors will contact you shortly regarding batch timings and fee payment details.
            </p>
            <button onClick={handleClose} className="btn-blue-light" style={{ width: '100%', justifyContent: 'center' }}>
              Close Window
            </button>
          </div>
        ) : (
          <div>
            <div className="light-pill" style={{ marginBottom: '10px' }}>
              <span className="light-pill-dot"></span>
              ADMISSION & TUITION ENQUIRY
            </div>

            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
              {selectedCourse?.title ? `Enroll in ${selectedCourse.title}` : 'Course Admission Enquiry'}
            </h3>
            
            {selectedCourse?.fee && (
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '10px',
                backgroundColor: 'rgba(37, 99, 235, 0.08)',
                border: '1px solid rgba(37, 99, 235, 0.2)',
                color: '#1d4ed8',
                fontSize: '0.85rem',
                fontWeight: 800,
                marginBottom: '16px'
              }}>
                <Tag size={15} />
                <span>HYD Tuition Fee: {selectedCourse.fee} {selectedCourse.feePeriod || ''}</span>
              </div>
            )}

            <p style={{ fontSize: '0.84rem', color: '#64748b', marginBottom: '20px' }}>
              Fill in your details below for instant course syllabus, batch timings & enrollment steps.
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
                  placeholder="+91 89789 19712"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>SELECTED COURSE / PROGRAM</label>
                <input
                  type="text"
                  required
                  value={formData.course}
                  onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                  style={inputStyle}
                />
              </div>

              <div>
                <label style={labelStyle}>MESSAGE / PREFERRED BATCH (CLASSROOM / ONLINE)</label>
                <textarea
                  rows={2}
                  placeholder="e.g. Prefer morning batch at HYD campus or online..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{ ...inputStyle, resize: 'vertical' }}
                />
              </div>

              <button type="submit" className="btn-blue-light" style={{ width: '100%', justifyContent: 'center', marginTop: '6px', padding: '12px' }}>
                <Send size={15} /> Submit Enrollment Enquiry
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
