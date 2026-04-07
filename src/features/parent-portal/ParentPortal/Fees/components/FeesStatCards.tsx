interface FeesStatCardsProps {
  paid: number;
  pending: number;
  totalAnnual: number;
}

const statConfig = [
  {
    key: "paid" as const,
    label: "Total Paid",
    iconBg: "bg-accent-100",
    iconColor: "text-accent-600",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    key: "pending" as const,
    label: "Pending Amount",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    key: "totalAnnual" as const,
    label: "Annual Total",
    iconBg: "bg-primary-100",
    iconColor: "text-primary-600",
    icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
  },
];

const FeesStatCards = ({ paid, pending, totalAnnual }: FeesStatCardsProps) => {
  const values = { paid, pending, totalAnnual };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {statConfig.map(({ key, label, iconBg, iconColor, icon }) => (
        <div key={key} className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className={`p-3 ${iconBg} rounded-lg`}>
              <svg className={`w-6 h-6 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">
                ৳{values[key].toLocaleString()}
              </p>
              <p className="text-sm text-slate-500">{label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeesStatCards;
