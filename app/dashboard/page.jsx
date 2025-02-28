import DashboardPageTitle from '@/components/DashboardPageTitle';
import SearchInput from '@/components/SearchInput';
import Table from '@/components/Table';
import AvatarOne from '@/assets/avatars/avatar-1.png';
import AvatarTwo from '@/assets/avatars/avatar-2.png';
import AvatarThree from '@/assets/avatars/avatar-3.png';
import AvatarFour from '@/assets/avatars/avatar-4.png';
import AvatarFive from '@/assets/avatars/avatar-5.png';
import AvatarSix from '@/assets/avatars/avatar-6.png';
import AvatarSeven from '@/assets/avatars/avatar-7.png';
import AvatarEight from '@/assets/avatars/avatar-8.png';
import AvatarNine from '@/assets/avatars/avatar-9.png';


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

const DashboardMainPage = () => {
  return (
    <div>
      <div className='flex justify-between items-center gap-4'>
        <DashboardPageTitle title="Wypożyczenia" />

        <SearchInput id="search-rentals" placeholder="Szukaj..." className='w-[260px]' />
      </div>

      <Table data={RENTALS_DATA} className='mt-4' />
    </div>
  );
};

export default DashboardMainPage;
