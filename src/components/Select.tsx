import type { SelectHTMLAttributes } from 'react';
import { cn } from '../cn';

type Option = string | { value: string; label: string };

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options?: Option[];
}

export function Select({
  label,
  options = [],
  disabled = false,
  id,
  className,
  ...rest
}: SelectProps) {
  const selId = id || (label ? `ytm-sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return (
    <label htmlFor={selId} className={cn('flex flex-col gap-1.5 font-en', className)}>
      {label ? <span className="text-[13px] font-semibold text-navy">{label}</span> : null}
      <span className="relative flex">
        <select
          id={selId}
          disabled={disabled}
          className={cn(
            'w-full h-[46px] ps-[14px] pe-[38px] appearance-none rounded-md border-[1.5px] border-line bg-white',
            'font-en text-[15px] text-ink outline-none',
            disabled ? 'cursor-not-allowed' : 'cursor-pointer'
          )}
          {...rest}
        >
          {options.map((o) => {
            const val = typeof o === 'string' ? o : o.value;
            const lbl = typeof o === 'string' ? o : o.label;
            return (
              <option key={val} value={val}>
                {lbl}
              </option>
            );
          })}
        </select>
        <span
          aria-hidden
          className="pointer-events-none absolute end-[14px] top-1/2 -translate-y-1/2 text-xs text-slate"
        >
          ▾
        </span>
      </span>
    </label>
  );
}
