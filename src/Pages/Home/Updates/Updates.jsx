import {
  updatesAnnouncements,
  updatesNewsItems,
} from "../../../assets/fakeData";

const Updates = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-50 to-surface">
      {/* Hero Section */}
      <div className="relative bg-linear-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Latest Updates</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Stay informed about the latest news, events, and announcements
              from Kutumbpur High School.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Latest News
            </h2>
            <div className="space-y-6">
              {updatesNewsItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-surface rounded-xl shadow-lg p-6 border border-neutral-200"
                >
                  <div className="flex items-start">
                    <div className="shrink-0 text-primary-600">{item.icon}</div>
                    <div className="ml-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-sm font-medium text-primary-600">
                          {item.category}
                        </span>
                        <span className="text-sm text-neutral-500">•</span>
                        <span className="text-sm text-neutral-500">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-neutral-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-neutral-600">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Announcements Section */}
          <div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-6">
              Announcements
            </h2>
            <div className="space-y-6">
              {updatesAnnouncements.map((announcement, index) => (
                <div
                  key={index}
                  className="bg-surface rounded-xl shadow-lg p-6 border border-neutral-200"
                >
                  <div className="flex items-start">
                    <div className="shrink-0 text-primary-600">
                      {announcement.icon}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold text-neutral-900 mb-2">
                        {announcement.title}
                      </h3>
                      <p className="text-neutral-600">{announcement.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick Links */}
            <div className="mt-8 bg-surface rounded-xl shadow-lg p-6 border border-neutral-200">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">
                Quick Links
              </h3>
              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
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
                  Academic Calendar
                </a>
                <a
                  href="#"
                  className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
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
                  Event Schedule
                </a>
                <a
                  href="#"
                  className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
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
                      d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                    />
                  </svg>
                  Newsletter Archive
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
