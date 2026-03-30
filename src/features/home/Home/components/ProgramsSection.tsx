import { homePrograms } from "@/shared/data/homeData";

const ProgramsSection: React.FC = () => {
  return (
    <div className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-neutral-900 mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            Comprehensive education programs for every stage of learning
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homePrograms.map((program, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-xl transform hover:-translate-y-2 transition duration-300"
            >
              <img
                src={program.image}
                alt={program.title}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute bottom-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                  <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                  <p className="text-gray-200">{program.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramsSection;
