import { LibraryCollections } from "../../../assets/fakeData";

const Library = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-50 to-surface">
      {/* Hero Section */}
      <div className="relative bg-primary-900 overflow-hidden py-24">
        {/* Decorative background elements */}
        <div className="absolute inset-0 bg-linear-to-b from-primary-900/40 via-transparent to-primary-900/80 z-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-gold/5 blur-[120px] rounded-full"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6 drop-shadow-lg">School Library</h1>
            <p className="text-xl text-slate-100 max-w-3xl mx-auto font-medium drop-shadow-md">
              Discover a world of knowledge through our extensive collection of
              books and digital resources at Kutumbpur High School.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Collections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {LibraryCollections.map((collection, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 transform transition duration-300 hover:shadow-xl border border-slate-200 group"
            >
              <div className="flex items-start">
                <div className="shrink-0 text-accent-gold group-hover:scale-110 transition-transform duration-300">
                  {collection.icon}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-serif font-bold text-primary-900 mb-2">
                    {collection.title}
                  </h3>
                  <p className="text-slate-600">{collection.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Library Info Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Library Hours */}
          <div className="bg-white rounded-2xl shadow-sm p-10 border border-slate-200">
            <h2 className="text-3xl font-serif font-bold text-primary-900 mb-8 border-b border-slate-100 pb-4">
              Library Hours
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-primary-800 mb-4 uppercase tracking-wider text-sm">Weekdays</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center text-slate-600">
                    <span>Sat - Thu</span>
                    <span className="font-semibold text-primary-900">8:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-600">
                    <span>Friday</span>
                    <span className="font-bold text-accent-gold">Closed</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-primary-800 mb-4 uppercase tracking-wider text-sm">Exam Season</h3>
                <div className="space-y-3">
                  <p className="text-slate-600 flex justify-between">
                    <span>Extended</span>
                    <span className="font-semibold text-primary-900">Until 5:00 PM</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="bg-white rounded-2xl shadow-sm p-10 border border-slate-200">
            <h3 className="text-3xl font-serif font-bold text-primary-900 mb-8 border-b border-slate-100 pb-4">
              Library Services
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Book Borrowing",
                "Digital Resource Access",
                "Research Assistance",
                "Study Spaces",
                "Reference Service",
                "Newspaper Archives"
              ].map((service, i) => (
                <li key={i} className="flex items-center text-slate-600 group">
                  <div className="w-8 h-8 rounded-full bg-primary-50 flex items-center justify-center mr-3 group-hover:bg-accent-gold/20 transition-colors">
                    <svg
                      className="w-4 h-4 text-accent-gold"
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
                  </div>
                  <span className="font-medium">{service}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Quick Access Portal */}
        <div className="bg-primary-900 rounded-3xl p-12 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-gold/10 blur-[80px] rounded-full -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-serif font-bold text-white mb-6">Explore Our Digital Collections</h3>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { label: "Search Catalog", icon: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" },
                { label: "E-Books", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
                { label: "Library Events", icon: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" }
              ].map((link, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white transition-all duration-300 backdrop-blur-sm"
                >
                  <svg
                    className="w-5 h-5 mr-3 text-accent-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={link.icon}
                    />
                  </svg>
                  <span className="font-bold">{link.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
