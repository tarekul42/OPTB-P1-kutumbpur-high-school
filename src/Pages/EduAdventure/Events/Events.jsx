import { pastEvents, upcomingEvents } from "../../../assets/fakeData";

const Events = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-50 to-surface">
      {/* Hero Section */}
      <div className="relative bg-primary-900 overflow-hidden py-20">
        <div className="absolute inset-0 bg-linear-to-r from-primary-900 to-primary-800 animate-gradient text-white"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">School Events</h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Stay updated with our upcoming events and relive the memories of
              past celebrations.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            Upcoming Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div
                key={index}
                className="bg-surface rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 border border-neutral-200"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 text-sm font-medium text-white bg-accent-gold rounded-full">
                      {event.category}
                    </span>
                    <span className="text-sm text-neutral-500">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-neutral-600 mb-4">{event.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-neutral-600">
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
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {event.time}
                    </div>
                    <div className="flex items-center text-neutral-600">
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
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      {event.location}
                    </div>
                  </div>
                </div>
                <div className="bg-neutral-50 px-6 py-4">
                  <button className="w-full bg-primary-900 text-white py-2 px-4 rounded-md hover:bg-primary-950 transition duration-300">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h2 className="text-3xl font-bold text-neutral-900 mb-8">
            Past Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((event, index) => (
              <div
                key={index}
                className="bg-surface rounded-xl shadow-lg p-6 border border-neutral-200"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-sm font-medium text-neutral-600 bg-neutral-100 rounded-full">
                    {event.category}
                  </span>
                  <span className="text-sm text-neutral-500">{event.date}</span>
                </div>
                <h3 className="text-xl font-bold text-neutral-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-neutral-600">{event.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar Link */}
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-neutral-600 mb-8 max-w-2xl mx-auto">
            Don't miss any events! Subscribe to our calendar and get notified
            about upcoming events.
          </p>
          <button className="bg-primary-900 text-white py-3 px-8 rounded-md hover:bg-primary-950 transition duration-300">
            View Full Calendar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;
