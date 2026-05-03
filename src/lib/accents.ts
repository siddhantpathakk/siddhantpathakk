export type Accent = 'sky' | 'violet' | 'emerald' | 'amber' | 'rose' | 'indigo' | 'teal';

export interface AccentClasses {
  chip: string;
  title: string;
  titleHover: string;
  hoverBorder: string;
  hoverBg: string;
}

export const accents: Record<Accent, AccentClasses> = {
  sky: {
    chip: 'bg-sky-50 dark:bg-sky-950/30 text-sky-700 dark:text-sky-300',
    title: 'text-sky-600 dark:text-sky-400',
    titleHover: 'group-hover:text-sky-600 dark:group-hover:text-sky-400',
    hoverBorder: 'hover:border-sky-300 dark:hover:border-sky-700',
    hoverBg: 'hover:bg-sky-50/40 dark:hover:bg-sky-950/20',
  },
  violet: {
    chip: 'bg-violet-50 dark:bg-violet-950/30 text-violet-700 dark:text-violet-300',
    title: 'text-violet-600 dark:text-violet-400',
    titleHover: 'group-hover:text-violet-600 dark:group-hover:text-violet-400',
    hoverBorder: 'hover:border-violet-300 dark:hover:border-violet-700',
    hoverBg: 'hover:bg-violet-50/40 dark:hover:bg-violet-950/20',
  },
  emerald: {
    chip: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300',
    title: 'text-emerald-600 dark:text-emerald-400',
    titleHover: 'group-hover:text-emerald-600 dark:group-hover:text-emerald-400',
    hoverBorder: 'hover:border-emerald-300 dark:hover:border-emerald-700',
    hoverBg: 'hover:bg-emerald-50/40 dark:hover:bg-emerald-950/20',
  },
  amber: {
    chip: 'bg-amber-50 dark:bg-amber-950/30 text-amber-700 dark:text-amber-300',
    title: 'text-amber-600 dark:text-amber-500',
    titleHover: 'group-hover:text-amber-600 dark:group-hover:text-amber-500',
    hoverBorder: 'hover:border-amber-300 dark:hover:border-amber-700',
    hoverBg: 'hover:bg-amber-50/40 dark:hover:bg-amber-950/20',
  },
  rose: {
    chip: 'bg-rose-50 dark:bg-rose-950/30 text-rose-700 dark:text-rose-300',
    title: 'text-rose-600 dark:text-rose-400',
    titleHover: 'group-hover:text-rose-600 dark:group-hover:text-rose-400',
    hoverBorder: 'hover:border-rose-300 dark:hover:border-rose-700',
    hoverBg: 'hover:bg-rose-50/40 dark:hover:bg-rose-950/20',
  },
  indigo: {
    chip: 'bg-indigo-50 dark:bg-indigo-950/30 text-indigo-700 dark:text-indigo-300',
    title: 'text-indigo-600 dark:text-indigo-400',
    titleHover: 'group-hover:text-indigo-600 dark:group-hover:text-indigo-400',
    hoverBorder: 'hover:border-indigo-300 dark:hover:border-indigo-700',
    hoverBg: 'hover:bg-indigo-50/40 dark:hover:bg-indigo-950/20',
  },
  teal: {
    chip: 'bg-teal-50 dark:bg-teal-950/30 text-teal-700 dark:text-teal-300',
    title: 'text-teal-600 dark:text-teal-400',
    titleHover: 'group-hover:text-teal-600 dark:group-hover:text-teal-400',
    hoverBorder: 'hover:border-teal-300 dark:hover:border-teal-700',
    hoverBg: 'hover:bg-teal-50/40 dark:hover:bg-teal-950/20',
  },
};
