'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Logo from '@/assets/logo.png';
import SearchInput from '@/components/SearchInput';
import Button from '@/components/Button';
import HeaderNav from '@/components/HeaderNav';

import BurgerIcon from '@/components/icons/BurgerIcon';
import UserIcon from '@/components/icons/UserIcon';
import LockIcon from '@/components/icons/LockIcon';
import GraphIcon from '@/components/icons/GraphIcon';
import NotificationIcon from '@/components/icons/NotificationIcon';
import PlusCircleIcon from '@/components/icons/PlusCircleIcon';
import UserPhoto from '@/assets/user-photo.png';

const SHOW_DESKTOP_NAV_ROUTES = ['/'];

// Thi is only for demo purpose, delete it when you will have the actual isAuth logic
const SHOW_IS_AUTH_ROUTES = ['/', '/dashboard'];

const DashboardLogo = () => (
  <div className="flex items-center gap-3">
    <GraphIcon />
    <span className="text-chineseBlack text-lg font-bold">Dashboard</span>
  </div>
);

const Header = ({ isDashboard = false, className }) => {
  const flatBtnBaseClasses = 'w-8 h-8 flex items-center justify-center';

  const pathname = usePathname();
  const showNavOnDesktop = SHOW_DESKTOP_NAV_ROUTES.includes(pathname);
  const isAuth = SHOW_IS_AUTH_ROUTES.includes(pathname);

  return (
    <header
      className={cn(
        'relative z-40 bg-white p-4 flex justify-between items-center max-1100:flex-wrap max-700:flex-col',
        className
      )}
    >
      <div className="order-1 flex items-center gap-5">
        <Image src={Logo} width={145} height={54} priority alt="Logo" />
        {isDashboard && <DashboardLogo />}
      </div>

      <HeaderNav className={cn('hidden', showNavOnDesktop && 'block')} />

      {!showNavOnDesktop && (
        <SearchInput
          className="w-[450px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 order-2
            max-1250:w-[300px] max-1100:w-full max-1100:mt-4 max-1100:relative max-1100:top-0 max-1100:left-0 
            max-1100:translate-x-0 max-1100:translate-y-0 max-1100:order-last"
          placeholder="Czego szukasz....?"
          isSecondary
        />
      )}

      <div
        className={cn(
          'flex gap-3 items-center order-3 max-700:mt-4 max-620:gap-3',
          isAuth && 'gap-5'
        )}
      >
        {isDashboard && (
          <Button variant="secondary" className="font-firaSans font-medium">
            <PlusCircleIcon /> Dodaj ogłoszenie
          </Button>
        )}

        <Button
          variant="flat"
          className={cn(
            'group transition duration-300 ease-in-out',
            flatBtnBaseClasses,
            !isAuth && 'mr-2',
            showNavOnDesktop && 'hidden'
          )}
        >
          <BurgerIcon className="group-hover:fill-[#0d7a50]" />
        </Button>

        {!isAuth && (
          <>
            <Button path={'/login'} className="px-3 font-firaSans">
              <UserIcon />
              Zaloguj się
            </Button>

            <Button
              path={'/logup'}
              variant="secondary"
              className="px-3 font-firaSans"
            >
              <LockIcon />
              Zarejestruj
            </Button>
          </>
        )}

        {isDashboard && (
          <Button
            variant="flat"
            className={cn('group relative', flatBtnBaseClasses)}
          >
            <NotificationIcon className="group-hover:fill-fireOpal transition duration-300 ease-in-out" />
            <span className="absolute right-0 top-0 w-[7px] h-[7px] bg-fireOpal rounded-full"></span>
          </Button>
        )}

        {isAuth && (
          <>
            <Button
              className="group relative w-12 h-12 p-0 rounded-full bg-transparent border border-[#ddd] 
            hover:bg-transparent shadow-doobleSmallShadow"
            >
              <Image
                src={UserPhoto}
                alt="User photo"
                className="absolute left-1/2 top-1/2 
              -translate-x-1/2 -translate-y-1/2 w-10 h-10"
              />

              <div
                role="presentation"
                className="w-full h-full border-[3px] border-green rounded-full 
                transition duration-300 ease-in-out group-hover:border-[#0d7a50]"
              ></div>
            </Button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
