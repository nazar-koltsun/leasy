import { useState } from 'react';
import FormInput from '@/components/FormInput';
import FormLabel from '@/components/FormLabel';
import FormAgreementCheckbox from '@/components/FormAgreementCheckbox';
import Link from 'next/link';
import Button from '@/components/Button';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberData: false,
  });

  const onFieldChange = (fieldName, newValue) => {
    setFormData((prevData) => ({ ...prevData, [fieldName]: newValue }));
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={onFormSubmit} className="mt-8">
      <div className="space-y-4">
        <div className="space-y-[6px]">
          <FormLabel htmlFor="email">Email</FormLabel>
          <FormInput
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => onFieldChange('email', e.target.value)}
          />
        </div>

        <div className="space-y-[6px]">
          <FormLabel htmlFor="password">Hasło</FormLabel>
          <FormInput
            id="password"
            type="password"
            value={formData.password}
            onChange={(e) => onFieldChange('password', e.target.value)}
          />
        </div>

        <div className="flex justify-between items-end gap-4">
          <FormAgreementCheckbox
            checked={formData.rememberData}
            name="remember-data"
            label="Zapamiętaj"
            onChange={(e) => onFieldChange('rememberData', e.target.checked)}
          />

          <Link
            href="/forgot-password"
            className="text-sm text-chineseBlack font-bold hover:opacity-60 underline transform transition duration-300 ease-out"
          >
            Nie pamiętasz hasła?
          </Link>
        </div>
      </div>

      <Button className="w-full mt-7">Zaloguj</Button>

      <p className="mt-1.5 text-sm text-darkSlateGray font-bold">
        Nie masz jeszcze konta?
        <Link
          href="/signup"
          className="ml-1 text-chineseBlack hover:opacity-60 underline transform transition duration-300 ease-out"
        >
          Zarejestruj się
        </Link>
        .
      </p>
    </form>
  );
};

export default LoginForm;
