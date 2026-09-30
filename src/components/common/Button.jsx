import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  icon: Icon,
  onClick,
  type = 'button',
  fullWidth = false,
  className = ''
}) {
  const baseStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    justify: 'center',
    gap: '8px',
    fontWeight: 600,
    fontFamily: 'inherit',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.25s ease',
    border: 'none',
    width: fullWidth ? '100%' : 'auto',
    textDecoration: 'none'
  };

  const sizes = {
    sm: { padding: '8px 16px', fontSize: '0.85rem' },
    md: { padding: '12px 24px', fontSize: '0.925rem' },
    lg: { padding: '14px 32px', fontSize: '1rem' }
  };

  const variants = {
    primary: {
      backgroundColor: '#dc2626',
      color: '#ffffff',
      boxShadow: '0 4px 14px rgba(220, 38, 38, 0.3)'
    },
    navy: {
      backgroundColor: '#0f172a',
      color: '#ffffff',
      boxShadow: '0 4px 14px rgba(15, 23, 42, 0.3)'
    },
    secondary: {
      backgroundColor: '#ffffff',
      color: '#0f172a',
      border: '1.5px solid #cbd5e1',
      boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)'
    },
    outline: {
      backgroundColor: 'transparent',
      color: '#dc2626',
      border: '1.5px solid #dc2626'
    }
  };

  const currentSize = sizes[size] || sizes.md;
  const currentVariant = variants[variant] || variants.primary;

  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn-custom ${className}`}
      style={{
        ...baseStyles,
        ...currentSize,
        ...currentVariant
      }}
      onMouseEnter={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.backgroundColor = '#b91c1c';
          e.currentTarget.style.transform = 'translateY(-2px)';
        } else if (variant === 'navy') {
          e.currentTarget.style.backgroundColor = '#1e293b';
          e.currentTarget.style.transform = 'translateY(-2px)';
        } else if (variant === 'secondary') {
          e.currentTarget.style.backgroundColor = '#f8fafc';
          e.currentTarget.style.borderColor = '#94a3b8';
          e.currentTarget.style.transform = 'translateY(-2px)';
        } else if (variant === 'outline') {
          e.currentTarget.style.backgroundColor = '#fef2f2';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }
      }}
      onMouseLeave={(e) => {
        if (variant === 'primary') {
          e.currentTarget.style.backgroundColor = '#dc2626';
          e.currentTarget.style.transform = 'translateY(0)';
        } else if (variant === 'navy') {
          e.currentTarget.style.backgroundColor = '#0f172a';
          e.currentTarget.style.transform = 'translateY(0)';
        } else if (variant === 'secondary') {
          e.currentTarget.style.backgroundColor = '#ffffff';
          e.currentTarget.style.borderColor = '#cbd5e1';
          e.currentTarget.style.transform = 'translateY(0)';
        } else if (variant === 'outline') {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.transform = 'translateY(0)';
        }
      }}
    >
      <span>{children}</span>
      {Icon && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 18 : 16} />}
    </button>
  );
}
