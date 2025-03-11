import { cn } from '@/lib/utils';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { pl } from 'date-fns/locale';

import CalendarIcon from '@/components/icons/CalendarIcon';

const DateFormInput = ({label = '', isSecondary = false, value, onChange, className}) => {
  const inputClasses = cn("outline-none leading-none text-auroMetal", isSecondary && 'font-bold text-chineseBlack');
  const containerClasses = cn("relative w-full flex flex-col justify-center py-[11px] px-3 border border-lightSilver pl-[55px] h-[48px] placeholder:text-chineseBlack text-chineseBlack rounded-md", 
    isSecondary && 'pl-[60px] h-[60px] rounded-xl',
    className
  );

  return (
    <label className={containerClasses}>
      <CalendarIcon 
        className={cn("absolute left-[18px] w-[18px] h-[18px] top-1/2 -translate-y-1/2", 
          isSecondary && 'left-[27px] w-[20px] h-[20px]'
        )} 
      />

      {label && <span className="text-sm leading-none">{label}</span>}
      <DatePicker
        selected={value}
        onChange={onChange}
        dateFormat="EEEE dd/MM/yyyy"
        locale={pl}
        className={inputClasses}
      />
    </label>
  );
};

export default DateFormInput;
