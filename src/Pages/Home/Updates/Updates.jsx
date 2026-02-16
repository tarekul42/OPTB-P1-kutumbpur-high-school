import React from 'react';

const Updates = () => {
    const newsItems = [
        {
            title: "Annual Sports Day Success",
            date: "March 15, 2024",
            category: "Events",
            description: "Our annual sports day was a grand success with record participation and outstanding performances.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
            )
        },
        {
            title: "New Science Lab Inauguration",
            date: "March 10, 2024",
            category: "Facilities",
            description: "State-of-the-art science laboratory inaugurated with modern equipment and facilities.",
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
            description: "Congratulations to our students who received academic excellence awards for outstanding performance.",
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
            content: "School will remain closed for summer vacation from May 15 to June 30, 2024.",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: "Parent-Teacher Meeting",
            content: "Annual parent-teacher meeting scheduled for April 20, 2024. All parents are requested to attend.",
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
                            Stay informed about the latest news, events, and announcements from Kutumbpur High School.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* News Section */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Latest News</h2>
                        <div className="space-y-6">
                            {newsItems.map((item, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 text-blue-600">
                                            {item.icon}
                                        </div>
                                        <div className="ml-4">
                                            <div className="flex items-center space-x-2 mb-2">
                                                <span className="text-sm font-medium text-blue-600">{item.category}</span>
                                                <span className="text-sm text-gray-500">•</span>
                                                <span className="text-sm text-gray-500">{item.date}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                                            <p className="text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Announcements Section */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Announcements</h2>
                        <div className="space-y-6">
                            {announcements.map((announcement, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                                    <div className="flex items-start">
                                        <div className="flex-shrink-0 text-blue-600">
                                            {announcement.icon}
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-lg font-bold text-gray-900 mb-2">{announcement.title}</h3>
                                            <p className="text-gray-600">{announcement.content}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Quick Links */}
                        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h3>
                            <div className="space-y-4">
                                <a href="#" className="flex items-center text-blue-600 hover:text-blue-800">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
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
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
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