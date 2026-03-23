import {
  admissionsRequiredDocuments,
  admissionSteps,
} from "../../../data/academicData";

const Admissions: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-50 to-surface">
      <div className="relative bg-primary-900 overflow-hidden py-20">
        <div className="absolute inset-0 bg-linear-to-r from-primary-900 to-primary-800 animate-gradient text-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="text-center">
            <h1 className="text-5xl font-serif font-bold mb-6 drop-shadow-lg">
              Admissions
            </h1>
            <p className="text-xl text-slate-100 max-w-3xl mx-auto font-medium drop-shadow-md">
              Join the academic community of Kutumbpur High School. We are
              accepting applications for Classes 6 through 10 (SSC).
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
                <div className="text-accent-gold mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold text-neutral-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-neutral-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-surface rounded-xl shadow-lg p-8 border border-neutral-200">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Required Documents
            </h2>
            <ul className="space-y-4">
              {admissionsRequiredDocuments.map((doc, index) => (
                <li key={index} className="flex items-center text-neutral-600">
                  <svg
                    className="w-5 h-5 text-accent-gold mr-2"
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
                  November 1 - December 15
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Admission Test</span>
                <span className="text-neutral-900 font-medium">
                  December 20 - 25
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">Results Declaration</span>
                <span className="text-neutral-900 font-medium">
                  December 30
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-neutral-600">New Academic Session</span>
                <span className="text-neutral-900 font-medium">January 1</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Ready to Join Us?
          </h2>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Start your journey with Kutumbpur High School today. Apply now and
            take the first step towards a bright future.
          </p>
          <button className="bg-primary-900 text-white py-3 px-8 rounded-md hover:bg-primary-950 transition duration-300 cursor-pointer">
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
