import Link from 'next/link';
import { cn } from '@/lib/utils';
import GooglePlayIcon from '@/components/icons/GooglePlayIcon';
import AppleStoreIcon from '@/components/icons/AppleStoreIcon';
import Button from '@/components/Button';
import SocialMedia from '@/components/SocialMedia';

import PhoneIcon from '@/components/icons/PhoneIcon';
import MailIcon from '@/components/icons/MailIcon';
import TiktokIcon from '@/components/icons/TiktokIcon';
import ThreadsIcon from '@/components/icons/ThreadsIcon';
import InstagramIcon from '@/components/icons/InstagramIcon';
import XIcon from '@/components/icons/XIcon';
import FacebookIcon from '@/components/icons/FacebookIconSimple';
import PinterestIcon from '@/components/icons/PinterestIcon';

const socialNetworksBaseClasses =
  'group-hover:fill-castletonGreen transition duration-200 ease-in-out';

const socialNetworks = [
  {
    title: 'TikTok',
    href: 'https://tiktok.com',
    icon: <TiktokIcon className={socialNetworksBaseClasses} />,
  },
  {
    title: 'Threads',
    href: 'https://threads.com',
    icon: <ThreadsIcon className={socialNetworksBaseClasses} />,
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com',
    icon: <InstagramIcon className={socialNetworksBaseClasses} />,
  },
  {
    title: 'X',
    href: 'https://x.com',
    icon: <XIcon className={socialNetworksBaseClasses} />,
  },
  {
    title: 'Facebook',
    href: 'https://facebook.com',
    icon: <FacebookIcon className={socialNetworksBaseClasses} />,
  },
  {
    title: 'Pinterest',
    href: 'https://www.pinterest.com/',
    icon: <PinterestIcon className={socialNetworksBaseClasses} />,
  },
];

const Footer = () => {
  const sectionTitleClasses =
    "relative pb-4 text-white text-xl leading-[24px] font-bold before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-7 before:h-1 before:bg-castletonGreen max-620:text-base max-620:pb-2";
  const linkClasses =
    'transition duration-1000 ease-in-out hover:underline hover:opacity-80';

  return (
    <footer className="pt-16 pb-6 px-12 mt-auto bg-green text-white text-[15px] leading-[22px] max-620:px-4 max-620:pt-10 max-620:pb-3 max-620:text-sm">
      <div className='flex justify-between gap-6 flex-wrap max-1180:gap-y-10 max-620:gap-x-2 max-620:gap-y-7'>
        <div className="flex-1 flex-shrink-0 min-w-[185px] max-1180:min-w-full">
          <h4 className={sectionTitleClasses}>O Leasy</h4>

          <p className="mt-7 max-620:mt-5">
            Jesteśmy wiodącą wypożyczalnią sprzętu, z wieloletnim doświadczeniem
            w branży. Niezależnie od tego, czy potrzebujesz sprzętu budowlanego,
            samochodów, czy wyposażenia na imprezy - u nas znajdziesz wszystko w
            jednym miejscu. Naszą misją jest.
          </p>
        </div>

        <div className="flex-1 flex-shrink-0 min-w-[185px] max-1180:grow-0 max-768:min-w-[47%] max-768:max-w-[47%] ">
          <h4 className={sectionTitleClasses}>Wypożyczalnia</h4>

          <div className="mt-7 max-620:mt-5">
            <ul className="space-y-5 max-620:space-y-3">
              <li>
                <Link href="/about-us" className={linkClasses}>
                  O nas
                </Link>
              </li>
              <li>
                <Link href="/how-are-things" className={linkClasses}>
                  Jak to działa?
                </Link>
              </li>
              <li>
                <Link href="/how-to-create-account" className={linkClasses}>
                  Jak założyć konto?
                </Link>
              </li>
              <li>
                <Link href="/how-to-rent" className={linkClasses}>
                  Jak wypożyczyć sprzęt?
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1 flex-shrink-0 min-w-[185px] max-1180:grow-0 max-768:min-w-[47%] max-768:max-w-[47%]">
          <h4 className={sectionTitleClasses}>Informacje</h4>

          <div className="mt-7 max-620:mt-5">
            <ul className="space-y-5 max-620:space-y-3">
              <li>
                <Link href="/price-list" className={linkClasses}>
                  Cennik
                </Link>
              </li>
              <li>
                <Link href="/statute" className={linkClasses}>
                  Regulamin
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className={linkClasses}>
                  Polityka Prywatności
                </Link>
              </li>
              <li>
                <Link href="/faq" className={linkClasses}>
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex-1 flex-shrink-0 min-w-[185px] max-1180:grow-0 max-768:min-w-[47%] max-768:max-w-[47%]">
          <h4 className={sectionTitleClasses}>Aplikacja mobilna</h4>

          <div className="mt-7 max-620:mt-5">
            <ul className="space-y-5 max-620:space-y-3">
              <li>
                <a
                  href="https://play.google.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClasses}
                >
                  Pobierz Google Play
                </a>
              </li>
              <li>
                <a
                  href="https://www.apple.com/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={linkClasses}
                >
                  Pobierz Apple Store
                </a>
              </li>
            </ul>

            <div className="mt-4 flex gap-[7px] max-620:flex-col">
              <a
                href="https://play.google.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GooglePlayIcon />
              </a>

              <a
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AppleStoreIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="flex-1 flex-shrink-0 min-w-[185px] max-1180:grow-0 max-768:min-w-[47%] max-768:max-w-[47%]">
          <h4 className={sectionTitleClasses}>Kontakt</h4>

          <div className="mt-7 max-620:mt-5">
            <div className="flex gap-5 items-center max-620:gap-3">
              <Button
                variant="secondary"
                path="tel:+48888888888"
                className="w-[50px] h-[50px] p-1.5 flex items-center justify-center rounded max-1250:w-[38px] max-1250:h-[38px]"
              >
                <PhoneIcon />
              </Button>
              <Link
                href="tel:+48888888888"
                className={cn(linkClasses, 'font-bold text-base max-620:text-sm')}
              >
                (+48) 888 888 888
              </Link>
            </div>

            <div className="mt-4 flex gap-5 items-center max-620:gap-3">
              <Button
                variant="secondary"
                path="mailto:info@leasy.com"
                className="w-[50px] h-[50px] p-1.5 flex items-center justify-center rounded max-1250:w-[38px] max-1250:h-[38px]"
              >
                <MailIcon />
              </Button>
              <Link
                href="mailto:info@leasy.com"
                className={cn(linkClasses, 'font-bold text-base max-620:text-sm')}
              >
                info@leasy.com
              </Link>
            </div>
          </div>

          <div className="mt-3">
            <p className="relative pb-2 text-base text-lotion font-bold before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-[1px] before:bg-castletonGreen">
              Obserwuj nas
            </p>

            <SocialMedia
              networks={socialNetworks}
              className="mt-3 -ml-[6px] max-1024:mt-3.5"
            />
          </div>
        </div>
      </div>

      <p className='mt-8 text-center font-firaSans font-normal'>
        Copyright {new Date().getFullYear()} © All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
