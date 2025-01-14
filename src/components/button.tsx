import React from 'react';

interface ButtonProps {
  variant: 'outline' | 'filled';
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ variant, onClick, disabled, className, children }) => {
  const baseStyle = 'px-4 py-2 rounded-md focus:outline-none';
  const variantStyles = variant === 'outline' ? 'border-2 border-gray-500 text-gray-700' : 'bg-yellow-500 text-white';
  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer';

  return (
    <button
      className={`${baseStyle} ${variantStyles} ${disabledStyle} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
