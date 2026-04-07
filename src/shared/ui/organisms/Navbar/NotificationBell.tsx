import { type FC, useRef, useEffect } from 'react';
import { useApp } from '@/app/providers/contexts/AppContext';
import { type Notification } from '@/app/providers/contexts/NotificationContext';
import { formatDate } from '@/shared/lib/format';

/**
 * NotificationBell component with dropdown and real-time count badge.
 */
const NotificationBell: FC = () => {
  const notificationRef = useRef<HTMLDivElement>(null);
  const {
    notifications,
    isNotificationOpen,
    toggleNotification,
    closeNotification,
    markAsRead,
    markAllAsRead,
    unreadCount,
  } = useApp();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        notificationRef.current &&
        !notificationRef.current.contains(event.target as Node)
      ) {
        if (isNotificationOpen) {
          closeNotification();
        }
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isNotificationOpen, closeNotification]);

  const getNotificationIcon = (type: string) => {
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

  return (
    <div className="relative" ref={notificationRef}>
      <button
        onClick={toggleNotification}
        className="relative p-2.5 text-white hover:bg-white/10 rounded-lg transition-all duration-300 hover:scale-110 active:scale-95 group"
        title="Notifications"
      >
        <svg
          className="w-5 h-5 group-hover:text-accent-gold transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 flex items-center justify-center min-w-5 h-5 px-1 text-[10px] font-bold text-white bg-red-600 rounded-full animate-bounce shadow-lg ring-2 ring-primary-900 border border-white/20">
            {unreadCount > 9 ? "9+" : unreadCount}
          </span>
        )}
      </button>

      {isNotificationOpen && (
        <div className="absolute right-0 mt-3 w-80 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden animate-fade-in z-50 ring-1 ring-black/5">
          <div className="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700">
            <h3 className="font-bold text-slate-900 dark:text-white flex items-center gap-2">
              Notifications
              {unreadCount > 0 && (
                <span className="bg-primary-100 dark:bg-primary-900/40 text-primary-700 dark:text-primary-300 text-[10px] px-1.5 py-0.5 rounded-full">
                  {unreadCount} New
                </span>
              )}
            </h3>
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="text-xs font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400 hover:underline"
              >
                Mark all as read
              </button>
            )}
          </div>
          <div className="max-h-96 overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-10 text-center">
                <div className="w-16 h-16 bg-slate-100 dark:bg-slate-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-slate-300 dark:text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                  </svg>
                </div>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">
                  All caught up!
                </p>
                <p className="text-slate-400 dark:text-slate-500 text-xs mt-1">
                  No notifications at the moment.
                </p>
              </div>
            ) : (
              <div className="divide-y divide-slate-100 dark:divide-slate-700">
                {notifications.map((notification: Notification) => (
                  <button
                    key={notification.id}
                    onClick={() => markAsRead(notification.id)}
                    className={`w-full flex items-start gap-4 p-4 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors text-left group ${
                      !notification.read ? "bg-primary-50/30 dark:bg-primary-900/10" : ""
                    }`}
                  >
                    <div className="mt-0.5 shrink-0 transition-transform group-hover:scale-110">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-sm leading-tight ${!notification.read ? "font-bold text-slate-900 dark:text-white" : "text-slate-600 dark:text-slate-400"}`}>
                        {notification.title}
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                        {notification.message}
                      </p>
                      <p className="text-[10px] text-slate-400 dark:text-slate-500 mt-2 font-medium uppercase tracking-wider">
                        {formatDate(notification.date)}
                      </p>
                    </div>
                    {!notification.read && (
                      <div className="w-2.5 h-2.5 bg-primary-600 rounded-full shrink-0 mt-1 shadow-sm shadow-primary-500/50"></div>
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-800/50 border-t border-slate-200 dark:border-slate-700 text-center">
            <button className="text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              View All History
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationBell;
