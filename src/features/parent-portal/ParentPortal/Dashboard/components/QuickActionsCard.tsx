import { Link } from "react-router-dom";

const quickActions = [
  {
    to: "/portal/parent/attendance",
    label: "View Attendance",
    desc: "Check attendance calendar",
    iconBg: "bg-accent-100",
    iconColor: "text-accent-600",
    icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4",
  },
  {
    to: "/portal/parent/fees",
    label: "Pay Fees",
    desc: "Download receipts",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    to: "/portal/parent/messages",
    label: "Contact Teachers",
    desc: "Send messages",
    iconBg: "bg-secondary-100",
    iconColor: "text-secondary-600",
    icon: "M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z",
  },
];

const QuickActionsCard = () => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="font-serif font-bold text-lg text-secondary-900 mb-4">Quick Actions</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {quickActions.map(({ to, label, desc, iconBg, iconColor, icon }) => (
          <Link
            key={to}
            to={to}
            className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <div className={`p-3 ${iconBg} rounded-lg`}>
              <svg className={`w-6 h-6 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
              </svg>
            </div>
            <div>
              <p className="font-semibold text-slate-800">{label}</p>
              <p className="text-sm text-slate-500">{desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default QuickActionsCard;
