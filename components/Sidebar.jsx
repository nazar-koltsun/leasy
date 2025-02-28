'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import Button from '@/components/Button';
import SidebarNavItem from '@/components/SidebarNavItem';
import SidebarNav from '@/components/SidebarNav';
import AppsBanner from '@/components/AppsBanner';

import BurgerIcon from '@/components/icons/BurgerIcon';
import GoOutIcon from '@/components/icons/GoOutIcon';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <aside
        className={cn(
          'relative z-40 row-start-2 col-start-1 col-end-2 bg-white max-1024:col-start-1 max-1024:w-[250px]',
          !isSidebarOpen && 'max-1024:h-10 max-1024:w-10'
        )}
      >
        <div
          className={cn(
            'pt-6 px-4 pb-10 bg-white relative z-30',
            !isSidebarOpen && 'max-1024:hidden'
          )}
        >
          <SidebarNav />
          <SidebarNavItem
            label="Wyloguj się"
            icon={<GoOutIcon />}
            className="mt-2"
          />

          <AppsBanner className="mt-32 ml-3" />
        </div>

        <Button
          className="hidden w-8 h-8 max-1024:flex absolute z-20 top-0 left-4 p-0 hover:opacity-50 mb-4"
          variant="flat"
          onClick={openSidebar}
        >
          <BurgerIcon width={40} height={40} />
        </Button>
      </aside>

      <div
        className={cn(
          'hidden max-1024:block fixed z-30 top-0 right-0 bottom-0 w-full left-0 bg-black opacity-50',
          !isSidebarOpen && 'max-1024:hidden'
        )}
        onClick={() => closeSidebar()}
      ></div>
    </>
  );
};

export default Sidebar;
