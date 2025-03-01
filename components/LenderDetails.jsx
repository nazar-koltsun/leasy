import { cn } from '@/lib/utils';
import DashboardPageTitle from '@/components/DashboardPageTitle';
import Button from '@/components/Button';
import LenderInfoCard from '@/components/LenderInfoCard';
import RentalsInfo from '@/components/RentalsInfo';

import DangerIcon from '@/components/icons/DangerIcon';

const LenderDetails = ({ lenderData, hideLenderDetails }) => {
  return (
    <div className="text-chineseBlack">
      <DashboardPageTitle title="Wypożyczenia - Szczegóły" className="mt-2.5" />

      <div className="pl-4 mt-8 max-1024:pl-0">
        <p>
          {`Ogłoszenie > ${lenderData.product} > Potwierdź Wypożyczenie > Wypożyczenie ${lenderData.number}`}
        </p>

        <div className="mt-2 flex items-start gap-5 uppercase">
          <h2 className="font-bold text-[28px] leading-10 max-700:text-xl">
            Potwierdzenie Wypożyczenia {lenderData.number}
          </h2>

          <span
            className={cn(
              'block mt-2 text-[12px] uppercase p-1 px-2.5 text-center rounded-[20px] font-bold',
              lenderData.status === 'Zakończono' &&
                'text-philippineGreen bg-magicMint',
              lenderData.status === 'Anulowane' &&
                'bg-palePink text-bostonUniversityRed',
              lenderData.status === 'Do odbioru' &&
                'bg-blanchedAlmond text-windsorTan'
            )}
          >
            {lenderData.status}
          </span>
        </div>

        <div className="mt-4 flex items-center gap-10 max-700:flex-col max-700:items-start max-700:gap-1">
          <p>Data złożenia zamówienia: {lenderData.order_date}</p>
          <Button variant="flat" className="text-sm font-normal gap-2 items-start text-left">
            <DangerIcon className='mt-0.5' /> Zgłoś problem z zamówieniem do Leasy
          </Button>
        </div>

        <LenderInfoCard lenderData={lenderData.lender} className="mt-8" />

        <RentalsInfo className="mt-8" rentalsData={lenderData} hideLenderDetails={hideLenderDetails} />
      </div>
    </div>
  );
};

export default LenderDetails;
