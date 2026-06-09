import { Container, SectionHead } from './layout';
import { Card } from '../components/Card';
import { Icon } from '../icons';
import { cn } from '../cn';
import type { Copy, Dir } from '../types';

export function HowItWorks({ t, dir }: { t: Copy; dir: Dir }) {
  const font = dir === 'rtl' ? 'font-ar' : 'font-en';
  return (
    <section className="py-[var(--section-y)] bg-cloud">
      <Container>
        <SectionHead eyebrow={t.how.eyebrow} title={t.how.title} center dir={dir} />
        <div className="grid grid-cols-3 gap-[22px] mt-11 max-[820px]:grid-cols-1">
          {t.how.steps.map((s, i) => (
            <Card key={i} className={dir === 'rtl' ? 'text-right' : 'text-left'}>
              <div className="flex items-center justify-between">
                <span
                  className="h-[52px] w-[52px] rounded-[14px] inline-flex items-center justify-center text-white"
                  style={{ background: s.bg }}
                >
                  <Icon name={s.icon} size={26} />
                </span>
                <span className="font-en font-extrabold text-[30px] text-cloud-2">0{i + 1}</span>
              </div>
              <h3 className={cn(font, 'text-[20px] text-navy mt-[18px] mb-2')}>{s.title}</h3>
              <p className={cn(font, 'text-[15px] leading-[1.6] text-slate m-0')}>{s.body}</p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
