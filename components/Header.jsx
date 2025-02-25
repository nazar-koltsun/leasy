import Image from 'next/image';
import Logo from '@/assets/logo.png';
import SearchInput from '@/components/SearchInput';
import Button from '@/components/Button';
import BurgerIcon from '@/components/icons/BurgerIcon';
import UserIcon from '@/components/icons/UserIcon';
import LockIcon from '@/components/icons/LockIcon';

const Header = () => {
  return (
    <header className="relative p-4 flex justify-between items-center max-1100:flex-wrap max-620:flex-col">
      <Image src={Logo} width={145} height={54} className='order-1' priority alt="Logo" />

      <SearchInput
        className="w-[450px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 order-2
        max-1250:w-[300px] max-1100:w-full max-1100:mt-4 max-1100:relative max-1100:top-0 max-1100:left-0 
        max-1100:translate-x-0 max-1100:translate-y-0 max-1100:order-last"
        placeholder="Czego szukasz....?"
      />

      <div className="flex gap-3 items-center order-3  max-620:mt-4">
        <Button
          variant="flat"
          className="group mr-2 w-8 h-8 flex items-center justify-center transition duration-300 ease-in-out"
        >
          <BurgerIcon className="group-hover:fill-[#0d7a50]" />
        </Button>

        <Button path={'/login'} className="px-3 font-firaSans">
          <UserIcon />
          Zaloguj się
        </Button>

        <Button
          path={'/logup'}
          variant="secondary"
          className="px-3 font-firaSans"
        >
          <LockIcon />
          Zarejestruj
        </Button>
      </div>
    </header>
  );
};

export default Header;
