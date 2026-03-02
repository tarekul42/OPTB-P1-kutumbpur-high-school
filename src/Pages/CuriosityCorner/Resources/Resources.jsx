import { digitalResources, studyMaterials } from "../../../assets/fakeData";

const Resources = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-50 to-surface">
      {/* Hero Section */}
      <div className="relative bg-primary-900 overflow-hidden py-24">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-linear-to-b from-primary-900/40 via-transparent to-primary-900/80 z-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-gold/5 blur-[120px] rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 animate-in fade-in slide-in-from-top-4 duration-700 drop-shadow-lg">Digital Resources</h1>
            <p className="text-xl text-slate-100 max-w-3xl mx-auto font-medium drop-shadow-md">
              Empowering students with 21st-century learning tools. Access PSC, JSC, and SSC board preparation materials.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Study Materials */}
        <div className="mb-20">
          <h2 className="text-4xl font-serif font-bold text-primary-900 mb-10 text-center">
            Board Preparation Materials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {studyMaterials.map((subject, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:shadow-xl border border-slate-200 group"
              >
                <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-accent-gold/20 transition-colors">
                  {subject.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary-900 mb-4">
                  {subject.title}
                </h3>
                <p className="text-slate-600 mb-6">{subject.description}</p>
                <ul className="space-y-2">
                  {subject.resources.map((resource, idx) => (
                    <li
                      key={idx}
                      className="flex items-start text-slate-600"
                    >
                      <svg
                        className="w-5 h-5 text-accent-gold mt-1 mr-2 shrink-0"
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
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            Digital Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {digitalResources.map((resource, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105 border border-slate-200 group"
              >
                <div className="text-accent-gold mb-4 group-hover:scale-110 transition-transform duration-300">{resource.icon}</div>
                <h3 className="text-xl font-serif font-bold text-primary-900 mb-4">
                  {resource.title}
                </h3>
                <p className="text-neutral-600">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Access */}
        <div className="bg-white rounded-2xl shadow-sm p-12 border border-slate-200">
          <h2 className="text-3xl font-serif font-bold text-primary-900 mb-10 text-center">
            Quick Portal Access
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="#"
              className="flex items-center p-4 bg-slate-50 rounded-xl hover:bg-white hover:shadow-md border border-slate-100 transition duration-300 group"
            >
              <svg
                className="w-6 h-6 text-accent-gold mr-3 transform group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
              <span className="text-primary-900 font-semibold italic">E-Books</span>
            </a>
            <a
              href="#"
              className="flex items-center p-4 bg-slate-50 rounded-xl hover:bg-white hover:shadow-md border border-slate-100 transition duration-300 group"
            >
              <svg
                className="w-6 h-6 text-accent-gold mr-3 transform group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
              <span className="text-primary-900 font-semibold italic">Video Lectures</span>
            </a>
            <a
              href="#"
              className="flex items-center p-4 bg-slate-50 rounded-xl hover:bg-white hover:shadow-md border border-slate-100 transition duration-300 group"
            >
              <svg
                className="w-6 h-6 text-accent-gold mr-3 transform group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
              <span className="text-primary-900 font-semibold italic">Practice Tests</span>
            </a>
            <a
              href="#"
              className="flex items-center p-4 bg-slate-50 rounded-xl hover:bg-white hover:shadow-md border border-slate-100 transition duration-300 group"
            >
              <svg
                className="w-6 h-6 text-accent-gold mr-3 transform group-hover:scale-110 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-primary-900 font-semibold italic">Study Schedule</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
