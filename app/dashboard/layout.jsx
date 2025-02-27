import { lato, firaSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Header from '@/components/Header';
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
          firaSans.variable,
        )}
      >
        <div className='grid grid-cols-[250px_1fr] grid-rows-[auto_1fr] gap-y-6 gap-x-9 h-screen'>
          <Header isDashboard isAuth className='col-span-2' />
          <div className='pl-4 pb-10 row-start-2 col-start-1 col-end-2'>Sidebar</div>
          <main className="pr-4 pb-10 row-start-2 col-start-2">{children}</main>
        </div>
      </body>
    </html>
  );
}
