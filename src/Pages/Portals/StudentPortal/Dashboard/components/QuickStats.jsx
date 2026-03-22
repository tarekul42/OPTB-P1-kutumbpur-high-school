import Badge from "../../../../../Components/UI/Badge";
import {
  CheckCircleIcon,
  ClipboardListIcon,
} from "../../../../../Components/Icons";

const QuickStats = ({ attendancePercentage, pendingCount }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-serif font-bold text-lg text-primary-900">
          Quick Stats
        </h3>
        <Badge variant="gold">This Month</Badge>
      </div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-accent-100 rounded-lg">
              <CheckCircleIcon className="w-5 h-5 text-accent-600" />
            </div>
            <span className="text-slate-600">Attendance</span>
          </div>
          <span className="font-bold text-accent-600">
            {attendancePercentage}%
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-secondary-100 rounded-lg">
              <ClipboardListIcon className="w-5 h-5 text-secondary-600" />
            </div>
            <span className="text-slate-600">Pending Tasks</span>
          </div>
          <span className="font-bold text-secondary-600">{pendingCount}</span>
        </div>
      </div>
    </div>
  );
};

export default QuickStats;
