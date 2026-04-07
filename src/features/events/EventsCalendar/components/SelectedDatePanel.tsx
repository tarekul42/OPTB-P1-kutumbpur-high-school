import type { EventType } from "@/shared/types/api";
import { generateGoogleCalendarLink } from "@/shared/data/bangladeshHolidays";
import { format } from "date-fns";

interface SelectedDatePanelProps {
  selectedDate: Date;
  language: "en" | "bn";
  getDayName: (date: Date) => string;
  formatMonthName: (date: Date) => string;
  allEvents: EventType[];
  hasEvents: boolean;
}

const SelectedDatePanel = ({
  selectedDate,
  language,
  getDayName,
  formatMonthName,
  allEvents,
  hasEvents,
}: SelectedDatePanelProps) => {
  return (
    <>
      <div className="mb-6 p-4 bg-gradient-to-r from-rose-50 to-rose-100 rounded-lg">
        <p className="text-3xl font-bold text-rose-800">{format(selectedDate, "dd")}</p>
        <p className="text-lg text-rose-700">{getDayName(selectedDate)}</p>
        <p className="text-rose-600">{formatMonthName(selectedDate)}</p>
      </div>

      <div className="space-y-4">
        {hasEvents ? (
          allEvents.map((event) => (
            <div
              key={event.id}
              className={`p-4 rounded-lg border-2 ${
                event.type === "public_holiday"
                  ? "bg-red-50 border-red-200"
                  : "bg-blue-50 border-blue-200"
              }`}
            >
              {event.type === "public_holiday" && (
                <div className="mb-3">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-600 text-white">
                    {language === "bn" ? "সরকারি ছুটি" : "Public Holiday"}
                  </span>
                </div>
              )}
              <h3 className="font-bold text-gray-900 text-lg mb-2">
                {language === "bn" ? event.bnTitle : event.title}
              </h3>
              {event.description && (
                <p className="text-sm text-gray-600 mb-3">{event.description}</p>
              )}
              <a
                href={generateGoogleCalendarLink(event)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-rose-600 hover:text-rose-800 font-medium"
              >
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
                {language === "bn" ? "গুগল ক্যালেন্ডারে যোগ করুন" : "Add to Google Calendar"}
              </a>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-gray-500">
              {language === "bn" ? "এই তারিখে কোনো ইভেন্ট নেই" : "No events on this date"}
            </p>
          </div>
        )}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg border border-yellow-200">
        <h4 className="font-semibold text-yellow-800 mb-1">
          {language === "bn" ? "সাপ্তাহিক ছুটি" : "Weekend Notice"}
        </h4>
        <p className="text-sm text-yellow-700">
          {language === "bn"
            ? "বাংলাদেশে শুক্রবার সরকারি সাপ্তাহিক ছুটি। স্কুল বন্ধ থাকে।"
            : "Friday is the official weekly holiday in Bangladesh. Schools remain closed."}
        </p>
      </div>
    </>
  );
};

export default SelectedDatePanel;
