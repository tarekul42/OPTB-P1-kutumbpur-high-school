import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "@/app/styles/calendar.css";
import { Button } from "@/shared/ui";

interface CalendarLegendItem {
  label: string;
  color: string;
  border: string;
}

interface CalendarPanelProps {
  selectedDate: Date;
  currentMonth: Date;
  viewMode: "month" | "year" | "decade" | "century";
  language: "en" | "bn";
  formatMonthName: (date: Date) => string;
  tileClassName: ({ date, view }: { date: Date; view: string }) => string;
  onDateChange: (date: Date) => void;
  onViewChange: (view: "month" | "year" | "decade" | "century") => void;
  onPreviousMonth: () => void;
  onNextMonth: () => void;
  onToday: () => void;
  legendItems: CalendarLegendItem[];
}

const CalendarPanel = ({
  selectedDate,
  currentMonth,
  viewMode,
  language,
  formatMonthName,
  tileClassName,
  onDateChange,
  onViewChange,
  onPreviousMonth,
  onNextMonth,
  onToday,
  legendItems,
}: CalendarPanelProps) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={onPreviousMonth}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Previous month"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="text-2xl font-bold text-gray-900 min-w-48 text-center">
            {formatMonthName(currentMonth)}
          </h2>
          <button
            onClick={onNextMonth}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer"
            aria-label="Next month"
          >
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <Button onClick={onToday} variant="secondary">
          {language === "bn" ? "আজ" : "Today"}
        </Button>
      </div>

      <div className="calendar-wrapper">
        <Calendar
          onChange={(value) => {
            if (value instanceof Date) {
              onDateChange(value);
            } else if (Array.isArray(value) && value[0] instanceof Date) {
              onDateChange(value[0]);
            }
          }}
          value={selectedDate}
          locale="bn-BD"
          tileClassName={tileClassName}
          view={viewMode}
          onViewChange={({ view }) => onViewChange(view as typeof viewMode)}
          className="w-full border-0 react-calendar"
        />
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">
          {language === "bn" ? "ক্যালেন্ডার লেজেন্ড" : "Calendar Legend"}
        </h3>
        <div className="flex flex-wrap gap-4">
          {legendItems.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className={`w-6 h-6 rounded border-2 ${item.border} ${item.color}`}></div>
              <span className="text-sm text-gray-600">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CalendarPanel;
