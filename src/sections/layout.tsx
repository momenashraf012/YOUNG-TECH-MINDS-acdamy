import type { CSSProperties, ReactNode } from 'react';
import { cn } from '../cn';
import type { Dir } from '../types';

export function Container({ children, className, style }: { children: ReactNode; className?: string; style?: CSSProperties }) {
  return (
    <div className={cn('container-ytm', className)} style={style}>
      {children}
    </div>
  );
}

export function Eyebrow({ children, center }: { children: ReactNode; center?: boolean }) {
  return <div className={cn('overline mb-3', center ? 'text-center' : 'text-start')}>{children}</div>;
}

export function SectionHead({
  eyebrow,
  title,
  sub,
  center,
  dir,
}: {
  eyebrow?: string;
  title: string;
  sub?: string;
  center?: boolean;
  dir: Dir;
}) {
  const font = dir === 'rtl' ? 'font-ar' : 'font-en';
  return (
    <div className={cn(center ? 'text-center max-w-[680px] mx-auto' : 'text-start max-w-[620px]')}>
      {eyebrow ? <Eyebrow center={center}>{eyebrow}</Eyebrow> : null}
      <h2 className={cn(font, 'text-[clamp(28px,3.4vw,38px)] leading-[1.2] text-navy m-0', dir === 'rtl' ? 'tracking-normal' : 'tracking-[-0.02em]')}>
        {title}
      </h2>
      {sub ? <p className={cn(font, 'text-lg leading-[1.6] text-slate mt-3.5')}>{sub}</p> : null}
    </div>
  );
}
