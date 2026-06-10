import { Container, SectionHead } from './layout';
import { Card } from '../components/Card';
import { Icon } from '../icons';
import { cn } from '../cn';
import type { Copy, CourseTone, Dir } from '../types';

const toneBg: Record<CourseTone, string> = {
  orange: 'var(--gradient-warm)',
  navy: 'var(--gradient-navy)',
  teal: 'var(--gradient-ai)',
  yellow: 'var(--gradient-yellow-orange)',
};

export function Projects({ t, dir }: { t: Copy; dir: Dir }) {
  const font = dir === 'rtl' ? 'font-ar' : 'font-en';
  return (
    <section id="projects" className="py-[var(--section-y)] bg-cloud scroll-mt-[84px]">
      <Container>
        <SectionHead
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          sub={t.projects.sub}
          center
          dir={dir}
        />
        <div className="grid grid-cols-3 gap-[22px] mt-11 max-[820px]:grid-cols-2 max-[520px]:grid-cols-1">
          {t.projects.items.map((p, i) => (
            <Card key={i} padding={0} className="overflow-hidden">
              <div
                className={cn(
                  'flex items-center justify-center text-white relative overflow-hidden',
                  p.image ? 'h-[210px]' : 'h-[132px]'
                )}
                style={p.image ? undefined : { background: toneBg[p.tone] }}
              >
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <Icon name={p.icon} size={46} />
                )}
                <span
                  className={cn(
                    font,
                    'absolute top-3',
                    dir === 'rtl' ? 'left-3' : 'right-3',
                    'text-[11px] font-bold px-2.5 py-1 rounded-pill bg-white/20 text-white backdrop-blur-sm'
                  )}
                >
                  {p.tag}
                </span>
              </div>
              <div className={cn('p-[18px]', dir === 'rtl' ? 'text-right' : 'text-left')}>
                <h3 className={cn(font, 'text-[17px] text-navy m-0')}>{p.title}</h3>
                <div
                  className={cn(font, 'flex items-center gap-1.5 text-[13px] text-slate mt-1.5')}
                >
                  <Icon name="sparkles" size={14} className="text-orange" />
                  {p.maker}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
