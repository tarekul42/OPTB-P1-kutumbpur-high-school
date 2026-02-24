import { aboutUsFeatures, aboutUsStats } from "../../../assets/fakeData";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-linear-to-b from-neutral-50 to-surface">
      {/* Hero Section */}
      <div className="relative bg-linear-to-r from-primary-600 to-primary-800 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">
              About Kutumbpur High School
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Nurturing minds, building futures, and creating leaders of
              tomorrow since 1998.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {aboutUsFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-surface rounded-xl shadow-lg p-8 transform transition duration-300 hover:scale-105 border border-neutral-200"
            >
              <div className="text-primary-600 mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-neutral-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-neutral-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-surface rounded-xl shadow-lg p-12 mb-16 border border-neutral-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {aboutUsStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center text-primary-600 mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-neutral-900 mb-2">
                  {stat.value}
                </div>
                <p className="text-neutral-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-surface rounded-xl shadow-lg p-8 border border-neutral-200">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Our Mission
            </h3>
            <p className="text-neutral-600">
              To provide quality education that empowers students to become
              responsible global citizens, critical thinkers, and lifelong
              learners who contribute positively to society.
            </p>
          </div>
          <div className="bg-surface rounded-xl shadow-lg p-8 border border-neutral-200">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Our Vision
            </h3>
            <p className="text-neutral-600">
              To be a leading educational institution that nurtures academic
              excellence, character development, and innovation while preparing
              students for the challenges of tomorrow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
