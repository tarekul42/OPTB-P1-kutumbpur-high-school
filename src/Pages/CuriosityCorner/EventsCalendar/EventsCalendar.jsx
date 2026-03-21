import { useState, useCallback, useMemo } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../../styles/calendar.css';
import { format, addMonths, subMonths } from 'date-fns';
import {
  bangladeshHolidays,
  allEvents,
  isHoliday,
  getSchoolEvents,
  formatDate,
  generateGoogleCalendarLink,
  bengaliMonths,
  bengaliDays
} from '../../../data/bangladeshHolidays';

const EventsCalendar = () => {
  // State management
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [viewMode, setViewMode] = useState('month');
  const [language, setLanguage] = useState('en');

  // Check if a date is Friday (Bangladesh weekend)
  const isFriday = useCallback((date) => {
    return date.getDay() === 5; // Friday is day 5
  }, []);

  // Get events for a specific date
  const getDateEvents = useCallback((date) => {
    const dateStr = formatDate(date);
    return allEvents.filter(event => event.date === dateStr);
  }, []);

  // Determine tile class for styling
  const tileClassName = useCallback(({ date, view }) => {
    if (view !== 'month') return '';
    
    const classes = [];
    const holiday = isHoliday(date);
    const schoolEvts = getSchoolEvents(date);
    const friday = isFriday(date);
    
    // Friday is the official weekend in Bangladesh
    if (friday && !holiday) {
      classes.push('bg-red-50');
    }
    
    // Public holiday takes precedence
    if (holiday) {
      classes.push('bg-red-100', 'text-red-700', 'font-semibold');
    }
    
    // School events styling
    if (schoolEvts.length > 0 && !holiday) {
      classes.push('bg-blue-50', 'text-blue-700');
    }
    
    return classes.join(' ');
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Content for selected date
  const selectedDateContent = useMemo(() => {
    const holiday = isHoliday(selectedDate);
    const schoolEvts = getSchoolEvents(selectedDate);
    const allDateEvents = getDateEvents(selectedDate);
    
    return {
      holiday,
      schoolEvents: schoolEvts,
      allEvents: allDateEvents,
      hasEvents: allDateEvents.length > 0,
      isHoliday: !!holiday
    };
  }, [selectedDate]); // eslint-disable-line react-hooks/exhaustive-deps

  // Navigation handlers
  const goToPreviousMonth = () => setCurrentMonth(subMonths(currentMonth, 1));
  const goToNextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
  const goToToday = () => {
    setCurrentMonth(new Date());
    setSelectedDate(new Date());
  };

  // Format month name based on language
  const formatMonthName = (date) => {
    if (language === 'bn') {
      return bengaliMonths[date.getMonth()];
    }
    return format(date, 'MMMM yyyy');
  };

  // Get day name in selected language
  const getDayName = (date) => {
    if (language === 'bn') {
      return bengaliDays[date.getDay()];
    }
    return format(date, 'EEEE');
  };

  // Upcoming events (next 30 days)
  const upcomingEvents = useMemo(() => {
    const today = new Date();
    const thirtyDaysLater = new Date(today);
    thirtyDaysLater.setDate(today.getDate() + 30);
    
    return allEvents
      .filter(event => {
        const eventDate = new Date(event.date);
        return eventDate >= today && eventDate <= thirtyDaysLater;
      })
      .sort((a, b) => new Date(a.date) - new Date(b.date))
      .slice(0, 5);
  }, []);

  // Legend items
  const legendItems = [
    { label: 'Public Holiday', color: 'bg-red-100 text-red-700', border: 'border-red-300' },
    { label: 'School Event', color: 'bg-blue-100 text-blue-700', border: 'border-blue-300' },
    { label: 'Friday (Weekend)', color: 'bg-red-50', border: 'border-red-200' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-rose-600 to-rose-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              {language === 'bn' ? 'ইভেন্ট ক্যালেন্ডার' : 'Events Calendar'}
            </h1>
            <p className="text-xl text-rose-100 max-w-3xl mx-auto">
              {language === 'bn' 
                ? 'স্কুলের সকল ইভেন্ট, কার্যক্রম এবং গুরুত্বপূর্ণ তারিখ সম্পর্কে আপডেট থাকুন।'
                : 'Stay updated with all school events, activities, and important dates.'}
            </p>
            {/* Language Toggle */}
            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  language === 'en'
                    ? 'bg-white text-rose-700'
                    : 'bg-rose-700 text-white hover:bg-rose-600'
                }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('bn')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  language === 'bn'
                    ? 'bg-white text-rose-700'
                    : 'bg-rose-700 text-white hover:bg-rose-600'
                }`}
              >
                বাংলা
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Split View */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Side - Calendar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Calendar Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
              {/* Calendar Header */}
              <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={goToPreviousMonth}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Previous month"
                  >
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <h2 className="text-2xl font-bold text-gray-900 min-w-[200px] text-center">
                    {formatMonthName(currentMonth)}
                  </h2>
                  <button
                    onClick={goToNextMonth}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    aria-label="Next month"
                  >
                    <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                <button
                  onClick={goToToday}
                  className="px-4 py-2 bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors font-medium"
                >
                  {language === 'bn' ? 'আজ' : 'Today'}
                </button>
              </div>

              {/* Calendar Component */}
              <div className="calendar-wrapper">
                <Calendar
                  onChange={setSelectedDate}
                  value={selectedDate}
                  locale="bn-BD"
                  tileClassName={tileClassName}
                  view={viewMode}
                  onViewChange={({ view }) => setViewMode(view)}
                  className="w-full border-0 react-calendar"
                />
              </div>

              {/* Legend */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                  {language === 'bn' ? 'ক্যালেন্ডার লেজেন্ড' : 'Calendar Legend'}
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
            </div>

            {/* Upcoming Events Section */}
            <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {language === 'bn' ? 'আসন্ন ইভেন্ট' : 'Upcoming Events'}
              </h2>
              <div className="space-y-4">
                {upcomingEvents.length > 0 ? (
                  upcomingEvents.map((event) => (
                    <div
                      key={event.id}
                      className={`p-4 rounded-lg border-l-4 ${
                        event.type === 'public_holiday'
                          ? 'bg-red-50 border-red-500'
                          : 'bg-blue-50 border-blue-500'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-gray-900">
                            {language === 'bn' ? event.bnTitle : event.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">{event.date}</p>
                        </div>
                        <span
                          className={`px-3 py-1 rounded-full text-xs font-medium ${
                            event.type === 'public_holiday'
                              ? 'bg-red-100 text-red-700'
                              : 'bg-blue-100 text-blue-700'
                          }`}
                        >
                          {event.type === 'public_holiday'
                            ? language === 'bn' ? 'ছুটি' : 'Holiday'
                            : language === 'bn' ? 'স্কুল ইভেন্ট' : 'School Event'}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center py-8">
                    {language === 'bn' 
                      ? 'কোনো আসন্ন ইভেন্ট নেই।' 
                      : 'No upcoming events.'}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right Side - Event Details Panel */}
          <div className="space-y-6">
            {/* Selected Date Details */}
            <div className="bg-white rounded-xl shadow-lg p-6 lg:p-8 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {language === 'bn' ? 'নির্বাচিত তারিখ' : 'Selected Date'}
              </h2>
              
              {/* Date Display */}
              <div className="mb-6 p-4 bg-gradient-to-r from-rose-50 to-rose-100 rounded-lg">
                <p className="text-3xl font-bold text-rose-800">
                  {format(selectedDate, 'dd')}
                </p>
                <p className="text-lg text-rose-700">
                  {getDayName(selectedDate)}
                </p>
                <p className="text-rose-600">
                  {formatMonthName(selectedDate)}
                </p>
              </div>

              {/* Events for Selected Date */}
              <div className="space-y-4">
                {selectedDateContent.hasEvents ? (
                  selectedDateContent.allEvents.map((event) => (
                    <div
                      key={event.id}
                      className={`p-4 rounded-lg border-2 ${
                        event.type === 'public_holiday'
                          ? 'bg-red-50 border-red-200'
                          : 'bg-blue-50 border-blue-200'
                      }`}
                    >
                      {/* Holiday Badge - Takes Precedence */}
                      {event.type === 'public_holiday' && (
                        <div className="mb-3">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-600 text-white">
                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
                            </svg>
                            {language === 'bn' ? 'সরকারি ছুটি' : 'Public Holiday'}
                          </span>
                          {event.date === '2026-02-21' && (
                            <p className="text-xs text-red-600 mt-2 font-medium">
                              {language === 'bn' 
                                ? 'বিদ্যালয় বন্ধ থাকবে' 
                                : 'School Closed'}
                            </p>
                          )}
                        </div>
                      )}

                      {/* Event Title */}
                      <h3 className="font-bold text-gray-900 text-lg mb-2">
                        {language === 'bn' ? event.bnTitle : event.title}
                      </h3>

                      {/* Event Description */}
                      {event.description && (
                        <p className="text-sm text-gray-600 mb-3">
                          {event.description}
                        </p>
                      )}

                      {/* Google Calendar Link */}
                      <a
                        href={generateGoogleCalendarLink(event)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-rose-600 hover:text-rose-800 font-medium"
                      >
                        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                        </svg>
                        {language === 'bn' ? 'গুগল ক্যালেন্ডারে যোগ করুন' : 'Add to Google Calendar'}
                      </a>
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-gray-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-gray-500">
                      {language === 'bn' 
                        ? 'এই তারিখে কোনো ইভেন্ট নেই' 
                        : 'No events on this date'}
                    </p>
                  </div>
                )}
              </div>

              {/* Bangladesh Weekend Info */}
              <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg border border-yellow-200">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-semibold text-yellow-800 mb-1">
                      {language === 'bn' ? 'সাপ্তাহিক ছুটি' : 'Weekend Notice'}
                    </h4>
                    <p className="text-sm text-yellow-700">
                      {language === 'bn' 
                        ? 'বাংলাদেশে শুক্রবার সরকারি সাপ্তাহিক ছুটি। স্কুল বন্ধ থাকে।'
                        : 'Friday is the official weekly holiday in Bangladesh. Schools remain closed.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                  {language === 'bn' ? 'দ্রুত অ্যাকশন' : 'Quick Actions'}
                </h3>
                <div className="space-y-2">
                  <button className="w-full flex items-center justify-start px-4 py-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    {language === 'bn' ? 'ক্যালেন্ডার ডাউনলোড করুন' : 'Download Calendar'}
                  </button>
                  <button className="w-full flex items-center justify-start px-4 py-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                    {language === 'bn' ? 'নোটিফিকেশন সেটআপ করুন' : 'Set Up Notifications'}
                  </button>
                  <button className="w-full flex items-center justify-start px-4 py-2 text-rose-600 hover:bg-rose-50 rounded-lg transition-colors">
                    <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                    {language === 'bn' ? 'বন্ধুদের সাথে শেয়ার করুন' : 'Share with Friends'}
                  </button>
                </div>
              </div>
            </div>

            {/* Holidays Summary Card */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {language === 'bn' ? 'প্রধান ছুটিসমূহ' : 'Major Holidays'}
              </h3>
              <div className="space-y-3">
                {bangladeshHolidays.slice(0, 5).map((holiday) => (
                  <div key={holiday.id} className="flex items-start gap-3 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {language === 'bn' ? holiday.bnTitle : holiday.title}
                      </p>
                      <p className="text-xs text-gray-500">{holiday.date}</p>
                    </div>
                  </div>
                ))}
                <a href="#all-holidays" className="block text-center text-sm text-rose-600 hover:text-rose-800 font-medium mt-4">
                  {language === 'bn' ? 'সব ছুটি দেখুন →' : 'View All Holidays →'}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsCalendar;
