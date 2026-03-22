import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from "react";
import { homeNews } from "../data/homeData";
import { bangladeshHolidays } from "../data/bangladeshHolidays";
import { booksData } from "../data/booksData";
import { ThemeProvider, useTheme } from "./ThemeContext";
import { NotificationProvider, useNotification } from "./NotificationContext";

const AppContext = createContext();

const AppProviderContent = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

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

  const openSearch = useCallback(() => setIsSearchOpen(true), []);
  const closeSearch = useCallback(() => {
    setIsSearchOpen(false);
    setSearchQuery("");
  }, []);

  const searchResults = useMemo(() => {
    return searchQuery.trim()
      ? [
          ...homeNews
            .filter(
              (item) =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description
                  .toLowerCase()
                  .includes(searchQuery.toLowerCase()),
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
                (item.description &&
                  item.description
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())),
            )
            .map((item) => ({
              ...item,
              category: "Events & Holidays",
              type: "event",
              path: "/events-calendar",
            })),
          ...(
            booksData?.filter(
              (item) =>
                item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (item.author &&
                  item.author
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())) ||
                (item.description &&
                  item.description
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase())),
            ) || []
          ).map((item) => ({
            ...item,
            category: "Library",
            type: "book",
            path: "/library",
          })),
        ]
      : [];
  }, [searchQuery]);

  const value = useMemo(
    () => ({
      searchQuery,
      setSearchQuery,
      isSearchOpen,
      openSearch,
      closeSearch,
      searchResults,
    }),
    [searchQuery, isSearchOpen, openSearch, closeSearch, searchResults],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const AppProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <NotificationProvider>
        <AppProviderContent>{children}</AppProviderContent>
      </NotificationProvider>
    </ThemeProvider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  const themeContext = useTheme();
  const notificationContext = useNotification();

  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }

  return {
    ...context,
    ...themeContext,
    ...notificationContext,
  };
};
