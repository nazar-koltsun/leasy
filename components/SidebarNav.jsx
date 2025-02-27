import { usePathname } from 'next/navigation';
import SidebarNavItem from '@/components/SidebarNavItem';
import ShopBasketIcon from '@/components/icons/sidebar-nav-icons/ShopBasketIcon';
import HearthIcon from '@/components/icons/sidebar-nav-icons/HearthIcon';
import MessageIcon from '@/components/icons/sidebar-nav-icons/MessageIcon';
import StarIcon from '@/components/icons/sidebar-nav-icons/StarIcon';
import ShopBagIcon from '@/components/icons/sidebar-nav-icons/ShopBagIcon';
import SettingsIcon from '@/components/icons/sidebar-nav-icons/SettingsIcon';

const NAV_LINKS = [
  {
    label: 'Wypożyczenia',
    icon: <ShopBasketIcon />,
    href: '/dashboard',
  },
  {
    label: 'Ulubione',
    icon: <HearthIcon />,
    href: '/dashboard/favorite',
  },
  {
    label: 'Wiadomości',
    icon: <MessageIcon />,
    href: '/dashboard/news',
  },
  {
    label: 'Opinie',
    icon: <StarIcon />,
    href: '/dashboard/opinions',
  },
  {
    label: 'Twoja wypożyczalnia',
    icon: <ShopBagIcon />,
    href: '/dashboard/rental',
  },
  {
    label: 'Ustawienia',
    icon: <SettingsIcon />,
    href: '/dashboard/settings',
  },
];

const SidebarNav = () => {
  const pathname = usePathname();
  console.log('pathname', pathname);

  return (
    <ul className='space-y-2'>
      {NAV_LINKS.map((link, index) => (
        <li key={index}>
          <SidebarNavItem label={link.label} icon={link.icon} href={link.href} isActive={pathname === link.href} />
        </li>
      ))}
    </ul>
  );
};

export default SidebarNav;
