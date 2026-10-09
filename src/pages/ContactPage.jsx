import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const contactItems = [
  {
    icon: MapPin,
    label: 'Campus Address',
    value: 'JK Educational Academy Building, Main Road, City Center, Educational District, Hyderabad'
  },
  {
    icon: Phone,
    label: 'Phone Helpline',
    value: '+91 89789 19712'
  },
  {
    icon: Mail,
    label: 'Email Address',
    value: 'info@jkeducationalacademy.com'
  },
  {
    icon: Clock,
    label: 'Operating Hours',
    value: 'Monday – Saturday: 9:00 AM to 6:30 PM (Sunday by Appointment)'
  },
];

const inputStyle = {
  width: '100%', padding: '11px 14px',
  borderRadius: '8px', border: '1.5px solid #e2e8f0',
  fontSize: '0.9rem', outline: 'none',
  backgroundColor: '#fff', color: '#0f172a',
  fontFamily: 'inherit', transition: 'border-color 0.15s ease',
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', program: 'Tuitions For Intermediate', message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please enter your full name and phone number.');
      return;
    }
    setSubmitted(true);
  };

  const Field = ({ label, required, children }) => (
    <div>
      <label style={{ display: 'block', fontSize: '0.78rem', fontWeight: 700, color: '#374151', marginBottom: '7px', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
        {label} {required && <span style={{ color: '#dc2626' }}>*</span>}
      </label>
      {children}
    </div>
  );

  return (
    <div>
      {/* Page Header */}
      <section className="page-header">
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <span style={{
            display: 'inline-block', padding: '4px 12px', borderRadius: '9999px',
            backgroundColor: 'rgba(220,38,38,0.15)', color: '#fca5a5',
            fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '14px'
          }}>GET IN TOUCH</span>
          <h1 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, color: '#fff', letterSpacing: '-0.03em', marginBottom: '16px', maxWidth: '640px' }}>
            Let's Build Your Next Step Together
          </h1>
          <p style={{ fontSize: '1rem', color: '#64748b', lineHeight: 1.65, maxWidth: '520px' }}>
            Reach out for admissions or course details for JK Educational Academy.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: '48px', alignItems: 'start' }} className="responsive-2-col">

            {/* Left: Contact Info */}
            <div>
              <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', marginBottom: '8px', letterSpacing: '-0.025em' }}>
                Contact Information
              </h2>
              <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '32px', lineHeight: 1.65 }}>
                Visit our centre or reach out directly. We're happy to help with any questions.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
                {contactItems.map((item) => {
                  const IconC = item.icon;
                  return (
                    <div key={item.label} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                      <div style={{
                        width: '42px', height: '42px', borderRadius: '10px',
                        backgroundColor: '#fef2f2', color: '#dc2626',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0
                      }}>
                        <IconC size={20} />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '2px' }}>{item.label}</div>
                        <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0f172a', lineHeight: 1.5 }}>{item.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right: Contact Form */}
            <div style={{
              backgroundColor: '#ffffff', borderRadius: '16px', border: '1px solid #e2e8f0',
              padding: '36px', boxShadow: '0 4px 20px rgba(15,23,42,0.05)'
            }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '24px 0' }}>
                  <div style={{
                    width: '60px', height: '60px', borderRadius: '50%',
                    backgroundColor: '#f0fdf4', color: '#16a34a',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 20px auto'
                  }}>
                    <CheckCircle size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px', letterSpacing: '-0.025em' }}>
                    Enquiry Received!
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.65, marginBottom: '24px' }}>
                    Thank you <strong style={{ color: '#0f172a' }}>{formData.name}</strong>. Our team will contact you at <strong style={{ color: '#0f172a' }}>{formData.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    style={{
                      padding: '10px 24px', backgroundColor: '#f8fafc', color: '#0f172a',
                      border: '1.5px solid #e2e8f0', borderRadius: '8px', cursor: 'pointer',
                      fontSize: '0.875rem', fontWeight: 600, transition: 'all 0.2s'
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', marginBottom: '6px', letterSpacing: '-0.025em' }}>
                    Send an Enquiry
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '24px' }}>
                    Fill in your details and we'll get back to you with program information.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    <Field label="Full Name" required>
                      <input
                        type="text" required placeholder="Enter your full name"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused('')}
                        style={{ ...inputStyle, borderColor: focused === 'name' ? '#dc2626' : '#e2e8f0' }}
                      />
                    </Field>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                      <Field label="Email Address">
                        <input
                          type="email" placeholder="name@email.com"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          onFocus={() => setFocused('email')}
                          onBlur={() => setFocused('')}
                          style={{ ...inputStyle, borderColor: focused === 'email' ? '#dc2626' : '#e2e8f0' }}
                        />
                      </Field>
                      <Field label="Phone Number" required>
                        <input
                          type="tel" required placeholder="+91 89789 19712"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          onFocus={() => setFocused('phone')}
                          onBlur={() => setFocused('')}
                          style={{ ...inputStyle, borderColor: focused === 'phone' ? '#dc2626' : '#e2e8f0' }}
                        />
                      </Field>
                    </div>

                    <Field label="Interested Category">
                      <select
                        value={formData.program}
                        onChange={e => setFormData({ ...formData, program: e.target.value })}
                        style={{ ...inputStyle, cursor: 'pointer' }}
                      >
                        <option>Tuitions For Intermediate (M.P.C, BiPC, MEC, CEC, AEC)</option>
                        <option>Tuitions For Graduation (B.Com, BBA)</option>
                        <option>Tuitions For Masters (M.Com, MBA)</option>
                        <option>2. Corporate Trainings (Non-IT) - Finance Domain</option>
                        <option>2. Corporate Trainings (Non-IT) - Human Resource Domain</option>
                        <option>3. IT Courses</option>
                        <option>4. Other Domains (Non-IT)</option>
                        <option>5. Basic Courses</option>
                      </select>
                    </Field>

                    <Field label="Message">
                      <textarea
                        rows={4} placeholder="Write your questions or message..."
                        value={formData.message}
                        onChange={e => setFormData({ ...formData, message: e.target.value })}
                        onFocus={() => setFocused('message')}
                        onBlur={() => setFocused('')}
                        style={{ ...inputStyle, borderColor: focused === 'message' ? '#dc2626' : '#e2e8f0', resize: 'none' }}
                      />
                    </Field>

                    <button
                      type="submit"
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                        width: '100%', padding: '13px', backgroundColor: '#dc2626', color: '#fff',
                        border: 'none', borderRadius: '10px', cursor: 'pointer',
                        fontSize: '0.95rem', fontWeight: 700, letterSpacing: '-0.01em',
                        boxShadow: '0 2px 10px rgba(220,38,38,0.3)', marginTop: '4px',
                        transition: 'all 0.2s ease'
                      }}
                    >
                      <Send size={16} />
                      Submit Enquiry
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .responsive-2-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
