import type { Lang } from './types';

/** Format a number with locale-aware digits and grouping (Arabic-Indic for ar). */
export function fmtNum(n: number, lang: Lang): string {
  return n.toLocaleString(lang === 'ar' ? 'ar-EG' : 'en-US');
}
