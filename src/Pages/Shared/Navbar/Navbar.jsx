import React, { useState } from "react";
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
      <nav className="bg-[#213A57] border-gray-200 dark:bg-[#0B6477] dark:border-gray-700 sticky top-0 z-40">
        <div className="max-w-full flex justify-between items-center mx-auto p-2 md:p-4">
          <NavLink
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
            onClick={closeAllDropdowns}
          >  
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Kutumbpur High Logo"
            />
            <span className="self-center text-2xl font-semibold text-[#80ED99]">
              KHS
            </span>
          </NavLink>

          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#80ED99] rounded-lg md:hidden hover:bg-[#0AD1C8] focus:outline-none focus:ring-2 focus:ring-[#14919B]"
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
              className="block text-[#80ED99] hover:text-[#45DFB1] transition-colors duration-200"
              onClick={closeAllDropdowns}
            >
              FAQ
            </NavLink>
          </div>
        </div>
      </nav>

      {/* Left Drawer for Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#213A57] z-50 transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <NavLink
              to="/"
              className="flex items-center space-x-3"
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
              <span className="self-center text-2xl font-semibold text-[#80ED99]">
                KHS
              </span>
            </NavLink>
            <button
              type="button"
              className="text-[#80ED99] text-2xl p-2 hover:text-[#45DFB1]"
              onClick={() => setDrawerOpen(false)}
            >
              &times;
            </button>
          </div>
          <ul className="space-y-4 text-[#80ED99]">
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
                className="block text-[#80ED99] hover:text-[#45DFB1] transition-colors duration-200"
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
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
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
