import { cn } from '@/lib/utils';
import Image from 'next/image';
import AppBannerLogo from '@/assets/app-banner-logo.png';
import AppBannerBG from '@/assets/app-banner-bg.png';
import GooglePlayIcon from '@/components/icons/GooglePlayIcon';
import AppleStoreIcon from '@/components/icons/AppleStoreIcon';

const AppsBanner = ({ className }) => {
  return (
    <div
      className={cn(
        'relative pt-8 pb-10 px-[22px] w-[238px] max-w-full flex flex-col items-center justify-center bg-green rounded-[20px] overflow-hidden text-center text-opacity-80 font-poppins max-1024:w-[200px] max-1024:ml-0 max-1024:mx-auto max-1024:mt-12',
        className
      )}
    >
      <Image src={AppBannerLogo} width={143} height={48} alt="Leasy" className='relative z-10' />

      <h2 className="mt-2 text-white text-xl leading-[32px] font-semibold relative z-10">
        Leasy App
      </h2>

      <p className="px-6 mt-2 text-white text-xs font-medium relative z-10 max-1024:px-4">
        Pobierz aplikacje mobilna i miej wszystko pod ręką.
      </p>

      <div className="mt-4 flex gap-[7px] max-1024:flex-col relative z-10">
        <a
          href="https://play.google.com/"
          target="_blank"
          rel="noopener noreferrer"
          className='w-1/2'
        >
          <GooglePlayIcon />
        </a>

        <a
          href="https://www.apple.com/app-store/"
          target="_blank"
          rel="noopener noreferrer"
          className='w-1/2'
        >
          <AppleStoreIcon />
        </a>
      </div>

      <Image src={AppBannerBG} role='presentation' alt='' className='absolute inset-0 w-full h-full object-cover' />
    </div>
  );
};

export default AppsBanner;
