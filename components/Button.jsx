import { cn } from '@/lib/utils';
import Link from 'next/link'

const Button = ({
  variant = 'default',
  children,
  onClick,
  className = '',
  path,
  ...props
}) => {
  const baseStyles =
    'flex items-center justify-center gap-2 py-[11px] px-4 font-bold text-base leading-[24px] text-white rounded-md transition duration-300 ease-in-out';

  const variantStyles = {
    flat: 'text-black p-0',
    default: 'bg-green hover:bg-[#0d7a50]',
    secondary: 'bg-castletonGreen hover:bg-[#06452c]',
    // bordered:
    //   'text-[var(--jungle-green)] py-[12px] border border-[var(--jungle-green)] hover:bg-[var(--jungle-green)] hover:text-white',
  };

  let button = null;

  if (path) {
    button = (
      <Link
      href={path}
        className={cn(baseStyles, variantStyles[variant], className)}
        onClick={onClick}
        {...props}
      >
        {children}
      </Link>
    );
  } else {
    button = (
      <button
        className={cn(baseStyles, variantStyles[variant], className)}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }

  return button;
};

export default Button;