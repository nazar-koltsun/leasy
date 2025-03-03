import { cn } from '@/lib/utils';
import Link from 'next/link';
import ArrowDownBorderIcon from '@/components/icons/ArrowDownBorderIcon';

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

const HeaderNav = ({ className }) => {
  const basicLinksClasses =
    'relative z-10 text-black text-xl leading-[24px] transition duration-300 ease-in-out';

  const renderLink = (link) => {
    if (link.subLinks) {
      return (
        <div className="group relative flex items-center gap-2">
          <span className={basicLinksClasses}>{link.title}</span>
          <ArrowDownBorderIcon className="mt-1" />

          {link.subLinks && (
            <div className="pt-8 min-w-[180px] hidden opacity-0 group-hover:opacity-100 group-hover:block absolute top-0 right-0">
              <ul className="bg-white shadow-md p-4 rounded-md space-y-1">
                {link.subLinks.map((subLink) => (
                  <li key={subLink.title}>
                    <Link
                      href={subLink.href}
                      className={cn(
                        basicLinksClasses,
                        'text-base hover:text-castletonGreen'
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
        className={cn(basicLinksClasses, 'hover:text-castletonGreen')}
      >
        {link.title}
      </Link>
    );
  };

  return (
    <nav className={cn('order-2 ml-auto mr-9', className)}>
      <ul className="flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <li key={link.title}>{renderLink(link)}</li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
