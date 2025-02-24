import { Lato, Fira_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';

import './globals.css';

const lato = Lato({
  variable: '--font-lato',
  weight: ['400', '700'],
  subsets: ['latin'],
});

const firaSans = Fira_Sans({
  variable: '--font-fira-sans',
  weight: ['500'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'LEASY',
  description: 'LEASY',
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <body
        className={cn(
          'antialiased font-lato max-w-[1400px] mx-auto',
          lato.variable,
          firaSans.variable
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
