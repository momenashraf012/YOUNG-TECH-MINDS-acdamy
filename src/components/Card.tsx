import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../cn';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  /** Color string for the top accent bar, e.g. 'var(--color-orange)'. */
  accent?: string;
  padding?: number;
  interactive?: boolean;
}

export function Card({
  children,
  accent,
  padding = 24,
  interactive = false,
  className,
  style,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        'relative overflow-hidden bg-white border border-line rounded-lg shadow-card',
        'transition-[box-shadow,transform] duration-200 ease-[var(--ease-standard)]',
        interactive && 'cursor-pointer hover:shadow-md hover:-translate-y-[3px]',
        className
      )}
      style={{ padding, ...style }}
      {...rest}
    >
      {accent ? (
        <span className="absolute top-0 start-0 h-1 w-full" style={{ background: accent }} />
      ) : null}
      {children}
    </div>
  );
}
