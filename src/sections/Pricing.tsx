import { Container, SectionHead } from './layout';
import { Button } from '../components/Button';
import { Icon } from '../icons';
import { cn } from '../cn';
import { fmtNum } from '../format';
import type { Copy, Dir, Lang } from '../types';

interface PricingProps {
  t: Copy;
  lang: Lang;
  dir: Dir;
  onBook: () => void;
}

export function Pricing({ t, lang, dir, onBook }: PricingProps) {
  const font = lang === 'ar' ? 'font-ar' : 'font-en';
  const u = t.units;
  const p = t.pricing;

  return (
    <section id="pricing" className="py-[var(--section-y)] bg-cloud scroll-mt-[84px]">
      <Container>
        <SectionHead eyebrow={p.eyebrow} title={p.title} sub={p.sub} center dir={dir} />

        <div className="grid grid-cols-3 gap-6 mt-11 items-stretch max-[820px]:grid-cols-1 max-[820px]:max-w-[440px] max-[820px]:mx-auto">
          {p.bundles.map((b) => {
            const featured = !!b.featured;
            const save = b.separate - b.price;
            return (
              <div
                key={b.id}
                className={cn(
                  'relative flex flex-col rounded-xl border p-7 transition-[box-shadow,transform] duration-200',
                  featured
                    ? 'bg-navy text-white border-navy shadow-xl min-[821px]:-translate-y-2.5'
                    : 'bg-white border-line shadow-card'
                )}
              >
                {featured ? (
                  <span className={cn(font, 'absolute -top-3 start-1/2 -translate-x-1/2 rtl:translate-x-1/2 bg-orange text-white text-[12px] font-bold px-3 py-1 rounded-pill')}>
                    {p.popular}
                  </span>
                ) : null}
                <span className={cn('h-12 w-12 rounded-[14px] inline-flex items-center justify-center mb-4', featured ? 'bg-white/15 text-white' : 'bg-orange-tint text-orange')}>
                  <Icon name={b.icon} size={24} />
                </span>
                <h3 className={cn(font, 'text-[22px] m-0', featured ? 'text-white' : 'text-navy')}>{b.name}</h3>
                <p className={cn(font, 'text-[14px] leading-[1.55] mt-1.5 mb-5 min-h-[42px]', featured ? 'text-white/80' : 'text-slate')}>{b.courses}</p>

                <div className="flex items-end gap-2 mb-1">
                  <span className={cn('font-en font-extrabold text-[38px] leading-none', featured ? 'text-white' : 'text-navy')}>{fmtNum(b.price, lang)}</span>
                  <span className={cn(font, 'text-[14px] pb-1', featured ? 'text-white/70' : 'text-slate')}>{u.currency}</span>
                </div>
                <div className={cn(font, 'flex items-center gap-2 mb-6 text-[13px]')}>
                  <span className={cn('line-through', featured ? 'text-white/50' : 'text-slate')}>
                    {p.separateLabel} {fmtNum(b.separate, lang)}
                  </span>
                  <span className={cn('font-bold px-2 py-0.5 rounded-pill', featured ? 'bg-teal/25 text-white' : 'bg-teal-tint text-teal-ink')}>
                    {p.saveLabel} {fmtNum(save, lang)} {u.currency}
                  </span>
                </div>

                <Button
                  variant={featured ? 'primary' : 'ghost'}
                  fullWidth
                  onClick={onBook}
                  className="mt-auto"
                  style={featured ? undefined : { borderColor: 'var(--color-navy)' }}
                >
                  {t.cta.book}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Program features + total path hours */}
        <div className="grid grid-cols-[1.5fr_1fr] gap-6 mt-10 max-[820px]:grid-cols-1">
          <div className="bg-white border border-line rounded-xl p-7 shadow-card">
            <div className={cn(font, 'text-[13px] font-bold tracking-[0.04em] text-navy mb-4', lang === 'ar' ? 'normal-case' : 'uppercase')}>
              {p.featuresTitle}
            </div>
            <ul className="list-none p-0 m-0 grid grid-cols-2 gap-x-6 gap-y-3 max-[560px]:grid-cols-1">
              {p.features.map((f) => (
                <li key={f} className={cn(font, 'flex items-start gap-2.5 text-[14.5px] text-ink leading-[1.5]')}>
                  <Icon name="check" size={18} className="shrink-0 mt-0.5 text-orange" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gradient-navy text-white rounded-xl p-7 shadow-card flex flex-col justify-center text-center">
            <span className="font-en font-extrabold text-[52px] leading-none">{p.totalValue}</span>
            <span className={cn(font, 'text-[15px] text-white/85 mt-2')}>{p.totalLabel}</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
