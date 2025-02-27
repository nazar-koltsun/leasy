import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { lato, firaSans } from '@/lib/fonts';
import '@/app/globals.css';

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
