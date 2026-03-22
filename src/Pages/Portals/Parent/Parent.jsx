import { parentalFeatures } from "../../../assets/fakeData";

const Parent = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-50 to-surface">
      {/* Hero Section */}
      <div className="relative bg-primary-900 overflow-hidden py-24">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-linear-to-b from-primary-900/40 via-transparent to-primary-900/80 z-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-gold/5 blur-[120px] rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 animate-in fade-in slide-in-from-top-4 duration-700 drop-shadow-lg">
              Parent Portal
            </h1>
            <p className="text-xl text-slate-100 max-w-3xl mx-auto font-medium drop-shadow-md">
              Monitoring the academic journey of students (Class 6-10) at
              Kutumbpur High School. Stay informed on results, attendance, and
              fees.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Login Form */}
          <div className="bg-surface rounded-xl shadow-lg p-8 border border-neutral-200">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Login to Portal
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="parentId"
                  className="block text-sm font-medium text-neutral-700"
                >
                  Parent ID
                </label>
                <input
                  type="text"
                  id="parentId"
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-accent-gold focus:ring-accent-gold py-3 px-4 bg-slate-50 transition-all duration-200"
                  placeholder="Unified Parent ID"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-neutral-700"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-accent-gold focus:ring-accent-gold py-3 px-4 bg-slate-50 transition-all duration-200"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-accent-gold focus:ring-accent-gold border-slate-300 rounded cursor-pointer"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-neutral-700"
                  >
                    Remember me
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-primary-900 text-white py-4 px-6 rounded-md hover:bg-primary-950 hover:shadow-lg transition-all duration-300 font-bold uppercase tracking-widest border border-accent-gold/20"
              >
                Access Portal
              </button>
            </form>
          </div>

          {/* Features */}
          <div className="space-y-8">
            <div className="bg-surface rounded-xl shadow-lg p-8 border border-neutral-200">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">
                Portal Features
              </h2>
              <div className="space-y-6">
                {parentalFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="shrink-0 text-accent-gold">
                      {feature.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-neutral-900">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-600">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-surface rounded-xl shadow-lg p-8 border border-neutral-200">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">
                Quick Links
              </h3>
              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center text-secondary-600 hover:text-secondary-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
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
                  School Calendar
                </a>
                <a
                  href="#"
                  className="flex items-center text-secondary-600 hover:text-secondary-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  Parent-Teacher Meeting
                </a>
                <a
                  href="#"
                  className="flex items-center text-secondary-600 hover:text-secondary-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Contact Teachers
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parent;
