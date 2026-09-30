import React from 'react';

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = 'center',
  light = false
}) {
  return (
    <div style={{
      textAlign: align,
      maxWidth: align === 'center' ? '760px' : '100%',
      margin: align === 'center' ? '0 auto 48px auto' : '0 0 36px 0'
    }}>
      {badge && (
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '6px 14px',
          borderRadius: '9999px',
          backgroundColor: light ? 'rgba(255, 255, 255, 0.12)' : '#fef2f2',
          color: light ? '#fca5a5' : '#dc2626',
          border: light ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid #fca5a5',
          fontSize: '0.8rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
          marginBottom: '14px'
        }}>
          {badge}
        </div>
      )}

      {title && (
        <h2 style={{
          fontSize: '2.4rem',
          fontWeight: 800,
          color: light ? '#ffffff' : '#0f172a',
          lineHeight: 1.2,
          letterSpacing: '-0.02em',
          marginBottom: '14px'
        }}>
          {title}
        </h2>
      )}

      {subtitle && (
        <p style={{
          fontSize: '1.05rem',
          color: light ? '#94a3b8' : '#475569',
          lineHeight: 1.6
        }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
