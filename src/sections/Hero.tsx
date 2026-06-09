import { Container } from './layout';
import { Button } from '../components/Button';
import { Badge } from '../components/Badge';
import { Icon } from '../icons';
import { cn } from '../cn';
import type { Copy, Dir, Lang } from '../types';

interface HeroProps {
  t: Copy;
  lang: Lang;
  dir: Dir;
  onBook: () => void;
}

export function Hero({ t, lang, dir, onBook }: HeroProps) {
  const font = lang === 'ar' ? 'font-ar' : 'font-en';
  return (
    <section className="circuit-dots bg-white pt-[clamp(40px,6vw,72px)] pb-[clamp(48px,7vw,88px)]">
      <Container className="grid grid-cols-[1.05fr_0.95fr] gap-[clamp(28px,4vw,56px)] items-center max-[820px]:grid-cols-1">
        <div>
          <span className="inline-flex items-center gap-2 ps-2 pe-3 py-1.5 bg-orange-tint rounded-pill mb-5">
            <Badge color="orange" variant="solid">
              {t.hero.pill1}
            </Badge>
            <span className={cn(font, 'text-[13px] font-semibold text-orange-press')}>
              {t.hero.pill2}
            </span>
          </span>
          <h1
            className={cn(
              font,
              'text-[clamp(36px,5vw,58px)] leading-[1.08] text-navy m-0',
              lang === 'ar' ? 'tracking-normal' : 'tracking-[-0.025em]'
            )}
          >
            {t.hero.title} <span className="text-orange">{t.hero.titleAccent}</span>
          </h1>
          <p
            className={cn(
              font,
              'text-[19px] text-slate mt-5 max-w-[520px]',
              lang === 'ar' ? 'leading-[1.7]' : 'leading-[1.6]'
            )}
          >
            {t.hero.sub}
          </p>
          <div className="flex flex-wrap gap-3.5 mt-[30px]">
            <Button
              variant="primary"
              size="lg"
              onClick={onBook}
              iconRight={dir === 'rtl' ? null : <Icon name="arrow-right" size={20} />}
            >
              {t.cta.book}
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              iconLeft={<Icon name="play" size={20} />}
            >
              {t.cta.demo}
            </Button>
          </div>
          <div className="flex flex-wrap gap-[18px] mt-7">
            {t.hero.chips.map((c, i) => (
              <span key={i} className={cn(font, 'inline-flex items-center gap-2 text-sm text-ink')}>
                <span className="inline-flex text-teal">
                  <Icon name="check-circle-2" size={18} />
                </span>{' '}
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-xl border-[6px] border-white aspect-[4/3.4]">
            <img
              src="/assets/photos/mentor-group.png"
              alt="Kids learning to code with a mentor"
              className="h-full w-full object-cover block"
            />
          </div>
          <div className="absolute start-[-18px] bottom-[26px] bg-white rounded-lg shadow-lg px-4 py-[14px] flex items-center gap-3">
            <span className="h-[42px] w-[42px] rounded-[12px] bg-gradient-warm inline-flex items-center justify-center text-white">
              <Icon name="rocket" size={22} />
            </span>
            <div>
              <div className="font-en font-extrabold text-[18px] text-navy leading-none">
                {t.hero.floatNum}
              </div>
              <div className={cn(font, 'text-xs text-slate mt-[3px]')}>{t.hero.floatLabel}</div>
            </div>
          </div>
          <div className="absolute end-[-14px] top-[22px] bg-white rounded-pill shadow-lg px-[14px] py-2 flex items-center gap-[7px]">
            <span className="inline-flex text-yellow">
              <Icon name="star" size={16} fill="var(--color-yellow)" />
            </span>
            <span className="font-en font-bold text-sm text-navy">4.9</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
