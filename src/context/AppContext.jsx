import { createContext, useContext, useState, useEffect, useCallback } from "react";
import { homeNews } from "../data/homeData";
import { bangladeshHolidays } from "../data/bangladeshHolidays";
import { booksData } from "../data/booksData";

const AppContext = createContext();

const initialNotifications = [
  {
    id: 1,
    title: "New Event Added",
    message: "Annual Science Fair scheduled for April 15, 2026",
    type: "event",
    read: false,
    date: new Date().toISOString(),
  },
  {
    id: 2,
    title: "Holiday Notice",
    message: "School will remain closed on Independence Day",
    type: "holiday",
    read: false,
    date: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: 3,
    title: "Admission Open",
    message: "Admissions are now open for the 2026 academic year",
    type: "admission",
    read: true,
    date: new Date(Date.now() - 172800000).toISOString(),
  },
];

export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [notifications, setNotifications] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("notifications");
      return saved ? JSON.parse(saved) : initialNotifications;
    }
    return initialNotifications;
  });
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("notifications", JSON.stringify(notifications));
    }
  }, [notifications]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const openSearch = useCallback(() => setIsSearchOpen(true), []);
  const closeSearch = useCallback(() => {
    setIsSearchOpen(false);
    setSearchQuery("");
  }, []);

  const toggleNotification = useCallback(() => setIsNotificationOpen((prev) => !prev), []);
  const closeNotification = useCallback(() => setIsNotificationOpen(false), []);

  const markAsRead = useCallback((id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  }, []);

  const markAllAsRead = useCallback(() => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }, []);

  const clearNotifications = useCallback(() => {
    setNotifications([]);
  }, []);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const searchResults = searchQuery.trim()
    ? [
        ...homeNews
          .filter(
            (item) =>
              item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.description.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((item) => ({
            ...item,
            category: "News",
            type: "news",
            path: "/updates",
          })),
        ...bangladeshHolidays
          .filter(
            (item) =>
              item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
              (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()))
          )
          .map((item) => ({
            ...item,
            category: "Events & Holidays",
            type: "event",
            path: "/events-calendar",
          })),
        ...(booksData?.filter(
          (item) =>
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            (item.author && item.author.toLowerCase().includes(searchQuery.toLowerCase())) ||
            (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()))
        ) || [])
          .map((item) => ({
            ...item,
            category: "Library",
            type: "book",
            path: "/library",
          })),
      ]
    : [];

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        searchQuery,
        setSearchQuery,
        isSearchOpen,
        openSearch,
        closeSearch,
        notifications,
        isNotificationOpen,
        toggleNotification,
        closeNotification,
        markAsRead,
        markAllAsRead,
        clearNotifications,
        unreadCount,
        searchResults,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
