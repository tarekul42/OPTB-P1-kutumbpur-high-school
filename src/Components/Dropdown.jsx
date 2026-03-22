import { NavLink } from "react-router-dom";

/**
 * Dropdown Component
 * Used in the Navbar for categorized navigation links.
 *
 * @param {string} title - The display text for the dropdown button
 * @param {Array} items - List of objects containing label and link
 * @param {boolean} isOpen - Boolean state controlled by the parent
 * @param {function} toggle - Function to toggle the open state
 */
const Dropdown = ({ title, items, isOpen, toggle }) => {
  return (
    <div className="relative group">
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggle();
        }}
        className="flex items-center justify-between w-full py-2 px-3 text-white rounded hover:bg-primary-800 md:hover:bg-transparent md:border-0 md:hover:text-accent-gold md:p-0 md:w-auto transition-colors duration-300 font-semibold text-sm uppercase tracking-wider cursor-pointer"
        aria-expanded={isOpen}
      >
        {title}
        <svg
          className={`w-3 h-3 ms-2 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
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
        <ul className="absolute left-0 mt-6 z-50 font-medium bg-primary-900/95 backdrop-blur-xl border border-accent-gold/20 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] w-72 overflow-hidden animate-in fade-in slide-in-from-top-4 duration-300">
          {items.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.link}
                className="group/item block px-6 py-4 text-white hover:bg-white/10 transition-all duration-300 cursor-pointer border-b border-white/5 last:border-b-0"
                onClick={() => toggle()}
              >
                <div className="flex items-center justify-between">
                  <span>{item.label}</span>
                  <svg
                    className="w-4 h-4 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-accent-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
