import { type FC, type ReactNode } from 'react';
import { cn } from '@/shared/lib/cn';
import { Button, Card } from '@/shared/ui';

interface PortalEntryTemplateProps {
  title: string;
  subtitle: string;
  role: 'student' | 'parent' | 'faculty';
  illustration?: ReactNode;
  children: ReactNode; // Usually the login form or options
  accentColor?: string;
}

/**
 * A shared template for portal entry pages (login/authentication).
 * Standardizes the layout for Student, Parent, and Faculty portals.
 */
const PortalEntryTemplate: FC<PortalEntryTemplateProps> = ({
  title,
  subtitle,
  role,
  illustration,
  children,
  accentColor = 'primary',
}) => {
  const roleStyles = {
    student: 'from-blue-600 to-indigo-700',
    parent: 'from-emerald-600 to-teal-700',
    faculty: 'from-amber-600 to-orange-700',
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-900 p-4">
      <Card className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden border-none shadow-2xl">
        {/* Left Side: Visual/Illustration */}
        <div className={cn(
          "hidden md:flex flex-col justify-center p-12 text-white bg-gradient-to-br",
          roleStyles[role]
        )}>
          {illustration || (
            <div className="w-24 h-24 bg-white/20 rounded-3xl flex items-center justify-center mb-8">
              <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
            </div>
          )}
          <h2 className="text-3xl font-serif font-bold mb-4 capitalize">
            {role} Portal
          </h2>
          <p className="text-white/80 text-lg leading-relaxed">
            Welcome to the Kutumbpur High School official portal. Access your dashboard, schedules, and academic records securely.
          </p>
          <div className="mt-auto pt-10">
            <div className="flex -space-x-2 overflow-hidden">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="inline-block h-8 w-8 rounded-full ring-2 ring-white/20 bg-white/10" />
              ))}
            </div>
            <p className="mt-3 text-sm text-white/60">
              Joined by over 500+ {role}s this year.
            </p>
          </div>
        </div>

        {/* Right Side: content/Form */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-10">
            <h1 className="text-3xl font-bold font-serif text-slate-900 dark:text-white mb-2">
              {title}
            </h1>
            <p className="text-slate-500 dark:text-slate-400">
              {subtitle}
            </p>
          </div>
          
          {children}

          <div className="mt-10 pt-8 border-t border-slate-100 dark:border-slate-800 text-center">
            <p className="text-sm text-slate-400">
              Don't have access? <Button variant="link" className="p-0 h-auto text-sm font-bold">Contact Administration</Button>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PortalEntryTemplate;
