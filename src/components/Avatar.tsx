import type { HTMLAttributes } from 'react';
import { cn } from '../cn';

type SizeKey = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  src?: string;
  name?: string;
  size?: SizeKey | number;
  ring?: boolean;
  square?: boolean;
}

const sizes: Record<SizeKey, number> = { xs: 28, sm: 36, md: 48, lg: 64, xl: 88 };

export function Avatar({
  src,
  name = '',
  size = 'md',
  ring = false,
  square = false,
  className,
  style,
  ...rest
}: AvatarProps) {
  const px = typeof size === 'number' ? size : sizes[size];
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
  return (
    <span
      className={cn(
        'inline-flex items-center justify-center flex-none overflow-hidden bg-navy-tint text-navy font-en font-bold',
        square ? 'rounded-md' : 'rounded-pill',
        className
      )}
      style={{
        width: px,
        height: px,
        fontSize: px * 0.38,
        boxShadow: ring ? '0 0 0 3px #fff, 0 0 0 5px var(--color-orange)' : undefined,
        ...style,
      }}
      {...rest}
    >
      {src ? <img src={src} alt={name} className="h-full w-full object-cover" /> : initials || '?'}
    </span>
  );
}
