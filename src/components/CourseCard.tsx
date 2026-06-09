import type { ReactNode } from 'react';
import { Card } from './Card';
import { Badge } from './Badge';
import { Button } from './Button';
import { cn } from '../cn';
import type { BadgeColor, CourseTone } from '../types';

interface CourseCardProps {
  title: string;
  stack?: string;
  blurb?: string;
  icon?: ReactNode;
  iconTone?: CourseTone;
  level?: string;
  levelColor?: BadgeColor;
  ageText?: string;
  metaText?: string;
  priceText?: string;
  ctaLabel?: string;
  onCta?: () => void;
  rtl?: boolean;
}

const toneCls: Record<CourseTone, string> = {
  orange: 'bg-gradient-warm',
  teal: 'bg-gradient-ai',
  navy: 'bg-gradient-navy',
  yellow: 'bg-gradient-yellow-orange',
};

export function CourseCard({
  title,
  stack,
  blurb,
  icon,
  iconTone = 'orange',
  level = 'Level 1',
  levelColor = 'teal',
  ageText,
  metaText,
  priceText,
  ctaLabel = 'View details',
  onCta,
  rtl = false,
}: CourseCardProps) {
  const font = rtl ? 'font-ar' : 'font-en';
  return (
    <Card interactive padding={0} className="flex flex-col" dir={rtl ? 'rtl' : undefined}>
      <button
        type="button"
        onClick={onCta}
        className={cn('relative h-[132px] flex flex-col items-center justify-center text-left', toneCls[iconTone])}
        aria-label={title}
      >
        <span className="inline-flex h-11 w-11 text-white">{icon}</span>
        {stack ? <span className={cn(font, 'mt-2 text-[12px] font-semibold text-white/85')}>{stack}</span> : null}
        <span className="absolute top-3 start-3">
          <Badge color={levelColor} variant="solid">
            {level}
          </Badge>
        </span>
      </button>
      <div className="flex flex-1 flex-col gap-[10px] p-5">
        <h3 className={cn(font, 'text-[19px] font-bold text-navy leading-[1.3] m-0')}>{title}</h3>
        {blurb ? <p className={cn(font, 'text-sm text-slate leading-[1.55] m-0')}>{blurb}</p> : null}
        <div className={cn(font, 'mt-auto flex flex-wrap gap-x-3 gap-y-1 pt-[6px] text-[13px] text-slate')}>
          {ageText ? <span>{ageText}</span> : null}
          {metaText ? <span>· {metaText}</span> : null}
        </div>
        {priceText ? (
          <div className={cn(font, 'flex items-baseline gap-1.5 pt-1')}>
            <span className="text-[22px] font-extrabold text-navy">{priceText}</span>
          </div>
        ) : null}
        <Button variant="primary" size="sm" fullWidth onClick={onCta} className="mt-[6px]">
          {ctaLabel}
        </Button>
      </div>
    </Card>
  );
}
