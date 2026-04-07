import { type FC, type ReactNode } from 'react';
import Card from '../atoms/Card';

interface UpdateCardProps {
  title: string;
  description: string;
  date?: string;
  category?: string;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
}

const UpdateCard: FC<UpdateCardProps> = ({
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
      className={`p-6 border-slate-200 dark:border-slate-700 hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300 group/card ${className}`}
      onClick={onClick}
    >
      <div className="flex items-start">
        {icon && (
          <div className="shrink-0 text-primary-600 dark:text-primary-400 mr-4">
            {icon}
          </div>
        )}
        <div className="flex-1">
          {(category || date) && (
            <div className="flex items-center space-x-2 mb-2">
              {category && (
                <span className="text-sm font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider">
                  {category}
                </span>
              )}
              {category && date && (
                <span className="text-sm text-slate-400">•</span>
              )}
              {date && (
                <span className="text-sm text-slate-500 dark:text-slate-400">
                  {date}
                </span>
              )}
            </div>
          )}
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover/card:text-primary-600 dark:group-hover/card:text-primary-400 transition-colors">
            {title}
          </h3>
          <p className="text-slate-600 dark:text-slate-400 line-clamp-2 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </Card>
  );
};

export default UpdateCard;
