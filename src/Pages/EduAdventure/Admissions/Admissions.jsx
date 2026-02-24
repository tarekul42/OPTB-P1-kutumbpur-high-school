import React from "react";
import {
  admissionsRequiredDocuments,
  admissionSteps,
} from "../../../assets/fakeData";

const Admissions = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-50 to-surface">
      {/* Hero Section */}
      <div className="relative bg-linear-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Admissions</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Join our community of learners and discover your potential at
              Kutumbpur High School.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Admission Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">
            Admission Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {admissionSteps.map((step, index) => (
              <div
                key={index}
                className="bg-surface rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105 border border-neutral-200"
              >
                <div className="text-primary-600 mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-neutral-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Requirements and Documents */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-surface rounded-xl shadow-lg p-8 border border-neutral-200">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Required Documents
            </h2>
            <ul className="space-y-4">
              {admissionsRequiredDocuments.map((doc, index) => (
                <li key={index} className="flex items-center text-neutral-600">
                  <svg
                    className="w-5 h-5 text-primary-600 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {doc}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface rounded-xl shadow-lg p-8 border border-neutral-200">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Important Dates
            </h2>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Application Period</span>
                <span className="text-neutral-900 font-medium">
                  January 1 - March 31
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Entrance Test</span>
                <span className="text-neutral-900 font-medium">April 15</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Results Declaration</span>
                <span className="text-neutral-900 font-medium">April 30</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Academic Year Begins</span>
                <span className="text-neutral-900 font-medium">June 1</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Ready to Join Us?
          </h2>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Start your journey with Kutumbpur High School today. Apply now and
            take the first step towards a bright future.
          </p>
          <button className="bg-primary-600 text-white py-3 px-8 rounded-md hover:bg-primary-700 transition duration-300">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
