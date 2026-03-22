import { useState, useMemo, useCallback } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";
import { useParent } from "../../../context/ParentContext";

const Attendance = () => {
  const { selectedChild } = useParent();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const attendanceRecords = selectedChild.attendance.records;

  const attendanceMap = useMemo(() => {
    const map = {};
    attendanceRecords.forEach((record) => {
      map[record.date] = record.status;
    });
    return map;
  }, [attendanceRecords]);

  const getTileClassName = useCallback(
    ({ date, view }) => {
      if (view !== "month") return "";

      const dateStr = format(date, "yyyy-MM-dd");
      const status = attendanceMap[dateStr];

      if (status === "Present")
        return "bg-accent-100 text-accent-700 font-semibold rounded-lg";
      if (status === "Absent")
        return "bg-red-100 text-red-700 font-semibold rounded-lg";
      if (status === "Late")
        return "bg-amber-100 text-amber-700 font-semibold rounded-lg";
      if (status === "Leave")
        return "bg-yellow-100 text-yellow-700 font-semibold rounded-lg";

      return "";
    },
    [attendanceMap],
  );

  const monthStats = useMemo(() => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

    let present = 0;
    let absent = 0;
    let late = 0;
    let leave = 0;

    days.forEach((day) => {
      const dateStr = format(day, "yyyy-MM-dd");
      const status = attendanceMap[dateStr];
      if (status === "Present") present++;
      else if (status === "Absent") absent++;
      else if (status === "Late") late++;
      else if (status === "Leave") leave++;
    });

    const total = present + absent + late + leave;
    const percentage = total > 0 ? ((present / total) * 100).toFixed(1) : 0;

    return { present, absent, late, leave, total, percentage };
  }, [currentMonth, attendanceMap]);

  const selectedDateRecords = useMemo(() => {
    const dateStr = format(selectedDate, "yyyy-MM-dd");
    return attendanceRecords.filter((r) => r.date === dateStr);
  }, [selectedDate, attendanceRecords]);

  const recentAbsences = useMemo(() => {
    return attendanceRecords
      .filter((r) => r.status === "Absent" || r.status === "Leave")
      .slice(-5)
      .reverse();
  }, [attendanceRecords]);

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-md">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-serif font-bold text-secondary-900">
              Attendance Record
            </h2>
            <p className="text-slate-500">
              Viewing for:{" "}
              <span className="font-semibold">{selectedChild.name}</span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                const prev = new Date(currentMonth);
                prev.setMonth(prev.getMonth() - 1);
                setCurrentMonth(prev);
              }}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>
            <span className="font-semibold text-lg">
              {format(currentMonth, "MMMM yyyy")}
            </span>
            <button
              onClick={() => {
                const next = new Date(currentMonth);
                next.setMonth(next.getMonth() + 1);
                setCurrentMonth(next);
              }}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="calendar-wrapper">
              <Calendar
                onChange={setSelectedDate}
                value={selectedDate}
                tileClassName={getTileClassName}
                className="rounded-lg border border-slate-200 w-full"
              />
            </div>

            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-accent-100 rounded"></div>
                <span className="text-sm text-slate-600">Present</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-100 rounded"></div>
                <span className="text-sm text-slate-600">Absent</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-amber-100 rounded"></div>
                <span className="text-sm text-slate-600">Late</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-100 rounded"></div>
                <span className="text-sm text-slate-600">Leave</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-linear-to-br from-secondary-800 to-secondary-700 rounded-xl p-6 text-white">
              <h3 className="font-serif font-bold text-lg mb-4">This Month</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-secondary-200">Attendance Rate</span>
                  <span className="text-2xl font-bold">
                    {monthStats.percentage}%
                  </span>
                </div>
                <div className="w-full bg-secondary-700 rounded-full h-3">
                  <div
                    className="bg-accent-gold h-3 rounded-full transition-all"
                    style={{ width: `${monthStats.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-800 mb-4">
                Month Summary
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-accent-500 rounded-full"></div>
                    <span className="text-slate-600">Present</span>
                  </div>
                  <span className="font-bold text-accent-600">
                    {monthStats.present}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span className="text-slate-600">Absent</span>
                  </div>
                  <span className="font-bold text-red-600">
                    {monthStats.absent}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                    <span className="text-slate-600">Late</span>
                  </div>
                  <span className="font-bold text-amber-600">
                    {monthStats.late}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <span className="text-slate-600">Leave</span>
                  </div>
                  <span className="font-bold text-yellow-600">
                    {monthStats.leave}
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <h3 className="font-semibold text-slate-800 mb-4">
                Selected Date
              </h3>
              <p className="text-sm text-slate-500 mb-2">
                {format(selectedDate, "EEEE, MMMM d, yyyy")}
              </p>
              {selectedDateRecords.length > 0 ? (
                <div className="space-y-2">
                  {selectedDateRecords.map((record, idx) => (
                    <div
                      key={idx}
                      className={`px-3 py-2 rounded-lg text-sm font-medium ${
                        record.status === "Present"
                          ? "bg-accent-100 text-accent-700"
                          : record.status === "Absent"
                            ? "bg-red-100 text-red-700"
                            : record.status === "Late"
                              ? "bg-amber-100 text-amber-700"
                              : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {record.status}
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-slate-400 text-sm">No record / Weekend</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-md">
        <h3 className="font-serif font-bold text-lg text-secondary-900 mb-4">
          Recent Absences & Leaves
        </h3>
        {recentAbsences.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-bold text-slate-700">
                    Date
                  </th>
                  <th className="text-left py-3 px-4 font-bold text-slate-700">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                {recentAbsences.map((record, idx) => (
                  <tr key={idx} className="border-b border-slate-100">
                    <td className="py-3 px-4 text-slate-600">
                      {format(new Date(record.date), "MMMM d, yyyy")}
                    </td>
                    <td className="py-3 px-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          record.status === "Absent"
                            ? "bg-red-100 text-red-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {record.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-slate-400 text-center py-8">No recent absences</p>
        )}
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
            <h4 className="font-bold text-blue-900">Attendance Information</h4>
            <p className="text-sm text-blue-700 mt-1">
              The attendance percentage shown is calculated based on school days
              (excluding Fridays and Saturdays). For any discrepancies or leave
              applications, please contact the school administration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
