import { useState } from "react";
import { NavLink } from "react-router-dom";
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
      <nav className="bg-primary-800 border-neutral-700 sticky top-0 z-40 shadow-lg">
        <div className="max-w-full flex justify-between items-center mx-auto p-2 md:p-4">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer"
            onClick={closeAllDropdowns}
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Kutumbpur High Logo"
            />
            <span className="self-center text-2xl font-semibold text-calm-300">
              KHS
            </span>
          </NavLink>

          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-calm-300 rounded-lg md:hidden hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-calm-400 cursor-pointer transition-colors"
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
          <div className="hidden md:flex md:space-x-8">
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
              className="block text-calm-300 hover:text-calm-200 transition-colors duration-200 font-medium cursor-pointer"
              onClick={closeAllDropdowns}
            >
              FAQ
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Left Drawer for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-primary-800 z-50 transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden shadow-2xl`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <NavLink
              to="/"
              className="flex items-center space-x-3 cursor-pointer"
              onClick={() => {
                setDrawerOpen(false);
                closeAllDropdowns();
              }}
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Kutumbpur High Logo"
              />
              <span className="self-center text-2xl font-semibold text-calm-300">
                KHS
              </span>
            </NavLink>
            <button
              type="button"
              className="text-calm-300 text-2xl p-2 hover:text-calm-200 transition-colors cursor-pointer"
              onClick={() => setDrawerOpen(false)}
            >
              &times;
            </button>
          </div>
          <ul className="space-y-4 text-calm-300">
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
                className="block text-calm-300 hover:text-calm-200 transition-colors duration-200 font-medium cursor-pointer"
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
