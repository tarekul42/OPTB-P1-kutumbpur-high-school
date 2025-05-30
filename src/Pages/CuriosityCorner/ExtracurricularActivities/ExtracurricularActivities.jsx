import React from 'react';

const ExtracurricularActivities = () => {
    const activities = [
        {
            title: "Sports",
            description: "Join our various sports teams including cricket, football, basketball, and athletics",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Arts & Culture",
            description: "Express yourself through music, dance, drama, and visual arts",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            )
        },
        {
            title: "Science Club",
            description: "Explore scientific concepts through experiments and projects",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            )
        },
        {
            title: "Debate Club",
            description: "Develop critical thinking and public speaking skills",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-6">Extracurricular Activities</h1>
                        <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
                            Discover and participate in various activities that help you grow beyond academics.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Activities Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {activities.map((activity, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 text-indigo-600">
                                    {activity.icon}
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{activity.title}</h3>
                                    <p className="text-gray-600">{activity.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Join Section */}
                <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Activities</h2>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Take the first step towards discovering your talents and interests. Join our diverse range of extracurricular activities.
                        </p>
                        <button className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition duration-300">
                            Register Now
                        </button>
                    </div>
                </div>

                {/* Schedule Section */}
                <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Activity Schedule</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="border border-gray-200 rounded-lg p-4">
                            <h3 className="font-bold text-gray-900 mb-2">Sports</h3>
                            <p className="text-gray-600">Monday & Wednesday</p>
                            <p className="text-gray-600">3:00 PM - 5:00 PM</p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4">
                            <h3 className="font-bold text-gray-900 mb-2">Arts & Culture</h3>
                            <p className="text-gray-600">Tuesday & Thursday</p>
                            <p className="text-gray-600">3:00 PM - 5:00 PM</p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4">
                            <h3 className="font-bold text-gray-900 mb-2">Science Club</h3>
                            <p className="text-gray-600">Friday</p>
                            <p className="text-gray-600">3:00 PM - 5:00 PM</p>
                        </div>
                        <div className="border border-gray-200 rounded-lg p-4">
                            <h3 className="font-bold text-gray-900 mb-2">Debate Club</h3>
                            <p className="text-gray-600">Saturday</p>
                            <p className="text-gray-600">10:00 AM - 12:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtracurricularActivities;