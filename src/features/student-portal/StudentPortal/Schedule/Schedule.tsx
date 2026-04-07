import { useState, useMemo } from "react";
import { format } from "date-fns";
import { useStudent } from "@/app/providers/contexts/StudentContext";
import Badge from "@/shared/ui/UI/Badge";
import { subjects } from "@/shared/data/studentData";

const Schedule = () => {
  const { scheduleData: contextScheduleData } = useStudent();
  const scheduleData = useMemo(
    () => (contextScheduleData?.length ? contextScheduleData : []),
    [contextScheduleData],
  );
  const today = format(new Date(), "EEEE");
  const [selectedDay, setSelectedDay] = useState(today);

  const currentDaySchedule = useMemo(() => {
    return scheduleData.find((day) => day.day === selectedDay);
  }, [selectedDay, scheduleData]);

  const getSubjectColor = (subject: string) => {
    const colorMap: Record<string, string> = {
      Bangla: "bg-red-100 text-red-700 border-red-200",
      English: "bg-blue-100 text-blue-700 border-blue-200",
      Mathematics: "bg-purple-100 text-purple-700 border-purple-200",
      "General Science": "bg-green-100 text-green-700 border-green-200",
      "Social Studies": "bg-amber-100 text-amber-700 border-amber-200",
      Religion: "bg-emerald-100 text-emerald-700 border-emerald-200",
      ICT: "bg-cyan-100 text-cyan-700 border-cyan-200",
      "Physical Education": "bg-orange-100 text-orange-700 border-orange-200",
      "Art & Craft": "bg-pink-100 text-pink-700 border-pink-200",
    };
    return colorMap[subject] || "bg-slate-100 text-slate-700 border-slate-200";
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-serif font-bold text-primary-900">
              Class Schedule
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Weekly class routine for {selectedDay}
            </p>
          </div>
          <div className="text-right">
            <p className="text-sm text-slate-500">
              {format(new Date(), "MMMM d, yyyy")}
            </p>
            {selectedDay === today && <Badge variant="accent">Today</Badge>}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {scheduleData.map((day) => (
            <button
              key={day.day}
              onClick={() => setSelectedDay(day.day)}
              className={`px-4 py-2 rounded-lg font-medium text-sm transition-all ${
                selectedDay === day.day
                  ? "bg-primary-900 text-white shadow-md"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
              } ${day.day === today ? "ring-2 ring-accent-gold ring-offset-2" : ""}`}
            >
              {day.day}
            </button>
          ))}
        </div>

        {currentDaySchedule ? (
          <div className="space-y-3">
            {currentDaySchedule.classes.map((classItem, index) => (
              <div
                key={index}
                className={`flex items-center gap-4 p-4 rounded-xl border-2 transition-all hover:shadow-md ${
                  selectedDay === today && index === 0
                    ? "bg-accent-gold/10 border-accent-gold"
                    : "bg-slate-50 border-transparent hover:border-slate-200"
                }`}
              >
                <div className="w-24 shrink-0">
                  <p className="text-sm font-semibold text-slate-800">
                    {classItem.time}
                  </p>
                </div>
                <div
                  className={`px-4 py-2 rounded-lg border ${getSubjectColor(classItem.subject)}`}
                >
                  <p className="font-bold">{classItem.subject}</p>
                </div>
                <div className="flex-1">
                  <p className="text-slate-600">
                    <span className="font-medium">Teacher:</span>{" "}
                    {classItem.teacher}
                  </p>
                </div>
                <div className="text-right shrink-0">
                  <p className="text-sm text-slate-500">
                    <span className="font-medium">Room:</span> {classItem.room}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-slate-500">
            <svg
              className="w-16 h-16 mx-auto mb-4 text-slate-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-lg font-medium">No classes scheduled</p>
            <p className="text-sm mt-1">for {selectedDay}</p>
          </div>
        )}
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h3 className="text-lg font-serif font-bold text-primary-900 mb-4">
          Subject Legend
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {subjects.map((subject) => (
            <div
              key={subject}
              className={`px-3 py-2 rounded-lg border text-sm font-medium ${getSubjectColor(subject)}`}
            >
              {subject}
            </div>
          ))}
        </div>
      </div>

      <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <svg
              className="w-6 h-6 text-blue-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-blue-900">Schedule Information</h4>
            <p className="text-sm text-blue-700 mt-1">
              Classes run from 8:00 AM to 2:00 PM. Each period is 1 hour with a
              15-minute break between classes. Friday is a half-day with special
              Islamic Studies classes in the afternoon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
