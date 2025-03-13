import Image from 'next/image';
import Button from '@/components/Button';
import CreateAccountPromoBg from '@/assets/create_account_promo_bg.png';
import LogoBig from '@/assets/logo_big.png';
import GooglePlayBigIcon from '@/components/icons/GooglePlayBigIcon';
import AppleStoreBigIcon from '@/components/icons/AppleStoreBigIcon';

const CreateAccountPromoSection = () => {
  return (
    <section className="relative mx-7 pl-10 pt-[26px] pb-[90px] pr-[140px] flex justify-between items-start min-h-[392px] gap-5 bg-[#A59578] rounded-2xl overflow-hidden max-1024:px-10 max-1024:pb-16 max-1024:min-h-[330px] max-768:flex-col max-768:pb-8 max-620:mx-4 max-620:px-4">
      <div className='max-768:flex gap-4 max-768:items-center max-768:flex-wrap max-768:gap-y-2'>
        <Image
          src={LogoBig}
          width={225}
          height={84}
          alt="LEASY"
          className="relative z-10 max-1024:w-[105px] max-1024:h-[39px]"
        />

        <div className="mt-6 flex gap-2 relative z-10 max-768:mt-0">
          <a
            href="https://play.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GooglePlayBigIcon className="w-[104px] h-[30px]" />
          </a>

          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AppleStoreBigIcon className="w-[104px] h-[30px]" />
          </a>
        </div>
      </div>

      <div className="self-end relative z-10 w-[450px] max-w-full text-lotion max-768:w-full">
        <h2 className="text-3xl font-bold" style={{ textShadow: '1px 1px 0 black' }}>
          Załóż konto i dodaj swój sprzęt, który chcesz wypożyczyć
        </h2>
        <p className="mt-4" style={{ textShadow: '1px 1px 0 black' }}>
          Zarejestruj się, uzupełnij profil i dodaj swoje pierwsze ogłoszenie.
          Zwiększ szansę na zarobek.
        </p>

        <Button path='/create-account' variant='secondary' className='inline-flex mt-8 text-lotion rounded-lg text-sm min-w-[121px] min-h-[46px]'>
          Załóż konto
        </Button>
      </div>

      <Image
        src={CreateAccountPromoBg}
        alt=""
        className="absolute left-0 top-0 w-full h-full object-cover max-768:object-left"
        role="presentation"
      />
    </section>
  );
};

export default CreateAccountPromoSection;
