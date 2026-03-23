import { extracurricularActivities } from "../../../data/academicData";

const ExtracurricularActivities = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-white">
      <div className="relative bg-linear-to-r from-indigo-600 to-indigo-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              Extracurricular Activities
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Discover and participate in various activities that help you grow
              beyond academics.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {extracurricularActivities.map((activity, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition duration-300"
            >
              <div className="flex items-start">
                <div className="shrink-0 text-indigo-600">{activity.icon}</div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {activity.title}
                  </h3>
                  <p className="text-gray-600">{activity.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Activities
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Take the first step towards discovering your talents and
              interests. Join our diverse range of extracurricular activities.
            </p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-md hover:bg-indigo-700 transition duration-300">
              Register Now
            </button>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Activity Schedule
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">Sports</h3>
              <p className="text-gray-600">Monday & Wednesday</p>
              <p className="text-gray-600">3:00 PM - 5:00 PM</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">Arts & Culture</h3>
              <p className="text-gray-600">Tuesday & Thursday</p>
              <p className="text-gray-600">3:00 PM - 5:00 PM</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">Science Club</h3>
              <p className="text-gray-600">Friday</p>
              <p className="text-gray-600">3:00 PM - 5:00 PM</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-bold text-gray-900 mb-2">Debate Club</h3>
              <p className="text-gray-600">Saturday</p>
              <p className="text-gray-600">10:00 AM - 12:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtracurricularActivities;
