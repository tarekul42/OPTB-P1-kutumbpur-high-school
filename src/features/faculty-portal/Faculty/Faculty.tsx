import { type FC } from 'react';
import { PortalEntryTemplate } from '@/shared/ui';
import { Button } from '@/shared/ui';

/**
 * Faculty Login Page.
 * Refactored to use the PortalEntryTemplate for consistency and reduced duplication.
 */
const Faculty: FC = () => {
  return (
    <PortalEntryTemplate
      title="Faculty Access"
      subtitle="Manage your classes, grades, and resources in one secure place."
      role="faculty"
    >
      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2"
          >
            Institutional Email
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none"
            placeholder="name.staff@school.edu.bd"
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
            className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none"
            placeholder="••••••••"
            required
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input
              type="checkbox"
              className="w-4 h-4 rounded border-slate-300 text-amber-600 focus:ring-amber-500 transition-colors"
            />
            <span className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
              Remember me
            </span>
          </label>
          <button type="button" className="text-sm font-bold text-amber-600 hover:text-amber-700 dark:text-amber-400 transition-colors">
            Forgot Password?
          </button>
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 border-none shadow-lg shadow-amber-600/20"
        >
          Sign In to Portal
        </Button>
      </form>
    </PortalEntryTemplate>
  );
};

export default Faculty;
