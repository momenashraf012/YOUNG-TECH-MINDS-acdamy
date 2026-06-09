import type { InputHTMLAttributes } from 'react';
import { cn } from '../cn';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
}

export function Checkbox({
  checked = false,
  onChange,
  label,
  disabled = false,
  id,
  className,
  ...rest
}: CheckboxProps) {
  const cbId =
    id || (label ? `ytm-cb-${String(label).replace(/\s+/g, '-').toLowerCase()}` : undefined);
  return (
    <label
      htmlFor={cbId}
      className={cn(
        'inline-flex items-center gap-[10px] font-en text-[15px] text-ink',
        disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
        className
      )}
    >
      <span className="relative inline-flex flex-none">
        <input
          id={cbId}
          type="checkbox"
          checked={checked}
          onChange={onChange}
          disabled={disabled}
          className="absolute h-0 w-0 opacity-0"
          {...rest}
        />
        <span
          className={cn(
            'inline-flex h-[22px] w-[22px] items-center justify-center rounded-[6px] border-[1.5px]',
            'transition-[background-color,border-color] duration-[120ms] ease-[var(--ease-standard)]',
            checked ? 'bg-orange border-orange' : 'bg-white border-line'
          )}
        >
          {checked ? (
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : null}
        </span>
      </span>
      {label ? <span>{label}</span> : null}
    </label>
  );
}
