import { cn } from '../cn';

interface StatProps {
  value: string;
  label: string;
  tone?: 'orange' | 'navy';
  align?: 'center' | 'start';
}

export function Stat({ value, label, tone = 'orange', align = 'center' }: StatProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-1',
        align === 'center' ? 'items-center text-center' : 'items-start text-start'
      )}
    >
      <span
        className={cn(
          'font-en font-extrabold leading-none text-[clamp(32px,4vw,44px)]',
          tone === 'orange' ? 'text-orange' : 'text-navy'
        )}
      >
        {value}
      </span>
      <span className="font-en text-sm font-medium text-slate">{label}</span>
    </div>
  );
}
