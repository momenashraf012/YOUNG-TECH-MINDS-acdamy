import { useEffect } from 'react';
import { Button } from './Button';
import { IconButton } from './IconButton';
import { Icon } from '../icons';
import { cn } from '../cn';
import { fmtNum } from '../format';
import type { Copy, CourseItem, Dir, Lang } from '../types';

interface CourseModalProps {
  course: CourseItem | null;
  t: Copy;
  lang: Lang;
  dir: Dir;
  onClose: () => void;
  onBook: () => void;
}

export function CourseModal({ course, t, lang, dir, onClose, onBook }: CourseModalProps) {
  // Close on Escape.
  useEffect(() => {
    if (!course) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [course, onClose]);

  if (!course) return null;
  const font = lang === 'ar' ? 'font-ar' : 'font-en';
  const u = t.units;
  const meta = [
    `${course.age} ${u.ages}`,
    `${fmtNum(course.sessions, lang)} ${u.sessions}`,
    `${fmtNum(course.hours, lang)} ${u.hours}`,
  ];

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] bg-[rgba(5,2,79,0.55)] backdrop-blur-[4px] flex items-center justify-center p-5"
    >
      <div
        dir={dir}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-[560px] max-h-[88vh] flex flex-col bg-white rounded-xl shadow-xl overflow-hidden"
      >
        <div className="bg-gradient-brand px-6 py-[22px] flex items-start justify-between">
          <div>
            <div className={cn(font, 'text-[13px] font-semibold text-white/85')}>{course.level}</div>
            <div className={cn(font, 'text-[22px] font-extrabold text-white mt-0.5')}>{course.title}</div>
            {course.stack ? <div className={cn(font, 'text-[13px] text-white/80 mt-1')}>{course.stack}</div> : null}
          </div>
          <IconButton
            variant="ghost"
            ariaLabel="Close"
            icon={<Icon name="x" size={19} />}
            onClick={onClose}
            style={{ background: 'rgba(255,255,255,0.15)', border: 'none', color: '#fff' }}
          />
        </div>

        <div className="px-6 py-3 flex flex-wrap gap-x-4 gap-y-1 border-b border-line">
          {meta.map((m) => (
            <span key={m} className={cn(font, 'text-[13px] text-slate')}>
              {m}
            </span>
          ))}
          <span className={cn(font, 'text-[15px] font-extrabold text-orange ms-auto')}>
            {fmtNum(course.price, lang)} {u.currency}
          </span>
        </div>

        <div className="px-6 py-5 overflow-y-auto">
          <div className={cn(font, 'text-[13px] font-bold tracking-[0.04em] text-navy mb-3')}>{t.courses.syllabusLabel}</div>
          <ol className="list-none p-0 m-0 flex flex-col gap-2.5">
            {course.syllabus.map((s, i) => (
              <li key={i} className={cn(font, 'flex items-start gap-3 text-[14.5px] text-ink leading-[1.5]')}>
                <span className="shrink-0 h-6 w-6 rounded-full bg-orange-tint text-orange font-en text-[12px] font-bold inline-flex items-center justify-center">
                  {fmtNum(i + 1, lang)}
                </span>
                {s}
              </li>
            ))}
          </ol>
        </div>

        <div className="px-6 py-4 border-t border-line">
          <Button variant="primary" size="lg" fullWidth onClick={onBook}>
            {t.cta.book}
          </Button>
        </div>
      </div>
    </div>
  );
}
