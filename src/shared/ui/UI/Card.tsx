import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
  border?: boolean;
  shadow?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
  onClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
  border = true,
  shadow = 'lg',
  onClick,
}) => {
  const shadows = {
    none: 'shadow-none',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };

  const baseStyles = 'bg-surface rounded-xl overflow-hidden transition-all duration-300';
  const hoverStyles = hoverable ? 'transform hover:scale-[1.03] hover:shadow-2xl cursor-pointer' : '';
  const borderStyles = border ? 'border border-neutral-200' : '';

  return (
    <div
      className={`${baseStyles} ${shadows[shadow]} ${hoverStyles} ${borderStyles} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
