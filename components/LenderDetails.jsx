import { cn } from '@/lib/utils';
import DashboardPageTitle from '@/components/DashboardPageTitle';
import Button from '@/components/Button';
import LenderInfoCard from '@/components/LenderInfoCard';

import DangerIcon from '@/components/icons/DangerIcon';

const LenderDetails = ({ lenderData }) => {
  return (
    <div className="text-chineseBlack">
      <DashboardPageTitle title="Wypożyczenia - Szczegóły" className="mt-2.5" />

      <div className="pl-4 mt-8">
        <p>
          {`Ogłoszenie > ${lenderData.product} > Potwierdź Wypożyczenie > Wypożyczenie ${lenderData.number}`}
        </p>

        <div className="mt-2 flex items-center gap-5 uppercase">
          <h2 className="font-bold text-[28px] leading-10">
            Potwierdzenie Wypożyczenia {lenderData.number}
          </h2>

          <span
            className={cn(
              'text-[12px] uppercase p-1 px-2.5 text-center rounded-[20px] font-bold',
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

        <div className='mt-4 flex items-center gap-10'>
          <p>Data złożenia zamówienia: {lenderData.order_date}</p>
          <Button variant='flat' className='text-sm font-normal gap-1'>
            <DangerIcon /> Zgłoś problem z zamówieniem do Leasy
          </Button>
        </div> 
      </div>

      <LenderInfoCard lenderData={lenderData.lender} className='mt-8' />
    </div>
  );
};

export default LenderDetails;
