import type { EventType } from "@/shared/types/api";

interface UpcomingEventsListProps {
  language: "en" | "bn";
  events: EventType[];
}

const UpcomingEventsList = ({ language, events }: UpcomingEventsListProps) => {
  return (
    <div className="space-y-4">
      {events.length > 0 ? (
        events.map((event) => (
          <div
            key={event.id}
            className={`p-4 rounded-lg border-l-4 ${
              event.type === "public_holiday"
                ? "bg-red-50 border-red-500"
                : "bg-blue-50 border-blue-500"
            }`}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold text-gray-900">
                  {language === "bn" ? event.bnTitle : event.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{event.date}</p>
              </div>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${
                  event.type === "public_holiday"
                    ? "bg-red-100 text-red-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {event.type === "public_holiday"
                  ? language === "bn" ? "ছুটি" : "Holiday"
                  : language === "bn" ? "স্কুল ইভেন্ট" : "School Event"}
              </span>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-500 text-center py-8">
          {language === "bn" ? "কোনো আসন্ন ইভেন্ট নেই।" : "No upcoming events."}
        </p>
      )}
    </div>
  );
};

export default UpcomingEventsList;
