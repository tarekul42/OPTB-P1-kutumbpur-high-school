import { academicsPrograms } from "../../../assets/fakeData";

const Academics = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-50 to-surface">
      {/* Hero Section */}
      <div className="relative bg-linear-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Academic Programs</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Discover our comprehensive academic programs designed to nurture
              excellence and prepare students for future success.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {academicsPrograms.map((program, index) => (
            <div
              key={index}
              className="bg-surface rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105 border border-neutral-200"
            >
              <div className="text-primary-600 mb-4">{program.icon}</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                {program.title}
              </h3>
              <p className="text-neutral-600 mb-6">{program.description}</p>
              <ul className="space-y-2">
                {program.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-neutral-600">
                    <svg
                      className="w-5 h-5 text-accent-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
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
          <div className="bg-surface rounded-xl shadow-lg p-8 border border-neutral-200">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Academic Excellence
            </h2>
            <p className="text-neutral-600 mb-4">
              Our commitment to academic excellence is reflected in our
              comprehensive curriculum, experienced faculty, and
              state-of-the-art facilities. We focus on:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-neutral-600">
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
                Individual attention and personalized learning
              </li>
              <li className="flex items-center text-neutral-600">
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
                Regular assessments and progress tracking
              </li>
              <li className="flex items-center text-neutral-600">
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
                Integration of technology in education
              </li>
            </ul>
          </div>

          <div className="bg-surface rounded-xl shadow-lg p-8 border border-neutral-200">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Support Services
            </h2>
            <p className="text-neutral-600 mb-4">
              We provide comprehensive support services to ensure every student
              reaches their full potential:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-neutral-600">
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
                Academic counseling and guidance
              </li>
              <li className="flex items-center text-neutral-600">
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
                Special education support
              </li>
              <li className="flex items-center text-neutral-600">
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
