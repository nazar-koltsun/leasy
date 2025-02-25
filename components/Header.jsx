import Image from 'next/image';
import Logo from '@/assets/logo.png';
import SearchInput from '@/components/SearchInput';
import Button from '@/components/Button';
import BurgerIcon from '@/components/icons/BurgerIcon';
import UserIcon from '@/components/icons/UserIcon';
import LockIcon from '@/components/icons/LockIcon';

const Header = () => {
  return (
    <header className="relative p-4 flex justify-between items-center">
      <Image src={Logo} width={145} height={54} priority alt="Logo" />

      <SearchInput
        className="w-[450px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        placeholder="Czego szukasz....?"
      />

      <div className="flex gap-3 items-center">
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
