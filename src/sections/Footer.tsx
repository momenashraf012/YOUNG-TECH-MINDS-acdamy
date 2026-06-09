import { Container } from './layout';
import { Logo } from '../components/Logo';
import { Icon } from '../icons';
import { cn } from '../cn';
import type { Copy, Lang } from '../types';

export function Footer({ t, lang }: { t: Copy; lang: Lang }) {
  const font = lang === 'ar' ? 'font-ar' : 'font-en';
  return (
    <footer className="bg-navy text-white pt-14 pb-7">
      <Container>
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-8 pb-9 border-b border-white/12 max-[820px]:grid-cols-2 max-[520px]:grid-cols-1">
          <div>
            <Logo variant="horizontal" markSrc="/assets/logos/brand-mark.png" height={32} reversed />
            <p className={cn(font, 'text-sm leading-[1.65] text-on-dark-muted mt-4 max-w-[280px]')}>{t.footer.blurb}</p>
            <div className="flex gap-2.5 mt-[18px]">
              {['camera', 'play', 'send', 'at-sign'].map((s) => (
                <a
                  key={s}
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="h-[38px] w-[38px] rounded-[10px] bg-white/8 inline-flex items-center justify-center text-white"
                >
                  <Icon name={s} size={18} />
                </a>
              ))}
            </div>
          </div>
          {t.footer.cols.map((col, i) => (
            <div key={i}>
              <div className={cn(font, 'text-[13px] font-bold tracking-[0.04em] text-white mb-3.5', lang === 'ar' ? 'normal-case' : 'uppercase')}>
                {col.h}
              </div>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className={cn(font, 'text-sm text-on-dark-muted no-underline')}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center flex-wrap gap-3 pt-[22px]">
          <span className="font-en text-[13px] text-on-dark-muted">© 2026 Young Tech Minds. {t.footer.rights}</span>
          <div className="flex gap-2">
            {['#YoungTechMinds', '#FutureBeginsHere'].map((h) => (
              <span key={h} className="font-en text-xs font-semibold text-orange-soft">
                {h}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
