import { cn } from '@/lib/utils';

const Card = ({ className, onClick, children }) => {
  return (
    <div
      className={cn(
        'bg-white py-10 px-11 shadow-cardShadow rounded-[10px]',
        className
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
