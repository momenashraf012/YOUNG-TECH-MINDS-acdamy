import { Container, SectionHead } from './layout';
import { Button } from '../components/Button';
import { Icon } from '../icons';
import { cn } from '../cn';
import type { Copy, Dir, Lang } from '../types';

interface PricingProps {
  t: Copy;
  lang: Lang;
  dir: Dir;
  onBook: () => void;
}

export function Pricing({ t, lang, dir, onBook }: PricingProps) {
  const font = lang === 'ar' ? 'font-ar' : 'font-en';
  return (
    <section id="pricing" className="py-[var(--section-y)] scroll-mt-[84px]">
      <Container>
        <SectionHead
          eyebrow={t.pricing.eyebrow}
          title={t.pricing.title}
          sub={t.pricing.sub}
          center
          dir={dir}
        />
        <div className="grid grid-cols-3 gap-6 mt-11 items-stretch max-[820px]:grid-cols-1 max-[820px]:max-w-[420px] max-[820px]:mx-auto">
          {t.pricing.plans.map((p, i) => {
            const featured = !!p.featured;
            return (
              <div
                key={i}
                className={cn(
                  'relative flex flex-col rounded-xl border p-7 transition-[box-shadow,transform] duration-200',
                  featured
                    ? 'bg-navy text-white border-navy shadow-xl min-[821px]:-translate-y-2.5'
                    : 'bg-white border-line shadow-card'
                )}
              >
                {featured ? (
                  <span
                    className={cn(
                      font,
                      'absolute -top-3 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 bg-orange text-white text-[12px] font-bold px-3 py-1 rounded-pill'
                    )}
                  >
                    {lang === 'ar' ? 'الأكثر شعبية' : 'Most popular'}
                  </span>
                ) : null}
                <span
                  className={cn(
                    'h-12 w-12 rounded-[14px] inline-flex items-center justify-center mb-4',
                    featured ? 'bg-white/15 text-white' : 'bg-orange-tint text-orange'
                  )}
                >
                  <Icon name={p.icon} size={24} />
                </span>
                <h3 className={cn(font, 'text-[22px] m-0', featured ? 'text-white' : 'text-navy')}>
                  {p.name}
                </h3>
                <p
                  className={cn(
                    font,
                    'text-[14px] leading-[1.55] mt-1.5 mb-5',
                    featured ? 'text-white/80' : 'text-slate'
                  )}
                >
                  {p.blurb}
                </p>
                <div className="flex items-end gap-1.5 mb-6">
                  <span
                    className={cn(
                      'font-en font-extrabold text-[40px] leading-none',
                      featured ? 'text-white' : 'text-navy'
                    )}
                  >
                    {p.price}
                  </span>
                  <span
                    className={cn(
                      font,
                      'text-[14px] pb-1.5',
                      featured ? 'text-white/70' : 'text-slate'
                    )}
                  >
                    {p.period}
                  </span>
                </div>
                <ul className="list-none p-0 m-0 flex flex-col gap-3 mb-7 grow">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className={cn(
                        font,
                        'flex items-start gap-2.5 text-[14.5px] leading-[1.5]',
                        featured ? 'text-white/90' : 'text-ink'
                      )}
                    >
                      <Icon
                        name="check"
                        size={18}
                        className={cn('shrink-0 mt-0.5', featured ? 'text-teal' : 'text-orange')}
                      />
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  variant={featured ? 'primary' : 'ghost'}
                  fullWidth
                  onClick={onBook}
                  style={featured ? undefined : { borderColor: 'var(--color-navy)' }}
                >
                  {p.cta}
                </Button>
              </div>
            );
          })}
        </div>
        <p className={cn(font, 'text-center text-[14px] text-slate mt-8')}>{t.pricing.note}</p>
      </Container>
    </section>
  );
}
