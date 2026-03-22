import { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";

const NotificationContext = createContext();

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

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("notifications");
      return saved ? JSON.parse(saved) : initialNotifications;
    }
    return initialNotifications;
  });
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("notifications", JSON.stringify(notifications));
    }
  }, [notifications]);

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

  const unreadCount = useMemo(() => notifications.filter((n) => !n.read).length, [notifications]);

  const value = useMemo(
    () => ({
      notifications,
      isNotificationOpen,
      toggleNotification,
      closeNotification,
      markAsRead,
      markAllAsRead,
      clearNotifications,
      unreadCount,
    }),
    [
      notifications,
      isNotificationOpen,
      toggleNotification,
      closeNotification,
      markAsRead,
      markAllAsRead,
      clearNotifications,
      unreadCount,
    ]
  );

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error("useNotification must be used within a NotificationProvider");
  }
  return context;
};
