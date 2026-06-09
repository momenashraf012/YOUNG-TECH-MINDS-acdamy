import { Container } from './layout';
import { Logo } from '../components/Logo';
import { Icon } from '../icons';
import { cn } from '../cn';
import { SITE } from '../site';
import type { Copy, Lang } from '../types';

// In-page anchors for the footer columns, by column index then link index.
// Empty string = no in-page target (left as a non-navigating link for now).
const FOOTER_ANCHORS: string[][] = [
  ['#courses', '#how', '#pricing', '#projects'], // Academy
  ['', '', '', ''], // Company
  ['', '', '', ''], // Support
];

export function Footer({ t, lang }: { t: Copy; lang: Lang }) {
  const font = lang === 'ar' ? 'font-ar' : 'font-en';
  return (
    <footer className="bg-navy text-white pt-14 pb-7">
      <Container>
        <div className="grid grid-cols-[1.4fr_1fr_1fr_1fr] gap-8 pb-9 border-b border-white/12 max-[820px]:grid-cols-2 max-[520px]:grid-cols-1">
          <div>
            <Logo variant="horizontal" markSrc="/assets/logos/brand-mark.png" height={32} reversed />
            <p className={cn(font, 'text-sm leading-[1.65] text-on-dark-muted mt-4 max-w-[280px]')}>{t.footer.blurb}</p>

            {/* Real contact details */}
            <div className="flex flex-col gap-2.5 mt-[18px]">
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2.5 text-sm text-white no-underline hover:text-orange-soft transition-colors"
                dir="ltr"
              >
                <Icon name="phone" size={16} className="text-orange-soft" />
                <span className="font-en">{SITE.phoneDisplay}</span>
              </a>
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(font, 'inline-flex items-center gap-2.5 text-sm text-white no-underline hover:text-orange-soft transition-colors')}
              >
                <Icon name="facebook" size={16} className="text-orange-soft" />
                {lang === 'ar' ? 'تابعنا على فيسبوك' : 'Follow us on Facebook'}
              </a>
            </div>

            <div className="flex gap-2.5 mt-[18px]">
              <a
                href={SITE.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="h-[38px] w-[38px] rounded-[10px] bg-white/8 inline-flex items-center justify-center text-white hover:bg-orange transition-colors"
              >
                <Icon name="facebook" size={18} />
              </a>
              <a
                href={SITE.phoneHref}
                aria-label="Phone"
                className="h-[38px] w-[38px] rounded-[10px] bg-white/8 inline-flex items-center justify-center text-white hover:bg-orange transition-colors"
              >
                <Icon name="phone" size={18} />
              </a>
            </div>
          </div>
          {t.footer.cols.map((col, i) => (
            <div key={i}>
              <div className={cn(font, 'text-[13px] font-bold tracking-[0.04em] text-white mb-3.5', lang === 'ar' ? 'normal-case' : 'uppercase')}>
                {col.h}
              </div>
              <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                {col.links.map((l, j) => {
                  const href = FOOTER_ANCHORS[i]?.[j] || '#';
                  return (
                    <li key={l}>
                      <a
                        href={href}
                        className={cn(font, 'text-sm text-on-dark-muted no-underline hover:text-white transition-colors')}
                      >
                        {l}
                      </a>
                    </li>
                  );
                })}
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
