import { type FC, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logo from '@/shared/assets/school_logo_modern.png';
import { NAV_MENU_CONFIG } from './navConfig';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * MobileMenu component (drawer) for smaller screens.
 */
const MobileMenu: FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
  const location = useLocation();

  const toggleAccordion = (key: string) => {
    setActiveAccordion(activeAccordion === key ? null : key);
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-neutral-900/60 z-40 md:hidden backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-primary-900/95 backdrop-blur-xl z-50 transform transition-transform duration-500 ease-in-out md:hidden shadow-2xl border-r border-accent-gold/10 overflow-y-auto`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-10">
            <NavLink
              to="/"
              className="flex items-center space-x-3 group"
              onClick={onClose}
            >
              <img
                src={logo}
                className="h-10 w-auto drop-shadow-md transition-transform group-hover:scale-105"
                alt="Kutumbpur HS Logo"
              />
              <span className="self-center text-xl font-serif font-bold text-white tracking-tight">
                Kutumbpur <span className="text-accent-gold">HS</span>
              </span>
            </NavLink>
            <button
              type="button"
              className="text-white hover:text-accent-gold transition-colors p-2 rounded-full hover:bg-white/10"
              onClick={onClose}
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="space-y-2">
            {NAV_MENU_CONFIG.map((menu) => (
              <div key={menu.key} className="border-b border-white/5 pb-2">
                <button
                  onClick={() => toggleAccordion(menu.key)}
                  className="w-full flex justify-between items-center text-white hover:text-accent-gold py-3 text-lg font-semibold transition-colors"
                >
                  {menu.title}
                  <svg
                    className={`w-5 h-5 transition-transform duration-300 ${
                      activeAccordion === menu.key ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div
                  className={`space-y-1 overflow-hidden transition-all duration-300 ${
                    activeAccordion === menu.key ? "max-h-64 mt-2" : "max-h-0"
                  }`}
                >
                  {menu.items.map((item) => (
                    <NavLink
                      key={item.link}
                      to={item.link}
                      className={({ isActive }) =>
                        `block px-4 py-2.5 rounded-lg text-base transition-colors ${
                          isActive
                            ? "bg-accent-gold/20 text-accent-gold font-bold"
                            : "text-slate-300 hover:bg-white/5 hover:text-white"
                        }`
                      }
                      onClick={onClose}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
            <NavLink
              to="/faq"
              className={({ isActive }) =>
                `block text-white hover:text-accent-gold py-4 text-xl font-bold transition-all border-b border-white/10 ${
                  isActive ? "text-accent-gold pl-2" : ""
                }`
              }
              onClick={onClose}
            >
              FAQ
            </NavLink>
          </nav>
          
          <div className="mt-12 pt-12 border-t border-white/10 text-center">
            <p className="text-slate-400 text-sm italic">
              Empowering Minds, Shaping Futures
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
