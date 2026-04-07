import { bangladeshHolidays } from "@/shared/data/bangladeshHolidays";

interface MajorHolidaysListProps {
  language: "en" | "bn";
}

const MajorHolidaysList = ({ language }: MajorHolidaysListProps) => {
  return (
    <>
      <h3 className="text-xl font-bold text-gray-900 mb-4">
        {language === "bn" ? "প্রধান ছুটিসমূহ" : "Major Holidays"}
      </h3>
      <div className="space-y-3">
        {bangladeshHolidays.slice(0, 5).map((holiday) => (
          <div
            key={holiday.id}
            className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer"
          >
            <div className="w-2 h-2 bg-red-500 rounded-full mt-2 shrink-0"></div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-900 truncate">
                {language === "bn" ? holiday.bnTitle : holiday.title}
              </p>
              <p className="text-xs text-gray-500">{holiday.date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MajorHolidaysList;
