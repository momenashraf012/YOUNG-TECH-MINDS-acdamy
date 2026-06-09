import { Container } from './layout';
import { Stat } from '../components/Stat';
import type { Copy } from '../types';

export function TrustBar({ t }: { t: Copy }) {
  return (
    <section className="bg-cloud border-y border-line py-9">
      <Container className="grid grid-cols-4 gap-6 max-[680px]:grid-cols-2">
        {t.stats.map((s, i) => (
          <Stat key={i} value={s.v} label={s.l} tone={i % 2 ? 'navy' : 'orange'} />
        ))}
      </Container>
    </section>
  );
}
