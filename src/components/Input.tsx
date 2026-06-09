import type { InputHTMLAttributes, ReactNode } from 'react';
import { cn } from '../cn';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
  helper?: string;
  error?: string;
}

export function Input({
  label,
  icon,
  helper,
  error,
  disabled = false,
  id,
  className,
  ...rest
}: InputProps) {
  const inputId = id || (label ? `ytm-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return (
    <label htmlFor={inputId} className={cn('flex flex-col gap-1.5 font-en', className)}>
      {label ? <span className="text-[13px] font-semibold text-navy">{label}</span> : null}
      <span
        className={cn(
          'flex items-center gap-[9px] h-[46px] px-[14px] rounded-md border-[1.5px]',
          'transition-[border-color,box-shadow] duration-200 ease-[var(--ease-standard)]',
          'focus-within:shadow-[0_0_0_3px_rgba(5,2,79,0.08)]',
          disabled ? 'bg-cloud' : 'bg-white',
          error ? 'border-orange' : 'border-line focus-within:border-navy'
        )}
      >
        {icon ? <span className="inline-flex h-[18px] w-[18px] text-slate">{icon}</span> : null}
        <input
          id={inputId}
          disabled={disabled}
          className="min-w-0 flex-1 h-full border-0 outline-none bg-transparent font-en text-[15px] text-ink placeholder:text-slate/70"
          {...rest}
        />
      </span>
      {error ? (
        <span className="text-xs text-orange-press">{error}</span>
      ) : helper ? (
        <span className="text-xs text-slate">{helper}</span>
      ) : null}
    </label>
  );
}
