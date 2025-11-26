import { ButtonHTMLAttributes, ReactNode } from 'react';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

export function CustomButton({ variant = 'primary', children, className = '', ...props }: CustomButtonProps) {
  const baseClasses = 'px-8 py-4 rounded-xl transition-all duration-300 font-medium';
  
  const variantClasses = {
    primary: 'bg-[#3A6FF7] text-white hover:bg-[#5B8BF8] glow-blue hover:glow-blue-strong',
    secondary: 'bg-transparent text-white border-2 border-[#3A6FF7] hover:bg-[#3A6FF7]/10 hover:border-[#5B8BF8] glow-blue',
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
