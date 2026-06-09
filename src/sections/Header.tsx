import { useEffect, useState } from 'react';
import { Container } from './layout';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';
import { Icon } from '../icons';
import { cn } from '../cn';
import { NAV_ANCHORS } from '../site';
import type { Copy, Lang } from '../types';

interface HeaderProps {
  t: Copy;
  lang: Lang;
  onToggleLang: () => void;
  onBook: () => void;
}

export function Header({ t, lang, onToggleLang, onBook }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled((window.scrollY || 0) > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const font = lang === 'ar' ? 'font-ar' : 'font-en';

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-all duration-200 ease-[var(--ease-standard)]',
        scrolled || menuOpen
          ? 'bg-white/95 [backdrop-filter:saturate(180%)_blur(12px)] border-b border-line'
          : 'bg-white border-b border-transparent'
      )}
    >
      <Container className="flex h-[68px] items-center justify-between gap-3">
        <a href="#" className="shrink-0" aria-label="Young Tech Minds">
          <Logo variant="horizontal" markSrc="/assets/logos/brand-mark.png" height={32} />
        </a>

        {/* Desktop nav */}
        <nav className="flex items-center gap-7 max-[1040px]:hidden">
          {t.nav.map((n, i) => (
            <a
              key={n}
              href={NAV_ANCHORS[i] ?? '#'}
              className={cn(font, 'text-[15px] font-medium text-ink no-underline hover:text-orange transition-colors')}
            >
              {n}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onToggleLang}
            className="inline-flex items-center gap-1.5 h-[38px] px-3 rounded-pill border border-line bg-white cursor-pointer font-en text-[13px] font-semibold text-navy"
          >
            <Icon name="globe" size={15} /> {lang === 'en' ? 'العربية' : 'EN'}
          </button>
          <Button variant="primary" size="sm" onClick={onBook} className="max-[560px]:hidden">
            {t.cta.book}
          </Button>
          {/* Hamburger (mobile + tablet) */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="hidden max-[1040px]:inline-flex h-[40px] w-[40px] items-center justify-center rounded-[10px] border border-line bg-white text-navy cursor-pointer"
          >
            <Icon name={menuOpen ? 'x' : 'menu'} size={20} />
          </button>
        </div>
      </Container>

      {/* Mobile dropdown menu */}
      {menuOpen ? (
        <nav className="hidden max-[1040px]:block border-t border-line bg-white shadow-md">
          <Container className="py-3 flex flex-col">
            {t.nav.map((n, i) => (
              <a
                key={n}
                href={NAV_ANCHORS[i] ?? '#'}
                onClick={() => setMenuOpen(false)}
                className={cn(font, 'py-3 text-[16px] font-medium text-ink no-underline border-b border-line/70 last:border-b-0')}
              >
                {n}
              </a>
            ))}
            <Button
              variant="primary"
              size="md"
              fullWidth
              onClick={() => {
                setMenuOpen(false);
                onBook();
              }}
              className="mt-4"
            >
              {t.cta.book}
            </Button>
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
