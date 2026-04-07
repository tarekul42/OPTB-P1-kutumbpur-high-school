import { type FC, useState } from 'react';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import { 
  PortalLandingTemplate, 
  Button, 
  ScrollToTop
} from '@/shared/ui';
import { cn } from '@/shared/lib/cn';
import { ParentProvider } from '@/app/providers/contexts/ParentContext';

// Sub-pages
import Dashboard from './Dashboard/Dashboard';
import Fees from './Fees/Fees';
import Attendance from './Attendance/Attendance';
import Messages from './Messages/Messages';

/**
 * Integrated Parent Portal Dashboard.
 * Handles sub-routing and provides the unified portal layout.
 */
const ParentPortal: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const navItems = [
    { label: 'Dashboard', path: 'dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { label: 'Attendance', path: 'attendance', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
    { label: 'Fees & Payments', path: 'fees', icon: 'M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z' },
    { label: 'Messages', path: 'messages', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z' },
  ];

  const sidebar = (
    <div className="flex flex-col h-full">
      <div className="p-6 h-20 flex items-center border-b border-slate-100 dark:border-slate-700">
        <span className="text-xl font-bold text-emerald-600 dark:text-emerald-400">Parent Portal</span>
      </div>
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => cn(
              "flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group",
              isActive 
                ? "bg-emerald-600 text-white shadow-lg shadow-emerald-600/20" 
                : "text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700/50 hover:text-slate-900 dark:hover:text-white"
            )}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
            </svg>
            <span className="font-semibold">{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-100 dark:border-slate-700">
        <button 
          onClick={() => navigate('/')}
          className="w-full flex items-center gap-3 px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-xl transition-colors font-semibold"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Logout
        </button>
      </div>
    </div>
  );

  const header = (
    <div className="flex items-center justify-between w-full">
      <div className="flex items-center gap-4">
        <button 
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
        >
          <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h2 className="text-xl font-bold text-slate-800 dark:text-white hidden md:block">
          Good day, <span className="text-emerald-600">Guardian</span>
        </h2>
      </div>
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-slate-200 animate-pulse hidden sm:block"></div>
      </div>
    </div>
  );

  return (
    <ParentProvider>
      <PortalLandingTemplate
        sidebar={sidebar}
        header={header}
        isSidebarOpen={isSidebarOpen}
      >
        <ScrollToTop />
        <Routes>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="fees" element={<Fees />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="messages" element={<Messages />} />
        </Routes>
      </PortalLandingTemplate>
    </ParentProvider>
  );
};

export default ParentPortal;
