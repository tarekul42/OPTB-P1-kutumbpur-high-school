import { type FC, type ReactNode } from 'react';
import { cn } from '@/shared/lib/cn';

interface StatCardProps {
  label: string;
  value: string | number;
  icon?: ReactNode;
  trend?: {
    value: number;
    isUp: boolean;
  };
  className?: string;
}

/**
 * StatCard for displaying numerical highlights (e.g., student count, GPA, attendance).
 * High-impact design with clear typography.
 */
const StatCard: FC<StatCardProps> = ({ label, value, icon, trend, className }) => {
  return (
    <div
      className={cn(
        'bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex items-center justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1',
        className
      )}
    >
      <div className="flex-1">
        <p className="text-slate-500 dark:text-slate-400 text-xs font-bold uppercase tracking-widest mb-1">
          {label}
        </p>
        <div className="flex items-baseline gap-2">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white">
            {value}
          </h3>
          {trend && (
            <span
              className={cn(
                'text-xs font-bold px-1.5 py-0.5 rounded-full flex items-center gap-0.5',
                trend.isUp
                  ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
                  : 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400'
              )}
            >
              <svg
                className={cn('w-3 h-3', !trend.isUp && 'rotate-180')}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M5 15l7-7 7 7"
                />
              </svg>
              {trend.value}%
            </span>
          )}
        </div>
      </div>
      
      {icon && (
        <div className="w-14 h-14 bg-primary-50 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center text-primary-600 dark:text-primary-400 shrink-0">
          {icon}
        </div>
      )}
    </div>
  );
};

export default StatCard;
