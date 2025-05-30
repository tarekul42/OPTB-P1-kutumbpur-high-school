import React from 'react';

const EventsCalendar = () => {
    const upcomingEvents = [
        {
            title: "Annual Sports Day",
            date: "March 25, 2024",
            time: "9:00 AM - 4:00 PM",
            location: "School Sports Ground",
            description: "Join us for a day of athletic excellence and team spirit.",
            category: "Sports"
        },
        {
            title: "Science Exhibition",
            date: "April 5, 2024",
            time: "10:00 AM - 2:00 PM",
            location: "School Auditorium",
            description: "Showcasing innovative projects by our talented students.",
            category: "Academic"
        },
        {
            title: "Cultural Festival",
            date: "April 15, 2024",
            time: "6:00 PM - 9:00 PM",
            location: "School Auditorium",
            description: "Celebrating art, music, and dance performances.",
            category: "Cultural"
        }
    ];

    const eventCategories = [
        { name: "Academic", color: "bg-blue-500" },
        { name: "Sports", color: "bg-green-500" },
        { name: "Cultural", color: "bg-purple-500" },
        { name: "Other", color: "bg-gray-500" }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-rose-600 to-rose-800 text-white py-20">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-6">Events Calendar</h1>
                        <p className="text-xl text-rose-100 max-w-3xl mx-auto">
                            Stay updated with all school events, activities, and important dates.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Calendar View */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
                    <div className="flex justify-between items-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-900">March 2024</h2>
                        <div className="flex space-x-4">
                            <button className="px-4 py-2 text-gray-600 hover:text-gray-900">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button className="px-4 py-2 text-gray-600 hover:text-gray-900">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Calendar Grid */}
                    <div className="grid grid-cols-7 gap-4 mb-4">
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                            <div key={day} className="text-center font-semibold text-gray-600">
                                {day}
                            </div>
                        ))}
                    </div>
                    <div className="grid grid-cols-7 gap-4">
                        {Array.from({ length: 35 }, (_, i) => {
                            const day = i + 1;
                            const hasEvent = day === 25; // Example: March 25 has an event
                            return (
                                <div
                                    key={i}
                                    className={`aspect-square p-2 border rounded-lg ${
                                        hasEvent ? 'bg-rose-50 border-rose-200' : 'border-gray-200'
                                    }`}
                                >
                                    <div className="text-sm text-gray-600">{day}</div>
                                    {hasEvent && (
                                        <div className="mt-1">
                                            <div className="text-xs bg-rose-500 text-white rounded px-1 py-0.5">
                                                Sports Day
                                            </div>
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Upcoming Events */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
                        <div className="space-y-6">
                            {upcomingEvents.map((event, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                                            <div className="space-y-2">
                                                <p className="text-gray-600 flex items-center">
                                                    <svg className="w-5 h-5 mr-2 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    {event.date} | {event.time}
                                                </p>
                                                <p className="text-gray-600 flex items-center">
                                                    <svg className="w-5 h-5 mr-2 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                    </svg>
                                                    {event.location}
                                                </p>
                                            </div>
                                            <p className="mt-4 text-gray-600">{event.description}</p>
                                        </div>
                                        <span className={`px-3 py-1 rounded-full text-sm text-white ${event.category === 'Sports' ? 'bg-green-500' : event.category === 'Academic' ? 'bg-blue-500' : 'bg-purple-500'}`}>
                                            {event.category}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Event Categories and Quick Links */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Event Categories</h3>
                            <div className="space-y-3">
                                {eventCategories.map((category, index) => (
                                    <div key={index} className="flex items-center">
                                        <div className={`w-3 h-3 rounded-full ${category.color} mr-2`}></div>
                                        <span className="text-gray-600">{category.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
                            <div className="space-y-4">
                                <a href="#" className="flex items-center text-rose-600 hover:text-rose-800">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Add to Calendar
                                </a>
                                <a href="#" className="flex items-center text-rose-600 hover:text-rose-800">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Subscribe to Updates
                                </a>
                                <a href="#" className="flex items-center text-rose-600 hover:text-rose-800">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                    </svg>
                                    Submit Event
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