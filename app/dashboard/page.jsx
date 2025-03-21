'use client';

import { useState } from 'react';
import DashboardPageTitle from '@/components/DashboardPageTitle';
import SearchInput from '@/components/SearchInput';
import Table from '@/components/Table';
import Pagination from '@/components/Pagination';
import LenderDetails from '@/components/LenderDetails';

import AvatarOne from '@/assets/avatars/avatar-1.png';
import AvatarTwo from '@/assets/avatars/avatar-2.png';
import AvatarThree from '@/assets/avatars/avatar-3.png';
import AvatarFour from '@/assets/avatars/avatar-4.png';
import AvatarFive from '@/assets/avatars/avatar-5.png';
import AvatarSix from '@/assets/avatars/avatar-6.png';
import AvatarSeven from '@/assets/avatars/avatar-7.png';
import AvatarEight from '@/assets/avatars/avatar-8.png';
import AvatarNine from '@/assets/avatars/avatar-9.png';
import CarImage from '@/assets/car.png';

const RENTALS_DATA = [
  {
    Nr: '1045',
    Data: 'Pon 29.10.2024',
    Status: 'Zakończono',
    właściciel: {
      name: 'Jan Nowak',
      photo: AvatarOne,
    },
    produkt: 'Koparka Sport Cruiser',
    koszt: '1 114 zł',
  },
  {
    Nr: '1046',
    Data: 'Pon 29.10.2024',
    Status: 'Zakończono',
    właściciel: {
      name: 'Jan Nowak',
      photo: AvatarTwo,
    },
    produkt: 'Koparka Sport Cruiser',
    koszt: '1 114 zł',
  },
  {
    Nr: '1047',
    Data: 'Pon 29.10.2024',
    Status: 'Anulowane',
    właściciel: {
      name: 'Jan Nowak',
      photo: AvatarThree,
    },
    produkt: 'Koparka Sport Cruiser',
    koszt: '1 114 zł',
  },
  {
    Nr: '1048',
    Data: 'Pon 29.10.2024',
    Status: 'Zakończono',
    właściciel: {
      name: 'Jan Nowak',
      photo: AvatarFour,
    },
    produkt: 'Koparka Sport Cruiser',
    koszt: '1 114 zł',
  },
  {
    Nr: '1049',
    Data: 'Pon 29.10.2024',
    Status: 'Anulowane',
    właściciel: {
      name: 'Jan Nowak',
      photo: AvatarFour,
    },
    produkt: 'Koparka Sport Cruiser',
    koszt: '1 114 zł',
  },
  {
    Nr: '1050',
    Data: 'Pon 29.10.2024',
    Status: 'Anulowane',
    właściciel: {
      name: 'Jan Nowak',
      photo: AvatarFive,
    },
    produkt: 'Koparka Sport Cruiser',
    koszt: '1 114 zł',
  },
  {
    Nr: '1051',
    Data: 'Pon 29.10.2024',
    Status: 'Zakończono',
    właściciel: {
      name: 'Jan Nowak',
      photo: AvatarSix,
    },
    produkt: 'Koparka Sport Cruiser',
    koszt: '1 114 zł',
  },
  {
    Nr: '1052',
    Data: 'Pon 29.10.2024',
    Status: 'Do odbioru',
    właściciel: {
      name: 'Jan Nowak',
      photo: AvatarSeven,
    },
    produkt: 'Koparka Sport Cruiser',
    koszt: '1 114 zł',
  },
  {
    Nr: '1053',
    Data: 'Pon 29.10.2024',
    Status: 'Zakończono',
    właściciel: {
      name: 'Jan Nowak',
      photo: AvatarEight,
    },
    produkt: 'Koparka Sport Cruiser',
    koszt: '1 114 zł',
  },
  {
    Nr: '1054',
    Data: 'Pon 29.10.2024',
    Status: 'Zakończono',
    właściciel: {
      name: 'Jan Nowak',
      photo: AvatarNine,
    },
    produkt: 'Koparka Sport Cruiser',
    koszt: '1 114 zł',
  },
];

const LENDER_DATA = {
  number: '#256717',
  product: 'SPORT CRUISER',
  status: 'Zakończono',
  order_date: '07.10.2024',
  lender: {
    name: 'Katarzyna Niedbała',
    email: 'katarzyna.niedbała@gmail.com',
    phone: '601-829-947',
    rating_score: 4.5,
    reviews_count: 35,
    used_leasy_from: 'Styczeń 2025',
    location: 'Poznań, Wielkopolska',
    languages: 'Polski & Angielski',
    number_of_ads_posted: 127,
  },
  tenant: {
    name: 'Jan Nowak',
    email: 'jan.nowak@gmail.com',
    phone: '601-889-987',
  },
  rent_items: [
    {
      id: Math.random(),
      label: 'SPORT CRUISER — OCEANIS 35 (2017)',
      image: CarImage,
      reception__address: 'ul. Kaszubska 4, Poznań', 
      return__address: 'ul. Kaszubska 4, Poznań',
      pickup_date: 'Wtorek 06.10.2024',
      pickup_time: '11:00',
      return_date: 'Środa, 07.10.2024',
      return_time: '12:00',
      price_per_day: '215 zł',
      rent_days: 3,
      total_price: '645 zł',
      deposit_price: '500 zł',
      final_price: '1 145 zł',
    },
    {
      id: Math.random(),
      label: 'SPORT CRUISER — X 39 (2019)',
      image: CarImage,
      reception__address: 'ul. Zelena 4, Warszawa',
      return__address: 'ul. Zelena 4, Warszawa',
      pickup_date: 'Wtorek 07.10.2024',
      pickup_time: '11:30',
      return_date: 'Środa, 08.10.2024',
      return_time: '12:30',
      price_per_day: '215 zł',
      rent_days: 3,
      total_price: '645 zł',
      deposit_price: '600 zł',
      final_price: '1 245 zł',
    },
  ],
}

const DashboardMainPage = () => {
  const [isLenderDetailsVisible, setIsLenderDetailsVisible] = useState(false);

  const showLenderDetails = () => {
    window.scrollTo({top: 0});
    setIsLenderDetailsVisible(true);
  }

  const hideLenderDetails = () => {
    window.scrollTo({top: 0});
    setIsLenderDetailsVisible(false);
  }

  if(isLenderDetailsVisible) {
    return (
      <LenderDetails lenderData={LENDER_DATA} hideLenderDetails={hideLenderDetails} />
    )
  }

  return (
    <div>
      <div className='flex justify-between items-center gap-4'>
        <DashboardPageTitle title="Wypożyczenia" />

        <SearchInput id="search-rentals" placeholder="Szukaj..." className='w-[260px]' />
      </div>

      <Table data={RENTALS_DATA} className='mt-4' showLenderDetails={showLenderDetails} />

      <Pagination totalItems={20} className='mt-8' />
    </div>
  );
};

export default DashboardMainPage;
