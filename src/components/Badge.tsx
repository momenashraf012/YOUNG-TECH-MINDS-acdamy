import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../cn';
import type { BadgeColor } from '../types';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  color?: BadgeColor;
  variant?: 'soft' | 'solid';
  icon?: ReactNode;
}

const solidCls: Record<BadgeColor, string> = {
  navy: 'bg-navy text-white',
  orange: 'bg-orange text-white',
  teal: 'bg-teal text-white',
  yellow: 'bg-yellow text-navy',
  slate: 'bg-slate text-white',
};
const softCls: Record<BadgeColor, string> = {
  navy: 'bg-navy-tint text-navy',
  orange: 'bg-orange-tint text-orange-press',
  teal: 'bg-teal-tint text-teal-ink',
  yellow: 'bg-yellow-tint text-yellow-ink',
  slate: 'bg-cloud text-slate',
};

export function Badge({ children, color = 'navy', variant = 'soft', icon, className, ...rest }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-[5px] font-en font-semibold text-xs leading-none tracking-[0.01em]',
        'px-[10px] py-[5px] rounded-pill',
        variant === 'solid' ? solidCls[color] : softCls[color],
        className,
      )}
      {...rest}
    >
      {icon ? <span className="inline-flex h-[13px] w-[13px]">{icon}</span> : null}
      {children}
    </span>
  );
}
