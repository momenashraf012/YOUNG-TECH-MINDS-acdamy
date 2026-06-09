import { Container } from './layout';
import { Button } from '../components/Button';
import { Icon } from '../icons';
import { cn } from '../cn';
import type { Copy, Dir, Lang } from '../types';

interface FinalCTAProps {
  t: Copy;
  lang: Lang;
  dir: Dir;
  onBook: () => void;
}

export function FinalCTA({ t, lang, dir, onBook }: FinalCTAProps) {
  const font = lang === 'ar' ? 'font-ar' : 'font-en';
  return (
    <section className="py-[clamp(40px,5vw,64px)]">
      <Container>
        <div className="cta-band relative overflow-hidden rounded-2xl p-[clamp(36px,5vw,64px)] text-center text-white">
          <h2
            className={cn(
              font,
              'text-[clamp(28px,4vw,44px)] m-0 text-white',
              lang === 'ar' ? 'tracking-normal' : 'tracking-[0.01em]'
            )}
          >
            {t.final.title}
          </h2>
          <p className={cn(font, 'text-lg leading-[1.6] text-white/90 max-w-[560px] mx-auto mt-4')}>
            {t.final.sub}
          </p>
          <div className="flex justify-center gap-3.5 mt-7 flex-wrap">
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
              style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)' }}
            >
              {t.final.secondary}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
