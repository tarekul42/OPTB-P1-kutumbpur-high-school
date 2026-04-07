import { useState, useCallback, useMemo } from "react";
import { format, addMonths, subMonths } from "date-fns";
import {
  allEvents,
  isHoliday,
  schoolEvents,
  formatDate,
  bengaliMonths,
  bengaliDays,
} from "@/shared/data/bangladeshHolidays";
import { Hero, Card, Button } from "@/shared/ui";
import CalendarPanel from "./components/CalendarPanel";
import UpcomingEventsList from "./components/UpcomingEventsList";
import SelectedDatePanel from "./components/SelectedDatePanel";
import MajorHolidaysList from "./components/MajorHolidaysList";

const legendItems = [
  { label: "Public Holiday", color: "bg-red-100 text-red-700", border: "border-red-300" },
  { label: "School Event", color: "bg-blue-100 text-blue-700", border: "border-blue-300" },
  { label: "Friday (Weekend)", color: "bg-red-50", border: "border-red-200" },
];

const EventsCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [viewMode, setViewMode] = useState<"month" | "year" | "decade" | "century">("month");
  const [language, setLanguage] = useState<"en" | "bn">("en");

  const isFriday = useCallback((date: Date) => date.getDay() === 5, []);

  const getSchoolEvents = useCallback((date: Date) => {
    const dateStr = formatDate(date);
    return schoolEvents.filter((event) => event.date === dateStr);
  }, []);

  const getDateEvents = useCallback((date: Date) => {
    const dateStr = formatDate(date);
    return allEvents.filter((event) => event.date === dateStr);
  }, []);

  const tileClassName = useCallback(
    ({ date, view }: { date: Date; view: string }) => {
      if (view !== "month") return "";
      const classes: string[] = [];
      const holiday = isHoliday(date);
      const schoolEvts = getSchoolEvents(date);
      const friday = isFriday(date);

      if (friday && !holiday) classes.push("bg-red-50");
      if (holiday) classes.push("bg-red-100", "text-red-700", "font-semibold");
      if (schoolEvts.length > 0 && !holiday) classes.push("bg-blue-50", "text-blue-700");

      return classes.join(" ");
    },
    [getSchoolEvents, isFriday],
  );

  const selectedDateContent = useMemo(() => {
    const allDateEvents = getDateEvents(selectedDate);
    return {
      allEvents: allDateEvents,
      hasEvents: allDateEvents.length > 0,
    };
  }, [selectedDate, getDateEvents]);

  const upcomingEvents = useMemo(() => {
    const today = new Date();
    const thirtyDaysLater = new Date(today);
    thirtyDaysLater.setDate(today.getDate() + 30);

    return allEvents
      .filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate >= today && eventDate <= thirtyDaysLater;
      })
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
      .slice(0, 5);
  }, []);

  const formatMonthName = useCallback(
    (date: Date): string =>
      language === "bn" ? (bengaliMonths[date.getMonth()] ?? "") : format(date, "MMMM yyyy"),
    [language],
  );

  const getDayName = useCallback(
    (date: Date): string =>
      language === "bn" ? (bengaliDays[date.getDay()] ?? "") : format(date, "EEEE"),
    [language],
  );

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <Hero
        accentColor="rose-600"
        title={language === "bn" ? "ইভেন্ট ক্যালেন্ডার" : "Events Calendar"}
        description={
          language === "bn"
            ? "স্কুলের সকল ইভেন্ট, কার্যক্রম এবং গুরুত্বপূর্ণ তারিখ সম্পর্কে আপডেট থাকুন।"
            : "Stay updated with all school events, activities, and important dates."
        }
      >
        <div className="mt-6 flex justify-center gap-4">
          <Button
            onClick={() => setLanguage("en")}
            variant={language === "en" ? "primary" : "outline"}
            className={
              language === "en"
                ? "bg-white text-rose-700 hover:bg-rose-50"
                : "border-rose-400 text-white hover:bg-rose-700"
            }
          >
            English
          </Button>
          <Button
            onClick={() => setLanguage("bn")}
            variant={language === "bn" ? "primary" : "outline"}
            className={
              language === "bn"
                ? "bg-white text-rose-700 hover:bg-rose-50"
                : "border-rose-400 text-white hover:bg-rose-700"
            }
          >
            বাংলা
          </Button>
        </div>
      </Hero>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main column */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="p-6 lg:p-8">
              <CalendarPanel
                selectedDate={selectedDate}
                currentMonth={currentMonth}
                viewMode={viewMode}
                language={language}
                formatMonthName={formatMonthName}
                tileClassName={tileClassName}
                onDateChange={setSelectedDate}
                onViewChange={setViewMode}
                onPreviousMonth={() => setCurrentMonth(subMonths(currentMonth, 1))}
                onNextMonth={() => setCurrentMonth(addMonths(currentMonth, 1))}
                onToday={() => {
                  setCurrentMonth(new Date());
                  setSelectedDate(new Date());
                }}
                legendItems={legendItems}
              />
            </Card>

            <Card className="p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {language === "bn" ? "আসন্ন ইভেন্ট" : "Upcoming Events"}
              </h2>
              <UpcomingEventsList language={language} events={upcomingEvents} />
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="p-6 lg:p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {language === "bn" ? "নির্বাচিত তারিখ" : "Selected Date"}
              </h2>
              <SelectedDatePanel
                selectedDate={selectedDate}
                language={language}
                getDayName={getDayName}
                formatMonthName={formatMonthName}
                allEvents={selectedDateContent.allEvents}
                hasEvents={selectedDateContent.hasEvents}
              />
            </Card>

            <Card className="p-6">
              <MajorHolidaysList language={language} />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCalendar;
