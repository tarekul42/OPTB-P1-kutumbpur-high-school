import { type FC, type ReactNode } from 'react';
import { cn } from '@/shared/lib/cn';

interface PortalLandingTemplateProps {
  sidebar: ReactNode;
  header: ReactNode;
  children: ReactNode;
  isSidebarOpen?: boolean;
}

/**
 * A shared layout template for the interior of the portals (dashboards).
 * Includes a responsive sidebar and a main content area with header.
 */
const PortalLandingTemplate: FC<PortalLandingTemplateProps> = ({
  sidebar,
  header,
  children,
  isSidebarOpen = true,
}) => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex overflow-hidden">
      {/* Sidebar - Desktop */}
      <aside className={cn(
        "hidden lg:flex flex-col w-72 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 transition-all duration-300",
        !isSidebarOpen && "w-0 -translate-x-full"
      )}>
        {sidebar}
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        {/* Header */}
        <header className="h-20 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 flex items-center px-4 md:px-8 z-10 shrink-0">
          {header}
        </header>

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8 custom-scrollbar">
          <div className="max-w-7xl mx-auto space-y-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default PortalLandingTemplate;
