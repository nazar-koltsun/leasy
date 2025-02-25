import { cn } from "@/lib/utils";
import FormInput from "@/components/FormInput";
import SearchIcon from '@/components/icons/SearchIcon';
import Button from '@/components/Button';

const SearchInput = ({ onChange, value, className, ...props }) => {
  return (
    <div className={cn('relative', className)}>
      <FormInput
        type="search"
        className='rounded-full pr-14'
        value={value}
        onChange={onChange}
        {...props}
      />
      <Button className='absolute right-[6px] top-1/2 transform -translate-y-1/2 p-0 w-9 h-9 rounded-full'>
        <SearchIcon />
      </Button>
    </div>
  );
};

export default SearchInput;