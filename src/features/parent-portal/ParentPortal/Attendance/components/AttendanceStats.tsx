interface MonthStats {
  present: number;
  absent: number;
  late: number;
  leave: number;
  percentage: string;
}

interface AttendanceStatsProps {
  monthStats: MonthStats;
}

const statItems = [
  { key: "present", label: "Present", dotColor: "bg-accent-500", valueColor: "text-accent-600" },
  { key: "absent", label: "Absent", dotColor: "bg-red-500", valueColor: "text-red-600" },
  { key: "late", label: "Late", dotColor: "bg-amber-500", valueColor: "text-amber-600" },
  { key: "leave", label: "Leave", dotColor: "bg-yellow-500", valueColor: "text-yellow-600" },
] as const;

const AttendanceStats = ({ monthStats }: AttendanceStatsProps) => {
  return (
    <div className="space-y-4">
      {/* Rate Card */}
      <div className="bg-linear-to-br from-secondary-800 to-secondary-700 rounded-xl p-6 text-white">
        <h3 className="font-serif font-bold text-lg mb-4">This Month</h3>
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-secondary-200">Attendance Rate</span>
            <span className="text-2xl font-bold">{monthStats.percentage}%</span>
          </div>
          <div className="w-full bg-secondary-700 rounded-full h-3">
            <div
              className="bg-accent-gold h-3 rounded-full transition-all"
              style={{ width: `${monthStats.percentage}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Summary Breakdown */}
      <div className="bg-slate-50 rounded-xl p-6">
        <h3 className="font-semibold text-slate-800 mb-4">Month Summary</h3>
        <div className="space-y-3">
          {statItems.map(({ key, label, dotColor, valueColor }) => (
            <div key={key} className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 ${dotColor} rounded-full`}></div>
                <span className="text-slate-600">{label}</span>
              </div>
              <span className={`font-bold ${valueColor}`}>{monthStats[key]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttendanceStats;
