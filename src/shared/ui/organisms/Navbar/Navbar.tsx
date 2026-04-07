import { type FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '@/shared/assets/school_logo_modern.png';

// Sub-components
import NavigationLinks from './NavigationLinks';
import MobileMenu from './MobileMenu';
import ThemeToggle from './ThemeToggle';
import NotificationBell from './NotificationBell';
import SearchTrigger from './SearchTrigger';

/**
 * Main Navbar component that composes modular sub-components.
 * Implements a sticky, glassmorphic design for a premium feel.
 */
const Navbar: FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-primary-900/90 dark:bg-slate-900/95 backdrop-blur-md border-b border-accent-gold/20 sticky top-0 z-40 shadow-xl transition-all duration-300 h-20 flex items-center">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Brand Logo & Name */}
          <NavLink
            to="/"
            className="flex items-center space-x-3 group transition-transform duration-300 hover:scale-[1.02]"
          >
            <img
              src={logo}
              className="h-12 w-auto drop-shadow-lg group-hover:rotate-6 transition-transform"
              alt="Kutumbpur High School Logo"
            />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-serif font-bold tracking-tight text-white leading-tight">
                Kutumbpur <span className="text-accent-gold">High School</span>
              </span>
              <span className="text-[10px] text-slate-400 uppercase tracking-widest hidden md:block">
                Empowering Minds • Since 1970
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <NavigationLinks />

          {/* Action Buttons */}
          <div className="flex items-center gap-1 md:gap-2">
            <SearchTrigger />
            <ThemeToggle />
            <NotificationBell />

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="md:hidden p-2.5 text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
};

export default Navbar;
