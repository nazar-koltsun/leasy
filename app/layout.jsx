import { Lato, Fira_Sans } from 'next/font/google';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import './globals.css';

const lato = Lato({
  variable: '--font-lato',
  weight: ['400', '700'],
  subsets: ['latin'],
});

const firaSans = Fira_Sans({
  variable: '--font-fira-sans',
  weight: ['400', '500'],
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
          'antialiased font-lato max-w-[1400px] mx-auto flex flex-col h-screen',
          lato.variable,
          firaSans.variable
        )}
      >
        <Header />
        <main className='mb-16'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
