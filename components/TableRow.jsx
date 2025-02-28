import { cn } from '@/lib/utils';
import Image from 'next/image';
import Button from '@/components/Button';
import TableCheckBox from '@/components/TableCheckBox';
import RowItemActionPopup from '@/components/RowItemActionPopup';

import EditDotsIcon from '@/components/icons/EditDotsIcon';

const TableRow = ({ rowData, index, isLast, isActionPopupVisible, toggleActionPopup}) => {
  const basicTdClasses = 'py-4 px-[15px] text-left';

  return (
    <tr>
      <td className="text-left py-[22px] px-[15px] w-[70px]">
        <div className="flex items-center justify-center">
          <TableCheckBox onChange={() => {}} />
        </div>
      </td>
      {Object.keys(rowData).map((key, index) => (
        <td
          key={index}
          className={cn(basicTdClasses, key === 'koszt' && 'font-bold')}
        >
          {key === 'Status' ? (
            <span
              className={cn(
                'text-[12px] uppercase p-1 px-2.5 text-center rounded-[20px] font-bold',
                rowData[key] === 'Zakończono' &&
                  'text-philippineGreen bg-magicMint',
                rowData[key] === 'Anulowane' &&
                  'bg-palePink text-bostonUniversityRed',
                rowData[key] === 'Do odbioru' && 'bg-blanchedAlmond text-windsorTan'
              )}
            >
              {rowData[key]}
            </span>
          ) : key === 'właściciel' ? (
            <div className="flex items-center gap-3 min-w-[150px]">
              <Image
                src={rowData[key].photo}
                alt=""
                className="w-10 h-10 rounded-full"
              />
              {rowData[key].name}
            </div>
          ) : (
            rowData[key]
          )}
        </td>
      ))}
      <td className={cn('w-[70px]', basicTdClasses)}>
        <div className='relative'>
          <Button
            className="group w-[30px] h-[30px] pt-0 pb-0 pr-0 pl-0"
            variant="flat"
            onClick={() => toggleActionPopup(index)}
          >
            <EditDotsIcon className='group-hover:fill-green transition duration-300 ease-in-out' />
          </Button>
          {isActionPopupVisible && <RowItemActionPopup isLast={isLast} />}
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
