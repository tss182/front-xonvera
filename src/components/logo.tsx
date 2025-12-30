import React from 'react';

interface LogoProps {
  variant?: 'full' | 'icon';
  style?: React.CSSProperties;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'full', 
  style,
  className 
}) => {
  if (variant === 'icon') {
    // Icon-only version (just the mark)
    return (
      <svg
        width="48"
        height="48"
        viewBox="10 10 80 80"
        xmlns="http://www.w3.org/2000/svg"
        style={style}
        className={className}
      >
        <rect x="0" y="0" width="20" height="80" rx="10" transform="translate(30, 0) rotate(45 10 40)" fill="#06B6D4" />
        <path d="M15 65 L45 35" stroke="#0891B2" strokeWidth="20" strokeLinecap="round" />
        <rect x="0" y="0" width="20" height="80" rx="10" transform="translate(30, 0) rotate(-45 10 40)" fill="#06B6D4" opacity="0.9" />
        <circle cx="68" cy="12" r="6" fill="#84CC16" />
      </svg>
    );
  }

  // Full version with text
  return (
    <svg
      width="360"
      height="100"
      viewBox="0 0 360 100"
      xmlns="http://www.w3.org/2000/svg"
      style={style}
      className={className}
    >
      <defs>
        <style>
          {`.brand-text { font-family: 'Inter', sans-serif; font-weight: 700; fill: #334155; }
           .tagline-text { font-family: 'Inter', sans-serif; font-weight: 400; fill: #64748B; letter-spacing: 0.5px; }`}
        </style>
      </defs>

      <g transform="translate(10, 10)">
        <rect x="0" y="0" width="20" height="80" rx="10" transform="translate(30, 0) rotate(45 10 40)" fill="#06B6D4" />
        <path d="M15 65 L45 35" stroke="#0891B2" strokeWidth="20" strokeLinecap="round" />
        <rect x="0" y="0" width="20" height="80" rx="10" transform="translate(30, 0) rotate(-45 10 40)" fill="#06B6D4" opacity="0.9" />
        <circle cx="68" cy="12" r="6" fill="#84CC16" />
      </g>

      <g transform="translate(110, 0)">
        <text x="0" y="60" fontSize="48" className="brand-text">
          xonvera
        </text>
        <text x="2" y="80" fontSize="14" className="tagline-text">
          FINANCIAL CLARITY. SIMPLIFIED.
        </text>
      </g>
    </svg>
  );
};
