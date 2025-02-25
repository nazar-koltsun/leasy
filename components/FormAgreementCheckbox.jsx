import { cn } from '../lib/utils';

const FormAgreementCheckbox = ({
  name = 'agreement',
  checked = false,
  label,
  className = '',
  ...props
}) => {
  return (
    <div className={cn('flex gap-2 items-center', className)}>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        className="w-4 h-4 shrink-0"
        {...props}
      />
      <label htmlFor={name} className="text-darkSlateGray text-sm leading-[24px] font-bold">
        {label}
      </label>
    </div>
  );
};

export default FormAgreementCheckbox;