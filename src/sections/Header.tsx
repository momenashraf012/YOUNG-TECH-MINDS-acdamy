import { useEffect, useState } from 'react';
import { Container } from './layout';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';
import { Icon } from '../icons';
import { cn } from '../cn';
import type { Copy, Lang } from '../types';

interface HeaderProps {
  t: Copy;
  lang: Lang;
  onToggleLang: () => void;
  onBook: () => void;
}

export function Header({ t, lang, onToggleLang, onBook }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
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
        scrolled
          ? 'bg-white/85 [backdrop-filter:saturate(180%)_blur(12px)] border-b border-line'
          : 'bg-white border-b border-transparent',
      )}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <Logo variant="horizontal" markSrc="/assets/logos/brand-mark.png" height={34} />
        <nav className="flex items-center gap-7 max-[1040px]:hidden">
          {t.nav.map((n) => (
            <a
              key={n}
              href="#"
              onClick={(e) => e.preventDefault()}
              className={cn(font, 'text-[15px] font-medium text-ink no-underline')}
            >
              {n}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleLang}
            className="inline-flex items-center gap-1.5 h-[38px] px-3 rounded-pill border border-line bg-white cursor-pointer font-en text-[13px] font-semibold text-navy"
          >
            <Icon name="globe" size={15} /> {lang === 'en' ? 'العربية' : 'EN'}
          </button>
          <Button variant="primary" size="sm" onClick={onBook}>
            {t.cta.book}
          </Button>
        </div>
      </Container>
    </header>
  );
}
