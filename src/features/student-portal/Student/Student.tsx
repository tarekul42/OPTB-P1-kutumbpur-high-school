import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { PortalEntryTemplate, Button } from '@/shared/ui';
import { ROUTES } from '@/shared/constants/routes';

/**
 * Student Login/Entry Page.
 * Uses PortalEntryTemplate for consistent structure.
 */
const Student: FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, logic goes here. For now, redirect to dashboard.
    navigate('/portal/student/dashboard');
  };

  return (
    <PortalEntryTemplate
      title="Student Access"
      subtitle="Access your academic records, schedules, and digital resources."
      role="student"
    >
      <form className="space-y-6" onSubmit={handleLogin}>
        <div>
          <label
            htmlFor="student-id"
            className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
          >
            Student ID
          </label>
          <input
            type="text"
            id="student-id"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
            placeholder="KHS-2024-XXXX"
            required
          />
        </div>
        
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none"
            placeholder="••••••••"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-slate-300 text-primary-600 focus:ring-primary-500 transition-colors"
            />
            <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
              Stay logged in
            </span>
          </label>
          <button type="button" className="text-sm font-bold text-primary-600 hover:text-primary-700 dark:text-primary-400 transition-colors">
            Need Help?
          </button>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 border-none shadow-lg shadow-blue-600/20"
        >
          Explore Your Portal
        </Button>
      </form>
    </PortalEntryTemplate>
  );
};

export default Student;
