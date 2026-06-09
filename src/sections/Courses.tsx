import { useEffect, useState } from 'react';
import { Container, SectionHead } from './layout';
import { Tag } from '../components/Tag';
import { CourseCard } from '../components/CourseCard';
import { Icon } from '../icons';
import type { Copy, Dir, Lang } from '../types';

interface CoursesProps {
  t: Copy;
  lang: Lang;
  dir: Dir;
  onBook: () => void;
}

export function Courses({ t, lang, dir, onBook }: CoursesProps) {
  const [filter, setFilter] = useState(t.courses.filters[0]);
  useEffect(() => {
    setFilter(t.courses.filters[0]);
  }, [lang, t.courses.filters]);

  const visible = t.courses.items.filter(
    (c) => filter === t.courses.filters[0] || c.cat === filter
  );

  return (
    <section className="py-[var(--section-y)]">
      <Container>
        <div className="flex justify-between items-end flex-wrap gap-5 mb-7">
          <SectionHead
            eyebrow={t.courses.eyebrow}
            title={t.courses.title}
            sub={t.courses.sub}
            dir={dir}
          />
        </div>
        <div className="flex flex-wrap gap-[9px] mb-[26px]">
          {t.courses.filters.map((f) => (
            <Tag key={f} active={filter === f} onClick={() => setFilter(f)}>
              {f}
            </Tag>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-5 max-[980px]:grid-cols-2 max-[560px]:grid-cols-1">
          {visible.map((c, i) => (
            <CourseCard
              key={i}
              title={c.title}
              blurb={c.blurb}
              icon={<Icon name={c.icon} size={44} />}
              iconTone={c.tone}
              level={c.level}
              levelColor={c.levelColor}
              age={c.age}
              lessons={c.lessons}
              ctaLabel={t.courses.cta}
              onCta={onBook}
              rtl={dir === 'rtl'}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
