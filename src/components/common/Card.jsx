import React from 'react';

export default function Card({
  children,
  className = '',
  style = {},
  onClick,
  hover = true
}) {
  return (
    <div
      onClick={onClick}
      className={`${hover ? 'hover-lift' : ''} ${className}`}
      style={{
        backgroundColor: '#ffffff',
        borderRadius: '16px',
        border: '1px solid #e2e8f0',
        padding: '28px',
        boxShadow: '0 4px 12px rgba(15, 23, 42, 0.04)',
        textAlign: 'left',
        cursor: onClick ? 'pointer' : 'default',
        ...style
      }}
    >
      {children}
    </div>
  );
}
