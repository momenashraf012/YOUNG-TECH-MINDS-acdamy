import type { ReactNode } from 'react';
import { Card } from './Card';
import { Badge } from './Badge';
import { Button } from './Button';
import { cn } from '../cn';
import type { BadgeColor, CourseTone } from '../types';

interface CourseCardProps {
  title: string;
  blurb?: string;
  image?: string;
  icon?: ReactNode;
  iconTone?: CourseTone;
  level?: string;
  levelColor?: BadgeColor;
  age?: string;
  lessons?: string | number;
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
  blurb,
  image,
  icon,
  iconTone = 'orange',
  level = 'Beginner',
  levelColor = 'teal',
  age,
  lessons,
  ctaLabel = 'View course',
  onCta,
  rtl = false,
}: CourseCardProps) {
  const font = rtl ? 'font-ar' : 'font-en';
  return (
    <Card interactive padding={0} className="flex flex-col" dir={rtl ? 'rtl' : undefined}>
      <div className={cn('relative h-[132px] flex items-center justify-center', toneCls[iconTone])}>
        {image ? (
          <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <span className="inline-flex h-11 w-11 text-white">{icon}</span>
        )}
        <span className="absolute top-3 start-3">
          <Badge color={levelColor} variant="solid">
            {level}
          </Badge>
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-[10px] p-5">
        <h3 className={cn(font, 'text-[19px] font-bold text-navy leading-[1.3] m-0')}>{title}</h3>
        {blurb ? (
          <p className={cn(font, 'text-sm text-slate leading-[1.55] m-0')}>{blurb}</p>
        ) : null}
        <div className="mt-auto flex gap-4 pt-[6px] font-en text-[13px] text-slate">
          {age ? <span className="inline-flex items-center gap-[5px]">Ages {age}</span> : null}
          {lessons ? (
            <span className="inline-flex items-center gap-[5px]">{lessons} lessons</span>
          ) : null}
        </div>
        <Button variant="primary" size="sm" fullWidth onClick={onCta} className="mt-[6px]">
          {ctaLabel}
        </Button>
      </div>
    </Card>
  );
}
