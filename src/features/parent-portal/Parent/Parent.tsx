import { type FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { PortalEntryTemplate, Button } from '@/shared/ui';

/**
 * Parent Login/Entry Page.
 * Uses PortalEntryTemplate for consistent structure.
 */
const Parent: FC = () => {
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, logic goes here. For now, redirect to dashboard.
    navigate('/portal/parent/dashboard');
  };

  return (
    <PortalEntryTemplate
      title="Parent Gateway"
      subtitle="Monitor your child's academic progress and stay connected with the school."
      role="parent"
    >
      <form className="space-y-6" onSubmit={handleLogin}>
        <div>
          <label
            htmlFor="parent-id"
            className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
          >
            Unified Parent ID
          </label>
          <input
            type="text"
            id="parent-id"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none"
            placeholder="P-XXXX-XXXX"
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
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all outline-none"
            placeholder="••••••••"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 transition-colors"
            />
            <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
              Remember me
            </span>
          </label>
          <button type="button" className="text-sm font-bold text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 transition-colors">
            Forgot Credentials?
          </button>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 border-none shadow-lg shadow-emerald-600/20"
        >
          Access Portal
        </Button>
      </form>
    </PortalEntryTemplate>
  );
};

export default Parent;
