import React from "react";
import { Link } from "react-router-dom";
import { Badge, Card } from "@/shared/ui";
import {
  CalendarCheckIcon,
  CalendarClockIcon,
} from "@/shared/ui";
import { ClassSchedule } from "@/shared/types/user";

interface DailyScheduleProps {
  classes: ClassSchedule[];
  day: string;
}

const DailySchedule: React.FC<DailyScheduleProps> = ({ classes, day }) => {
  return (
    <Card className="p-6">
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
              <div className="text-xs px-2 py-1 bg-primary-100 text-primary-700 rounded font-medium">
                Room {classItem.room}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 text-slate-500">
          <CalendarClockIcon className="w-12 h-12 mx-auto mb-3 text-slate-300" />
          <p className="font-medium text-slate-400">No classes scheduled for today</p>
        </div>
      )}
      <Link
        to="/portal/student/schedule"
        className="mt-4 block text-center text-sm text-primary-800 hover:text-accent-gold font-bold transition-colors"
      >
        View Full Schedule →
      </Link>
    </Card>
  );
};

export default DailySchedule;
