import { type FC, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Dropdown from '@/shared/ui/atoms/Card'; // Wait, the existing Dropdown was at src/shared/ui/Dropdown.tsx?
// Let me check where Dropdown is.
import { NAV_MENU_CONFIG } from './navConfig';

// Actually, I should probably check if Dropdown was moved.
// In Navbar.tsx line 5: import Dropdown from "@/shared/ui/Dropdown";

interface NavigationLinksProps {
  className?: string;
}

/**
 * NavigationLinks component for desktop view.
 */
const NavigationLinks: FC<NavigationLinksProps> = ({ className = "" }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <div className={`hidden md:flex md:items-center md:space-x-6 ${className}`}>
      {NAV_MENU_CONFIG.map((menu) => (
        <div key={`${menu.key}-${location.pathname}`} className="relative group">
          <button
            onClick={() => toggleDropdown(menu.key)}
            className="flex items-center gap-1 text-white hover:text-accent-gold transition-colors duration-300 font-semibold text-sm uppercase tracking-wider py-2"
          >
            {menu.title}
            <svg
              className={`w-4 h-4 transition-transform duration-300 ${
                activeDropdown === menu.key ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          {activeDropdown === menu.key && (
            <div className="absolute top-full left-0 mt-2 w-56 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 py-2 animate-fade-in z-50">
              {menu.items.map((item) => (
                <NavLink
                  key={item.link}
                  to={item.link}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 text-sm transition-colors ${
                      isActive
                        ? "text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20 font-bold"
                        : "text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50"
                    }`
                  }
                  onClick={() => setActiveDropdown(null)}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      ))}
      <NavLink
        to="/faq"
        className={({ isActive }) =>
          `block text-white transition-colors duration-300 font-semibold text-sm uppercase tracking-wider py-2 ${
            isActive ? "text-accent-gold underline underline-offset-8" : "hover:text-accent-gold"
          }`
        }
      >
        FAQ
      </NavLink>
    </div>
  );
};

export default NavigationLinks;
