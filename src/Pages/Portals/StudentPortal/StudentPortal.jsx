import { useNavigate } from "react-router-dom";
import { studentPortalFeatures } from "../../../data/portalData";

const StudentPortal = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/portal/student/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-surface">
      <div className="relative bg-primary-900 overflow-hidden py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/40 via-transparent to-primary-900/80 z-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-gold/5 blur-[120px] rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 animate-fade-in drop-shadow-lg">
              Student Portal
            </h1>
            <p className="text-xl text-slate-100 max-w-3xl mx-auto font-medium drop-shadow-md">
              Official digital gateway for Kutumbpur High School students (Class 6-10) to access academic materials, results (SSC), and schedules.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Enter Student Portal
            </h2>
            <p className="text-slate-600 mb-6">
              For demonstration purposes, click the button below to enter the student dashboard.
            </p>
            <button
              onClick={handleLogin}
              className="w-full bg-primary-900 text-white py-4 px-6 rounded-md hover:bg-primary-950 hover:shadow-lg transition-all duration-300 font-bold uppercase tracking-widest border border-accent-gold/20"
            >
              Enter Portal (Demo)
            </button>
          </div>

          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Portal Features
              </h2>
              <div className="space-y-6">
                {studentPortalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="shrink-0 text-accent-gold">
                      {feature.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-slate-900">
                        {feature.title}
                      </h3>
                      <p className="text-slate-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-900 to-primary-800 rounded-xl shadow-lg p-8 text-white">
              <h3 className="text-lg font-bold mb-4">Quick Links</h3>
              <div className="space-y-4">
                <button
                  onClick={() => navigate("/portal/student/dashboard")}
                  className="flex items-center w-full text-left text-slate-100 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  Dashboard
                </button>
                <button
                  onClick={() => navigate("/portal/student/schedule")}
                  className="flex items-center w-full text-left text-slate-100 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Class Schedule
                </button>
                <button
                  onClick={() => navigate("/portal/student/assignments")}
                  className="flex items-center w-full text-left text-slate-100 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Assignments
                </button>
                <button
                  onClick={() => navigate("/portal/student/results")}
                  className="flex items-center w-full text-left text-slate-100 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  Results
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentPortal;
