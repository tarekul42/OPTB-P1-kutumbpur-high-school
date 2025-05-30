import React from 'react';

const Updates = () => {
    const newsItems = [
        {
            title: "Annual Sports Day 2024",
            date: "March 15, 2024",
            category: "Events",
            description: "Join us for our annual sports day celebration featuring various athletic competitions and cultural performances.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            )
        },
        {
            title: "New Science Lab Inauguration",
            date: "March 10, 2024",
            category: "Infrastructure",
            description: "Our new state-of-the-art science laboratory is now open for students, equipped with modern equipment and facilities.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            )
        },
        {
            title: "Academic Excellence Awards",
            date: "March 5, 2024",
            category: "Achievements",
            description: "Congratulations to our students who achieved outstanding results in the board examinations.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
            )
        }
    ];

    const announcements = [
        {
            title: "Summer Vacation Schedule",
            content: "School will remain closed from May 15 to June 30 for summer vacation.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: "Parent-Teacher Meeting",
            content: "Quarterly parent-teacher meeting scheduled for April 10, 2024.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-6">Latest Updates</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Stay informed about the latest news, events, and announcements from our school.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* News Section */}
                    <div className="lg:col-span-2">
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
                        <div className="space-y-8">
                            {newsItems.map((news, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 text-blue-600">
                                            {news.icon}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center justify-between mb-2">
                                                <span className="text-sm font-medium text-blue-600">{news.category}</span>
                                                <span className="text-sm text-gray-500">{news.date}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{news.title}</h3>
                                            <p className="text-gray-600">{news.description}</p>
                                            <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                                                Read More
                                                <svg className="w-4 h-4 inline-block ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Announcements Section */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8">Announcements</h2>
                        <div className="space-y-6">
                            {announcements.map((announcement, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                                    <div className="flex items-start space-x-4">
                                        <div className="flex-shrink-0 text-blue-600">
                                            {announcement.icon}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">{announcement.title}</h3>
                                            <p className="text-gray-600">{announcement.content}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Quick Links */}
                        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
                            <div className="space-y-3">
                                <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                    Academic Calendar
                                </a>
                                <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Event Schedule
                                </a>
                                <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Newsletter Archive
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Updates; 