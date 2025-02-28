'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Button from '@/components/Button';
import EditDotsIcon from '@/components/icons/EditDotsIcon';
import ArrowDownIcon from '@/components/icons/ArrowDownIcon';

const TableCheckBox = ({ onChange }) => {
  return (
    <input
      className="flex items-center justify-center appearance-none w-5 h-5 bg-white border border-lightSilver rounded-[4px]"
      type="checkbox"
      onChange={onChange}
    />
  );
};

const Table = ({ data, className }) => {
  const basicTdClasses = 'py-4 px-[15px] text-left';

  return (
    <div className={cn('bg-white overflow-x-auto w-[calc(100vw-381px)] max-1024:w-full', className)}>
      <table className="w-full whitespace-nowrap relative">
        <thead>
          <tr className="bg-antiFlashWhite">
            <th className={cn('w-[70px]', basicTdClasses)}>
              <div className="flex justify-center items-center">
                <TableCheckBox onChange={() => {}} />
              </div>
            </th>
            {Object.keys(data[0]).map((key, index) => (
              <th
                key={index}
                className={cn(
                  'uppercase font-bold tracking-wide text-sm leading-[24px]',
                  basicTdClasses
                )}
              >
                {key === 'Nr' ? (
                  <Button variant="flat" className='gap-[2px] uppercase text-sm'>
                    {key}
                    <ArrowDownIcon />
                  </Button>
                ) : (
                  key
                )}
              </th>
            ))}
            <th className={cn('w-[70px]', basicTdClasses)}></th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="">
              <td className="text-left py-[22px] px-[15px] w-[70px]">
                <div className="flex items-center justify-center">
                  <TableCheckBox onChange={() => {}} />
                </div>
              </td>
              {Object.keys(row).map((key, index) => (
                <td key={index} className={cn(basicTdClasses, key === 'koszt' && 'font-bold')}>
                  {key === 'Status' ? (
                    <span
                      className={cn(
                        'text-[12px] uppercase p-1 px-2.5 text-center rounded-[20px] font-bold',
                        row[key] === 'Zakończono' &&
                          'text-philippineGreen bg-magicMint',
                        row[key] === 'Anulowane' &&
                          'bg-palePink text-bostonUniversityRed',
                        row[key] === 'Do odbioru' &&
                          'bg-blanchedAlmond text-windsorTan'
                      )}
                    >
                      {row[key]}
                    </span>
                  ) : key === 'właściciel' ? (
                    <div className="flex items-center gap-3 min-w-[150px]">
                      <Image
                        src={row[key].photo}
                        alt=""
                        className="w-10 h-10 rounded-full"
                      />
                      {row[key].name}
                    </div>
                  ) : (
                    row[key]
                  )}
                </td>
              ))}
              <td className={cn('w-[70px]', basicTdClasses)}>
                <Button
                  className="w-[30px] h-[30px] pt-0 pb-0 pr-0 pl-0"
                  variant="flat"
                >
                  <EditDotsIcon />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
