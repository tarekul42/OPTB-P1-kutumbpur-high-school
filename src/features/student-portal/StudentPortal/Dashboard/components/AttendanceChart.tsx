import { ChartBarIcon } from "@/shared/ui";
import { AttendanceData } from "@/shared/types/user";

interface AttendanceChartProps {
  attendance: AttendanceData;
}

const AttendanceChart: React.FC<AttendanceChartProps> = ({ attendance }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <h3 className="font-serif font-bold text-lg text-primary-900 mb-4 flex items-center gap-2">
        <ChartBarIcon className="w-5 h-5 text-calm-600" />
        Attendance
      </h3>
      <div className="flex items-center justify-center gap-8 py-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-accent-600">
            {attendance.present}
          </div>
          <div className="text-xs text-slate-500 mt-1">Present</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-secondary-600">
            {attendance.absent}
          </div>
          <div className="text-xs text-slate-500 mt-1">Absent</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary-600">
            {attendance.late}
          </div>
          <div className="text-xs text-slate-500 mt-1">Late</div>
        </div>
      </div>
      <div className="mt-4">
        <div className="flex justify-between text-xs text-slate-500 mb-1">
          <span>Attendance Rate</span>
          <span className="font-medium">{attendance.percentage}%</span>
        </div>
        <div className="w-full bg-slate-200 rounded-full h-2">
          <div
            className="bg-accent-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${attendance.percentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceChart;
