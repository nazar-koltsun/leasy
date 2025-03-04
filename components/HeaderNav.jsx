import { cn } from '@/lib/utils';
import Link from 'next/link';
import Button from '@/components/Button';
import ArrowDownBorderIcon from '@/components/icons/ArrowDownBorderIcon';
import CloseIcon from '@/components/icons/CloseIcon';

const NAV_LINKS = [
  { title: 'O nas', href: '/about-us' },
  { title: 'Odkryj', href: '/open' },
  { title: 'Cennik', href: '/price' },
  { title: 'Kontakt', href: '/contact-us' },
  {
    title: 'Więcej',
    subLinks: [
      { title: 'Więcej 1', href: '/more-1' },
      { title: 'Więcej 2', href: '/more-2' },
      { title: 'Więcej 3', href: '/more-3' },
    ],
  },
];

const HeaderNav = ({ isOpen, onClose, className }) => {
  const basicLinksClasses =
    'relative z-10 text-black text-xl leading-[24px] transition duration-300 ease-in-out';

  const renderLink = (link) => {
    if (link.subLinks) {
      return (
        <div className={cn("group relative flex items-center gap-2",
          isOpen && 'flex-col',
        )}>
          <span className={cn(basicLinksClasses, isOpen && 'text-white')}>
            {link.title}
          </span>
          <ArrowDownBorderIcon className={cn('mt-1', isOpen && 'hidden')} />

          {link.subLinks && (
            <div
              className={cn(
                'pt-8 min-w-[180px] hidden opacity-0 group-hover:opacity-100 group-hover:block absolute top-0 right-0',
                isOpen && 'block opacity-100 static pt-0'
              )}
            >
              <ul
                className={cn(
                  'bg-white shadow-md p-4 rounded-md space-y-1',
                  isOpen && 'p-0 flex flex-col items-center bg-transparent shadow-none'
                )}
              >
                {link.subLinks.map((subLink) => (
                  <li key={subLink.title}>
                    <Link
                      href={subLink.href}
                      className={cn(
                        basicLinksClasses,
                        'text-base hover:text-castletonGreen',
                        isOpen && 'text-white'
                      )}
                    >
                      {subLink.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    }

    return (
      <Link
        href={link.href}
        className={cn(
          basicLinksClasses,
          'hover:text-castletonGreen',
          isOpen && 'text-white'
        )}
      >
        {link.title}
      </Link>
    );
  };

  return (
    <nav
      className={cn(
        'order-2 ml-auto mr-9',
        isOpen &&
          'pt-10 pb-14 fixed z-40 bg-white top-0 right-0 mr-0 h-screen bg-green shadow-2xl overflow-auto',
        className
      )}
    >
      {isOpen && (
        <Button variant="flat" className="absolute top-4 left-4 hover:opacity-70" onClick={onClose}>
          <CloseIcon fill='white' />
        </Button>
      )}
      <ul
        className={cn(
          'flex items-center gap-8',
          isOpen && 'flex-col w-[400px] h-full items-center gap-0 max-620:w-screen'
        )}
      >
        {NAV_LINKS.map((link) => (
          <li key={link.title} className={cn(isOpen && 'w-full py-4 border-b border-b-[#2f9500] text-center last:border-none')}
           onClick={isOpen ? onClose : () => null}
          >
            {renderLink(link)}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
