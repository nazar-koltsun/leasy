import { lato, firaSans, poppins } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

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
          'antialiased font-lato mx-auto flex flex-col h-screen',
          lato.variable,
          firaSans.variable,
          poppins.variable,
        )}
      >
        <div className='grid grid-cols-[316px_1fr] grid-rows-[auto_1fr] max-1024:grid-cols-1 gap-x-4 h-screen max-1024:gap-0'>
          <Header isDashboard isAuth className='col-span-2' />
          <Sidebar />
          <main className="relative px-4 pt-8 pb-10 row-start-2 col-start-2 max-1024:col-start-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
