import { cn } from '@/lib/utils';
import Button from '@/components/Button';
import MessageIcon from '@/components/icons/MessageIcon';
import FocusIcon from '@/components/icons/FocusIcon';

const RowItemActionPopup = ({ isLast }) => {
  const baseBtnsClasses =
    'gap-1 text-sm leading-6 font-normal text-chineseBlack';

  return (
    <div
      className={cn(
        'absolute z-10 right-4 top-full py-1.5 px-2 pl-3 space-y-[2px] border border-lightSilver rounded-xl bg-white max-620:right-0',
        isLast && '-top-16'
      )}
    >
      <Button variant="flat" className={baseBtnsClasses}>
        <MessageIcon width={15} height={15} className="mt-[2px]" /> Napisz do
        Właściciela
      </Button>

      <Button variant="flat" className={baseBtnsClasses}>
        <FocusIcon /> Zobacz szczegóły
      </Button>
    </div>
  );
};

export default RowItemActionPopup;
