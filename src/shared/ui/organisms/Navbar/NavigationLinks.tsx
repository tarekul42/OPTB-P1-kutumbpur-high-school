import { type FC, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Dropdown } from '@/shared/ui';
import { NAV_MENU_CONFIG } from './navConfig';

interface NavigationLinksProps {
  className?: string;
}

/**
 * NavigationLinks component for desktop view.
 * Utilizes the Dropdown atom for menu selection.
 */
const NavigationLinks: FC<NavigationLinksProps> = ({ className = "" }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const toggleDropdown = (name: string) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleClose = () => {
    setActiveDropdown(null);
  };

  return (
    <div className={`hidden md:flex md:items-center md:space-x-8 ${className}`}>
      {NAV_MENU_CONFIG.map((menu) => (
        <Dropdown
          key={`${menu.key}-${location.pathname}`}
          title={menu.title}
          items={menu.items}
          isOpen={activeDropdown === menu.key}
          toggle={() => toggleDropdown(menu.key)}
        />
      ))}
      <NavLink
        to="/faq"
        className={({ isActive }) =>
          `block text-white transition-colors duration-300 font-semibold text-sm uppercase tracking-wider py-2 border-b-2 ${
            isActive 
              ? "text-accent-gold border-accent-gold" 
              : "border-transparent hover:text-accent-gold hover:border-accent-gold/50"
          }`
        }
      >
        FAQ
      </NavLink>
    </div>
  );
};

export default NavigationLinks;
