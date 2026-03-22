import { useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useParent } from "../../context/ParentContext";

const ParentPortalLayout = () => {
  const { parent, selectedChild, allChildren, selectChild, logout, notifications } = useParent();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const navigate = useNavigate();

  const navItems = [
    {
      path: "/portal/parent/dashboard",
      label: "Dashboard",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
    },
    {
      path: "/portal/parent/attendance",
      label: "Attendance",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
    },
    {
      path: "/portal/parent/fees",
      label: "Fees",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      path: "/portal/parent/messages",
      label: "Messages",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
  ];

  const handleLogout = () => {
    logout();
    navigate("/parent-portal");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex">
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-secondary-800 text-white transition-all duration-300 flex flex-col`}
      >
        <div className="p-4 border-b border-secondary-700 flex items-center justify-between">
          {sidebarOpen && (
            <div>
              <h2 className="font-serif font-bold text-lg">Parent Portal</h2>
              <p className="text-xs text-secondary-300">Kutumbpur High School</p>
            </div>
          )}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 hover:bg-secondary-700 rounded-lg transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={sidebarOpen ? "M11 19l-7-7 7-7m8 14l-7-7 7-7" : "M13 5l7 7-7 7M5 5l7 7-7 7"} />
            </svg>
          </button>
        </div>

        <nav className="flex-1 py-4">
          <ul className="space-y-1 px-2">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-accent-gold text-secondary-900 font-semibold"
                        : "hover:bg-secondary-700"
                    }`
                  }
                >
                  {item.icon}
                  {sidebarOpen && <span>{item.label}</span>}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-secondary-700">
          <div className={`flex items-center ${!sidebarOpen && "justify-center"}`}>
            <img
              src={parent.photo || "https://via.placeholder.com/40"}
              alt={parent.name}
              className="w-10 h-10 rounded-full object-cover border-2 border-accent-gold"
              onError={(e) => {
                e.target.src = "https://via.placeholder.com/40";
              }}
            />
            {sidebarOpen && (
              <div className="ml-3 overflow-hidden">
                <p className="text-sm font-medium truncate">{parent.name}</p>
                <p className="text-xs text-secondary-300 truncate">Parent</p>
              </div>
            )}
          </div>
          {sidebarOpen && (
            <button
              onClick={handleLogout}
              className="mt-4 w-full flex items-center justify-center gap-2 px-4 py-2 bg-secondary-700 hover:bg-secondary-600 rounded-lg transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          )}
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm sticky top-0 z-10">
          <div className="px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div>
                <h1 className="text-2xl font-serif font-bold text-secondary-900">
                  Welcome, {parent.name.split(" ")[0]}!
                </h1>
                <p className="text-sm text-slate-500">
                  {new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <select
                value={selectedChild.id}
                onChange={(e) => selectChild(parseInt(e.target.value))}
                className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-accent-gold focus:border-accent-gold bg-white"
              >
                {allChildren.map((child) => (
                  <option key={child.id} value={child.id}>
                    {child.name} ({child.class})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </header>

        <div className="p-6">
          <Outlet />
        </div>

        {notifications.length > 0 && (
          <div className="fixed bottom-4 right-4 space-y-2 z-50">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`px-6 py-4 rounded-lg shadow-lg text-white flex items-center gap-3 animate-fade-in ${
                  notification.type === "success" ? "bg-accent-600" : "bg-secondary-600"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                {notification.message}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default ParentPortalLayout;
