'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import Button from '@/components/Button';
import TableRow from '@/components/TableRow';
import TableCheckBox from '@/components/TableCheckBox';
import ArrowDownIcon from '@/components/icons/ArrowDownIcon';

const Table = ({ data, className, showLenderDetails }) => {
  const initialActionPopups = data.map(() => (
    {
      isOpen: false,
    }
  ))
  const [actionPopups, setActionPopups] = useState(initialActionPopups);

  console.log('actionPopups', actionPopups);

  const toggleActionPopup = (index) => {
    const newActionPopups = actionPopups.map((popup, i) => {
      if (i === index) {
        return {
          ...popup,
          isOpen: !popup.isOpen,
        };
      }
      return {
        ...popup,
        isOpen: false,
      };
    });

    setActionPopups(newActionPopups);
  };
  

  const basicTdClasses = 'py-4 px-[15px] text-left';

  return (
    <div className={cn('bg-white overflow-x-auto w-[calc(100vw-381px)] max-1024:w-full', className)}>
      <table className="w-full whitespace-nowrap relative text-chineseBlack">
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
            <TableRow 
              key={rowIndex} 
              index={rowIndex}
              rowData={row} 
              isLast={rowIndex === data.length - 1} 
              isActionPopupVisible={actionPopups[rowIndex].isOpen} 
              toggleActionPopup={toggleActionPopup}
              showLenderDetails={showLenderDetails}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
