import { cn } from '@/lib/utils';

const FormLabel = ({ htmlFor, children, className = '' }) => {
  return (
    <label className={cn("text-black text-sm font-bold", className)} htmlFor={htmlFor}>
      {children}
    </label>
  );
};

export default FormLabel;