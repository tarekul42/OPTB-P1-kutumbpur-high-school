import { academicPrograms } from "../../../shared/data/academicData";

const Academics: React.FC = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-50 to-surface">
      <div className="relative bg-primary-900 overflow-hidden py-24">
        <div className="absolute inset-0 bg-linear-to-b from-primary-900/40 via-transparent to-primary-900/80 z-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-gold/5 blur-[120px] rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">
              Academic Programs
            </h1>
            <p className="text-xl text-slate-100 max-w-3xl mx-auto font-medium drop-shadow-md">
              A commitment to excellence in Chandina. Specializing in Class 6-10
              Secondary education with a focus on SSC board achievement.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {academicPrograms.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:shadow-xl border border-slate-200 group"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-accent-gold/20 transition-colors">
                {program.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-primary-900 mb-4">
                {program.title}
              </h3>
              <p className="text-neutral-600 mb-6">{program.description}</p>
              <ul className="space-y-2">
                {program.features?.map((feature, idx) => (
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
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-sm p-10 border border-slate-200">
            <h2 className="text-3xl font-serif font-bold text-primary-900 mb-8 flex items-center">
              <span className="w-2 h-8 bg-accent-gold mr-4 rounded-full"></span>
              Academic Excellence
            </h2>
            <p className="text-neutral-600 mb-4">
              Our commitment to academic excellence is reflected in our
              comprehensive curriculum, experienced faculty, and
              state-of-the-art facilities. We focus on:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-slate-700 font-medium">
                <svg
                  className="w-5 h-5 text-accent-gold mr-3"
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
              <li className="flex items-center text-slate-700 font-medium">
                <svg
                  className="w-5 h-5 text-accent-gold mr-3"
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
              <li className="flex items-center text-slate-700 font-medium">
                <svg
                  className="w-5 h-5 text-accent-gold mr-3"
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

          <div className="bg-white rounded-xl shadow-sm p-10 border border-slate-200">
            <h2 className="text-3xl font-serif font-bold text-primary-900 mb-8 flex items-center">
              <span className="w-2 h-8 bg-accent-gold mr-4 rounded-full"></span>
              Support Services
            </h2>
            <p className="text-neutral-600 mb-4">
              We provide comprehensive support services to ensure every student
              reaches their full potential:
            </p>
            <ul className="space-y-2">
              <li className="flex items-center text-slate-700 font-medium">
                <svg
                  className="w-5 h-5 text-accent-gold mr-3"
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
              <li className="flex items-center text-slate-700 font-medium">
                <svg
                  className="w-5 h-5 text-accent-gold mr-3"
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
              <li className="flex items-center text-slate-700 font-medium">
                <svg
                  className="w-5 h-5 text-accent-gold mr-3"
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
