import { useEffect, useState } from 'react';
import { COPY } from './copy';
import type { Lang } from './types';
import { Header } from './sections/Header';
import { Hero } from './sections/Hero';
import { TrustBar } from './sections/TrustBar';
import { Courses } from './sections/Courses';
import { HowItWorks } from './sections/HowItWorks';
import { Projects } from './sections/Projects';
import { Pricing } from './sections/Pricing';
import { Proof } from './sections/Proof';
import { FinalCTA } from './sections/FinalCTA';
import { Footer } from './sections/Footer';

const WHATSAPP_NUMBER = '201558896384';

export function App() {
  const [lang, setLang] = useState<Lang>('ar');
  const t = COPY[lang];
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const openBook = () => {
    const msg =
      lang === 'ar'
        ? 'السلام عليكم، حابب أحجز حصة تجريبية مجانية 🙂'
        : "Hello! I'd like to book a free trial class 🙂";
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Keep the document <html> lang/dir in sync for SEO and screen readers.
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = dir;
  }, [lang, dir]);

  return (
    <div dir={dir} className={lang === 'ar' ? 'font-ar' : 'font-en'}>
      <Header
        t={t}
        lang={lang}
        onToggleLang={() => setLang(lang === 'en' ? 'ar' : 'en')}
        onBook={openBook}
      />
      <Hero t={t} lang={lang} dir={dir} onBook={openBook} />
      <TrustBar t={t} />
      <Courses t={t} lang={lang} dir={dir} onBook={openBook} />
      <HowItWorks t={t} dir={dir} />
      <Projects t={t} dir={dir} />
      <Proof t={t} dir={dir} />
      <Pricing t={t} lang={lang} dir={dir} onBook={openBook} />
      <FinalCTA t={t} lang={lang} dir={dir} onBook={openBook} />
      <Footer t={t} lang={lang} />
    </div>
  );
}
