// Bangladesh National and Cultural Holidays for 2026
// Data structure: { id, title, date: 'YYYY-MM-DD', type: 'public_holiday' | 'school_event' }

export const bangladeshHolidays = [
  // National Days
  {
    id: 1,
    title: "International Mother Language Day",
    date: "2026-02-21",
    type: "public_holiday",
    description:
      "Martyred Intellectuals Day - Schools and offices remain closed to honor those who sacrificed their lives for the Bengali language.",
    bnTitle: "আন্তর্জাতিক মাতৃভাষা দিবস",
  },
  {
    id: 2,
    title: "Independence Day",
    date: "2026-03-26",
    type: "public_holiday",
    description:
      "National Independence Day celebrating Bangladesh's independence from Pakistan in 1971.",
    bnTitle: "স্বাধীনতা দিবস",
  },
  {
    id: 3,
    title: "Victory Day",
    date: "2026-12-16",
    type: "public_holiday",
    description:
      "National Victory Day commemorating the victory in the Liberation War of Bangladesh.",
    bnTitle: "বিজয় দিবস",
  },

  // Cultural/New Year
  {
    id: 4,
    title: "Pahela Baishakh (Bengali New Year)",
    date: "2026-04-14",
    type: "public_holiday",
    description:
      "First day of the Bengali calendar year, celebrated with colorful parades and cultural programs.",
    bnTitle: "পহেলা বৈশাখ",
  },

  // Religious Holidays - Islamic
  {
    id: 5,
    title: "Eid-ul-Fitr (Tentative)",
    date: "2026-05-15",
    type: "public_holiday",
    description:
      "Festival of Breaking Fast - marks the end of Ramadan. Schools closed for holidays.",
    bnTitle: "ঈদুল ফিতর",
  },
  {
    id: 6,
    title: "Eid-ul-Fitr Holiday",
    date: "2026-05-16",
    type: "public_holiday",
    description: "Second day of Eid-ul-Fitr celebrations.",
    bnTitle: "ঈদুল ফিতর (২য় দিন)",
  },
  {
    id: 7,
    title: "Eid-ul-Fitr Holiday",
    date: "2026-05-17",
    type: "public_holiday",
    description: "Third day of Eid-ul-Fitr holidays.",
    bnTitle: "ঈদুল ফিতর (৩য় দিন)",
  },
  {
    id: 8,
    title: "Eid-ul-Adha (Tentative)",
    date: "2026-05-27",
    type: "public_holiday",
    description:
      "Festival of Sacrifice - one of the most important Islamic holidays.",
    bnTitle: "ঈদুল আযহা",
  },
  {
    id: 9,
    title: "Eid-ul-Adha Holiday",
    date: "2026-05-28",
    type: "public_holiday",
    description: "Second day of Eid-ul-Adha celebrations.",
    bnTitle: "ঈদুল আযহা (২য় দিন)",
  },
  {
    id: 10,
    title: "Eid-ul-Adha Holiday",
    date: "2026-05-29",
    type: "public_holiday",
    description: "Third day of Eid-ul-Adha holidays.",
    bnTitle: "ঈদুল আযহা (৩য় দিন)",
  },

  // Hindu Religious Holidays
  {
    id: 11,
    title: "Durga Puja (Vijaya Dashami)",
    date: "2026-10-07",
    type: "public_holiday",
    description:
      "Major Hindu festival celebrating the victory of goddess Durga over evil. Schools may have modified schedules.",
    bnTitle: "দুর্গা পূজা",
  },
  {
    id: 12,
    title: "Janmashtami",
    date: "2026-08-30",
    type: "public_holiday",
    description:
      "Birthday of Lord Krishna, celebrated with devotional songs and rituals.",
    bnTitle: "শ্রীকৃষ্ণ জন্মাষ্টমী",
  },

  // Buddhist Religious Holidays
  {
    id: 13,
    title: "Buddha Purnima",
    date: "2026-05-03",
    type: "public_holiday",
    description:
      "Birthday of Lord Buddha, celebrated by Buddhist communities across Bangladesh.",
    bnTitle: "বুদ্ধ পূর্ণিমা",
  },

  // Christian Religious Holidays
  {
    id: 14,
    title: "Christmas Day",
    date: "2026-12-25",
    type: "public_holiday",
    description: "Christmas Day - celebration of the birth of Jesus Christ.",
    bnTitle: "বড়দিন",
  },

  // Other Important Days
  {
    id: 15,
    title: "National Children's Day",
    date: "2026-06-01",
    type: "public_holiday",
    description:
      "Celebrating the rights and well-being of children in Bangladesh.",
    bnTitle: "জাতীয় শিশু দিবস",
  },
  {
    id: 16,
    title: "National Mourning Day",
    date: "2026-08-15",
    type: "public_holiday",
    description:
      "To mourn the assassination of Bangabandhu Sheikh Mujibur Rahman and his family in 1975.",
    bnTitle: "জাতীয় শোক দিবস",
  },
];

