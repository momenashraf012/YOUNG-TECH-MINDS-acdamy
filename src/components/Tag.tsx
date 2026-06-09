import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../cn';

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  dotColor?: string;
  active?: boolean;
  onRemove?: () => void;
}

export function Tag({ children, dotColor, active = false, onRemove, className, onClick, ...rest }: TagProps) {
  return (
    <span
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-[7px] font-en font-medium text-[13px] leading-none',
        'px-3 py-[7px] rounded-pill border',
        active ? 'bg-navy text-white border-transparent' : 'bg-white text-ink border-line',
        onClick && 'cursor-pointer',
        className,
      )}
      {...rest}
    >
      {dotColor ? <span className="h-[7px] w-[7px] rounded-full" style={{ background: dotColor }} /> : null}
      {children}
      {onRemove ? (
        <button
          type="button"
          aria-label="Remove"
          onClick={onRemove}
          className={cn(
            'inline-flex items-center justify-center h-4 w-4 -me-[3px] p-0 border-0 rounded-full cursor-pointer text-xs leading-none text-inherit',
            active ? 'bg-white/20' : 'bg-cloud',
          )}
        >
          ×
        </button>
      ) : null}
    </span>
  );
}
