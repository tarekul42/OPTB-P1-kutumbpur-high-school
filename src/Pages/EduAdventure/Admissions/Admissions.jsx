import React from 'react';

const Admissions = () => {
    const admissionSteps = [
        {
            title: "Application Submission",
            description: "Complete the online application form with required documents",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
            )
        },
        {
            title: "Document Verification",
            description: "Submit original documents for verification",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            title: "Entrance Assessment",
            description: "Complete the entrance test and interview process",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
            )
        },
        {
            title: "Final Selection",
            description: "Receive admission offer and complete enrollment",
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        }
    ];

    const requiredDocuments = [
        "Birth Certificate",
        "Previous School Records",
        "Transfer Certificate",
        "Passport Size Photographs",
        "Address Proof",
        "Parent/Guardian ID Proof"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-6">Admissions</h1>
                        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                            Join our community of learners and discover your potential at Kutumbpur High School.
                        </p>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Admission Process */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Admission Process</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {admissionSteps.map((step, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105">
                                <div className="text-blue-600 mb-4">
                                    {step.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Requirements and Documents */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h2>
                        <ul className="space-y-4">
                            {requiredDocuments.map((doc, index) => (
                                <li key={index} className="flex items-center text-gray-600">
                                    <svg className="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {doc}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Dates</h2>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Application Period</span>
                                <span className="text-gray-900 font-medium">January 1 - March 31</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Entrance Test</span>
                                <span className="text-gray-900 font-medium">April 15</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Results Declaration</span>
                                <span className="text-gray-900 font-medium">April 30</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span className="text-gray-600">Academic Year Begins</span>
                                <span className="text-gray-900 font-medium">June 1</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Join Us?</h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Start your journey with Kutumbpur High School today. Apply now and take the first step towards a bright future.
                    </p>
                    <button className="bg-blue-600 text-white py-3 px-8 rounded-md hover:bg-blue-700 transition duration-300">
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Admissions;