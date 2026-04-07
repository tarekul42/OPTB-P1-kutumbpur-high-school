import React from 'react';
import Card from './Card';

interface UpdateCardProps {
  title: string;
  description: string;
  date?: string;
  category?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const UpdateCard: React.FC<UpdateCardProps> = ({
  title,
  description,
  date,
  category,
  icon,
  onClick,
  className = '',
}) => {
  return (
    <Card
      hoverable
      className={`p-6 border-neutral-200 hover:border-accent-gold transition-all duration-300 group/card ${className}`}
      onClick={onClick}
    >
      <div className="flex items-start">
        {icon && (
          <div className="shrink-0 text-accent-gold mr-4">
            {icon}
          </div>
        )}
        <div className="flex-1">
          {(category || date) && (
            <div className="flex items-center space-x-2 mb-2">
              {category && (
                <span className="text-sm font-medium text-accent-gold">
                  {category}
                </span>
              )}
              {category && date && (
                <span className="text-sm text-neutral-500">•</span>
              )}
              {date && (
                <span className="text-sm text-neutral-500">
                  {date}
                </span>
              )}
            </div>
          )}
          <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover/card:text-accent-gold transition-colors">
            {title}
          </h3>
          <p className="text-neutral-600 line-clamp-2">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default UpdateCard;
