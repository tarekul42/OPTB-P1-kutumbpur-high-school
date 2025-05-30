import React from 'react';

const About = () => {
    const features = [
        {
            title: "Excellence in Education",
            description: "Committed to providing quality education with a focus on holistic development.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        },
        {
            title: "Modern Infrastructure",
            description: "State-of-the-art facilities designed to enhance the learning experience.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            title: "Expert Faculty",
            description: "Highly qualified and experienced teachers dedicated to student success.",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
            )
        }
    ];

    const stats = [
        {
            value: "25+",
            label: "Years of Excellence",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            value: "1000+",
            label: "Students Enrolled",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            )
        },
        {
            value: "50+",
            label: "Expert Teachers",
            icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
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
                        <h1 className="text-5xl font-bold mb-6">About Kutumbpur High School</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Nurturing minds, building futures, and creating leaders of tomorrow since 1998.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105">
                            <div className="text-blue-600 mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>

                {/* Stats Section */}
                <div className="bg-white rounded-xl shadow-lg p-12 mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="flex items-center justify-center text-blue-600 mb-4">
                                    {stat.icon}
                                </div>
                                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                                <p className="text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                        <p className="text-gray-600">
                            To provide quality education that empowers students to become responsible global citizens, 
                            critical thinkers, and lifelong learners who contribute positively to society.
                        </p>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                        <p className="text-gray-600">
                            To be a leading educational institution that nurtures academic excellence, 
                            character development, and innovation while preparing students for the challenges of tomorrow.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About; 