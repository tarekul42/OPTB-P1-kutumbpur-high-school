interface StatItem {
  label: string;
  value: string | number;
  icon: string;
  iconBg: string;
  iconColor: string;
  progress?: number;
  progressColor?: string;
}

interface DashboardStatsGridProps {
  stats: StatItem[];
}

const DashboardStatsGrid = ({ stats }: DashboardStatsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map(({ label, value, icon, iconBg, iconColor, progress, progressColor }) => (
        <div key={label} className="bg-white rounded-xl p-6 shadow-md">
          <div className="flex items-center gap-4">
            <div className={`p-3 ${iconBg} rounded-lg`}>
              <svg className={`w-6 h-6 ${iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={icon} />
              </svg>
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-800">{value}</p>
              <p className="text-sm text-slate-500">{label}</p>
            </div>
          </div>
          {progress !== undefined && (
            <div className="mt-4">
              <div className="w-full bg-slate-200 rounded-full h-2">
                <div
                  className={`${progressColor ?? "bg-accent-500"} h-2 rounded-full`}
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default DashboardStatsGrid;
