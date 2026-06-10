export type Lang = 'en' | 'ar';
export type Dir = 'ltr' | 'rtl';

/** Brand color keys shared by Badge / Tag / CourseCard tones. */
export type BadgeColor = 'navy' | 'orange' | 'teal' | 'yellow' | 'slate';
export type CourseTone = 'orange' | 'navy' | 'teal' | 'yellow';

export interface CourseItem {
  id: string;
  title: string;
  stack?: string;
  blurb: string;
  icon: string;
  image?: string;
  tone: CourseTone;
  level: string;
  levelColor: BadgeColor;
  age: string;
  sessions: number;
  hours: number;
  price: number;
  cat: string;
  syllabus: string[];
}

export interface Bundle {
  id: string;
  name: string;
  courses: string;
  separate: number;
  price: number;
  icon: string;
  featured?: boolean;
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

export interface ProjectItem {
  title: string;
  maker: string;
  tag: string;
  icon: string;
  image?: string;
  tone: CourseTone;
}

export interface FooterCol {
  h: string;
  links: string[];
}

export interface Copy {
  nav: string[];
  cta: { book: string; demo: string };
  units: { ages: string; sessions: string; hours: string; currency: string };
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
    syllabusLabel: string;
    items: CourseItem[];
  };
  how: { eyebrow: string; title: string; steps: HowStep[] };
  projects: { eyebrow: string; title: string; sub: string; items: ProjectItem[] };
  pricing: {
    eyebrow: string;
    title: string;
    sub: string;
    separateLabel: string;
    saveLabel: string;
    popular: string;
    bundles: Bundle[];
    featuresTitle: string;
    features: string[];
    totalLabel: string;
    totalValue: string;
  };
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
