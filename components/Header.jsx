'use client';

import { useState } from 'react';
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
  <div className="flex items-center gap-3 max-700:hidden">
    <GraphIcon />
    <span className="text-chineseBlack text-lg font-bold">Dashboard</span>
  </div>
);

const Header = ({ isDashboard = false, className }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const flatBtnBaseClasses = 'w-8 h-8 flex items-center justify-center';

  const pathname = usePathname();
  const showNavOnDesktop = SHOW_DESKTOP_NAV_ROUTES.includes(pathname);
  const isAuth = SHOW_IS_AUTH_ROUTES.includes(pathname);

  const openNav = () => {
    setIsNavOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeNav = () => {
    setIsNavOpen(false);
    document.body.style.overflow = 'unset';
  };

  const mobileBtnsClasses = 'max-700:text-xs max-700:py-2 max-700:px-1 max-700:gap-1';

  return (
    <header
      className={cn(
        'relative z-40 bg-white p-4 flex justify-between items-center max-1100:flex-wrap max-700:flex-wrap max-700:gap-4',
        isNavOpen && 'z-50',
        className
      )}
    >
      <div className="order-1 flex items-center gap-5">
        <Image
          src={Logo}
          width={145}
          height={54}
          priority
          alt="Logo"
          className="max-700:w-[100px]"
        />
        {isDashboard && <DashboardLogo />}
      </div>

      <HeaderNav
        isOpen={isNavOpen}
        onClose={closeNav}
        className={cn(
          'hidden',
          showNavOnDesktop && 'block max-1024:hidden',
          isNavOpen && 'block max-1024:block'
        )}
      />

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
          'flex gap-3 items-center order-3 max-700:gap-1',
          isAuth && 'gap-5'
        )}
      >
        {isDashboard && (
          <Button variant="secondary" className={cn("font-firaSans font-medium", mobileBtnsClasses)}>
            <PlusCircleIcon className='w-3 h-3' /> Dodaj ogłoszenie
          </Button>
        )}

        <Button
          variant="flat"
          className={cn(
            'group transition duration-300 ease-in-out',
            flatBtnBaseClasses,
            !isAuth && 'mr-2 max-700:mr-0',
            showNavOnDesktop && 'hidden max-1024:flex',
          )}
          onClick={openNav}
        >
          <BurgerIcon className="group-hover:fill-[#0d7a50]" />
        </Button>

        {!isAuth && (
          <>
            <Button path={'/login'} className={cn("px-3 font-firaSans", mobileBtnsClasses)}>
              <UserIcon className='max-700:w-3' />
              Zaloguj się
            </Button>

            <Button
              path={'/logup'}
              variant="secondary"
              className={cn("px-3 font-firaSans", mobileBtnsClasses)}
            >
              <LockIcon className='max-700:w-3' />
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
            hover:bg-transparent shadow-doobleSmallShadow max-700:w-8 max-700:h-8"
            >
              <Image
                src={UserPhoto}
                alt="User photo"
                className="absolute left-1/2 top-1/2 
              -translate-x-1/2 -translate-y-1/2 w-10 h-10 max-700:w-7 max-700:h-7"
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
      <div
        className={cn(
          'hidden fixed z-30 top-0 right-0 bottom-0 w-full left-0 bg-black opacity-50',
          isNavOpen && 'block'
        )}
        onClick={() => closeNav()}
      ></div>
    </header>
  );
};

export default Header;
