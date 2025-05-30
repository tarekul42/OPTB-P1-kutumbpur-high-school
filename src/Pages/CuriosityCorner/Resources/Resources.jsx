import React from 'react';

const Resources = () => {
    const studyMaterials = [
        {
            title: "Mathematics",
            description: "Comprehensive study materials for all grades",
            resources: ["Textbooks", "Practice Problems", "Video Lectures"],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: "Science",
            description: "Interactive learning resources and experiments",
            resources: ["Lab Manuals", "Virtual Labs", "Science Projects"],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
            )
        },
        {
            title: "Languages",
            description: "Language learning resources and literature",
            resources: ["Grammar Guides", "Reading Materials", "Writing Tips"],
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
            )
        }
    ];

    const digitalResources = [
        {
            title: "E-Library",
            description: "Access our digital library with thousands of books and journals",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        },
        {
            title: "Online Courses",
            description: "Enroll in our online courses and enhance your learning",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: "Study Apps",
            description: "Recommended educational apps and tools",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
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
                        <h1 className="text-5xl font-bold mb-6">Learning Resources</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Access comprehensive study materials, digital resources, and learning tools to enhance your educational journey.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Study Materials */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Study Materials</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {studyMaterials.map((subject, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105">
                                <div className="text-blue-600 mb-4">
                                    {subject.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{subject.title}</h3>
                                <p className="text-gray-600 mb-6">{subject.description}</p>
                                <ul className="space-y-2">
                                    {subject.resources.map((resource, idx) => (
                                        <li key={idx} className="flex items-center text-gray-600">
                                            <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                            </svg>
                                            {resource}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Digital Resources */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">Digital Resources</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {digitalResources.map((resource, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105">
                                <div className="text-blue-600 mb-4">
                                    {resource.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{resource.title}</h3>
                                <p className="text-gray-600">{resource.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Access */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Access</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <a href="#" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300">
                            <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            <span className="text-gray-900">E-Books</span>
                        </a>
                        <a href="#" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300">
                            <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            <span className="text-gray-900">Video Lectures</span>
                        </a>
                        <a href="#" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300">
                            <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            <span className="text-gray-900">Practice Tests</span>
                        </a>
                        <a href="#" className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition duration-300">
                            <svg className="w-6 h-6 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="text-gray-900">Study Schedule</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resources;