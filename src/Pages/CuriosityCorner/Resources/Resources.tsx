import { studyMaterials } from "../../../data/academicData";
import { digitalResources } from "../../../data/booksData";

const Resources = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-50 to-surface">
      <div className="relative bg-primary-900 overflow-hidden py-24">
        <div className="absolute inset-0 bg-linear-to-b from-primary-900/40 via-transparent to-primary-900/80 z-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-gold/5 blur-[120px] rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 animate-in fade-in slide-in-from-top-4 duration-700 drop-shadow-lg">
              Digital Resources
            </h1>
            <p className="text-xl text-slate-100 max-w-3xl mx-auto font-medium drop-shadow-md">
              Empowering students with 21st-century learning tools. Access PSC,
              JSC, and SSC board preparation materials.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
                    <li key={idx} className="flex items-start text-slate-600">
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
                <div className="text-accent-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-bold text-primary-900 mb-4">
                  {resource.title}
                </h3>
                <p className="text-neutral-600">{resource.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-12 border border-slate-200">
          <h2 className="text-3xl font-serif font-bold text-primary-900 mb-10 text-center">
            Quick Portal Access
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {["E-Books", "Video Lectures", "Practice Tests", "Study Schedule"].map((item) => (
              <a
                key={item}
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
                <span className="text-primary-900 font-semibold italic">
                  {item}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resources;
