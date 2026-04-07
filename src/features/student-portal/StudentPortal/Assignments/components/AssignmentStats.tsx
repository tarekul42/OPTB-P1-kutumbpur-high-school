interface AssignmentStatsProps {
  pendingCount: number;
  submittedCount: number;
  totalCount: number;
}

const AssignmentStats = ({ pendingCount, submittedCount, totalCount }: AssignmentStatsProps) => {
  const stats = [
    {
      label: "Pending Assignments",
      count: pendingCount,
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      bgColor: "bg-secondary-100",
      textColor: "text-secondary-600",
      borderColor: "border-secondary-500",
    },
    {
      label: "Submitted",
      count: submittedCount,
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      bgColor: "bg-accent-100",
      textColor: "text-accent-600",
      borderColor: "border-accent-500",
    },
    {
      label: "Total Assignments",
      count: totalCount,
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2",
      bgColor: "bg-primary-100",
      textColor: "text-primary-600",
      borderColor: "border-primary-500",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`bg-white rounded-xl p-6 shadow-md border-l-4 ${stat.borderColor}`}
        >
          <div className="flex items-center gap-4">
            <div className={`p-3 ${stat.bgColor} rounded-lg`}>
              <svg className={`w-6 h-6 ${stat.textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={stat.icon} />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{stat.count}</p>
              <p className="text-sm text-slate-500">{stat.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AssignmentStats;
