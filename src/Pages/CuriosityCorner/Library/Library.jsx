import React from 'react';

const Library = () => {
    const collections = [
        {
            title: "Academic Books",
            description: "Comprehensive collection of textbooks and reference materials",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        },
        {
            title: "Digital Resources",
            description: "Access to e-books, online journals, and research databases",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
            )
        },
        {
            title: "Fiction & Literature",
            description: "Wide range of novels, short stories, and literary works",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
            )
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-amber-600 to-amber-800 text-white py-20">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-6">School Library</h1>
                        <p className="text-xl text-amber-100 max-w-3xl mx-auto">
                            Discover a world of knowledge through our extensive collection of books and digital resources.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Collections */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {collections.map((collection, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 text-amber-600">
                                    {collection.icon}
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{collection.title}</h3>
                                    <p className="text-gray-600">{collection.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Library Hours */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Library Hours</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">Weekdays</h3>
                            <div className="space-y-2">
                                <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                                <p className="text-gray-600">Saturday: 9:00 AM - 4:00 PM</p>
                                <p className="text-gray-600">Sunday: Closed</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-900 mb-4">Holiday Hours</h3>
                            <div className="space-y-2">
                                <p className="text-gray-600">Public Holidays: 10:00 AM - 2:00 PM</p>
                                <p className="text-gray-600">Summer Break: 9:00 AM - 3:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Library Services</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">Book borrowing and returns</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">Digital resource access</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">Research assistance</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-amber-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">Study spaces and computer access</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Quick Links</h3>
                        <div className="space-y-4">
                            <a href="#" className="flex items-center text-amber-600 hover:text-amber-800">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                Search Catalog
                            </a>
                            <a href="#" className="flex items-center text-amber-600 hover:text-amber-800">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                                E-Books
                            </a>
                            <a href="#" className="flex items-center text-amber-600 hover:text-amber-800">
                                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                Library Calendar
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Library;