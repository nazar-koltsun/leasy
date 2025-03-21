import { Lato, Fira_Sans, Poppins } from 'next/font/google';

export const lato = Lato({
  variable: '--font-lato',
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
});

export const firaSans = Fira_Sans({
  variable: '--font-fira-sans',
  weight: ['400', '500'],
  subsets: ['latin'],
});

export const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['400', '500', '600'],
  subsets: ['latin'],
})