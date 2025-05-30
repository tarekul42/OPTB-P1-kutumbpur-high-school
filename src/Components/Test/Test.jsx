import { NavLink } from "react-router-dom";

export const Dropdown = ({ title, items, isOpen, toggle }) => (
  <div className="relative group">
    <button
      onClick={toggle}
      className="flex items-center justify-between w-full py-2 px-3 text-[#80ED99] rounded hover:bg-[#0AD1C8] md:hover:bg-transparent md:border-0 md:hover:text-[#45DFB1] md:p-0 md:w-auto dark:text-[#80ED99] dark:hover:text-[#0AD1C8] dark:focus:text-white dark:border-gray-700 dark:hover:bg-[#14919B] transition-colors duration-200"
    >
      {title}
      <svg
        className={`w-2.5 h-2.5 ms-2.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>
    {isOpen && (
      <ul className="absolute left-0 mt-2 z-50 font-normal bg-[#213A57] divide-y divide-gray-100 rounded-lg shadow-lg w-56 dark:bg-[#0B6477] dark:divide-gray-600 transform transition-all duration-200 ease-in-out">
        {items.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.link}
              className="block px-4 py-3 text-[#80ED99] hover:bg-[#0AD1C8] dark:hover:bg-[#14919B] dark:hover:text-white transition-colors duration-200"
              onClick={() => toggle(false)}
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    )}
  </div>
);
// const Test = () => {
//   // const [isHomeOpen, setHomeOpen] = useState(false);
//   // const [isMenuOpen, setMenuOpen] = useState(false);
//   // const [isAcademicsOpen, setAcademicsOpen] = useState(false);
//   // const [isPortalsOpen, setPortalsOpen] = useState(false);
//   // const [isCuriosityCornerOpen, setCuriosityCornerOpen] = useState(false);

//   return (
//     <>
//       {/* OPTB-P1-kutumbpur-high-school */}
// {/*
//       <nav className="bg-[#213A57] border-gray-200 dark:bg-[#0B6477] dark:border-gray-700">
//         <div className="max-w-full flex flex-wrap items-center justify-between mx-auto p-2 md:p-4">
//           <NavLink
//             to="/"
//             className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <img
//               src="https://flowbite.com/docs/images/logo.svg"
//               className="h-8"
//               alt="Flowbite Logo"
//             />
//             <span className="self-center text-2xl font-semibold whitespace-nowrap text-[#80ED99]">
//               KHS
//             </span>
//           </NavLink>
//           <button
//             type="button"
//             className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#80ED99] rounded-lg md:hidden hover:bg-[#45DFB1] focus:outline-none focus:ring-2 focus:ring-[#14919B]"
//             onClick={() => setMenuOpen(!isMenuOpen)}
//           >
//             <span className="sr-only">Open main menu</span>
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 17 14"
//             >
//               <path
//                 stroke="currentColor"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M1 1h15M1 7h15M1 13h15"
//               />
//             </svg>
//           </button>
//           <div
//             className={`w-full md:block md:w-auto ${
//               isMenuOpen ? "block" : "hidden"
//             }`}
//           >
//             <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-[#14919B] md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-[#213A57] dark:bg-[#0B6477]">
//               <Dropdown
//                 title="Home"
//                 items={[
//                   { label: "About Us", link: "/about" },
//                   { label: "Contact", link: "/contact" },
//                   { label: "Updates", link: "/updates" },
//                   { label: "Testimonials", link: "/testimonials" },
//                 ]}
//                 isOpen={isHomeOpen}
//                 toggle={() => setHomeOpen(!isHomeOpen)}
//               />
//               <Dropdown
//                 title="Edu Adventure"
//                 items={[
//                   { label: "Academics", link: "/academics" },
//                   { label: "Admissions", link: "/admissions" },
//                   { label: "Events", link: "/events" },
//                 ]}
//                 isOpen={isAcademicsOpen}
//                 toggle={() => setAcademicsOpen(!isAcademicsOpen)}
//               />
//               <Dropdown
//                 title="Portals"
//                 items={[
//                   { label: "Faculty Portal", link: "/faculty-portal" },
//                   { label: "Student Portal", link: "/student-portal" },
//                   { label: "Parent Portal", link: "/parent-portal" },
//                 ]}
//                 isOpen={isPortalsOpen}
//                 toggle={() => setPortalsOpen(!isPortalsOpen)}
//               />
//               <Dropdown
//                 title="Curiosity Corner"
//                 items={[
//                   { label: "Resources", link: "/resources" },
//                   {
//                     label: "Extracurricular Activities",
//                     link: "/extracurricular",
//                   },
//                   { label: "Alumni Section", link: "/alumni" },
//                   { label: "Library", link: "/library" },
//                   { label: "Events Calendar", link: "/events-calendar" },
//                 ]}
//                 isOpen={isCuriosityCornerOpen}
//                 toggle={() => setCuriosityCornerOpen(!isCuriosityCornerOpen)}
//               />
//               <li>
//                 <NavLink
//                   to="/faq"
//                   className="block px-4 py-2 text-[#80ED99] hover:bg-[#0AD1C8] dark:hover:bg-[#14919B] dark:hover:text-white"
//                 >
//                   FAQ
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav> */}
//     </>
//   );
// };

// export default Test;
