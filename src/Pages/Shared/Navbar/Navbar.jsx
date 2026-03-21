import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/school_logo_modern.png";
import Dropdown from "../../../Components/Dropdown";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();



  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const menuConfig = [
    {
      title: "Home",
      key: "home",
      items: [
        { label: "About Us", link: "/about" },
        { label: "Contact", link: "/contact" },
        { label: "Updates", link: "/updates" },
        { label: "Testimonials", link: "/testimonials" },
      ],
    },
    {
      title: "Edu Adventure",
      key: "edu",
      items: [
        { label: "Academics", link: "/academics" },
        { label: "Admissions", link: "/admissions" },
        { label: "Events", link: "/events" },
      ],
    },
    {
      title: "Portals",
      key: "portals",
      items: [
        { label: "Faculty Portal", link: "/faculty-portal" },
        { label: "Student Portal", link: "/student-portal" },
        { label: "Parent Portal", link: "/parent-portal" },
      ],
    },
    {
      title: "Curiosity Corner",
      key: "curiosity",
      items: [
        { label: "Resources", link: "/resources" },
        { label: "Extracurricular Activities", link: "/extracurricular" },
        { label: "Alumni Section", link: "/alumni" },
        { label: "Library", link: "/library" },
        { label: "Events Calendar", link: "/events-calendar" },
      ],
    },
  ];

  return (
    <>
      <nav className="bg-primary-900/80 backdrop-blur-md border-b border-accent-gold/20 sticky top-0 z-40 shadow-2xl transition-all duration-300">
        <div className="max-w-full flex justify-between items-center mx-auto p-2 md:p-4">
          {/* Logo & Brand */}
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer group"
          >
            <img
              src={logo}
              className="h-12 w-auto drop-shadow-md group-hover:scale-105 transition-transform duration-300"
              alt="Kutumbpur High School Logo"
            />
            <span className="self-center text-2xl font-serif font-bold tracking-tight text-white">
              Kutumbpur <span className="text-accent-gold">High School</span>
            </span>
          </NavLink>

          {/* Mobile Toggle Button */}
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-accent-gold cursor-pointer transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setDrawerOpen(true);
            }}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            {menuConfig.map((menu) => (
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
              className="block text-white hover:text-accent-gold transition-colors duration-300 font-semibold text-sm uppercase tracking-wider cursor-pointer py-2"
            >
              FAQ
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Mobile Side Drawer */}
      <div
        key={location.pathname}
        className={`fixed top-0 left-0 h-full w-80 bg-primary-900/95 backdrop-blur-xl z-50 transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out md:hidden shadow-2xl border-r border-accent-gold/10`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <NavLink
              to="/"
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <img
                src={logo}
                className="h-10 w-auto drop-shadow-md"
                alt="Kutumbpur HS Logo"
              />
              <span className="self-center text-xl font-serif font-bold text-white tracking-tight">
                Kutumbpur <span className="text-accent-gold">HS</span>
              </span>
            </NavLink>
            <button
              type="button"
              className="text-white text-3xl p-2 hover:text-accent-gold transition-colors cursor-pointer"
              onClick={() => setDrawerOpen(false)}
            >
              &times;
            </button>
          </div>

          <ul className="space-y-4 text-slate-300">
            {menuConfig.map((menu) => (
              <li key={`${menu.key}-${location.pathname}`}>
                <Dropdown
                  title={menu.title}
                  items={menu.items}
                  isOpen={activeDropdown === menu.key}
                  toggle={() => toggleDropdown(menu.key)}
                />
              </li>
            ))}
            <li>
              <NavLink
                to="/faq"
                className="block text-white hover:text-accent-gold transition-all duration-300 font-semibold text-lg py-2 border-b border-white/5 cursor-pointer"
              >
                FAQ
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay for Mobile Drawer */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-neutral-900 bg-opacity-60 z-40 md:hidden backdrop-blur-sm cursor-pointer"
          onClick={() => setDrawerOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
