import { Link } from "react-router-dom";

const AdmissionHero = () => {
  return (
    <div className="relative bg-linear-to-r from-primary-900 via-primary-800 to-secondary-800 overflow-hidden py-20">
      <div className="absolute inset-0 bg-grid-white/5"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-accent-gold/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent-gold/5 blur-[100px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent-gold/20 rounded-full text-accent-gold text-sm font-medium mb-6">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
            />
          </svg>
          Admissions Open 2026
        </div>
        <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4 drop-shadow-lg">
          Admission Inquiry
        </h1>
        <p className="text-xl text-slate-200 max-w-3xl mx-auto mb-8">
          Take the first step towards your child's bright future. Fill out the form below and our
          admissions team will guide you through the process.
        </p>
        <Link
          to="/admissions"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-900 rounded-lg font-bold hover:bg-slate-100 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          View Admission Requirements
        </Link>
      </div>
    </div>
  );
};

export default AdmissionHero;
