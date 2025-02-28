import { cn } from '@/lib/utils';
import FormInput from '@/components/FormInput';
import SearchIcon from '@/components/icons/SearchIcon';
import Button from '@/components/Button';

const SearchInput = ({
  onChange,
  value,
  className,
  isSecondary = false,
  ...props
}) => {

  let inputContent = (
    <label
      htmlFor={props.id}
      className="absolute left-1 top-1/2 flex justify-center items-center transform -translate-y-1/2 p-0 w-9 h-9"
    >
      <SearchIcon fill="black" />
    </label>
  );

  if (isSecondary) {
    inputContent = (
      <Button className="absolute right-[6px] top-1/2 transform -translate-y-1/2 p-0 w-9 h-9 rounded-full">
        <SearchIcon />
      </Button>
    );
  }

  return (
    <div className={cn('relative', className)}>
      <FormInput
        id={props.id}
        type="search"
        className={cn(
          'pl-12 placeholder:text-sm placeholder:text-auroMetal',
          isSecondary && 'rounded-full pl-4 pr-11 border-[2px] placeholder:text-base placeholder:text-sonicSilver'
        )}
        value={value}
        onChange={onChange}
        {...props}
      />

      {inputContent}
    </div>
  );
};

export default SearchInput;
