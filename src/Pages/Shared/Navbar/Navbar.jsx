import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/school_logo_modern.png";
import { Dropdown } from "../../../Components/Test/Test";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isHomeOpen, setHomeOpen] = useState(false);
  const [isAcademicsOpen, setAcademicsOpen] = useState(false);
  const [isPortalsOpen, setPortalsOpen] = useState(false);
  const [isCuriosityCornerOpen, setCuriosityCornerOpen] = useState(false);

  const closeAllDropdowns = () => {
    setHomeOpen(false);
    setAcademicsOpen(false);
    setPortalsOpen(false);
    setCuriosityCornerOpen(false);
  };

  return (
    <>
      <nav className="bg-primary-900/80 backdrop-blur-md border-b border-accent-gold/20 sticky top-0 z-40 shadow-2xl transition-all duration-300">
        <div className="max-w-full flex justify-between items-center mx-auto p-2 md:p-4">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
            onClick={closeAllDropdowns}
          >
            <img
              src={logo}
              className="h-12 w-auto drop-shadow-md group-hover:scale-105 transition-transform duration-300"
              alt="Kutumbpur High School Logo"
            />
            <span className="self-center text-2xl font-serif font-bold tracking-tight text-white group">
              Kutumbpur <span className="text-accent-gold">High School</span>
            </span>
          </NavLink>

          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-accent-gold cursor-pointer transition-colors"
            onClick={() => setDrawerOpen(true)}
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

          {/* Main Menu for Larger Screens */}
          <div className="hidden md:flex md:items-center md:space-x-10">
            <Dropdown
              title="Home"
              items={[
                { label: "About Us", link: "/about" },
                { label: "Contact", link: "/contact" },
                { label: "Updates", link: "/updates" },
                { label: "Testimonials", link: "/testimonials" },
              ]}
              isOpen={isHomeOpen}
              toggle={() => {
                closeAllDropdowns();
                setHomeOpen(!isHomeOpen);
              }}
            />
            <Dropdown
              title="Edu Adventure"
              items={[
                { label: "Academics", link: "/academics" },
                { label: "Admissions", link: "/admissions" },
                { label: "Events", link: "/events" },
              ]}
              isOpen={isAcademicsOpen}
              toggle={() => {
                closeAllDropdowns();
                setAcademicsOpen(!isAcademicsOpen);
              }}
            />
            <Dropdown
              title="Portals"
              items={[
                { label: "Faculty Portal", link: "/faculty-portal" },
                { label: "Student Portal", link: "/student-portal" },
                { label: "Parent Portal", link: "/parent-portal" },
              ]}
              isOpen={isPortalsOpen}
              toggle={() => {
                closeAllDropdowns();
                setPortalsOpen(!isPortalsOpen);
              }}
            />
            <Dropdown
              title="Curiosity Corner"
              items={[
                { label: "Resources", link: "/resources" },
                {
                  label: "Extracurricular Activities",
                  link: "/extracurricular",
                },
                { label: "Alumni Section", link: "/alumni" },
                { label: "Library", link: "/library" },
                { label: "Events Calendar", link: "/events-calendar" },
              ]}
              isOpen={isCuriosityCornerOpen}
              toggle={() => {
                closeAllDropdowns();
                setCuriosityCornerOpen(!isCuriosityCornerOpen);
              }}
            />
            <NavLink
              to="/faq"
              className="block text-white hover:text-accent-gold transition-colors duration-300 font-semibold text-sm uppercase tracking-wider cursor-pointer py-2"
              onClick={closeAllDropdowns}
            >
              FAQ
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Left Drawer for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-primary-900/95 backdrop-blur-xl z-50 transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out md:hidden shadow-2xl border-r border-accent-gold/10`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <NavLink
              to="/"
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={() => {
                setDrawerOpen(false);
                closeAllDropdowns();
              }}
            >
              <img
                src={logo}
                className="h-10 w-auto drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                alt="Kutumbpur High School Logo"
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
            <li>
              <Dropdown
                title="Home"
                items={[
                  { label: "About Us", link: "/about" },
                  { label: "Contact", link: "/contact" },
                  { label: "Updates", link: "/updates" },
                  { label: "Testimonials", link: "/testimonials" },
                ]}
                isOpen={isHomeOpen}
                toggle={() => {
                  closeAllDropdowns();
                  setHomeOpen(!isHomeOpen);
                }}
              />
            </li>
            <li>
              <Dropdown
                title="Edu Adventure"
                items={[
                  { label: "Academics", link: "/academics" },
                  { label: "Admissions", link: "/admissions" },
                  { label: "Events", link: "/events" },
                ]}
                isOpen={isAcademicsOpen}
                toggle={() => {
                  closeAllDropdowns();
                  setAcademicsOpen(!isAcademicsOpen);
                }}
              />
            </li>
            <li>
              <Dropdown
                title="Portals"
                items={[
                  { label: "Faculty Portal", link: "/faculty-portal" },
                  { label: "Student Portal", link: "/student-portal" },
                  { label: "Parent Portal", link: "/parent-portal" },
                ]}
                isOpen={isPortalsOpen}
                toggle={() => {
                  closeAllDropdowns();
                  setPortalsOpen(!isPortalsOpen);
                }}
              />
            </li>
            <li>
              <Dropdown
                title="Curiosity Corner"
                items={[
                  { label: "Resources", link: "/resources" },
                  {
                    label: "Extracurricular Activities",
                    link: "/extracurricular",
                  },
                  { label: "Alumni Section", link: "/alumni" },
                  { label: "Library", link: "/library" },
                  { label: "Events Calendar", link: "/events-calendar" },
                ]}
                isOpen={isCuriosityCornerOpen}
                toggle={() => {
                  closeAllDropdowns();
                  setCuriosityCornerOpen(!isCuriosityCornerOpen);
                }}
              />
            </li>
            <li>
              <NavLink
                to="/faq"
                className="block text-white hover:text-accent-gold transition-all duration-300 font-semibold text-lg py-2 border-b border-white/5 cursor-pointer"
                onClick={() => {
                  setDrawerOpen(false);
                  closeAllDropdowns();
                }}
              >
                FAQ
              </NavLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay when the drawer is open */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-neutral-900 bg-opacity-60 z-40 md:hidden backdrop-blur-sm cursor-pointer"
          onClick={() => {
            setDrawerOpen(false);
            closeAllDropdowns();
          }}
        ></div>
      )}
    </>
  );
};

export default Navbar;
