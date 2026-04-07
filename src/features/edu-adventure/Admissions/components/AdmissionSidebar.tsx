const admissionSidebarClasses = ["Class 6", "Class 7", "Class 8", "Class 9", "Class 10"];

const admissionSteps = [
  { step: "1", title: "Submit Inquiry", desc: "Fill out the form" },
  { step: "2", title: "Get Callback", desc: "Our team contacts you" },
  { step: "3", title: "Visit School", desc: "Schedule a visit" },
  { step: "4", title: "Complete Admission", desc: "Submit required documents" },
];

const AdmissionSidebar = () => {
  return (
    <div className="space-y-6">
      {/* Classes Available */}
      <div className="bg-linear-to-br from-primary-900 to-primary-800 rounded-2xl shadow-lg p-6 text-white">
        <h3 className="text-xl font-serif font-bold mb-4 flex items-center gap-2">
          <svg className="w-6 h-6 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          Classes Available
        </h3>
        <div className="space-y-3">
          {admissionSidebarClasses.map((cls) => (
            <div key={cls} className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
              <div className="w-8 h-8 bg-accent-gold/20 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <span>{cls}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Admission Process */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
        <h3 className="text-lg font-serif font-bold text-primary-900 mb-4 flex items-center gap-2">
          <svg className="w-5 h-5 text-accent-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
          </svg>
          Admission Process
        </h3>
        <div className="space-y-4">
          {admissionSteps.map((item) => (
            <div key={item.step} className="flex items-start gap-3">
              <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                <span className="text-sm font-bold text-primary-900">{item.step}</span>
              </div>
              <div>
                <p className="font-semibold text-slate-800">{item.title}</p>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hotline */}
      <div className="bg-accent-50 rounded-2xl p-6 border border-accent-200">
        <h3 className="text-lg font-bold text-accent-800 mb-3 flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          Need Immediate Help?
        </h3>
        <p className="text-sm text-accent-700 mb-4">
          Call our admissions hotline during office hours.
        </p>
        <a
          href="tel:+8801234567890"
          className="block w-full py-3 bg-accent-600 text-white text-center rounded-lg font-bold hover:bg-accent-700 transition-colors"
        >
          +880 1234 567890
        </a>
      </div>
    </div>
  );
};

export default AdmissionSidebar;
