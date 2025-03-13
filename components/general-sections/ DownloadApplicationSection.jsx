import Image from 'next/image';
import DownLoadAppBg from '@/assets/download_app_bg.png';
import LogoBig from '@/assets/logo_big.png';
import GooglePlayBigIcon from '@/components/icons/GooglePlayBigIcon';
import AppleStoreBigIcon from '@/components/icons/AppleStoreBigIcon';

const DownloadApplicationSection = () => {
  return (
    <section className="relative mx-7 pl-[80px] pb-16 pt-[26px] pr-9 flex justify-between items-start min-h-[324px] gap-5 bg-[#038DB1] rounded-2xl overflow-hidden max-768:pl-10 max-768:pr-4 max-768:pb-8 max-768:min-h-[280px] max-620:mx-4 max-620:px-4 max-620:flex-col-reverse max-620:gap-2">
      <div className="self-end relative z-10 w-[500px] max-w-full text-lotion">
        <h2
          className="text-3xl font-bold"
          style={{ textShadow: '1px 1px 0 black' }}
        >
          Pobierz aplikację mobilną
        </h2>
        <p
          className="mt-4 drop-shadow-2xl"
          style={{ textShadow: '1px 1px 0 black' }}
        >
          Wypożyczalnia LEASY jest również dostępna do pobrania za darmo na
          Google Play i Apple Store. Przeglądaj ogłoszenia lub załóż konto i
          dodaj swój sprzęt do wypożyczenia i zarabiaj.
        </p>

        <div className="mt-6 flex gap-[11px] relative z-10 max-620:mt-4">
          <a
            href="https://play.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GooglePlayBigIcon className='max-620:w-[140px]' />
          </a>

          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AppleStoreBigIcon  className='max-620:w-[140px]'/>
          </a>
        </div>
      </div>

      <Image
        src={LogoBig}
        width={225}
        height={84}
        alt="LEASY"
        className="relative z-10 max-1024:w-[105px] max-1024:h-[39px]"
      />

      <Image
        src={DownLoadAppBg}
        alt=""
        className="absolute left-0 top-0 w-full h-full object-cover"
        role="presentation"
      />
    </section>
  );
};

export default DownloadApplicationSection;
