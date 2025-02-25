import { cn } from '@/lib/utils';

const FormTitle = ({tag: Tag = 'h1', className, children}) => {
  return (
    <Tag className={cn('text-[30px] leading-[48px] font-bold text-chineseBlack', className)}>{children}</Tag>
  )
}

export default FormTitle;