import React from 'react';

const Events = () => {
    const upcomingEvents = [
        {
            title: "Annual Sports Day",
            date: "March 25, 2024",
            time: "9:00 AM - 4:00 PM",
            location: "School Sports Ground",
            description: "Join us for a day of athletic excellence and team spirit. Students will participate in various sports events and competitions.",
            category: "Sports"
        },
        {
            title: "Science Exhibition",
            date: "April 5, 2024",
            time: "10:00 AM - 2:00 PM",
            location: "School Auditorium",
            description: "Showcasing innovative projects and experiments by our talented students. Open to all parents and visitors.",
            category: "Academic"
        },
        {
            title: "Cultural Festival",
            date: "April 15, 2024",
            time: "6:00 PM - 9:00 PM",
            location: "School Auditorium",
            description: "A celebration of art, music, and dance featuring performances by our students.",
            category: "Cultural"
        }
    ];

    const pastEvents = [
        {
            title: "Parent-Teacher Meeting",
            date: "February 20, 2024",
            description: "Successful meeting with parents to discuss student progress and development.",
            category: "Academic"
        },
        {
            title: "Republic Day Celebration",
            date: "January 26, 2024",
            description: "Grand celebration of Republic Day with cultural programs and flag hoisting ceremony.",
            category: "Cultural"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-6">School Events</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Stay updated with our upcoming events and relive the memories of past celebrations.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Upcoming Events */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Events</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {upcomingEvents.map((event, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
                                            {event.category}
                                        </span>
                                        <span className="text-sm text-gray-500">{event.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                                    <p className="text-gray-600 mb-4">{event.description}</p>
                                    <div className="space-y-2">
                                        <div className="flex items-center text-gray-600">
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            {event.time}
                                        </div>
                                        <div className="flex items-center text-gray-600">
                                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                            {event.location}
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-50 px-6 py-4">
                                    <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-300">
                                        Register Now
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Past Events */}
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Past Events</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {pastEvents.map((event, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="px-3 py-1 text-sm font-medium text-gray-600 bg-gray-100 rounded-full">
                                        {event.category}
                                    </span>
                                    <span className="text-sm text-gray-500">{event.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{event.title}</h3>
                                <p className="text-gray-600">{event.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Calendar Link */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Stay Updated</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Don't miss any events! Subscribe to our calendar and get notified about upcoming events.
                    </p>
                    <button className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition duration-300">
                        View Full Calendar
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Events;