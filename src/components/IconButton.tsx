import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../cn';

type Variant = 'primary' | 'secondary' | 'ghost' | 'soft';
type Size = 'sm' | 'md' | 'lg';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  variant?: Variant;
  size?: Size;
  ariaLabel?: string;
}

const sizeCls: Record<Size, string> = {
  sm: 'h-[34px] w-[34px] rounded-sm',
  md: 'h-[42px] w-[42px] rounded-md',
  lg: 'h-[50px] w-[50px] rounded-md',
};
const iconBox: Record<Size, string> = {
  sm: 'h-4 w-4',
  md: 'h-[19px] w-[19px]',
  lg: 'h-[22px] w-[22px]',
};

const variantCls: Record<Variant, string> = {
  primary: 'bg-orange text-white border border-transparent hover:bg-orange-hover',
  secondary: 'bg-navy text-white border border-transparent hover:bg-navy-600',
  ghost: 'bg-white text-navy border border-line hover:bg-cloud',
  soft: 'bg-orange-tint text-orange border border-transparent hover:bg-[#FFDCCF]',
};

export function IconButton({
  icon,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  ariaLabel,
  className,
  ...rest
}: IconButtonProps) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      disabled={disabled}
      className={cn(
        'inline-flex items-center justify-center p-0 cursor-pointer',
        'transition-colors duration-200 ease-[var(--ease-standard)]',
        'disabled:opacity-45 disabled:cursor-not-allowed',
        sizeCls[size],
        variantCls[variant],
        className
      )}
      {...rest}
    >
      <span className={cn('inline-flex', iconBox[size])}>{icon}</span>
    </button>
  );
}
