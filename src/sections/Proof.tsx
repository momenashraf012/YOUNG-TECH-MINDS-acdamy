import { Container, SectionHead } from './layout';
import { Card } from '../components/Card';
import { Avatar } from '../components/Avatar';
import { Icon } from '../icons';
import { cn } from '../cn';
import type { Copy, Dir } from '../types';

export function Proof({ t, dir }: { t: Copy; dir: Dir }) {
  const font = dir === 'rtl' ? 'font-ar' : 'font-en';
  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <div className="grid grid-cols-[0.9fr_1.1fr] gap-[clamp(28px,4vw,56px)] items-center max-[820px]:grid-cols-1">
          <div>
            <SectionHead eyebrow={t.proof.eyebrow} title={t.proof.title} sub={t.proof.sub} dir={dir} />
            <div className="rounded-xl overflow-hidden mt-[26px] shadow-lg border-[6px] border-white">
              <img src="/assets/photos/three-kids.png" alt="Students building projects" className="w-full block" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {t.proof.quotes.map((q, i) => (
              <Card key={i} accent={q.accent} padding={22}>
                <div className="flex gap-0.5 mb-2.5 text-yellow">
                  {[0, 1, 2, 3, 4].map((s) => (
                    <Icon key={s} name="star" size={15} fill="var(--color-yellow)" />
                  ))}
                </div>
                <p className={cn(font, 'text-[16px] leading-[1.6] text-ink mb-4 mt-0')}>“{q.text}”</p>
                <div className="flex items-center gap-3">
                  <Avatar name={q.name} size="sm" />
                  <div>
                    <div className="font-en font-bold text-sm text-navy">{q.name}</div>
                    <div className={cn(font, 'text-[12.5px] text-slate')}>{q.role}</div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
