import { Holiday, SchoolEvent } from "@/shared/types/api";

export const bangladeshHolidays: Holiday[] = [
  { id: 1, title: "International Mother Language Day", date: "2026-02-21", type: "public_holiday", description: "Martyred Intellectuals Day", bnTitle: "আন্তর্জাতিক মাতৃভাষা দিবস" },
  { id: 2, title: "Independence Day", date: "2026-03-26", type: "public_holiday", description: "National Independence Day", bnTitle: "স্বাধীনতা দিবস" },
  { id: 3, title: "Victory Day", date: "2026-12-16", type: "public_holiday", description: "National Victory Day", bnTitle: "বিজয় দিবস" },
  { id: 4, title: "Pahela Baishakh", date: "2026-04-14", type: "public_holiday", description: "Bengali New Year", bnTitle: "পহেলা বৈশাখ" },
  { id: 5, title: "Eid-ul-Fitr", date: "2026-05-15", type: "public_holiday", description: "Festival of Breaking Fast", bnTitle: "ঈদুল ফিতর" },
  { id: 6, title: "Eid-ul-Adha", date: "2026-05-27", type: "public_holiday", description: "Festival of Sacrifice", bnTitle: "ঈদুল আযহা" },
];

export const schoolEvents: SchoolEvent[] = [
  { id: 101, title: "First Unit Test", date: "2026-03-10", type: "school_event", description: "First unit test for all classes" },
  { id: 102, title: "Annual Sports Day", date: "2026-03-25", type: "school_event", description: "Annual sports competition" },
  { id: 103, title: "Second Unit Test", date: "2026-04-20", type: "school_event", description: "Second unit test covering lessons from April" },
];

export const allEvents = [...bangladeshHolidays, ...schoolEvents];

export const isHoliday = (date: Date): Holiday | undefined => {
  const dateStr = formatDate(date);
  return bangladeshHolidays.find((holiday) => holiday.date === dateStr);
};

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

export const generateGoogleCalendarLink = (event: Holiday | SchoolEvent): string => {
  const title = encodeURIComponent(event.title);
  const details = encodeURIComponent(event.description || "");
  const location = encodeURIComponent("Kutumbpur High School");
  const dateStr = event.date.replace(/-/g, "");
  const nextDay = new Date(event.date);
  nextDay.setDate(nextDay.getDate() + 1);
  const endDateStr = formatDate(nextDay).replace(/-/g, "");
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dateStr}/${endDateStr}&details=${details}&location=${location}`;
};

export const bengaliMonths: string[] = ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "আগস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"];
export const bengaliDays: string[] = ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"];
