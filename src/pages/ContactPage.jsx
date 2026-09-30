import React, { useState } from 'react';
import SectionHeading from '../components/common/SectionHeading';
import Card from '../components/common/Card';
import Button from '../components/common/Button';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'Intermediate Tuition',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert('Please enter your full name and phone number.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div style={{ textAlign: 'left' }}>
      
      {/* Header */}
      <section style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '60px 0' }}>
        <div className="container">
          <SectionHeading
            badge="CONTACT US"
            title="Let's Build Your Next Step"
            subtitle="Reach out to JK Educational Academy for admissions, corporate training details, or 1-on-1 career counselling."
            light
          />
        </div>
      </section>

      {/* Main Form & Contact Info */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '48px',
            alignItems: 'start'
          }} className="responsive-2-col">
            
            {/* Left Contact Info */}
            <div>
              <SectionHeading
                badge="ACADEMY LOCATION"
                title="Get in Touch with Our Team"
                subtitle="Visit our main center or contact us directly via phone or email."
                align="left"
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: '#fef2f2',
                    color: '#dc2626',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    flexShrink: 0
                  }}>
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a' }}>Campus Address</h4>
                    <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.5 }}>
                      JK Educational Academy Building, Main Road, City Center, Educational District
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: '#fef2f2',
                    color: '#dc2626',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    flexShrink: 0
                  }}>
                    <Phone size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a' }}>Phone Helpline</h4>
                    <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
                      +91 98765 43210 / +91 98765 43211
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: '#fef2f2',
                    color: '#dc2626',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    flexShrink: 0
                  }}>
                    <Mail size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a' }}>Email Address</h4>
                    <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
                      info@jkeducationalacademy.com
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '12px',
                    backgroundColor: '#fef2f2',
                    color: '#dc2626',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    flexShrink: 0
                  }}>
                    <Clock size={22} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#0f172a' }}>Operating Hours</h4>
                    <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
                      Monday – Saturday: 9:00 AM to 6:30 PM (Sunday by Appointment)
                    </p>
                  </div>
                </div>
              </div>

              <div style={{
                backgroundColor: '#f8fafc',
                borderRadius: '16px',
                padding: '20px',
                border: '1px solid #e2e8f0',
                fontSize: '0.875rem',
                color: '#475569'
              }}>
                💡 <strong>Walk-in Counselling:</strong> You are welcome to visit our center directly for batch schedules, course brochures, and counselor interactions.
              </div>
            </div>

            {/* Right Contact Form */}
            <div style={{
              backgroundColor: '#f8fafc',
              borderRadius: '24px',
              padding: '40px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 4px 20px rgba(15, 23, 42, 0.04)'
            }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 10px' }}>
                  <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: '#ecfdf5',
                    color: '#10b981',
                    display: 'flex',
                    alignItems: 'center',
                    justify: 'center',
                    margin: '0 auto 20px auto'
                  }}>
                    <CheckCircle size={36} />
                  </div>
                  <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
                    Enquiry Received!
                  </h3>
                  <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, marginBottom: '24px' }}>
                    Thank you <strong>{formData.name}</strong>. Our team will contact you shortly at <strong>{formData.phone}</strong>.
                  </p>
                  <Button variant="secondary" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
                    Send an Enquiry
                  </h3>
                  <p style={{ fontSize: '0.875rem', color: '#64748b', marginBottom: '24px' }}>
                    Fill in your details below and we will get back to you with program information.
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '8px',
                          border: '1px solid #cbd5e1',
                          fontSize: '0.9rem',
                          outline: 'none',
                          backgroundColor: 'white'
                        }}
                      />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }} className="responsive-2-col">
                      <div>
                        <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                          EMAIL ADDRESS
                        </label>
                        <input
                          type="email"
                          placeholder="name@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '12px 14px',
                            borderRadius: '8px',
                            border: '1px solid #cbd5e1',
                            fontSize: '0.9rem',
                            outline: 'none',
                            backgroundColor: 'white'
                          }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                          PHONE NUMBER *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="+91 98765 43210"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          style={{
                            width: '100%',
                            padding: '12px 14px',
                            borderRadius: '8px',
                            border: '1px solid #cbd5e1',
                            fontSize: '0.9rem',
                            outline: 'none',
                            backgroundColor: 'white'
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                        INTERESTED PROGRAM
                      </label>
                      <select
                        value={formData.program}
                        onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '8px',
                          border: '1px solid #cbd5e1',
                          fontSize: '0.9rem',
                          backgroundColor: 'white',
                          outline: 'none'
                        }}
                      >
                        <option>Intermediate Tuition (Civics / Eco / Commerce)</option>
                        <option>Undergraduate Tuition (B.Com / BBA)</option>
                        <option>Postgraduate Tuition (M.Com / MBA)</option>
                        <option>IT Corporate Training (Full Stack / Software Testing)</option>
                        <option>Non-IT Business Process Training</option>
                        <option>Fresher Interview Preparation</option>
                        <option>One-to-One Career Counselling</option>
                      </select>
                    </div>

                    <div>
                      <label style={{ display: 'block', fontSize: '0.825rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                        MESSAGE
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Write your questions or message..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        style={{
                          width: '100%',
                          padding: '12px 14px',
                          borderRadius: '8px',
                          border: '1px solid #cbd5e1',
                          fontSize: '0.9rem',
                          outline: 'none',
                          backgroundColor: 'white',
                          resize: 'none'
                        }}
                      />
                    </div>

                    <Button type="submit" variant="primary" size="lg" icon={Send} fullWidth style={{ marginTop: '10px' }}>
                      Submit Enquiry
                    </Button>
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
