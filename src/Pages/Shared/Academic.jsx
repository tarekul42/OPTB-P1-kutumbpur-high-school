import { academicPrograms } from "../../assets/fakeData";

const Academic = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative bg-linear-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Academic Excellence</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Discover our comprehensive educational programs designed to
              nurture young minds and prepare them for future success.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Academic Programs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {academicPrograms.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className={`h-2 bg-linear-to-r ${program.color}`}></div>
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <span className="text-4xl mr-4">{program.icon}</span>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {program.title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-6">{program.description}</p>
                <ul className="space-y-4">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <svg
                        className="h-6 w-6 text-green-500 mr-3 shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white rounded-2xl shadow-xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Academic Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-4">95%</div>
              <p className="text-xl text-gray-600">Board Exam Pass Rate</p>
              <div className="mt-4 h-2 w-20 bg-blue-600 mx-auto rounded-full"></div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-purple-600 mb-4">
                1:20
              </div>
              <p className="text-xl text-gray-600">Student-Teacher Ratio</p>
              <div className="mt-4 h-2 w-20 bg-purple-600 mx-auto rounded-full"></div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold text-green-600 mb-4">50+</div>
              <p className="text-xl text-gray-600">Qualified Teachers</p>
              <div className="mt-4 h-2 w-20 bg-green-600 mx-auto rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 bg-linear-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Join Our Academic Community?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Take the first step towards a bright future. Contact our admission
            office to learn more about our programs and enrollment process.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition duration-300">
              Apply Now
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
              Schedule a Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academic;
