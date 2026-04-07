import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const attendanceLegend = [
  { label: "Present", color: "bg-accent-100" },
  { label: "Absent", color: "bg-red-100" },
  { label: "Late", color: "bg-amber-100" },
  { label: "Leave", color: "bg-yellow-100" },
];

interface AttendanceCalendarProps {
  selectedDate: Date;
  onDateChange: (date: Date) => void;
  getTileClassName: ({ date, view }: { date: Date; view: string }) => string;
}

const AttendanceCalendar = ({
  selectedDate,
  onDateChange,
  getTileClassName,
}: AttendanceCalendarProps) => {
  return (
    <div className="lg:col-span-2">
      <div className="calendar-wrapper">
        <Calendar
          onChange={(value) => {
            if (value instanceof Date) onDateChange(value);
            else if (Array.isArray(value) && value[0] instanceof Date) onDateChange(value[0]);
          }}
          value={selectedDate}
          tileClassName={getTileClassName}
          className="rounded-lg border border-slate-200 w-full"
        />
      </div>

      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        {attendanceLegend.map(({ label, color }) => (
          <div key={label} className="flex items-center gap-2">
            <div className={`w-4 h-4 ${color} rounded`}></div>
            <span className="text-sm text-slate-600">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttendanceCalendar;
