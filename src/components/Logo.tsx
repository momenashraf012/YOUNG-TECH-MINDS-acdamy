import type { CSSProperties } from 'react';

interface LogoProps {
  variant?: 'horizontal' | 'stacked' | 'mark' | 'wordmark';
  markSrc?: string;
  height?: number;
  reversed?: boolean;
  showTagline?: boolean;
  style?: CSSProperties;
}

export function Logo({ variant = 'horizontal', markSrc, height = 40, reversed = false, showTagline = false, style }: LogoProps) {
  const navy = reversed ? '#FFFFFF' : 'var(--color-navy)';
  const orange = 'var(--color-orange)';
  const wordSize = height * 0.52;

  const mark = markSrc ? (
    <img src={markSrc} alt="Young Tech Minds" style={{ height, width: 'auto', display: 'block' }} />
  ) : (
    <span aria-hidden style={{ display: 'inline-flex', height, width: height, borderRadius: 8, backgroundImage: 'var(--gradient-brand)' }} />
  );

  const wordmark = (
    <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
      <span style={{ fontFamily: 'var(--font-en)', fontWeight: 800, fontSize: wordSize, letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>
        <span style={{ color: navy }}>YOUNG </span>
        <span style={{ color: orange }}>TECH </span>
        <span style={{ color: navy }}>MINDS</span>
      </span>
      {showTagline ? (
        <span style={{ fontFamily: 'var(--font-en)', fontWeight: 600, fontSize: wordSize * 0.34, letterSpacing: '0.22em', color: navy, marginTop: wordSize * 0.18 }}>
          FUTURE BEGINS HERE
        </span>
      ) : null}
    </span>
  );

  if (variant === 'mark') return <span style={{ display: 'inline-flex', ...style }}>{mark}</span>;
  if (variant === 'wordmark') return <span style={{ display: 'inline-flex', ...style }}>{wordmark}</span>;

  const stacked = variant === 'stacked';
  return (
    <span
      style={{
        display: 'inline-flex',
        flexDirection: stacked ? 'column' : 'row',
        alignItems: 'center',
        gap: stacked ? height * 0.22 : height * 0.3,
        ...style,
      }}
    >
      {mark}
      {wordmark}
    </span>
  );
}