// School-specific events (exams, sports, activities)
export const schoolEvents = [
  {
    id: 101,
    title: "First Unit Test",
    date: "2026-03-10",
    type: "school_event",
    description:
      "First unit test for all classes. Students must bring their exam materials.",
    bnTitle: "প্রথম সাপ্তাহিক পরীক্ষা",
  },
  {
    id: 102,
    title: "Annual Sports Day",
    date: "2026-03-25",
    type: "school_event",
    description:
      "Annual sports competition. All students are encouraged to participate. Parents welcome!",
    bnTitle: "বার্ষিক ক্রীড়া দিবস",
  },
  {
    id: 103,
    title: "Second Unit Test",
    date: "2026-04-20",
    type: "school_event",
    description: "Second unit test covering lessons from April.",
    bnTitle: "দ্বিতীয় সাপ্তাহিক পরীক্ষা",
  },
  {
    id: 104,
    title: "Annual Examination Begins",
    date: "2026-11-01",
    type: "school_event",
    description: "Start of annual examinations for all classes.",
    bnTitle: "বার্ষিক পরীক্ষা শুরু",
  },
  {
    id: 105,
    title: "Cultural Program - Ekushey February",
    date: "2026-02-20",
    type: "school_event",
    description:
      "Special cultural program to commemorate Language Martyrs' Day. All students must attend.",
    bnTitle: "একুশে ফেব্রুয়ারি সাংস্কৃতিক অনুষ্ঠান",
  },
  {
    id: 106,
    title: "Science Fair",
    date: "2026-09-15",
    type: "school_event",
    description:
      "Annual science fair showcasing student projects and innovations.",
    bnTitle: "বার্ষিক বিজ্ঞান মেলা",
  },
  {
    id: 107,
    title: "Parents-Teachers Meeting",
    date: "2026-07-15",
    type: "school_event",
    description:
      "Quarterly PTM to discuss student progress. All parents must attend.",
    bnTitle: "অভিভাবক-শিক্ষক সভা",
  },
  {
    id: 108,
    title: "Annual Result Published",
    date: "2026-12-01",
    type: "school_event",
    description:
      "Annual examination results will be published. Parents can collect report cards.",
    bnTitle: "বার্ষিক ফলাফল প্রকাশ",
  },
  {
    id: 109,
    title: "Mid-Term Examination",
    date: "2026-06-15",
    type: "school_event",
    description: "Mid-term examinations for all subjects.",
    bnTitle: "মধ্যবর্তী পরীক্ষা",
  },
  {
    id: 110,
    title: "Pahela Baishakh Celebration",
    date: "2026-04-14",
    type: "school_event",
    description:
      "School celebration for Bengali New Year with cultural programs and rally.",
    bnTitle: "পহেলা বৈশাখ উদযাপন",
  },
];

// Combine all events for easy lookup
export const allEvents = [...bangladeshHolidays, ...schoolEvents];

// Helper function to check if a date is a holiday
export const isHoliday = (date) => {
  const dateStr = formatDate(date);
  return bangladeshHolidays.find((holiday) => holiday.date === dateStr);
};

// Helper function to check if a date has school events
export const getSchoolEvents = (date) => {
  const dateStr = formatDate(date);
  return schoolEvents.filter((event) => event.date === dateStr);
};

// Helper function to get all events for a date
export const getEventsForDate = (date) => {
  const dateStr = formatDate(date);
  return allEvents.filter((event) => event.date === dateStr);
};

// Format date to YYYY-MM-DD
export const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

// Generate Google Calendar link
export const generateGoogleCalendarLink = (event) => {
  const title = encodeURIComponent(event.title);
  const details = encodeURIComponent(event.description || "");
  const location = encodeURIComponent("Kutumbpur High School");

  // Create a date in YYYYMMDD format
  const dateStr = event.date.replace(/-/g, "");

  // End date (next day)
  const nextDay = new Date(event.date);
  nextDay.setDate(nextDay.getDate() + 1);
  const endDateStr = formatDate(nextDay).replace(/-/g, "");

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dateStr}/${endDateStr}&details=${details}&location=${location}`;
};

// Bengali month names
export const bengaliMonths = [
  "জানুয়ারি",
  "ফেব্রুয়ারি",
  "মার্চ",
  "এপ্রিল",
  "মে",
  "জুন",
  "জুলাই",
  "আগস্ট",
  "সেপ্টেম্বর",
  "অক্টোবর",
  "নভেম্বর",
  "ডিসেম্বর",
];

// Bengali day names
export const bengaliDays = [
  "রবিবার",
  "সোমবার",
  "মঙ্গলবার",
  "বুধবার",
  "বৃহস্পতিবার",
  "শুক্রবার",
  "শনিবার",
];
