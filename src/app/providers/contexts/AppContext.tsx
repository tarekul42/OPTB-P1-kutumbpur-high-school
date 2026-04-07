import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";
import { homeNews } from "../../../shared/data/homeData";
import { bangladeshHolidays } from "../../../shared/data/bangladeshHolidays";
import { booksData } from "../../../shared/data/booksData";
import { ThemeProvider, useTheme } from "./ThemeContext";
import {
  NotificationProvider,
  useNotification,
  type Notification,
} from "./NotificationContext";
import { SearchResult } from "../../../shared/types/common";

interface AppContextType {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isSearchOpen: boolean;
  openSearch: () => void;
  closeSearch: () => void;
  searchResults: SearchResult[];
  theme: "light" | "dark";
  toggleTheme: () => void;
  notifications: Notification[];
  isNotificationOpen: boolean;
  toggleNotification: () => void;
  closeNotification: () => void;
  markAsRead: (id: number) => void;
  markAllAsRead: () => void;
  unreadCount: number;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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

  const searchResults = useMemo<SearchResult[]>(() => {
    if (!searchQuery.trim()) return [];

    const query = searchQuery.toLowerCase();

    return [
      ...homeNews
        .filter(
          (item) =>
            item.title.toLowerCase().includes(query) ||
            (item.description &&
              item.description.toLowerCase().includes(query)),
        )
        .map((item) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          category: "News",
          type: "news",
          path: "/updates",
        })),
      ...bangladeshHolidays
        .filter(
          (item) =>
            item.title.toLowerCase().includes(query) ||
            (item.description &&
              item.description.toLowerCase().includes(query)),
        )
        .map((item) => ({
          id: item.id,
          title: item.title,
          description: item.description,
          category: "Events & Holidays",
          type: "event",
          path: "/events-calendar",
        })),
      ...(
        booksData?.filter(
          (item) =>
            item.title.toLowerCase().includes(query) ||
            (item.author && item.author.toLowerCase().includes(query)) ||
            (item.description &&
              item.description.toLowerCase().includes(query)),
        ) || []
      ).map((item) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        author: item.author,
        category: "Library",
        type: "book",
        path: "/library",
      })),
    ];
  }, [searchQuery]);

  const themeContext = useTheme();
  const notificationContext = useNotification();

  const value = useMemo(
    () => ({
      searchQuery,
      setSearchQuery,
      isSearchOpen,
      openSearch,
      closeSearch,
      searchResults,
      ...themeContext,
      ...notificationContext,
    }),
    [
      searchQuery,
      isSearchOpen,
      openSearch,
      closeSearch,
      searchResults,
      themeContext,
      notificationContext,
    ],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useApp = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
};
