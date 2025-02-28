'use client';

import { cn } from '@/lib/utils';
import { useState } from 'react';

const Pagination = ({ totalItems, itemsPerPage = 10, className }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  // Function to generate page numbers
  const getPageNumbers = () => {
    if (totalPages <= 6) {
      return [...Array(totalPages).keys()].map((n) => n + 1);
    }
    if (currentPage < 5) {
      return [1, 2, 3, 4, '...', totalPages];
    }
    if (currentPage > totalPages - 4) {
      return [
        1,
        '...',
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }
    return [
      1,
      '...',
      currentPage - 1,
      currentPage,
      currentPage + 1,
      '...',
      totalPages,
    ];
  };

  const onPrevBtnClick = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const onNextBtnClick = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const onPageClick = (page) => {
    typeof page === 'number' && setCurrentPage(page);
  };

  const basicBtnClasses =
    'w-7 h-7 text-sm text-auroMetal bg-transparent rounded-md';

  return (
    <div
      className={cn(
        'flex justify-between items-center gap-4 max-700:flex-col',
        className
      )}
    >
      {/* Pagination Controls */}
      <div className="flex items-center gap-2">
        <button
          onClick={onPrevBtnClick}
          disabled={currentPage === 1}
          className={cn('text-chineseBlack text-sm', currentPage === 1 && 'text-[#4b5563]')}
        >
          Poprzednia
        </button>

        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => onPageClick(page)}
            className={cn(
              basicBtnClasses,
              page === currentPage &&
                'bg-green text-white'
            )}
            disabled={page === '...'}
          >
            {page}
          </button>
        ))}

        <button
          onClick={onNextBtnClick}
          disabled={currentPage === totalPages}
          className={cn(
            'text-chineseBlack text-sm',
            currentPage === totalPages && 'text-[#4b5563]'
          )}
        >
          Następna
        </button>
      </div>
    </div>
  );
};

export default Pagination;
