import React from 'react';

const AlumniSection = () => {
    const alumniStories = [
        {
            name: "Dr. Sarah Johnson",
            year: "Class of 2010",
            role: "Medical Researcher",
            story: "Our school's science program ignited my passion for medical research. Today, I lead breakthrough studies in neurology.",
            image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        },
        {
            name: "Michael Chen",
            year: "Class of 2012",
            role: "Tech Entrepreneur",
            story: "The entrepreneurial spirit I developed here helped me launch my successful tech startup.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        },
        {
            name: "Priya Sharma",
            year: "Class of 2015",
            role: "Environmental Activist",
            story: "My journey in environmental conservation began with our school's nature club.",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-teal-600 to-teal-800 text-white py-20">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-6">Alumni Network</h1>
                        <p className="text-xl text-teal-100 max-w-3xl mx-auto">
                            Stay connected with your alma mater and fellow alumni. Share your success stories and inspire the next generation.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Success Stories */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Alumni Success Stories</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {alumniStories.map((story, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                                <img src={story.image} alt={story.name} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">{story.name}</h3>
                                    <p className="text-teal-600 font-semibold mb-2">{story.year}</p>
                                    <p className="text-gray-600 mb-4">{story.role}</p>
                                    <p className="text-gray-600 italic">"{story.story}"</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Join Network Section */}
                <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Alumni Network</h2>
                        <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                            Connect with fellow alumni, share your experiences, and stay updated with school events and opportunities.
                        </p>
                        <button className="bg-teal-600 text-white px-8 py-3 rounded-md hover:bg-teal-700 transition duration-300">
                            Register as Alumni
                        </button>
                    </div>
                </div>

                {/* Events and Opportunities */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Upcoming Events</h3>
                        <div className="space-y-4">
                            <div className="border-l-4 border-teal-500 pl-4">
                                <h4 className="font-bold text-gray-900">Annual Alumni Meet</h4>
                                <p className="text-gray-600">December 15, 2024</p>
                                <p className="text-gray-600">School Auditorium</p>
                            </div>
                            <div className="border-l-4 border-teal-500 pl-4">
                                <h4 className="font-bold text-gray-900">Career Fair</h4>
                                <p className="text-gray-600">January 20, 2025</p>
                                <p className="text-gray-600">Main Campus</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">Alumni Benefits</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">Access to school facilities and resources</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">Networking opportunities with fellow alumni</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">Career development workshops</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-teal-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                <span className="text-gray-600">Mentorship opportunities</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlumniSection;