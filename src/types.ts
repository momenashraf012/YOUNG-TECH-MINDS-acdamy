export type Lang = 'en' | 'ar';
export type Dir = 'ltr' | 'rtl';

/** Brand color keys shared by Badge / Tag / CourseCard tones. */
export type BadgeColor = 'navy' | 'orange' | 'teal' | 'yellow' | 'slate';
export type CourseTone = 'orange' | 'navy' | 'teal' | 'yellow';

export interface CourseItem {
  title: string;
  blurb: string;
  icon: string;
  tone: CourseTone;
  level: string;
  levelColor: BadgeColor;
  age: string;
  lessons: string | number;
  cat: string;
}

export interface HowStep {
  icon: string;
  bg: string;
  title: string;
  body: string;
}

export interface Quote {
  text: string;
  name: string;
  role: string;
  accent: string;
}

export interface FooterCol {
  h: string;
  links: string[];
}

export interface Copy {
  nav: string[];
  cta: { book: string; demo: string };
  hero: {
    pill1: string;
    pill2: string;
    title: string;
    titleAccent: string;
    sub: string;
    chips: string[];
    floatNum: string;
    floatLabel: string;
  };
  stats: { v: string; l: string }[];
  courses: {
    eyebrow: string;
    title: string;
    sub: string;
    filters: string[];
    cta: string;
    items: CourseItem[];
  };
  how: { eyebrow: string; title: string; steps: HowStep[] };
  proof: { eyebrow: string; title: string; sub: string; quotes: Quote[] };
  final: { title: string; sub: string; secondary: string };
  footer: { blurb: string; cols: FooterCol[]; rights: string };
  modal: {
    kicker: string;
    title: string;
    fParent: string;
    pParent: string;
    fEmail: string;
    fChild: string;
    pChild: string;
    fAge: string;
    consent: string;
    submit: string;
    fine: string;
    successTitle: string;
    successBody: string;
    successCta: string;
  };
}
