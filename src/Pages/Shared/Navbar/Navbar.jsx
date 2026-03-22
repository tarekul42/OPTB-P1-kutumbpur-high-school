import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { useApp } from "../../../context/AppContext";
import logo from "../../../assets/school_logo_modern.png";
import Dropdown from "../../../Components/Dropdown";

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const notificationRef = useRef(null);
  
  const {
    theme,
    toggleTheme,
    openSearch,
    notifications,
    isNotificationOpen,
    toggleNotification,
    closeNotification,
    markAsRead,
    markAllAsRead,
    unreadCount,
  } = useApp();

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        if (isNotificationOpen) {
          closeNotification();
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isNotificationOpen, closeNotification]);

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
        { label: "Admission Inquiry", link: "/admission-inquiry" },
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

  const getNotificationIcon = (type) => {
    switch (type) {
      case "event":
        return (
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
            <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        );
      case "holiday":
        return (
          <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-full">
            <svg className="w-4 h-4 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
        );
      case "admission":
        return (
          <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
            <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-full">
            <svg className="w-4 h-4 text-slate-600 dark:text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
        );
    }
  };

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diff = now - date;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) return "Today";
    if (days === 1) return "Yesterday";
    if (days < 7) return `${days} days ago`;
    return date.toLocaleDateString();
  };

  return (
    <>
      <nav className="bg-primary-900/80 dark:bg-slate-900 backdrop-blur-md border-b border-accent-gold/20 sticky top-0 z-40 shadow-2xl transition-all duration-300">
        <div className="max-w-full flex justify-between items-center mx-auto p-2 md:p-4">
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

          <div className="hidden md:flex md:items-center md:space-x-6">
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

          <div className="flex items-center gap-2 md:gap-3">
            <button
              onClick={openSearch}
              className="p-2.5 text-white hover:bg-primary-800 rounded-lg transition-colors"
              title="Search (Ctrl+K)"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            <button
              onClick={toggleTheme}
              className="p-2.5 text-white hover:bg-primary-800 rounded-lg transition-colors"
              title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === "dark" ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>

            <div className="relative" ref={notificationRef}>
              <button
                onClick={toggleNotification}
                className="relative p-2.5 text-white hover:bg-primary-800 rounded-lg transition-colors"
                title="Notifications"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                {unreadCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full animate-pulse">
                    {unreadCount > 9 ? "9+" : unreadCount}
                  </span>
                )}
              </button>

              {isNotificationOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden animate-fade-in z-50">
                  <div className="flex items-center justify-between p-4 border-b border-slate-200 dark:border-slate-700">
                    <h3 className="font-bold text-slate-800 dark:text-slate-100">Notifications</h3>
                    {unreadCount > 0 && (
                      <button
                        onClick={markAllAsRead}
                        className="text-xs text-primary-600 hover:text-primary-700 dark:text-primary-400"
                      >
                        Mark all as read
                      </button>
                    )}
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {notifications.length === 0 ? (
                      <div className="p-8 text-center">
                        <svg className="w-12 h-12 mx-auto text-slate-300 dark:text-slate-600 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                        </svg>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">No notifications</p>
                      </div>
                    ) : (
                      notifications.map((notification) => (
                        <button
                          key={notification.id}
                          onClick={() => markAsRead(notification.id)}
                          className={`w-full flex items-start gap-3 p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors text-left ${
                            !notification.read ? "bg-primary-50/50 dark:bg-primary-900/10" : ""
                          }`}
                        >
                          {getNotificationIcon(notification.type)}
                          <div className="flex-1 min-w-0">
                            <p className={`text-sm truncate ${!notification.read ? "font-semibold text-slate-800 dark:text-slate-100" : "text-slate-600 dark:text-slate-300"}`}>
                              {notification.title}
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 truncate">
                              {notification.message}
                            </p>
                            <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
                              {formatDate(notification.date)}
                            </p>
                          </div>
                          {!notification.read && (
                            <div className="w-2 h-2 bg-primary-500 rounded-full shrink-0 mt-2"></div>
                          )}
                        </button>
                      ))
                    )}
                  </div>
                </div>
              )}
            </div>

            <button
              type="button"
              className="md:hidden p-2 w-10 h-10 justify-center text-sm text-white rounded-lg hover:bg-primary-800 focus:outline-none focus:ring-2 focus:ring-accent-gold cursor-pointer transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                setDrawerOpen(true);
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 17 14">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed top-0 left-0 h-full w-80 bg-primary-900/95 backdrop-blur-xl z-50 transform ${
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out md:hidden shadow-2xl border-r border-accent-gold/10`}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-8">
            <NavLink to="/" className="flex items-center space-x-3 cursor-pointer group">
              <img src={logo} className="h-10 w-auto drop-shadow-md" alt="Kutumbpur HS Logo" />
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

      {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-neutral-900/60 z-40 md:hidden backdrop-blur-sm cursor-pointer"
          onClick={() => setDrawerOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Navbar;
