import { cn } from '@/lib/utils';
import Link from 'next/link';
import Button from './Button';

const SidebarNavItem = ({
  icon,
  label,
  href,
  onClick,
  isActive,
  className,
}) => {
  const navItemClasses =
    'py-[18px] px-5 w-full flex items-center justify-start gap-6 font-poppins text-lg text-rhythm font-normal stroke-[#737791] fill-[#737791]  hover:bg-green hover:text-white hover:stroke-white hover:fill-white rounded-[16px] max-1024:text-[15px] max-1024:gap-3 max-1024:py-3 max-1024:px-3';
  const navItemActiveClasses = 'font-semibold bg-green text-white stroke-white';
  const iconWrapperStyles = "w-[26px] h-[26px] flex items-center justify-center max-1024:w-4 max-1024:h-4";

  if (href) {
    return (
      <Link
        href={href}
        className={cn(
          navItemClasses,
          isActive && navItemActiveClasses,
          className
        )}
      >
        <div className={iconWrapperStyles}>
          {icon}
        </div>
        {label}
      </Link>
    );
  }

  return (
    <Button
      variant="flat"
      className={cn(
        navItemClasses,
        className
      )}
      onClick={onClick}
    >
      <div className={iconWrapperStyles}>
        {icon}
      </div>
      {label}
    </Button>
  );
};

export default SidebarNavItem;
