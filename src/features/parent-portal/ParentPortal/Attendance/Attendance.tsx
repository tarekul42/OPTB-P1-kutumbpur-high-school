import { useState, useMemo, useCallback } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";
import { useParent } from "@/app/providers/contexts/ParentContext";
import type { AttendanceRecord } from "@/shared/types/user";
import AttendanceCalendar from "./components/AttendanceCalendar";
import AttendanceStats from "./components/AttendanceStats";
import SelectedDateDetail from "./components/SelectedDateDetail";
import RecentAbsencesTable from "./components/RecentAbsencesTable";

const statusTileClasses: Record<AttendanceRecord["status"], string> = {
  Present: "bg-accent-100 text-accent-700 font-semibold rounded-lg",
  Absent: "bg-red-100 text-red-700 font-semibold rounded-lg",
  Late: "bg-amber-100 text-amber-700 font-semibold rounded-lg",
  Leave: "bg-yellow-100 text-yellow-700 font-semibold rounded-lg",
};

const Attendance: React.FC = () => {
  const { selectedChild } = useParent();
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  const attendanceRecords = selectedChild.attendance.records;

  const attendanceMap = useMemo(() => {
    const map: Record<string, AttendanceRecord["status"]> = {};
    attendanceRecords.forEach((record) => {
      map[record.date] = record.status;
    });
    return map;
  }, [attendanceRecords]);

  const getTileClassName = useCallback(
    ({ date, view }: { date: Date; view: string }) => {
      if (view !== "month") return "";
      const dateStr = format(date, "yyyy-MM-dd");
      const status = attendanceMap[dateStr];
      return status ? (statusTileClasses[status] ?? "") : "";
    },
    [attendanceMap],
  );

  const monthStats = useMemo(() => {
    const days = eachDayOfInterval({
      start: startOfMonth(currentMonth),
      end: endOfMonth(currentMonth),
    });

    const counts = { present: 0, absent: 0, late: 0, leave: 0 };
    days.forEach((day) => {
      const status = attendanceMap[format(day, "yyyy-MM-dd")];
      if (status === "Present") counts.present++;
      else if (status === "Absent") counts.absent++;
      else if (status === "Late") counts.late++;
      else if (status === "Leave") counts.leave++;
    });

    const total = counts.present + counts.absent + counts.late + counts.leave;
    const percentage = total > 0 ? ((counts.present / total) * 100).toFixed(1) : "0";
    return { ...counts, total, percentage };
  }, [currentMonth, attendanceMap]);

  const selectedDateRecords = useMemo(() => {
    const dateStr = format(selectedDate, "yyyy-MM-dd");
    return attendanceRecords.filter((r) => r.date === dateStr);
  }, [selectedDate, attendanceRecords]);

  const recentAbsences = useMemo(
    () =>
      attendanceRecords
        .filter((r) => r.status === "Absent" || r.status === "Leave")
        .slice(-5)
        .reverse(),
    [attendanceRecords],
  );

  const shiftMonth = (delta: number) => {
    const d = new Date(currentMonth);
    d.setMonth(d.getMonth() + delta);
    setCurrentMonth(d);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-2xl p-6 shadow-md">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-serif font-bold text-secondary-900">Attendance Record</h2>
            <p className="text-slate-500">
              Viewing for: <span className="font-semibold">{selectedChild.name}</span>
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => shiftMonth(-1)}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="font-semibold text-lg">{format(currentMonth, "MMMM yyyy")}</span>
            <button
              onClick={() => shiftMonth(1)}
              className="p-2 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Calendar + Stats grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <AttendanceCalendar
            selectedDate={selectedDate}
            onDateChange={setSelectedDate}
            getTileClassName={getTileClassName}
          />
          <div className="space-y-6">
            <AttendanceStats monthStats={monthStats} />
            <SelectedDateDetail selectedDate={selectedDate} records={selectedDateRecords} />
          </div>
        </div>
      </div>

      <RecentAbsencesTable absences={recentAbsences} />

      {/* Info Banner */}
      <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              The attendance percentage shown is calculated based on school days (excluding Fridays
              and Saturdays). For any discrepancies or leave applications, please contact the school
              administration.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendance;
