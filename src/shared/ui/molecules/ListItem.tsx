import React from 'react';

interface ListItemProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  iconClassName?: string;
  textClassName?: string;
}

const ListItem: React.FC<ListItemProps> = ({
  children,
  icon,
  className = '',
  iconClassName = '',
  textClassName = '',
}) => {
  return (
    <li className={`flex items-start ${className}`}>
      {icon ? (
        <div className={`shrink-0 mr-3 mt-1 text-accent-gold ${iconClassName}`}>
          {icon}
        </div>
      ) : (
        <svg
          className={`w-5 h-5 text-accent-gold mr-3 mt-1 shrink-0 ${iconClassName}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      )}
      <span className={`text-neutral-600 ${textClassName}`}>
        {children}
      </span>
    </li>
  );
};

export default ListItem;
