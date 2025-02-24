import Image from 'next/image';
import Logo from '@/assets/logo.png';
import FormInput from '@/components/FormInput';

const Header = () => {
  return (
    <header className="p-4">
      <Image src={Logo} width={145} height={54} priority alt="Logo" />

      <div>
        <FormInput id="search" type="search" placeholder="Szukaj" />
      </div>
    </header>
  );
};

export default Header;
