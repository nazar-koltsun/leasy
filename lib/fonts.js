import { Lato, Fira_Sans } from 'next/font/google';

export const lato = Lato({
  variable: '--font-lato',
  weight: ['400', '700'],
  subsets: ['latin'],
});

export const firaSans = Fira_Sans({
  variable: '--font-fira-sans',
  weight: ['400', '500'],
  subsets: ['latin'],
});