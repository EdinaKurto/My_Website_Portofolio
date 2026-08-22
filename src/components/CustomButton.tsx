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
  return (
    <button className={`story-button ${variant} ${className}`} {...props}>
      {children}
    </button>
  );
}
