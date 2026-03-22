import { Link } from "react-router-dom";
import Badge from "../../../../../Components/UI/Badge";
import {
  CalendarCheckIcon,
  CalendarClockIcon,
} from "../../../../../Components/Icons";

const DailySchedule = ({ classes, day }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-serif font-bold text-lg text-primary-900 flex items-center gap-2">
          <CalendarCheckIcon className="w-5 h-5 text-accent-gold" />
          Today&apos;s Classes
        </h3>
        <Badge variant="primary">{day}</Badge>
      </div>
      {classes.length > 0 ? (
        <div className="space-y-3">
          {classes.map((classItem, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <div className="w-16 text-xs font-medium text-slate-500">
                {classItem.time}
              </div>
              <div className="flex-1">
                <p className="font-semibold text-slate-800">
                  {classItem.subject}
                </p>
                <p className="text-xs text-slate-500">{classItem.teacher}</p>
              </div>
              <div className="text-xs px-2 py-1 bg-primary-100 text-primary-700 rounded">
                Room {classItem.room}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-slate-500">
          <CalendarClockIcon className="w-12 h-12 mx-auto mb-3 text-slate-300" />
          <p>No classes scheduled for today</p>
        </div>
      )}
      <Link
        to="/portal/student/schedule"
        className="mt-4 block text-center text-sm text-primary-700 hover:text-accent-gold font-medium transition-colors"
      >
        View Full Schedule →
      </Link>
    </div>
  );
};

export default DailySchedule;
