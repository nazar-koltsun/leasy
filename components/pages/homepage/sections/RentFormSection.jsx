'use client';

import { useState } from 'react';
import Image from 'next/image';
import Card from '@/components/Card';
import FormInput from '@/components/FormInput';
import DateFormInput from '@/components/DateFormInput';

import RentFormBgImage from '@/assets/home_rent_form_bg.png';
import LocationIcon from '@/components/icons/LocationIcon';
import Button from '@/components/Button';

const RentFormSection = () => {
  const [formData, setFormData] = useState({
    city: '',
    startDate: new Date(),
    endDate: new Date(),
  });

  const onFormFieldChange = (fieldName, newValue) => {
    setFormData((prevData) => ({ ...prevData, [fieldName]: newValue }));
  };

  return (
    <div className="relative pt-[53px] pb-[51px] px-16">
      <Card className="p-9 relative z-10 w-[460px] max-w-full text-chineseBlack">
        <p className="text-xl">Sprawdź, co możesz wypożyczyć</p>

        <h1 className="mt-2 text-[28px] leading-[36px] uppercase font-black">
          Wypożycz to, czego potrzebujesz
        </h1>

        <p className="mt-2.5 text-raisinBlack">
          Od sprzętu budowlanego po luksusowe samochody. Wybierz swoją
          lokalizację i sprawdź dostępne terminy.
        </p>

        <form onSubmit={() => {}} className="mt-5">
          <div className="relative">
            <LocationIcon className="absolute left-7 top-1/2 -translate-y-1/2" />
            <FormInput
              id="city"
              value={formData.city}
              onChange={(e) => onFormFieldChange('city', e.target.value)}
              placeholder="Miejscowość"
              className="pl-[60px] h-[60px] placeholder:text-chineseBlack text-chineseBlack rounded-xl"
            />
          </div>

          <DateFormInput
            label="Odbiór"
            value={formData.startDate}
            onChange={(date) => onFormFieldChange('startDate', date)}
            isSecondary
            className='mt-3'
          />

          <DateFormInput
            label="Zwrot"
            value={formData.endDate}
            onChange={(date) => onFormFieldChange('endDate', date)}
            isSecondary
            className='mt-3'
          />

          <Button className='w-full min-h-[60px] mt-4 text-lotion rounded-xl'>
            WYSZUKAJ
          </Button>
        </form>
      </Card>

      <Image
        src={RentFormBgImage}
        alt=""
        className="absolute left-0 top-0 w-full h-full object-cover"
      />
    </div>
  );
};

export default RentFormSection;
