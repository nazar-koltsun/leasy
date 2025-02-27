'use client';

import Image from 'next/image';
import Card from '@/components/Card';
import FormTitle from '@/components/FormTitle';
import Button from '@/components/Button';
import LoginForm from '@/components/LoginForm';
import FacebookIcon from '@/components/icons/FacebookIcon';
import GoogleIcon from '@/assets/google.png';

const LoginPage = () => {
  return (
    <div className="px-4">
      <Card className="max-w-[600px] mx-auto mt-11 pt-6 pb-9 px-24 max-620:px-4 max-620:pt-3 max-620:pb-5 max-620:mt-5">
        <FormTitle>Zaloguj się</FormTitle>

        <p className="mt-3 text-darkSlateGray">
          Witaj ponownie. Wprowadź dane do logowania.
        </p>

        <LoginForm />

        <div
          className="relative mt-8 flex justify-center items-center 
          before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-full before:h-[1px] before:bg-brightGray"
        >
          <span className="relative z-10 px-5 block bg-white">lub</span>
        </div>

        <div className="mt-8 space-y-3">
          <Button variant="bordered" className="w-full">
            <FacebookIcon /> Zaloguj się z Facebook
          </Button>

          <Button variant="bordered" className="w-full">
            <Image src={GoogleIcon} width={27} height={27} alt='Google' /> Zaloguj się z Google
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default LoginPage;
