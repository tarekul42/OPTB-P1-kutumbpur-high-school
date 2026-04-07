interface ResultsHeaderProps {
  name: string;
  photo: string;
  className: string;
  averageMarks: string;
}

const ResultsHeader = ({ name, photo, className, averageMarks }: ResultsHeaderProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      <div className="bg-gradient-to-br from-primary-900 to-primary-800 rounded-2xl p-6 text-white shadow-lg md:col-span-2">
        <div className="flex items-center gap-4">
          <img
            src={photo}
            alt={name}
            className="w-16 h-16 rounded-full object-cover border-4 border-accent-gold"
          />
          <div>
            <p className="text-primary-200 text-sm">Academic Performance</p>
            <h2 className="text-xl font-serif font-bold">{name}</h2>
            <p className="text-primary-200 text-sm">{className} | Session 2025-26</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-md">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-accent-100 rounded-lg">
            <svg className="w-6 h-6 text-accent-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-800">{averageMarks}</p>
            <p className="text-sm text-slate-500">Average Total</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-md">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-secondary-100 rounded-lg">
            <svg className="w-6 h-6 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <div>
            <p className="text-2xl font-bold text-slate-800">A+</p>
            <p className="text-sm text-slate-500">Highest Grade</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsHeader;
