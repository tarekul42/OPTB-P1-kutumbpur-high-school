import React from 'react';

const Academics = () => {
    const programs = [
        {
            title: "Primary Education",
            description: "Foundation years focusing on basic skills and holistic development",
            features: ["Interactive Learning", "Activity-based Education", "Basic Skills Development"],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        },
        {
            title: "Secondary Education",
            description: "Comprehensive curriculum preparing students for higher education",
            features: ["Advanced Mathematics", "Science & Technology", "Language Arts"],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            )
        },
        {
            title: "Higher Secondary",
            description: "Specialized streams preparing students for professional careers",
            features: ["Science Stream", "Commerce Stream", "Arts Stream"],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
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
                        <h1 className="text-5xl font-bold mb-6">Academic Programs</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Discover our comprehensive academic programs designed to nurture excellence and prepare students for future success.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Programs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {programs.map((program, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105">
                            <div className="text-blue-600 mb-4">
                                {program.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4">{program.title}</h3>
                            <p className="text-gray-600 mb-6">{program.description}</p>
                            <ul className="space-y-2">
                                {program.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-600">
                                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Additional Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Academic Excellence</h2>
                        <p className="text-gray-600 mb-4">
                            Our commitment to academic excellence is reflected in our comprehensive curriculum, 
                            experienced faculty, and state-of-the-art facilities. We focus on:
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Individual attention and personalized learning
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Regular assessments and progress tracking
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Integration of technology in education
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Support Services</h2>
                        <p className="text-gray-600 mb-4">
                            We provide comprehensive support services to ensure every student reaches their full potential:
                        </p>
                        <ul className="space-y-2">
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Academic counseling and guidance
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Special education support
                            </li>
                            <li className="flex items-center text-gray-600">
                                <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                Career counseling and college preparation
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Academics;