import { ButtonHTMLAttributes, ReactNode } from 'react';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

export function CustomButton({
  variant = 'primary',
  children,
  className = '',
  ...props
}: CustomButtonProps) {
  const baseClasses =
    'px-8 py-4 rounded-xl transition-all duration-300 font-medium flex items-center justify-center gap-2';

  const variantClasses = {
    primary:
      'bg-[#3A6FF7] text-white hover:bg-[#5B8BF8] shadow-[0_0_25px_rgba(58,111,247,0.4)]',

    secondary:
      `
      bg-white/80 
      text-[#3A6FF7] 
      border border-[#3A6FF7]/40 
      backdrop-blur-sm
      shadow-[0_0_25px_rgba(58,111,247,0.35)]
      hover:bg-[#3A6FF7]
      hover:text-white
      hover:shadow-[0_0_45px_rgba(58,111,247,0.55)]
      `,
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
