import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../cn';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  fullWidth?: boolean;
}

const sizeCls: Record<Size, string> = {
  sm: 'px-4 py-2 text-[14px] gap-[7px] rounded-sm',
  md: 'px-[22px] py-3 text-[15px] gap-2 rounded-md',
  lg: 'px-[30px] py-[15px] text-[17px] gap-[10px] rounded-md',
};
const iconBox: Record<Size, string> = { sm: 'h-4 w-4', md: 'h-[18px] w-[18px]', lg: 'h-5 w-5' };

const variantCls: Record<Variant, string> = {
  primary: 'bg-orange text-white border border-transparent shadow-cta hover:bg-orange-hover active:bg-orange-press',
  secondary: 'bg-navy text-white border border-transparent shadow-sm hover:bg-navy-600 active:bg-indigo',
  ghost: 'bg-transparent text-navy border-[1.5px] border-navy hover:bg-navy-tint active:bg-cloud-2',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  type = 'button',
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={cn(
        'items-center justify-center font-en font-semibold leading-none cursor-pointer',
        'transition-[background-color,transform,box-shadow] duration-200 ease-[var(--ease-standard)]',
        'active:translate-y-px disabled:opacity-45 disabled:cursor-not-allowed [-webkit-tap-highlight-color:transparent]',
        fullWidth ? 'flex w-full' : 'inline-flex',
        sizeCls[size],
        variantCls[variant],
        className,
      )}
      {...rest}
    >
      {iconLeft ? <span className={cn('inline-flex', iconBox[size])}>{iconLeft}</span> : null}
      {children}
      {iconRight ? <span className={cn('inline-flex', iconBox[size])}>{iconRight}</span> : null}
    </button>
  );
}
